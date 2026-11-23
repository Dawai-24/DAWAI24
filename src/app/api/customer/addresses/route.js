import {NextResponse} from "next/server";
import {db} from "@/lib/db";
import {getCustomerSession} from "@/lib/auth";

export async function GET(){const auth=await getCustomerSession();if(!auth)return NextResponse.json([],{status:401});return NextResponse.json(await db.customerAddress.findMany({where:{customerId:auth.user.id},orderBy:{createdAt:"desc"}}))}
export async function POST(request){const auth=await getCustomerSession();if(!auth)return NextResponse.json({error:"Unauthorized"},{status:401});const body=await request.json();if(!body.name||!body.phone||!body.address||!body.city||!body.pin)return NextResponse.json({error:"All address fields are required"},{status:400});const row=await db.customerAddress.create({data:{customerId:auth.user.id,name:body.name.trim(),phone:body.phone.trim(),address:body.address.trim(),city:body.city.trim(),pin:body.pin.trim()}});return NextResponse.json(row,{status:201})}
export async function DELETE(request){const auth=await getCustomerSession();if(!auth)return NextResponse.json({error:"Unauthorized"},{status:401});const {id}=await request.json();await db.customerAddress.deleteMany({where:{id,customerId:auth.user.id}});return NextResponse.json({ok:true})}
