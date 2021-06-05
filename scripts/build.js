const path = require("path");
const fs = require("fs-extra");
const paths = require("./config/paths");
fs.emptyDirSync(paths.appBuild);
console.log("Cleaning previous build folder");
function copyPublicFolder() {
  console.log("Copying public folder");
  fs.copySync(paths.appPublic, paths.appBuild, {
    dereference: true,
    // filter: (file) => file !== paths.appHtml,
  });
}

console.log("Creating an optimized production build...");
require("esbuild")
  .build({
    entryPoints: ["src/index.js"],
    bundle: true,
    minify: true,
    sourcemap: true,
    outfile: "build/bundle.js",
  })
  .then(() => copyPublicFolder())
  .catch(() => process.exit(1));
