import { enabledModules } from "@/packages/module/config";

export function isModuleEnabled(modulePath: string): boolean {
  const [moduleName, subModule] = modulePath.split("/");

  const moduleConfig = enabledModules[moduleName];
  if (!moduleConfig || !moduleConfig.enabled) return false;

  if (subModule) {
    return moduleConfig.subModules[subModule] || false;
  }

  return true;
}
