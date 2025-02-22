import { enabledModules } from "@/package/module/config";

export function isModuleEnabled(modulePath: string): boolean {
  const [moduleName, subModule] = modulePath.split("/");

  const moduleConfig =
    enabledModules[moduleName as keyof typeof enabledModules];
  if (!moduleConfig || !moduleConfig.enabled) return false;

  if (subModule) {
    return (
      moduleConfig.subModules[
        subModule as keyof typeof moduleConfig.subModules
      ] || false
    );
  }

  return true;
}
