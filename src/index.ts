import { handleRequest } from './routes/index.router'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': '*',
  'Access-Control-Max-Age': '86400',
}

function handleOptions(request) {
  const headers = request.headers
  if (
    headers.get('Origin') !== null &&
    headers.get('Access-Control-Request-Method') !== null &&
    headers.get('Access-Control-Request-Headers') !== null
  ) {
    const respHeaders = {
      ...corsHeaders,
      'Access-Control-Allow-Headers': request.headers.get(
        'Access-Control-Request-Headers',
      ),
    }

    return new Response(null, {
      headers: respHeaders,
    })
  } else {
    return new Response(null, {
      headers: {
        Allow: '*',
      },
    })
  }
}

addEventListener('fetch', (event) => {
  const request = event.request
  if (request.method === 'OPTIONS') {
    // Handle CORS preflight requests
    event.respondWith(handleOptions(request))
  } else {
    // Handle requests to the API server
    event.respondWith(
      handleRequest(request).then((response) => {
        Object.entries(corsHeaders).forEach(([key, value]) => {
          response.headers.set(key, value)
        })
        return response
      }),
    )
  }
})
