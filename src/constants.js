const { isProduction } = require("./utils");

module.exports = {
  USER_IDS: process.env.USER_IDS.split(","),
  WEBSOCKET_URLS: isProduction()
    ? ["wss://proxy.wynd.network:4650", "wss://proxy.wynd.network:4444"]
    : ["ws://proxy.dev.getgrass.io:4343"],
  NAMESPACE: "bfeb71b6-06b8-5e07-87b2-c461c20d9ff6",
  PING_INTERVAL: 20 * 1000, // 20s in ms
  COOKIE_JAR_LIFESPAN: 60 * 60 * 24 * 1000, // 24hrs in ms
  USER_AGENT:
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
};
