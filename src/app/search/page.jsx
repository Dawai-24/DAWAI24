import { Suspense } from "react";
import Breadcrumbs from "@/components/Common/Breadcrumbs";
import SearchResults from "@/components/Search/SearchResults";

export const metadata = { title: "Search" };

export default function SearchPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Search" }]} />
      <div className="container-x">
        <Suspense fallback={<p className="py-10 text-slate-500">Loading results…</p>}>
          <SearchResults />
        </Suspense>
      </div>
    </>
  );
}
