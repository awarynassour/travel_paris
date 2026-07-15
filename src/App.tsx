import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import ScrollAnimation from "./ScrollAnimation";
import { 
  ArrowUpRight, 
  MapPin, 
  Sparkles, 
  Compass, 
  Car, 
  Bed, 
  Calendar, 
  Star, 
  Phone, 
  Mail, 
  Clock, 
  Menu, 
  X, 
  Check, 
  Info,
  Map,
  ChevronRight
} from "lucide-react";

export default function App() {
  const [activeTab, setActiveTab] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  // Booking Form State
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [tripType, setTripType] = useState("Guided City Tour");
  const [travelers, setTravelers] = useState("2");

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About us", id: "about" },
    { label: "Services", id: "services" },
    { label: "Destinations", id: "destinations" },
    { label: "Insights", id: "insights" },
    { label: "Contact", id: "contact" }
  ];

  const handleBookingSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email && name) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setModalOpen(false);
        setEmail("");
        setName("");
      }, 3000);
    }
  };

  const scrollToSection = (id: string, label: string) => {
    setActiveTab(label);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen text-white flex flex-col items-center p-4 md:p-6 lg:p-8 font-sans relative overflow-x-hidden selection:bg-white selection:text-black z-10">
      {/* Cinematic scroll-driven frame animation (fixed background) */}
      <ScrollAnimation />

      {/* 1. HERO SECTION BANNER - Exactly 900px height with pristine containment */}
      <section 
        id="home"
        className="w-full max-w-7xl h-[900px] bg-black/30 backdrop-blur-md border border-white/10 rounded-[2.5rem] relative p-6 md:p-8 lg:p-10 flex flex-col justify-between overflow-hidden shadow-2xl mb-16 md:mb-24"
      >
        {/* Subtle background radial light inside banner */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.02),transparent_35%)] pointer-events-none" />

        {/* Navigation Header inside banner */}
        <header className="relative z-40 w-full flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            onClick={() => scrollToSection("home", "Home")}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <span className="font-bold text-xl md:text-2xl tracking-[0.25em] text-white transition-all group-hover:tracking-[0.3em]">
              PARIS
            </span>
            <span className="font-light text-xs uppercase tracking-widest text-white/60">Tours</span>
          </motion.div>

          {/* Center Pill Menu - GUARANTEED SINGLE LINE AND PERFECTLY CENTERED */}
          <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
            <motion.nav 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="flex items-center flex-row flex-nowrap whitespace-nowrap bg-white/[0.03] border border-white/10 rounded-full p-1 backdrop-blur-2xl"
            >
              {navItems.map((item) => {
                const isActive = activeTab === item.label;
                return (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.id, item.label)}
                    className={`relative px-4 py-1.5 text-xs lg:text-sm font-medium transition-colors duration-300 rounded-full cursor-pointer flex-shrink-0 ${
                      isActive ? "text-black" : "text-white hover:text-white/70"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activePill"
                        className="absolute inset-0 bg-white rounded-full -z-10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    {item.label}
                  </button>
                );
              })}
            </motion.nav>
          </div>

          {/* Right Action Menu */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center justify-end gap-3"
          >
            {/* Open Menu Pill Button */}
            <button 
              onClick={() => setMobileMenuOpen(true)}
              className="bg-white/[0.03] border border-white/10 hover:bg-white/10 active:scale-98 transition-all duration-300 rounded-full px-5 py-2 text-xs lg:text-sm font-medium hidden sm:flex items-center gap-2 cursor-pointer text-white backdrop-blur-md"
            >
              <span>Explore menu</span>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2 rounded-full hover:bg-white/10 active:scale-95 transition-all text-white cursor-pointer"
            >
              <Menu className="w-5 h-5" />
            </button>
          </motion.div>
        </header>

        {/* Content Centered Block - Shifted down to increase space below the nav bar */}
        <div className="flex-grow flex flex-col justify-center items-center z-10 w-full pt-16 md:pt-20 lg:pt-24 my-auto">
          {/* Main Hero Container */}
          <main className="relative flex flex-col items-center justify-center w-full text-center max-w-4xl">
            {/* Heading - Exactly 54px on desktop/tablet, font-medium, pure white */}
            <motion.h1 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-4xl md:text-[54px] font-normal tracking-tight text-white leading-[1.12] max-w-4xl"
            >
              <span className="font-serif italic font-light text-white/95">Discover the Magic</span> <br className="hidden md:inline" />
              <span className="font-sans font-medium">of Paris</span>
            </motion.h1>

            {/* Subheading - Regular font weight, text size reduced for elegance, tighter mt */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-white/80 text-sm md:text-base max-w-xl mx-auto mt-3.5 leading-relaxed font-normal"
            >
              Experience the City of Light like never before. From iconic landmarks and romantic streets to world-class cuisine and unforgettable adventures, we create personalized Paris tours for every traveler.
            </motion.p>

            {/* CTA Buttons side by side - Tighter margin */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5 flex flex-wrap gap-3 items-center justify-center"
            >
              <button
                onClick={() => scrollToSection("destinations", "Destinations")}
                className="bg-white text-black text-xs md:text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-neutral-100 hover:scale-[1.03] active:scale-98 transition-all duration-300 flex items-center gap-2 group cursor-pointer shadow-lg"
              >
                <span>Explore Tours</span>
                <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => setModalOpen(true)}
                className="bg-white/[0.03] text-white hover:bg-white/10 text-xs md:text-sm font-semibold pl-6 pr-2.5 py-1.5 rounded-full border border-white/15 hover:border-white/25 active:scale-98 transition-all duration-300 flex items-center gap-3 cursor-pointer backdrop-blur-md"
              >
                <span>Book Your Trip</span>
                <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-black">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </button>
            </motion.div>
          </main>
        </div>

        {/* Bottom Information Cards Grid - Reduced width, transparent blur background, icons in both cards */}
        <footer className="relative z-10 w-full max-w-[680px] mx-auto mt-auto pt-4 mb-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch">
            {/* Card 1: Explore the Heart of Paris */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-[1.25rem] p-4 flex flex-col justify-between gap-2.5 transition-all duration-500 hover:border-white/20 hover:bg-white/5 group relative overflow-hidden text-left"
            >
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-white/2 rounded-full blur-2xl pointer-events-none group-hover:bg-white/4 transition-all duration-500" />
              
              <div className="flex flex-col gap-2">
                {/* Custom Compass/Map Icon */}
                <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-md transition-transform duration-500 group-hover:scale-105">
                  <Compass className="w-4 h-4 text-black" />
                </div>
                
                <h2 className="text-sm md:text-base font-bold text-white tracking-tight">
                  Explore the Heart of Paris
                </h2>
                
                <p className="text-white/70 text-xs leading-normal font-light">
                  Discover iconic landmarks, charming streets, world-famous museums, and unforgettable experiences with our expertly guided tours.
                </p>
              </div>
            </motion.div>

            {/* Card 2: Your Dream Paris Vacation Starts Here */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-[1.25rem] p-4 flex flex-col justify-between gap-2.5 transition-all duration-500 hover:border-white/20 hover:bg-white/5 group relative overflow-hidden text-left"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/2 rounded-full blur-2xl pointer-events-none group-hover:bg-white/4 transition-all duration-500" />

              <div className="flex flex-col gap-2">
                {/* Custom Sparkles/Personalized Icon */}
                <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-md transition-transform duration-500 group-hover:scale-105">
                  <Sparkles className="w-4 h-4 text-black" />
                </div>

                <h2 className="text-sm md:text-base font-bold text-white tracking-tight">
                  Your Dream Paris Vacation Starts Here
                </h2>
                
                <p className="text-white/70 text-xs leading-normal font-light">
                  From romantic getaways to family adventures, we create personalized travel experiences that make every moment in Paris truly memorable.
                </p>
              </div>
            </motion.div>
          </div>
        </footer>
      </section>

      {/* BRAND TRUST SECTION */}
      <section className="w-full max-w-5xl py-20 md:py-28 flex flex-col items-center justify-center text-center relative overflow-hidden border-b border-white/5">
        {/* Soft atmospheric background glow to match reference image */}
        <div className="absolute top-1/2 left-[30%] -translate-y-1/2 -translate-x-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute top-1/2 right-[30%] -translate-y-1/2 translate-x-1/2 w-80 h-80 bg-red-500/10 rounded-full blur-[110px] pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center max-w-3xl px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-[60px] font-normal tracking-tight text-white leading-[1.1] mb-6"
          >
            <span className="font-serif italic text-white/95 font-light">Proudly Trusted</span>
            <br />
            <span className="font-sans font-medium">by Leading Brands</span>
            <br />
            <span className="font-sans font-medium relative inline-block">
              Across Industries
              <span className="text-red-500 text-sm md:text-base align-super font-bold select-none ml-0.5">®</span>
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-white/60 text-xs md:text-sm max-w-lg leading-relaxed font-normal mb-12"
          >
            We've partnered with leading brands to deliver innovative and impactful curated experiences.
          </motion.p>

          {/* Luxury Brand Logos row */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-12 items-center justify-center w-full mt-2"
          >
            {[
              { name: "LVMH", desc: "MOËT HENNESSY LOUIS VUITTON", logo: (
                <span className="font-serif tracking-[0.3em] font-medium text-lg text-white/70 group-hover:text-white transition-all">LVMH</span>
              )},
              { name: "HERMÈS", desc: "PARIS", logo: (
                <span className="font-serif tracking-[0.25em] font-bold text-sm text-white/70 group-hover:text-white transition-all">HERMÈS</span>
              )},
              { name: "AIR FRANCE", desc: "KLM", logo: (
                <div className="flex flex-col items-center">
                  <span className="font-sans tracking-[0.15em] font-extrabold text-xs text-white/70 group-hover:text-white transition-all">AIR FRANCE</span>
                  <div className="w-8 h-[1px] bg-red-500 mt-0.5 self-end" />
                </div>
              )},
              { name: "RITZ PARIS", desc: "LUXURY HOTEL", logo: (
                <span className="font-serif tracking-[0.2em] italic text-base text-white/70 group-hover:text-white transition-all">Ritz Paris</span>
              )},
              { name: "MICHELIN", desc: "TRAVEL GUIDE", logo: (
                <span className="font-sans tracking-[0.1em] font-black text-sm text-white/70 group-hover:text-white transition-all">MICHELIN</span>
              )},
              { name: "AMEX TRAVEL", desc: "PLATINUM", logo: (
                <span className="font-sans tracking-[0.05em] font-bold text-xs bg-white/10 px-2 py-1 rounded border border-white/10 text-white/70 group-hover:text-white transition-all">AMEX</span>
              )}
            ].map((brand, i) => (
              <div key={i} className="group flex flex-col items-center justify-center text-center p-2 cursor-pointer transition-all duration-300 hover:scale-105">
                {brand.logo}
                <span className="text-[8px] tracking-[0.15em] text-white/30 group-hover:text-white/50 uppercase mt-1.5 font-sans block">{brand.desc}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 2. ABOUT US SECTION */}
      <section 
        id="about" 
        className="w-full max-w-5xl py-12 md:py-16 border-b border-white/5 scroll-mt-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5">
            <span className="text-xs uppercase tracking-widest text-white/50 block mb-2 font-medium">Paris Experts</span>
            <h2 className="text-3xl md:text-4xl font-normal tracking-tight text-white leading-[1.2]">
              <span className="font-serif italic font-light text-white/95 block mb-1">Your Trusted</span>
              <span className="font-sans font-bold block">Paris Travel Experts</span>
            </h2>
          </div>
          <div className="md:col-span-7 space-y-4 text-white/70 text-sm md:text-base leading-relaxed font-light">
            <p>
              We are a passionate travel company dedicated to helping visitors experience the true beauty of Paris. Our experienced local guides, carefully planned itineraries, and personalized services ensure every journey is comfortable, exciting, and memorable.
            </p>
            <p className="border-l border-white/20 pl-4 italic text-white/80">
              Whether you're visiting for the first time, celebrating a honeymoon, traveling with family, or exploring solo, we make every moment in Paris unforgettable.
            </p>
          </div>
        </div>
      </section>

      {/* 3. OUR SERVICES SECTION */}
      <section 
        id="services" 
        className="w-full max-w-5xl py-16 md:py-24 border-b border-white/5 scroll-mt-10"
      >
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest text-white/50 block mb-2">Tailored Experiences</span>
          <h2 className="text-3xl md:text-4xl font-normal tracking-tight text-white leading-tight">
            <span className="font-serif italic font-light text-white/95">What We</span> <span className="font-sans font-bold">Offer</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Service 1 */}
          <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300 group">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:bg-white group-hover:text-black transition-all duration-300">
              <Map className="w-5 h-5 text-white group-hover:text-black" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Guided City Tours</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Explore famous attractions with knowledgeable local guides who share history, secrets, and local anecdotes.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300 group">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:bg-white group-hover:text-black transition-all duration-300">
              <Car className="w-5 h-5 text-white group-hover:text-black" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Luxury Transportation</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Comfortable airport transfers and premium private transportation throughout your stay to guarantee perfect ease.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300 group">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:bg-white group-hover:text-black transition-all duration-300">
              <Bed className="w-5 h-5 text-white group-hover:text-black" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Hotel Booking</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Choose from carefully selected hotels that match your budget, aesthetic preferences, and perfect location requirements.
            </p>
          </div>

          {/* Service 4 */}
          <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300 group md:col-span-1">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:bg-white group-hover:text-black transition-all duration-300">
              <Sparkles className="w-5 h-5 text-white group-hover:text-black" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Customized Travel Packages</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Create your perfect Paris vacation with personalized, flexible itineraries that focus on what you love.
            </p>
          </div>

          {/* Service 5 (Spanning 2 columns on medium screens to keep balance) */}
          <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300 group md:col-span-2">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:bg-white group-hover:text-black transition-all duration-300">
              <Calendar className="w-5 h-5 text-white group-hover:text-black" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Day Trips</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Visit beautiful destinations near Paris like Versailles, Disneyland Paris, and the historic Champagne region with private round-trip transport and fast-track entry.
            </p>
          </div>
        </div>
      </section>

      {/* 4. POPULAR DESTINATIONS SECTION */}
      <section 
        id="destinations" 
        className="w-full max-w-5xl py-16 md:py-24 border-b border-white/5 scroll-mt-10"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs uppercase tracking-widest text-white/50 block mb-2">Sightseeing Gems</span>
            <h2 className="text-3xl md:text-4xl font-normal tracking-tight text-white leading-[1.2]">
              <span className="font-serif italic font-light text-white/95 block mb-1">Must-Visit Places</span>
              <span className="font-sans font-bold block">in Paris</span>
            </h2>
          </div>
          <p className="text-white/50 text-sm max-w-xs mt-3 md:mt-0">
            Hand-picked historical and cultural landmarks we recommend on every single tour package.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Destination 1 */}
          <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-white/30 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between group">
            <div>
              <span className="text-xs font-mono text-white/40 block mb-3">01 / LANDMARK</span>
              <h3 className="text-xl font-bold text-white mb-2">Eiffel Tower</h3>
              <p className="text-white/60 text-sm leading-relaxed font-light mb-6">
                The world's most famous landmark with breathtaking city views, evening sparkles, and summit access options.
              </p>
            </div>
            <div className="flex items-center gap-2 text-white text-xs font-semibold uppercase tracking-wider group-hover:text-white/80">
              <span>Guided Tour Included</span>
              <Check className="w-4 h-4" />
            </div>
          </div>

          {/* Destination 2 */}
          <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-white/30 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between group">
            <div>
              <span className="text-xs font-mono text-white/40 block mb-3">02 / CULTURE</span>
              <h3 className="text-xl font-bold text-white mb-2">Louvre Museum</h3>
              <p className="text-white/60 text-sm leading-relaxed font-light mb-6">
                Discover thousands of incredible historic artworks, including the iconic Mona Lisa, with fast-track direct entries.
              </p>
            </div>
            <div className="flex items-center gap-2 text-white text-xs font-semibold uppercase tracking-wider group-hover:text-white/80">
              <span>Fast-track Access</span>
              <Check className="w-4 h-4" />
            </div>
          </div>

          {/* Destination 3 */}
          <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-white/30 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between group">
            <div>
              <span className="text-xs font-mono text-white/40 block mb-3">03 / HISTORY</span>
              <h3 className="text-xl font-bold text-white mb-2">Notre-Dame Cathedral</h3>
              <p className="text-white/60 text-sm leading-relaxed font-light mb-6">
                A historic masterpiece of Gothic architecture, French religious history, and magnificent stone gargoyles.
              </p>
            </div>
            <div className="flex items-center gap-2 text-white text-xs font-semibold uppercase tracking-wider group-hover:text-white/80">
              <span>External Walk & History</span>
              <Check className="w-4 h-4" />
            </div>
          </div>

          {/* Destination 4 */}
          <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-white/30 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between group">
            <div>
              <span className="text-xs font-mono text-white/40 block mb-3">04 / EXPERIENCE</span>
              <h3 className="text-xl font-bold text-white mb-2">Champs-Élysées</h3>
              <p className="text-white/60 text-sm leading-relaxed font-light mb-6">
                Enjoy world-famous luxury shopping, lovely Parisian outdoor cafés, and a walk up to the beautiful Arc de Triomphe.
              </p>
            </div>
            <div className="flex items-center gap-2 text-white text-xs font-semibold uppercase tracking-wider group-hover:text-white/80">
              <span>Shopping Escort</span>
              <Check className="w-4 h-4" />
            </div>
          </div>

          {/* Destination 5 (Spanning on tablet/desktop) */}
          <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-white/30 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between group sm:col-span-2 md:col-span-2">
            <div>
              <span className="text-xs font-mono text-white/40 block mb-3">05 / ROMANCE</span>
              <h3 className="text-xl font-bold text-white mb-2">Seine River Cruise</h3>
              <p className="text-white/60 text-sm leading-relaxed font-light mb-6">
                Experience the magic of Paris from the scenic waters. Enjoy a relaxing sightseeing cruise with custom dining options during sunset as city monuments illuminate.
              </p>
            </div>
            <div className="flex items-center gap-2 text-white text-xs font-semibold uppercase tracking-wider group-hover:text-white/80">
              <span>Gourmet Dinner Option</span>
              <Check className="w-4 h-4" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE INSIGHTS SECTION */}
      <section 
        id="insights" 
        className="w-full max-w-5xl py-16 md:py-24 border-b border-white/5 scroll-mt-10"
      >
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-white/50 block mb-2 font-sans font-medium">By The Numbers</span>
          <h2 className="text-3xl md:text-4xl font-normal tracking-tight text-white leading-tight">
            <span className="font-serif italic font-light text-white/95">Exclusive Journey</span> <span className="font-sans font-bold">Insights</span>
          </h2>
        </div>

        {/* 3-Column Layout: Left (2 cards), Center (Empty Spacer for Visual), Right (2 cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Side: 2 cards */}
          <div className="lg:col-span-4 flex flex-col gap-6 justify-between">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-[1.25rem] p-6 flex flex-col justify-between gap-3.5 transition-all duration-500 hover:border-white/20 hover:bg-white/5 group relative overflow-hidden text-left flex-grow"
            >
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-white/2 rounded-full blur-2xl pointer-events-none group-hover:bg-white/4 transition-all duration-500" />
              <div className="flex flex-col gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:scale-105">
                  <Star className="w-4.5 h-4.5 text-black" />
                </div>
                <h3 className="text-base font-bold text-white tracking-tight font-sans">4.9/5 Average Rating</h3>
                <p className="text-white/70 text-xs leading-relaxed font-light font-sans">
                  Consistently rated five stars by thousands of global travelers for our attention to detail and unmatched local guides.
                </p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-[1.25rem] p-6 flex flex-col justify-between gap-3.5 transition-all duration-500 hover:border-white/20 hover:bg-white/5 group relative overflow-hidden text-left flex-grow"
            >
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-white/2 rounded-full blur-2xl pointer-events-none group-hover:bg-white/4 transition-all duration-500" />
              <div className="flex flex-col gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:scale-105">
                  <Clock className="w-4.5 h-4.5 text-black" />
                </div>
                <h3 className="text-base font-bold text-white tracking-tight font-sans">24/7 Concierge Support</h3>
                <p className="text-white/70 text-xs leading-relaxed font-light font-sans">
                  Our dedicated Paris team is on call round-the-clock to manage dinner bookings, transport adjustments, and immediate requests.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Center Column: COMPLETELY EMPTY SPACE FOR VISUAL */}
          <div className="lg:col-span-4 min-h-[280px] lg:min-h-full rounded-[1.25rem] border border-dashed border-white/10 flex items-center justify-center relative overflow-hidden bg-white/[0.01]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02),transparent_60%)] pointer-events-none" />
            <span className="text-[10px] font-mono tracking-widest text-white/25 uppercase select-none font-sans">
              Visual Space Reserved
            </span>
          </div>

          {/* Right Side: 2 cards */}
          <div className="lg:col-span-4 flex flex-col gap-6 justify-between">
            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-[1.25rem] p-6 flex flex-col justify-between gap-3.5 transition-all duration-500 hover:border-white/20 hover:bg-white/5 group relative overflow-hidden text-left flex-grow"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/2 rounded-full blur-2xl pointer-events-none group-hover:bg-white/4 transition-all duration-500" />
              <div className="flex flex-col gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:scale-105">
                  <MapPin className="w-4.5 h-4.5 text-black" />
                </div>
                <h3 className="text-base font-bold text-white tracking-tight font-sans">150+ Curated Spots</h3>
                <p className="text-white/70 text-xs leading-relaxed font-light font-sans">
                  From famous architectural marvels to secret courtyards and private art galleries only locals know.
                </p>
              </div>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-[1.25rem] p-6 flex flex-col justify-between gap-3.5 transition-all duration-500 hover:border-white/20 hover:bg-white/5 group relative overflow-hidden text-left flex-grow"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/2 rounded-full blur-2xl pointer-events-none group-hover:bg-white/4 transition-all duration-500" />
              <div className="flex flex-col gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:scale-105">
                  <Sparkles className="w-4.5 h-4.5 text-black" />
                </div>
                <h3 className="text-base font-bold text-white tracking-tight font-sans">100% Tailored Routes</h3>
                <p className="text-white/70 text-xs leading-relaxed font-light font-sans">
                  Every tour itinerary is custom drafted by our dedicated travel architects to fit your schedule and personal passions.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS & CONTACT SECTION */}
      <section 
        id="contact" 
        className="w-full max-w-5xl py-16 md:py-24 scroll-mt-10"
      >
        {/* Testimonials */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest text-white/50 block mb-2">Reviews</span>
            <h2 className="text-3xl md:text-4xl font-normal tracking-tight text-white leading-tight">
              <span className="font-serif italic font-light text-white/95">What Our</span> <span className="font-sans font-bold">Travelers Say</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Review 1 */}
            <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6">
              <div className="flex items-center gap-1 mb-4 text-white">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-white text-white" />
                ))}
              </div>
              <p className="text-white/80 text-sm italic leading-relaxed mb-6 font-light">
                "The trip was perfectly organized. Every detail from fast-track Louvre passes to our comfortable day trips exceeded our expectations."
              </p>
              <span className="text-xs font-bold text-white uppercase tracking-wider block">Sarah, USA</span>
            </div>

            {/* Review 2 */}
            <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6">
              <div className="flex items-center gap-1 mb-4 text-white">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-white text-white" />
                ))}
              </div>
              <p className="text-white/80 text-sm italic leading-relaxed mb-6 font-light">
                "Our guide was amazing and deeply knowledgeable. The custom itinerary covered all the must-see attractions without feeling rushed."
              </p>
              <span className="text-xs font-bold text-white uppercase tracking-wider block">James, UK</span>
            </div>

            {/* Review 3 */}
            <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6">
              <div className="flex items-center gap-1 mb-4 text-white">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-white text-white" />
                ))}
              </div>
              <p className="text-white/80 text-sm italic leading-relaxed mb-6 font-light">
                "An unforgettable Paris experience! They took care of everything, hotels, private transport, and local guides. Highly recommended."
              </p>
              <span className="text-xs font-bold text-white uppercase tracking-wider block">Maria, Spain</span>
            </div>
          </div>
        </div>

        {/* Contact Block Grid */}
        <div className="border border-white/10 rounded-[2rem] bg-white/[0.01] overflow-hidden p-6 md:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Info details */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#1A73E8] font-bold block mb-2">Book Your Trip Today</span>
                <h3 className="text-2xl md:text-3xl font-normal tracking-tight text-white mb-4 leading-[1.2]">
                  <span className="font-serif italic font-light text-white/95 block mb-1">Let's Plan Your</span>
                  <span className="font-sans font-bold block">Paris Adventure</span>
                </h3>
                <p className="text-white/70 text-sm md:text-base font-light leading-relaxed">
                  Ready to explore Paris? Contact our travel experts today and let us design the perfect vacation just for you.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-white/50">Phone Number</p>
                    <p className="text-sm font-semibold text-white">+33 1 23 45 67 89</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-white/50">Email Address</p>
                    <p className="text-sm font-semibold text-white">info@paristravel.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-white/50">Address</p>
                    <p className="text-sm font-semibold text-white">Paris, France</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-white/50">Opening Hours</p>
                    <p className="text-sm font-semibold text-white">Monday – Saturday: 9:00 AM – 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="lg:col-span-7 bg-white/[0.02] border border-white/10 rounded-2xl p-6 md:p-8">
              <h4 className="text-lg font-bold text-white mb-6">Quick Travel Inquiry</h4>
              
              <form onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
                setTimeout(() => setSubmitted(false), 3000);
              }} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-semibold text-white/80 uppercase tracking-wider mb-2">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      className="w-full bg-white/5 border border-white/10 focus:border-white/30 rounded-xl py-2.5 px-4 text-xs text-white placeholder-white/30 outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-white/80 uppercase tracking-wider mb-2">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. johndoe@gmail.com"
                      className="w-full bg-white/5 border border-white/10 focus:border-white/30 rounded-xl py-2.5 px-4 text-xs text-white placeholder-white/30 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-white/80 uppercase tracking-wider mb-2">Trip Duration</label>
                  <select className="w-full bg-neutral-900 border border-white/10 focus:border-white/30 rounded-xl py-2.5 px-4 text-xs text-white outline-none transition-colors">
                    <option value="3days">3 Days - Quick Highlights</option>
                    <option value="5days">5 Days - Standard Experience</option>
                    <option value="7days+">7+ Days - Deep Exploration</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-white/80 uppercase tracking-wider mb-2">Message or Special Requests</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your dream trip (e.g. hotel standards, must-see places)..."
                    className="w-full bg-white/5 border border-white/10 focus:border-white/30 rounded-xl py-2.5 px-4 text-xs text-white placeholder-white/30 outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-white text-black font-semibold py-3 rounded-xl hover:bg-neutral-100 active:scale-98 transition-all duration-200 cursor-pointer text-xs uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  {submitted ? (
                    <>
                      <Check className="w-4 h-4 text-green-600" />
                      <span>Inquiry Sent!</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Paris Inquiry</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Global Footer copyright */}
      <footer className="w-full max-w-5xl py-8 mt-12 text-center border-t border-white/5 text-xs text-white/40">
        <p>© 2026 Paris Tours. All rights reserved. Elegant Minimal Travel Guide designed with pure white DM Sans elements.</p>
      </footer>

      {/* Slide-out Mobile Navigation Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-lg z-50"
            />

            {/* Menu Content */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full sm:w-96 bg-neutral-950 border-l border-white/10 p-8 z-50 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-12">
                  <span className="font-bold text-xl tracking-[0.25em] text-white">
                    PARIS TOURS
                  </span>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-full hover:bg-white/10 active:scale-95 transition-all text-white cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex flex-col gap-6">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        scrollToSection(item.id, item.label);
                      }}
                      className="text-left text-2xl font-semibold hover:text-white/70 transition-colors py-2 text-white border-b border-white/5 cursor-pointer"
                    >
                      {item.label}
                    </motion.button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4 text-white/60 text-sm">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-white" />
                  <span>info@paristravel.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-white" />
                  <span>+33 1 23 45 67 89</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-white" />
                  <span>Paris, France</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Modern Booking Flow Modal */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalOpen(false)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative w-full max-w-lg bg-neutral-900 border border-white/10 rounded-3xl p-8 overflow-hidden z-50"
            >
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.div
                    key="booking-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="w-4 h-4 text-white" />
                      <span className="text-xs uppercase tracking-wider text-white/60 font-bold">
                        Personalized tours
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Book Your Dream Trip
                    </h3>
                    <p className="text-white/70 text-sm mb-6">
                      Tell us about your preferences and our tour architects will design a bespoke Paris tour itinerary.
                    </p>

                    <form onSubmit={handleBookingSubmit} className="space-y-4">
                      <div>
                        <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. John Doe"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full bg-white/5 border border-white/10 focus:border-white/30 rounded-xl py-3 px-4 text-sm text-white placeholder-white/30 outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="e.g. johndoe@travel.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-white/5 border border-white/10 focus:border-white/30 rounded-xl py-3 px-4 text-sm text-white placeholder-white/30 outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-2">
                          Preferred Tour Standard
                        </label>
                        <div className="grid grid-cols-3 gap-2">
                          {[
                            "Guided Tours",
                            "Luxury Stay",
                            "Customized"
                          ].map((option) => (
                            <button
                              key={option}
                              type="button"
                              onClick={() => setTripType(option)}
                              className={`py-2 px-3 text-xs font-semibold rounded-xl border transition-all cursor-pointer ${
                                tripType === option
                                  ? "bg-white text-black border-white"
                                  : "bg-white/5 text-white/70 border-white/10 hover:border-white/20"
                              }`}
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-white text-black font-semibold py-3 rounded-xl hover:bg-neutral-100 active:scale-98 transition-all duration-200 mt-6 cursor-pointer flex items-center justify-center gap-2 text-sm uppercase tracking-wider"
                      >
                        <span>Reserve Custom Trip</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="booking-success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-12 flex flex-col items-center text-center"
                  >
                    <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center mb-6">
                      <Check className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Booking Requested!
                    </h3>
                    <p className="text-white/70 text-sm max-w-sm mb-1">
                      Merci beaucoup, <span className="text-white font-medium">{name}</span>.
                    </p>
                    <p className="text-white/50 text-xs">
                      We've sent the details to <span className="text-white/70">{email}</span>. A Paris tour architect will email you within 24 hours.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
