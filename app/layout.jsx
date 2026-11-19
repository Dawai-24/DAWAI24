import "./globals.css";
import { StoreProvider } from "@/lib/store";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import CartDrawer from "@/components/Cart/CartDrawer";
import Toasts from "@/components/Common/Toasts";
import BackToTop from "@/components/Common/BackToTop";

export const metadata = {
  title: { default: "MediCart – Demo Online Pharmacy", template: "%s | MediCart (Demo)" },
  description: "MediCart is a fictional demo online pharmacy storefront built with Next.js and Tailwind CSS. Sample data only.",
};

export const viewport = { width: "device-width", initialScale: 1 };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <StoreProvider>
          <Header />
          <main className="min-h-[60vh]">{children}</main>
          <Footer />
          <CartDrawer />
          <Toasts />
          <BackToTop />
        </StoreProvider>
      </body>
    </html>
  );
}
