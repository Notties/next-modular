import dynamic from "next/dynamic";
import { enabledModules } from "@/package/module/config";

const Product = enabledModules.product.enabled
  ? dynamic(() => import("@/module/product/pages/page"))
  : () => null;

export default Product;
