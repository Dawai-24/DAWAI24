import {NextResponse} from "next/server";
import {db} from "@/lib/db";
export async function GET(){const rows=await db.storeSetting.findMany();return NextResponse.json(Object.fromEntries(rows.map(row=>[row.key,row.value])))}
