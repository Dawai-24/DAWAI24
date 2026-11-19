import Link from "next/link";
import ProductCard from "./ProductCard";

export default function ProductRow({ title, products, href }) {
  return (
    <section className="container-x mt-10">
      <div className="flex items-end justify-between mb-3">
        <h2 className="text-xl sm:text-2xl font-bold">{title}</h2>
        {href && <Link href={href} className="text-sm font-semibold text-brand-700 hover:underline">View all</Link>}
      </div>
      <div className="scroll-x pb-2">
        {products.map((p) => (
          <div key={p.id} className="w-44 sm:w-56"><ProductCard product={p} /></div>
        ))}
      </div>
    </section>
  );
}
