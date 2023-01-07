import { APICollectionResource, APIResource } from '../types'
import { StatusError } from 'itty-router-extras'

export const getAll = async (): Promise<APICollectionResource[]> => {
  const collection = await KV_SCRIPTS.get('APIs', {
    type: 'json',
  }) as APICollectionResource[] | null
  if (!collection) throw new StatusError(500, 'Cannot get collections')
  return collection

}

export const getCollectionByName = async (name: string): Promise<APICollectionResource> => {
  const collections = await getAll()

  const collection = collections.find((collection) => collection.name === name)
  if (!collection) throw new StatusError(404, 'Collection Not Found')

  return collection
}

export const updateCollection = async (
  name: string,
  newCollection: APICollectionResource,
  updateChildren: boolean = false,
): Promise<APICollectionResource> => {
  if (!newCollection) throw new StatusError(400, 'invalid collection provided')

  const collections = await getAll()

  const idx: number = collections.findIndex((collection) => collection.name === name)
  if (idx < 0) throw new StatusError(404, 'Collection not found')
  collections[idx].name = newCollection.name
  collections[idx].path = newCollection.path
  if (updateChildren) collections[idx].children = newCollection.children || []

  await KV_SCRIPTS.put('APIs', JSON.stringify(collections))

  return collections[idx]
}

export const addCollection = async (collection: APICollectionResource): Promise<APICollectionResource> => {
  if (!collection) throw new StatusError(400, 'invalid collection provided')

  const collections = await getAll()
  if (collections.find((c) => c.name === collection.name)) throw new StatusError(400, 'collection already exists')
  if (!collection?.path || !collection?.name || !Array.isArray(collection?.children)) throw new StatusError(400, 'invalid collection provided')

  const newCollection = [...collections, collection]
  await KV_SCRIPTS.put('APIs', JSON.stringify(newCollection))

  return collection
}

export const deleteCollection = async (name: string): Promise<APICollectionResource> => {
  const collection = getCollectionByName(name)
  if (!collection) throw new StatusError(404, 'Collection Not Found')

  const collections = await getAll()
  const newCollections = collections.filter((collection) => collection.name !== name)

  await KV_SCRIPTS.put('APIs', JSON.stringify(newCollections))
  return collection
}

export const getResourceByName = async (collectionName: string, resourceName: string): Promise<APIResource> => {
  const collection = await getCollectionByName(collectionName)

  const resource = collection.children.find((resource) => resource.name === resourceName)
  if (!resource) throw new StatusError(404, 'Resource Not Found')

  return resource
}

export const addResource = async (collectionName: string, resource: APIResource): Promise<APIResource> => {
  if (!resource || !resource.content || !resource.name || !resource.path) throw new StatusError(400, 'invalid resource provided')

  const collection = await getCollectionByName(collectionName)
  if (collection.children.find((c) => c.name === resource.name)) throw new StatusError(400, 'resource already exists')
  if (!resource?.path || !resource?.name || !resource?.content) throw new StatusError(400, 'invalid resource provided')

  const newCollection = {
    ...collection,
    children: [...collection.children, resource],
  }

  await updateCollection(collectionName, newCollection, true)

  return resource
}

export const updateResource = async (
  collectionName: string,
  resourceName: string,
  newResource: APIResource,
): Promise<APIResource> => {
  if (!newResource) throw new StatusError(400, 'invalid resource provided')

  const collection = await getCollectionByName(collectionName)
  const idx: number = collection.children.findIndex((resource) => resource.name === resourceName)
  if (idx < 0) throw new StatusError(404, 'Resource not found')
  collection.children[idx].name = newResource.name
  collection.children[idx].path = newResource.path
  collection.children[idx].content = newResource.content

  await updateCollection(collectionName, collection, true)

  return collection.children[idx]
}

export const deleteResource = async (collectionName: string, resourceName: string): Promise<APIResource> => {
  const collection = await getCollectionByName(collectionName)
  const resource = collection.children.find((resource) => resource.name === resourceName)
  if (!resource) throw new StatusError(404, 'Resource Not Found')

  const newCollection = {
    ...collection,
    children: collection.children.filter((resource) => resource.name !== resourceName),
  }

  await updateCollection(collectionName, newCollection, true)

  return resource
}
