import {NextResponse} from "next/server";
import {db} from "@/lib/db";

export async function POST(request){
  const body=await request.json();const name=body.name?.trim(),email=body.email?.trim().toLowerCase(),message=body.message?.trim();
  if(!name||!/^\S+@\S+\.\S+$/.test(email||"")||!message||message.length<8)return NextResponse.json({error:"Please enter valid contact details"},{status:400});
  const inquiry=await db.contactInquiry.create({data:{name,email,phone:body.phone?.trim()||null,message}});
  return NextResponse.json({id:inquiry.id},{status:201});
}
