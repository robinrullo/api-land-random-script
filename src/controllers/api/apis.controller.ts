import { json } from 'itty-router-extras'
import { APICollectionResource, APIResource, RequestBody } from '../../types'
import {
  getAll,
  getCollectionByName,
  addCollection,
  updateCollection,
  deleteCollection,
  addResource,
  updateResource,
  deleteResource,
  getResourceByName,
} from '../../services/apis.service'

type CollectionNameParam = { collectionName: string }
type ResourceNameParam = { resourceName: string }

const getApiCollections = async (): Promise<Response> => {
  const body: APICollectionResource[] = await getAll()
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-type': 'application/json',
  }
  return json(body, { headers })
}

const getApiCollection = async ({ collectionName }: CollectionNameParam): Promise<Response> => {
  const body: APICollectionResource = await getCollectionByName(decodeURI(collectionName))
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-type': 'application/json',
  }
  return json(body, { headers })
}

const createApiCollection = async ({ content }: RequestBody<APICollectionResource>): Promise<Response> => {
  const body: APICollectionResource = await addCollection(content)
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-type': 'application/json',
  }
  return json(body, { headers })
}

const updateApiCollection = async (
  {
    collectionName,
    content,
  }: CollectionNameParam & RequestBody<APICollectionResource>): Promise<Response> => {
  const body: APICollectionResource = await updateCollection(decodeURI(collectionName), content, false)
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-type': 'application/json',
  }
  return json(body, { headers })
}

const deleteApiCollection = async ({ collectionName }: CollectionNameParam): Promise<Response> => {
  const body: APICollectionResource = await deleteCollection(decodeURI(collectionName))
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-type': 'application/json',
  }
  return json(body, { headers })
}

const getApiResource = async (
  {
    collectionName,
    resourceName,
  }: CollectionNameParam & ResourceNameParam): Promise<Response> => {
  const body: APIResource = await getResourceByName(decodeURI(collectionName), decodeURI(resourceName))
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-type': 'application/json',
  }
  return json(body, { headers })
}

const createApiResource = async (
  {
    collectionName,
    content,
  }: CollectionNameParam & RequestBody<APIResource>): Promise<Response> => {
  const body: APIResource = await addResource(decodeURI(collectionName), content)
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-type': 'application/json',
  }
  return json(body, { headers })
}

const updateApiResource = async (
  {
    collectionName,
    resourceName,
    content,
  }: CollectionNameParam & ResourceNameParam & RequestBody<APIResource>
): Promise<Response> => {
  const body: APIResource = await updateResource(decodeURI(collectionName), decodeURI(resourceName), content)
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-type': 'application/json',
  }
  return json(body, { headers })
}

const deleteApiResource = async (
  {
    collectionName,
    resourceName,
  }: CollectionNameParam & ResourceNameParam): Promise<Response> => {
  const body: APIResource = await deleteResource(decodeURI(collectionName), decodeURI(resourceName))
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-type': 'application/json',
  }
  return json(body, { headers })
}

export default {
  getApiCollections,
  getApiCollection,
  createApiCollection,
  updateApiCollection,
  deleteApiCollection,
  getApiResource,
  createApiResource,
  updateApiResource,
  deleteApiResource,
}
