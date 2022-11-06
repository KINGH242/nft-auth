const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  // app.use(createProxyMiddleware('/api', { target : "http://localhost:9080", changeOrigin: true}))
  app.use(
    createProxyMiddleware("/api", {
      target: "https://9080-hallowed-strategy-fvaham.us1.demeter.run",
      changeOrigin: true,
    })
  );
};
