import Image from "next/image";
// import { ChevronRight } from "lucide-react";
// import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";

const galleryImages = {
  todos: [
    "/buques/buque1.jpg",
    "/arranjos/arranjo1.jpeg",
    "/buques/buque2.png",
    "/arranjos/arranjo2.png",
    "/buques/buque3.png",
    "/arranjos/arranjo3.png",
    "/buques/buque4.png",
    "/buques/buque5.png",
  ],
  buques: [
    "/buques/buque1.jpg",
    "/buques/buque2.png",
    "/buques/buque3.png",
    "/buques/buque4.png",
    "/buques/buque5.png",
  ],
  arranjos: [
    "/arranjos/arranjo1.jpeg",
    "/arranjos/arranjo2.png",
    "/arranjos/arranjo3.png",
  ],
  // eventos: ["/evento1.jpg", "/evento2.jpg", "/evento3.jpg"],
};

export default function Gallery() {
  return (
    <section id="galeria" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col items-center mb-12">
          <Badge className="mb-2 bg-[#d8b5b4]/30 text-[#d8b5b4] hover:bg-[#d8b5b4]/30">
            Inspirações
          </Badge>
          <h2 className="text-3xl font-bold text-center mb-4 text-[#d8b5b4]">
            Nossa Galeria
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl">
            Conheça alguns dos nossos trabalhos e deixe-se inspirar para o seu
            próximo arranjo floral.
          </p>
        </div>

        <Tabs defaultValue="todos" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-[#f2e6e5]">
              {Object.keys(galleryImages).map((tab) => (
                <TabsTrigger
                  key={tab}
                  value={tab}
                  className="data-[state=active]:bg-[#d8b5b4] data-[state=active]:text-white"
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {Object.entries(galleryImages).map(([key, images]) => (
            <TabsContent key={key} value={key} className="mt-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={key}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {images.map((src, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05, rotate: 1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="relative group overflow-hidden rounded-xl"
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          whileHover={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.3 }}
                          className="p-6 w-full"
                        >
                          <h3 className="text-white font-semibold text-lg">
                            Foto #{index + 1}
                          </h3>
                          <p className="text-white/80 text-sm">
                            Categoria: {key}
                          </p>
                        </motion.div>
                      </div>
                      <div className="aspect-square relative">
                        <Image
                          src={src}
                          alt={`Galeria ${index + 1}`}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </TabsContent>
          ))}
        </Tabs>

        {/* <div className="flex justify-center mt-12">
          <Button
            variant="outline"
            className="border-[#d8b5b4] text-[#d8b5b4] hover:bg-[#f2e6e5]"
          >
            Ver Galeria Completa <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div> */}
      </div>
    </section>
  );
}
