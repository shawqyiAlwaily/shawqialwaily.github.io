import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { events } from "@/data/content";
import { Calendar, MapPin, Image as ImageIcon, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Events = () => {
  const { language, isRTL } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Sort events by date (newest first)
  const sortedEvents = [...events].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#4a2c6e] via-[#5c3a8a] to-[#7c5f9e] text-white">
      <Header />
      
      <main className="relative pt-32 pb-20">
        <div className="container mx-auto px-6 md:px-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <Link
              to="/#events"
              className={`inline-flex items-center gap-2 text-cyan-200 hover:text-white transition-colors mb-8 group ${
                isRTL ? "flex-row-reverse" : ""
              }`}
            >
              {isRTL ? (
                <ArrowLeft className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              ) : (
                <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
              )}
              <span>Back to Home</span>
            </Link>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6">
              Events & Photography
            </h1>
            <p className="text-xl text-slate-200/80 max-w-2xl mx-auto">
              A visual journey through global forums, conferences, and leadership engagements.
            </p>
          </motion.div>

          {/* Events Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedEvents.map((event, idx) => {
              const title = event.title[language as keyof typeof event.title] || event.title.en;
              const caption = event.caption[language as keyof typeof event.caption] || event.caption.en;
              const location = event.location[language as keyof typeof event.location] || event.location.en;
              const date = new Date(event.date).toLocaleDateString(language, {
                year: "numeric",
                month: "long",
                day: "numeric",
              });
              const imageCount = event.images?.length || 0;

              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Link
                    to={`/events/${event.slug}`}
                    className="group block relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-500 hover:-translate-y-2"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={event.cover}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#5c3a8a] via-transparent to-transparent" />
                      
                      <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20">
                        <span className="text-xs text-white flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-cyan-200" />
                          {date}
                        </span>
                      </div>

                      {imageCount > 0 && (
                        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20">
                          <span className="text-xs text-white flex items-center gap-1">
                            <ImageIcon className="w-3 h-3 text-cyan-200" />
                            {imageCount}
                          </span>
                        </div>
                      )}

                      <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20">
                        <span className="text-xs text-white flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-cyan-200" />
                          {location.split(',')[0]}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h2 className="text-xl font-semibold text-white mb-2 line-clamp-2">
                        {title}
                      </h2>
                      <p className="text-slate-200/80 text-sm line-clamp-2">
                        {caption}
                      </p>
                      
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-cyan-200/80 text-sm group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                          View details {!isRTL ? '→' : '←'}
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Events;