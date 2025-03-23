import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, CalendarIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useMediaQuery } from "@/app/hooks/use-media-query";

function GiftIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="8" width="18" height="4" rx="1" />
      <path d="M12 8v13" />
      <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
      <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
    </svg>
  );
}

function HomeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

const services = [
  {
    title: "Buquês & Arranjos",
    description: "Criamos buquês e arranjos personalizados com flores frescas.",
    icon: Heart,
  },
  {
    title: "Presentes Especiais",
    description: "Surpreenda com flores e mimos exclusivos.",
    icon: GiftIcon,
  },
  {
    title: "Decoração de Ambientes",
    description: "Transforme espaços com decorações florais.",
    icon: HomeIcon,
  },
  {
    title: "Eventos",
    description: "Decoração floral completa para eventos.",
    icon: CalendarIcon,
  },
];

export default function Services() {
  const [current, setCurrent] = useState(0);
  const [autoplay] = useState(true);
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    if (!autoplay || !isMobile) return;

    const totalServices = services.length;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev === totalServices - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [autoplay, isMobile]);

  const IconComponent = services[current].icon;

  return (
    <section
      id="servicos"
      className="py-16 bg-gradient-to-b from-[#f2e6e5] to-white "
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col items-center mb-12">
          <Badge className="mb-2 bg-[#d8b5b4]/30 text-[#d8b5b4] hover:bg-[#d8b5b4]/30">
            O que oferecemos
          </Badge>
          <h2 className="text-3xl font-bold text-center mb-4 text-[#d8b5b4]">
            Nossos Serviços
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl">
            Conheça nossos serviços florais para qualquer ocasião.
          </p>
        </div>

        {isMobile ? (
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
              >
                <Card className="border-[#d8b5b4]/20 bg-white">
                  <CardContent className="p-6 flex flex-col items-center">
                    <IconComponent className="h-12 w-12 mb-4 text-[#d8b5b4]" />
                    <h3 className="text-xl font-semibold mb-2 text-[#d8b5b4]">
                      {services[current].title}
                    </h3>
                    <p className="text-muted-foreground text-center">
                      {services[current].description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const ServiceIcon = service.icon;
              return (
                <Card key={index} className="border-[#d8b5b4]/20 bg-white">
                  <CardContent className="p-6 flex flex-col items-center">
                    <ServiceIcon className="h-12 w-12 mb-4 text-[#d8b5b4]" />
                    <h3 className="text-lg text-center font-semibold mb-2 text-[#d8b5b4]">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-center">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
