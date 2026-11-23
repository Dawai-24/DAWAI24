import { NextResponse } from "next/server";
import { getActiveProducts } from "@/lib/dbCatalog";

export async function GET(request) {
  const q = new URL(request.url).searchParams.get("q")?.trim();
  const where = q ? { OR: [{ name: { contains: q, mode: "insensitive" } }, { sku: { contains: q, mode: "insensitive" } }] } : {};
  return NextResponse.json(await getActiveProducts(where));
}
