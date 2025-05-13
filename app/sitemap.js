export default function sitemap() {
  const baseUrl = "https://girlsmadrasa.org"

  // Core pages
  const routes = ["", "/about", "/admission", "/faculty"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }))

  return routes
}

