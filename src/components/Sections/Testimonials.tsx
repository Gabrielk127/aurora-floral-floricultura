import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ana Silva",
      role: "Cliente desde 2018",
      content:
        "Os arranjos da Aurora Floral são simplesmente maravilhosos! Encomendo regularmente flores para minha casa e sempre recebo elogios dos visitantes.",
      rating: 5,
    },
    {
      name: "Rafaela Oliveira",
      role: "Cliente Corporativo",
      content:
        "Sou uma cliente fiel desde a inauguração, as flores secas duram muitas mais e consigo decorar minha casa com facilidade.",
      rating: 5,
    },
    {
      name: "Mariana Santos",
      role: "Noiva",
      content:
        "Meu buquê de noiva ficou perfeito! A equipe da Aurora Floral entendeu exatamente o que eu queria e executou com maestria.",
      rating: 4,
    },
  ];

  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay, testimonials.length]);

  const next = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prev = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-16 bg-[#f2e6e5]">
      <div className="max-w-7xl mx-auto md:px-8">
        <div className="flex flex-col items-center mb-12">
          <Badge className="mb-2 bg-[#d8b5b4]/30 text-[#d8b5b4] hover:bg-[#d8b5b4]/30">
            O que dizem nossos clientes
          </Badge>
          <h2 className="text-3xl font-bold text-center mb-4 text-[#d8b5b4]">
            Depoimentos
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl">
            Veja o que nossos clientes têm a dizer sobre nossas flores e
            serviços.
          </p>
        </div>
        <div className="relative max-w-4xl mx-auto px-8">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="bg-white border-[#d8b5b4]/20 rounded-lg p-8 md:p-10 mx-4"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`inline-block h-6 w-6  ${
                          i < testimonials[current].rating
                            ? "text-[#d8b5b4] fill-amber-300"
                            : "text-gray-500"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-300 text-lg mb-6 italic">
                    {testimonials[current].content}
                  </p>
                  <div className="h-10 w-10 rounded-full bg-[#f2e6e5] mr-3 flex items-center justify-center">
                    <span className="text-[#d8b5b4] font-semibold">
                      {testimonials[current].name.charAt(0)}
                    </span>
                  </div>
                  <h4 className="mt-4 text-[#d8b5b4] font-semibold text-lg">
                    {testimonials[current].name}
                  </h4>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            className="cursor-pointer absolute left-[-15px] top-[45%] transform -translate-y-1/2 -translate-x-1/2 bg-[#d8b5b4] text-white rounded-full p-2 z-10 hidden md:block"
            onClick={prev}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            className="cursor-pointer absolute right-[-15px] top-[45%] transform -translate-y-1/2 translate-x-1/2 bg-[#d8b5b4] text-white rounded-full p-2 z-10 hidden md:block"
            onClick={next}
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setAutoplay(false);
                  setCurrent(index);
                }}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  current === index ? "bg-[#d8b5b4] w-6" : "bg-gray-500"
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
