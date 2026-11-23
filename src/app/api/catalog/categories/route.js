import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  const data = await db.category.findMany({ where: { active: true }, include: { subcategories: { where: { active: true }, orderBy: { sortOrder: "asc" } } }, orderBy: { sortOrder: "asc" } });
  return NextResponse.json(data);
}
