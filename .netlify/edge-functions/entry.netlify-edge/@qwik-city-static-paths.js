const staticPaths = new Set(["/_headers","/favicon.svg","/images/placeholder-1024x640.png","/manifest.json","/q-manifest.json","/robots.txt","/service-worker.js"]);
function isStaticPath(p) {
  if (p.startsWith("/build/")) {
    return true;
  }
  if (p.startsWith("/assets/")) {
    return true;
  }
  if (staticPaths.has(p)) {
    return true;
  }
  return false;
}
export { isStaticPath };