import {NextResponse} from "next/server";import {db} from "@/lib/db";
export async function GET(){const now=new Date();const rows=await db.coupon.findMany({where:{active:true,AND:[{OR:[{startsAt:null},{startsAt:{lte:now}}]},{OR:[{endsAt:null},{endsAt:{gte:now}}]}]}});return NextResponse.json(rows.map(x=>({...x,value:Number(x.value),minOrderValue:Number(x.minOrderValue||0)})));}
