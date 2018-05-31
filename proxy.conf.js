const PROXY_CONFIG = {
  "/dv/auth/*": {
    "target": "http://13.125.181.126",
    "secure": false,
    "changeOrigin": true,
    "pathRewrite": {"^/dv/auth" : "/auth"},
    "bypass": function (req, res, proxyOptions) {
    }
  },
  "/dv/api/*": {
    "target": "http://13.125.181.126",
    "secure": false,
    "changeOrigin": true,
    "pathRewrite": {"^/dv/api" : "/api"},
    "bypass": function (req, res, proxyOptions) {
    }
  }
}
module.exports = PROXY_CONFIG;