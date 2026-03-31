addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  // I-check kung ang request ay para sa 'mono.ts.m3u8'
  const url = new URL(request.url);
  if (url.pathname.endsWith('mono.ts.m3u8')) {
    // Kung oo, i-redirect sa bagong URL
    const newUrl = 'https://live20.bozztv.com/giatvplayout7/giatv-210631/tracks-v1a1/mono.ts.m3u8';
    return Response.redirect(newUrl, 302);
  }

  // Kung hindi, ipasa lang ang request
  return fetch(request);
}
