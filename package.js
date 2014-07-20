Package.describe({
  summary: "REPLACEME - What does this package (or the original one you're wrapping) do?"
});

Npm.depends({"torrent-stream"});

Package.on_use(function (api, where) {
  api.add_files('torrent-stream.js', ['server']);
  if (typeof api.export !== 'undefined') {
    api.export(['torrentStream'], ['server']);
  }
});