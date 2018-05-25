const PROXY_CONFIG = {
  "/dv/auth/*": {
    "target": "http://localhost:3000",
    "secure": false,
    "changeOrigin": true,
    "pathRewrite": {"^/dv/auth" : "/auth"},
    "bypass": function (req, res, proxyOptions) {
    }
  },
  "/dv/api/*": {
    "target": "http://localhost:3000",
    "secure": false,
    "changeOrigin": true,
    "pathRewrite": {"^/dv/api" : "/api"},
    "bypass": function (req, res, proxyOptions) {
    }
  }
}
module.exports = PROXY_CONFIG;