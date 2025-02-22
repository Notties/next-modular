import dynamic from "next/dynamic";
import { enabledModules } from "@/package/module/config";

const Product = enabledModules.product
  ? dynamic(() => import("@/module/product/page"))
  : () => null;

export default Product;
