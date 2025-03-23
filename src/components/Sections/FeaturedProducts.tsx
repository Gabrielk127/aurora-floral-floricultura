"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useMediaQuery } from "@/hooks/use-media-query";

export default function FeaturedProducts() {
  type Product = {
    name: string;
    image: string;
    price: string;
    tag?: string;
  };

  const products: Product[] = [
    {
      name: "Buquê Van Gogh",
      image: "/buques/buque2.png?height=256&width=384&text=Buquê+Primavera",
      price: "R$ 189,90",
      tag: "Mais Vendido",
    },
    {
      name: "Buquê Rosa",
      image: "/buques/buque1.png?height=256&width=384&text=Arranjo+Elegância",
      price: "R$ 249,90",
      tag: "Novo",
    },
    {
      name: "Solitário Rosa",
      image:
        "/arranjos/arranjo1.png?height=256&width=384&text=Cesta+Celebração",
      price: "R$ 219,90",
      tag: "Promoção",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    if (!autoplay || !isMobile) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev === products.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay, products.length, isMobile]);

  const next = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  const prev = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  const renderProduct = (product: Product, index: number) => (
    <Card
      key={index}
      className="overflow-hidden group border-[#d8b5b4]/20 bg-white"
    >
      <div className="relative h-64 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
        {product.tag && (
          <Badge className="absolute top-3 right-3 z-20 bg-[#d8b5b4]">
            {product.tag}
          </Badge>
        )}
      </div>
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-semibold text-[#d8b5b4]">
            {product.name}
          </h3>
          {/* <Button
            size="icon"
            variant="ghost"
            className="h-8 w-8 text-[#d8b5b4] hover:text-[#b08e8d] hover:bg-[#f2e6e5]"
          >
            <Heart className="h-5 w-5" />
          </Button> */}
        </div>
        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg">{product.price}</p>
          <Button
            size="sm"
            className="bg-[#d8b5b4] hover:bg-[#b08e8d] cursor-pointer"
          >
            Comprar
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section className="py-16 px-6 bg-[#f2e6e5]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-12">
          <Badge className="mb-2 bg-[#d8b5b4]/30 text-[#d8b5b4] hover:bg-[#d8b5b4]/30">
            Destaques
          </Badge>
          <h2 className="text-3xl font-bold text-center mb-4 text-[#d8b5b4]">
            Arranjos em Destaque
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl">
            Conheça nossos arranjos mais populares, criados com flores Secas e
            selecionadas para tornar qualquer momento especial.
          </p>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => renderProduct(product, index))}
        </div>

        {/* Mobile Carousel View */}
        <div className="md:hidden relative">
          <div className="overflow-hidden px-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
              >
                {renderProduct(products[current], current)}
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/80 text-[#d8b5b4] rounded-full p-2 z-10 shadow-md"
            onClick={prev}
            aria-label="Produto anterior"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/80 text-[#d8b5b4] rounded-full p-2 z-10 shadow-md"
            onClick={next}
            aria-label="Próximo produto"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="flex justify-center mt-6 space-x-2">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setAutoplay(false);
                  setCurrent(index);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  current === index ? "bg-[#d8b5b4] w-6" : "bg-[#d8b5b4]/30 w-2"
                }`}
                aria-label={`Ir para produto ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <Button
            variant="outline"
            className="border-[#d8b5b4] text-[#d8b5b4] hover:bg-[#f2e6e5] cursor-pointer"
          >
            Ver Todos os Produtos <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
