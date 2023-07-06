navigator.serviceWorker.register("/app/swapp.js");
// Then later, request a one-off sync:
navigator.serviceWorker.ready.then(function (swRegistration) {
  return swRegistration.sync.register("myFirstSync", {
    minInterval: 24 * 60 * 60 * 1000,
  });
});
navigator.serviceWorker.ready.then(async (swReg) => {
  const bgFetch = await swReg.backgroundFetch.fetch(
    "my-fetch",
    ["/ep-5.mp3", "ep-5-artwork.jpg"],
    {
      title: "Episode 5: Interesting things.",
      icons: [
        {
          sizes: "300x300",
          src: "/ep-5-icon.png",
          type: "image/png",
        },
      ],
      downloadTotal: 60 * 1024 * 1024,
    }
  );
});
