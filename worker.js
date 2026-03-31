addEventListener('fetch', event => {
  event.respondWith(
    new Response('This is a test worker!', {
      headers: { 'content-type': 'text/plain' }
    })
  );
});
