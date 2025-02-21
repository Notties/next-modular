import dynamic from "next/dynamic";

import { enabledModules } from "@/middleware/config";

const Inventory = enabledModules.inventory
  ? dynamic(() => import("@/module/inventory/page"))
  : () => null;

export default Inventory;
