import { redirect } from "next/navigation";

export default function OtcRedirect({ params }) {
  // Redirect /otc/:slug to /products/:slug
  redirect(`/products/${params.slug}`);
}
