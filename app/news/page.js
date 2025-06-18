import Header from "@/components/Header";
import Category from "../category/page";
import Footer from "@/components/Footer";
export const metadata ={
  title : "News"
}
export default function News() {
  return (
    <div>
        <Header />
        <Category />
        <Footer />
    </div>
  )
}
