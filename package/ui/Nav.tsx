import Link from "next/link";

import { enabledModules } from "@/package/middleware/config";

export default function Nav() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center gap-9">
      {enabledModules.product && <Link href="/product">Product</Link>}
      {enabledModules.inventory && <Link href="/inventory">Inventory</Link>}
    </div>
  );
}
