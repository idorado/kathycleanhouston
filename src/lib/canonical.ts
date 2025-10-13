export function normalizePath(path: string): string {
  if (!path || path === "/") return "/";
  // quita dobles barras, barra inicial/final, y vuelve a agregar una inicial
  const collapsed = path.replace(/\/+/g, "/");
  const clean = collapsed.replace(/^\/+|\/+$/g, "");
  return `/${clean}`;
}

export function canonicalPath(...segments: Array<string | undefined>): string {
  const joined = segments.filter(Boolean).join("/");
  const normalized = normalizePath(joined);
  if (normalized === "/") return normalized;
  return normalized.endsWith("/") ? normalized : `${normalized}/`;
}
