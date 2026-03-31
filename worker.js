addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  // URL ng iyong original stream
  const targetURL = 'https://live20.bozztv.com/giatvplayout7/giatv-210631/tracks-v1a1/mono.ts.m3u8'

  // Gumawa ng bagong request sa target na URL
  const modifiedRequest = new Request(targetURL, {
    method: request.method,
    headers: request.headers,
    body: request.body
  })

  // Kunin ang response mula sa target stream
  const response = await fetch(modifiedRequest)

  // I-serve ang response pabalik sa user (proxy ng stream)
  return response
}