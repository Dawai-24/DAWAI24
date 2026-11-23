"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { destroySession } from "@/lib/auth";

const slugify = (v) => v.toLowerCase().trim().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
const refresh = (...paths) => paths.forEach(revalidatePath);

export async function createCategory(formData) {
  const name = formData.get("name")?.toString().trim(); if (!name) return;
  await db.category.create({ data: { name, slug: slugify(formData.get("slug")?.toString() || name), imageUrl: formData.get("imageUrl")?.toString() || null, active: true } });
  refresh("/admin/categories","/categories","/");
}
export async function createSubcategory(formData) {
  const name=formData.get("name")?.toString().trim(), categoryId=formData.get("categoryId")?.toString(); if(!name||!categoryId)return;
  await db.subcategory.create({data:{name,slug:slugify(formData.get("slug")?.toString()||name),categoryId,active:true}}); refresh("/admin/categories","/categories","/");
}
export async function deleteSubcategory(formData){const id=formData.get("id")?.toString();await db.$transaction([db.product.updateMany({where:{subcategoryId:id},data:{subcategoryId:null}}),db.subcategory.delete({where:{id}})]);refresh("/admin/categories","/categories","/");}
export async function deleteCategory(formData) {const id=formData.get("id")?.toString();const count=await db.product.count({where:{categoryId:id}});if(count)await db.$transaction([db.product.updateMany({where:{categoryId:id},data:{active:false}}),db.category.update({where:{id},data:{active:false}})]);else await db.category.delete({where:{id}});refresh("/admin/categories","/categories","/");}
export async function createProduct(formData) {
  const name=formData.get("name")?.toString().trim(); if(!name)return;
  const brandName=formData.get("brand")?.toString().trim();
  let brandId=null; if(brandName){const brand=await db.brand.upsert({where:{slug:slugify(brandName)},update:{name:brandName},create:{name:brandName,slug:slugify(brandName)}});brandId=brand.id;}
  await db.product.create({data:{name,slug:slugify(formData.get("slug")?.toString()||name),sku:formData.get("sku")?.toString().trim(),description:formData.get("description")?.toString()||null,pack:formData.get("pack")?.toString()||null,imageUrl:formData.get("imageUrl")?.toString()||null,categoryId:formData.get("categoryId")?.toString(),subcategoryId:formData.get("subcategoryId")?.toString()||null,brandId,mrp:Number(formData.get("mrp")),price:Number(formData.get("price")),stock:Number(formData.get("stock")),prescriptionRequired:formData.get("prescriptionRequired")==="on",active:formData.get("active")==="on"}});
  refresh("/admin","/admin/products","/medicines","/"); redirect("/admin/products");
}
export async function updateProduct(formData) {
  const id=formData.get("id")?.toString(),name=formData.get("name")?.toString().trim();if(!id||!name)return;
  const brandName=formData.get("brand")?.toString().trim();let brandId=null;if(brandName){const brand=await db.brand.upsert({where:{slug:slugify(brandName)},update:{name:brandName},create:{name:brandName,slug:slugify(brandName)}});brandId=brand.id;}
  await db.product.update({where:{id},data:{name,slug:slugify(formData.get("slug")?.toString()||name),sku:formData.get("sku")?.toString().trim(),description:formData.get("description")?.toString()||null,pack:formData.get("pack")?.toString()||null,imageUrl:formData.get("imageUrl")?.toString()||null,categoryId:formData.get("categoryId")?.toString(),subcategoryId:formData.get("subcategoryId")?.toString()||null,brandId,mrp:Number(formData.get("mrp")),price:Number(formData.get("price")),stock:Number(formData.get("stock")),prescriptionRequired:formData.get("prescriptionRequired")==="on",active:formData.get("active")==="on"}});
  refresh("/admin","/admin/products","/medicines","/");redirect("/admin/products");
}
export async function toggleProduct(formData){await db.product.update({where:{id:formData.get("id")?.toString()},data:{active:formData.get("active")==="true"}});refresh("/admin","/admin/products","/medicines","/");}
export async function deleteProduct(formData){const id=formData.get("id")?.toString();const used=await db.orderItem.count({where:{productId:id}});if(used)await db.product.update({where:{id},data:{active:false,stock:0}});else await db.product.delete({where:{id}});refresh("/admin","/admin/products","/medicines","/");}
export async function createBanner(formData){await db.banner.create({data:{title:formData.get("title")?.toString(),imageUrl:formData.get("imageUrl")?.toString(),linkUrl:formData.get("linkUrl")?.toString()||null,placement:formData.get("placement")?.toString(),active:true}});refresh("/admin/content","/");}
export async function deleteBanner(formData){await db.banner.delete({where:{id:formData.get("id")?.toString()}});refresh("/admin/content","/");}
export async function updateOrderStatus(formData){await db.order.update({where:{id:formData.get("id")?.toString()},data:{status:formData.get("status")?.toString()}});refresh("/admin","/admin/orders");}
export async function updatePrescriptionStatus(formData){await db.prescription.update({where:{id:formData.get("id")?.toString()},data:{status:formData.get("status")?.toString(),notes:formData.get("notes")?.toString()||null}});refresh("/admin","/admin/prescriptions");}
export async function createCoupon(formData){await db.coupon.create({data:{code:formData.get("code")?.toString().toUpperCase(),type:formData.get("type")?.toString(),value:Number(formData.get("value")),minOrderValue:Number(formData.get("minOrderValue")||0),active:true}});refresh("/admin/marketing");}
export async function deleteCoupon(formData){await db.coupon.delete({where:{id:formData.get("id")?.toString()}});refresh("/admin/marketing");}
export async function logoutAdmin(){await destroySession("ADMIN");redirect("/");}
export async function saveAdminProfile(formData){const id=formData.get("id")?.toString(),name=formData.get("name")?.toString().trim(),email=formData.get("email")?.toString().trim().toLowerCase();if(!name||!email)return;if(id)await db.adminUser.update({where:{id},data:{name,email}});else await db.adminUser.create({data:{name,email,role:"ADMIN"}});refresh("/admin","/admin/settings");}
export async function saveStoreSettings(formData){const values={FREE_DELIVERY_ABOVE:String(Math.max(0,Number(formData.get("freeDeliveryAbove"))||0)),DELIVERY_FEE:String(Math.max(0,Number(formData.get("deliveryFee"))||0))};await db.$transaction(Object.entries(values).map(([key,value])=>db.storeSetting.upsert({where:{key},update:{value},create:{key,value}})));refresh("/admin/settings","/cart","/checkout");}
export async function createCmsEntry(formData){const type=formData.get("type")?.toString(),title=formData.get("title")?.toString().trim();if(!type||!title)return;const rawSlug=formData.get("slug")?.toString().trim();await db.cmsEntry.create({data:{type,title,slug:rawSlug?slugify(rawSlug):(["BLOG","POLICY","DISEASE","SALT","HEALTH_CONDITION","HELP_TOPIC"].includes(type)?slugify(title):null),subtitle:formData.get("subtitle")?.toString()||null,body:formData.get("body")?.toString()||null,badge:formData.get("badge")?.toString()||null,imageUrl:formData.get("imageUrl")?.toString()||null,linkUrl:formData.get("linkUrl")?.toString()||null,sortOrder:Number(formData.get("sortOrder")||0),active:formData.get("active")==="on"}});refresh("/admin/content","/","/blogs","/faqs");}
export async function deleteCmsEntry(formData){await db.cmsEntry.delete({where:{id:formData.get("id")?.toString()}});refresh("/admin/content","/","/blogs","/faqs");}
export async function toggleCmsEntry(formData){await db.cmsEntry.update({where:{id:formData.get("id")?.toString()},data:{active:formData.get("active")==="true"}});refresh("/admin/content","/","/blogs","/faqs");}
