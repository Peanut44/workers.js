addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const targetURL = 'https://live20.bozztv.com/giatvplayout7/giatv-210631/tracks-v1a1/mono.ts.m3u8'; // Example URL, replace with your actual stream or resource

  const modifiedRequest = new Request(targetURL, {
    method: request.method,
    headers: request.headers,
    body: request.body
  })

  const response = await fetch(modifiedRequest)
  return response
}
