require("esbuild")
  .build({
    entryPoints: ["/src/index.js"],
    bundle: true,
    minify: true,
    sourcemap: true,
    outfile: "public/bundle.js",
  })
  .catch(() => process.exit(1));
