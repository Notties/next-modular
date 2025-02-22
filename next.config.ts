import type { NextConfig } from "next";
import { enabledModules } from "./package/module/config";
import { isModuleEnabled } from "./shared/lib/utils";

const nextConfig: NextConfig = {
  webpack: (config) => {
    for (const moduleName of Object.keys(enabledModules)) {
      const modulePath = `@/module/${moduleName}`;
      if (!isModuleEnabled(modulePath)) {
        config.resolve.alias[modulePath] = false;
      }

      if (enabledModules[moduleName].enabled) {
        const subModules =
          enabledModules[moduleName].subModules;
        for (const subModuleName of Object.keys(subModules)) {
          const subModulePath = `@/module/${moduleName}/${subModuleName}`;
          if (!isModuleEnabled(subModulePath)) {
            config.resolve.alias[subModulePath] = false;
          }
        }
      }
    }

    return config;
  },
};

export default nextConfig;
