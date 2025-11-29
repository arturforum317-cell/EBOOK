import Header from "@/components/Main/Header";
import Footer from "@/components/Main/Footer";
import Sobre from "@/components/home/Banner/sobre";




export default function SobrePage() {
    return (
        <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Sobre />
        </main>
        <Footer />
      </div>
    );
}