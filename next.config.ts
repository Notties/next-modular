import type { NextConfig } from "next";
import { enabledModules } from "./package/module/config";

const nextConfig: NextConfig = {
  webpack: (config) => {
    if (!enabledModules.inventory) {
      config.resolve.alias["@modules/inventory"] = false;
    }
    if (!enabledModules.product) {
      config.resolve.alias["@modules/product"] = false;
    }
    return config;
  },
};

export default nextConfig;
