const nodeEnv = process.env.NODE_ENV as unknown as "development" | "production";

// todo:
// - check process.env.NODE_ENV in production

console.log("nodeEnv", nodeEnv);
if (!["development", "production"].includes(nodeEnv)) throw new Error(`Invalid NODE_ENV: ${nodeEnv}`);

const allConfigs = {
  development: {
    apiURL: "http://localhost:8787/v1",
    lpURL: "http://localhost:3001",
    weURL: "chrome-extension://gfmbkbpbncjopblehgldppphpkcmehnk/settings.html",
  },
  production: {
    apiURL: "https://api.lingorep.com/v1",
    lpURL: "https://lingorep.com",
    weURL: "chrome-extension://gfmbkbpbncjopblehgldppphpkcmehnk/settings.html",
  },
};

export const config = allConfigs[nodeEnv];
