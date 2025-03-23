import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Imagem de fundo */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/Wallpaper.png"
          alt="Arranjos florais"
          fill
          className="object-cover w-full h-full"
          sizes="100vw"
          priority
        />
        {/* Gradiente aplicado só no fundo */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#000]/20 to-[#000]/20" />
      </div>

      {/* Conteúdo do Hero */}
      <div className="container relative z-10 flex flex-col items-center justify-center h-full text-center text-white mb-20 px-8">
        <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-4 text-shadow">
          Aurora Floral
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-8 text-shadow">
          Transformando momentos especiais com a beleza natural das flores
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            size="lg"
            className="cursor-pointer bg-white rounded-xl text-[#d8b5b4] hover:bg-[#b08e8d] transition duration-300 shadow-lg hover:text-white"
          >
            Nossos Produtos
          </Button>
          <Button
            size="lg"
            className="cursor-pointer bg-[#d8b5b4] rounded-xl text-white font-bold hover:bg-[#b08e8d]  transition duration-300 shadow-lg"
          >
            Entre em Contato
          </Button>
        </div>
      </div>
    </section>
  );
}
