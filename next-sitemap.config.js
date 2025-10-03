/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://kathyclean.com',
  generateRobotsTxt: true,

  // Sacamos rutas que no queremos indexar como páginas
  exclude: [
    '/sitemap',        // la ruta App Router /sitemap no se lista como página
    '/robots.txt',     // el archivo en sí no es una URL a posicionar
    '/api/*',
    '/admin/*',
    '/404',
    '/500',
  ],

  // Normalizamos URLs (sin barra final salvo la home) y seteamos señales
  transform: async (_config, path) => {
    const loc = path !== '/' && path.endsWith('/') ? path.slice(0, -1) : path;
    const priority = loc === '/' ? 1.0 : 0.7;
    return {
      loc,
      changefreq: 'weekly',
      priority,
      lastmod: new Date().toISOString(),
      alternateRefs: [],
    };
  },
};
