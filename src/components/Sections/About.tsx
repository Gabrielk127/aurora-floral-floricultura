import Image from "next/image";
// import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function About() {
  return (
    <section id="sobre" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[200px] md:h-[400px] rounded-2xl overflow-hidden">
            <Image
              src="/WallpaperLogo.png"
              alt="Sobre a Aurora Floral"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <Badge className="mb-2 bg-[#d8b5b4]/30 text-[#d8b5b4] hover:bg-[#d8b5b4]/30">
              Nossa História
            </Badge>
            <h2 className="text-3xl font-bold mb-6 text-[#d8b5b4]">
              Sobre a Aurora Floral
            </h2>
            <p className="text-muted-foreground mb-4">
              Fundada em 2025, a Aurora Floral nasceu da paixão por flores e da
              crença de que elas têm o poder de trazer alegria e transformar
              ambientes.
            </p>
            <p className="text-muted-foreground mb-6">
              Nossa equipe é formada por profissionais apaixonados e
              cuidadosamente selecionados para criar conexões reais entre
              pessoas através de arranjos exclusivos, serviços diferenciados e
              um atendimento singular a cada cliente.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                {
                  value: "Satisfação Garantida",
                  label: "Nosso compromisso é encantar cada cliente.",
                },
                {
                  value: "Produção Artesanal",
                  label: "Cada arranjo é feito à mão com carinho.",
                },
                {
                  value: "Amor pelas Flores",
                  label: "Nascida da paixão por transformar momentos.",
                },
                {
                  value: "Entrega Rápida",
                  label: "Entregas ágeis para surpreender quem você ama.",
                },
              ].map((stat, index) => (
                <div key={index} className="bg-[#f2e6e5] p-4 rounded-lg">
                  <p className="text-xl font-bold text-[#d8b5b4]">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* <Button className="bg-[#d8b5b4] hover:bg-[#b08e8d] text-white">
              Conheça Nossa Equipe
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
