import Header from "@/components/Main/Header";
import Footer from "@/components/Main/Footer";
import About from "@/components/home/Banner/About";




export default function SobrePage() {
    return (
        <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <About />
        </main>
        <Footer />
      </div>
    );
}