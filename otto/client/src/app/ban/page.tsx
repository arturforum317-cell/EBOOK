import Header from "@/components/Main/Header";
import Footer from "@/components/Main/Footer";
import Ban from "@/components/home/Banner/ban";




export default function BanPage() {
    return (
        <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Ban />
        </main>
        <Footer />
      </div>
    );
}