import dynamic from "next/dynamic";
import { enabledModules } from "@/package/module/config";

const Inventory = enabledModules.inventory.enabled
  ? dynamic(() => import("@/module/inventory/pages/page"))
  : () => null;

export default Inventory;
