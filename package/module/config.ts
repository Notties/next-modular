type ModuleConfig = {
  enabled: boolean;
  subModules: Record<string, boolean>;
};
type EnabledModules = Record<string, ModuleConfig>;

export const enabledModules: EnabledModules = {
  inventory: {
    enabled: true,
    subModules: {
      stock: true,
      orders: false,
    },
  },
  product: {
    enabled: false,
    subModules: {
      catalog: true,
      pricing: false,
    },
  },
};
