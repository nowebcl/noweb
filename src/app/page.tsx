import Hero from "@/components/Hero";
import PortfolioGallery from "@/components/PortfolioGallery";
import WorkProcess from "@/components/WorkProcess";
import TechnicalSection from "@/components/TechnicalSection";
import PricingTable from "@/components/PricingTable";
import ReviewsScroll from "@/components/ReviewsScroll";
import FAQs from "@/components/FAQs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <main className="relative flex flex-col pt-0">
        <Hero />

        {/* Main Sections */}
        <PortfolioGallery />
        <WorkProcess />
        <TechnicalSection />
        <PricingTable />
        <ReviewsScroll />
        <FAQs />

        {/* Floating WhatsApp for conversion tracking/UX parity */}
        <div className="fixed left-5 bottom-5 z-[1000] pointer-events-none sm:left-8 sm:bottom-8">
          <a
            href="https://wa.me/56987843957?text=Hola!%20Vengo%20de%20la%20web%20y%20necesito%20una%20asesor%C3%ADa%20gratis."
            target="_blank"
            rel="noopener noreferrer"
            className="pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-full bg-black/60 border border-white/15 backdrop-blur-md text-white shadow-[0_18px_50px_rgba(0,0,0,0.5)] hover:bg-white hover:text-black hover:shadow-[0_18px_50px_rgba(255,255,255,0.12)] transition-all duration-300 hover:scale-105 group"
          >
            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center relative">
              <svg className="w-5 h-5 text-[#25D366] group-hover:text-black transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5c-1.6 0-3.1-.35-4.45-.98L3 20l.98-4.05A8.5 8.5 0 1 1 21 11.5z"></path>
              </svg>
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse"></span>
            </div>
            <span className="font-black text-sm pr-2 text-white group-hover:text-black transition-colors duration-300">Asesoría gratis</span>
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
