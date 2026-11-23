import {NextResponse} from "next/server";import {destroySession} from "@/lib/auth";
export async function POST(request){const {type}=await request.json().catch(()=>({}));if(type==="admin"||type==="all")await destroySession("ADMIN");if(type==="customer"||type==="all")await destroySession("CUSTOMER");return NextResponse.json({ok:true});}
