"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Contact() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="contato" className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <Badge className="mb-2 bg-[#d8b5b4]/30 text-[#d8b5b4] hover:bg-[#d8b5b4]/30">
            Fale Conosco
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-[#d8b5b4]">
            Entre em Contato
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            Estamos prontos para atender suas necessidades e criar arranjos
            florais personalizados para qualquer ocasião.
          </p>
        </div>

        {/* WhatsApp Button - Positioned above contact info on mobile */}
        <div className="flex justify-center mb-8 sm:mb-12 order-first sm:order-none">
          <motion.a
            href="https://wa.me/5543999154860?text=Olá,%20gostaria%20de%20fazer%20um%20pedido%20na%20Aurora%20Floral!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full sm:w-auto"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <motion.div
              className="bg-[#25D366] text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl shadow-lg flex items-center gap-2 sm:gap-3 w-full sm:max-w-md mx-auto"
              animate={{
                boxShadow: isHovered
                  ? "0 10px 25px -5px rgba(37, 211, 102, 0.5)"
                  : "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-white p-2 sm:p-3 rounded-full flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="#25D366"
                  className="sm:w-6 sm:h-6"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-base sm:text-lg">
                  Fale conosco pelo WhatsApp
                </h3>
                <p className="text-white/90 text-xs sm:text-sm">
                  Atendimento rápido e personalizado
                </p>
              </div>
            </motion.div>
          </motion.a>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-10 sm:mb-12">
          {[
            {
              icon: <MapPin className="h-5 w-5 text-[#d8b5b4]" />,
              title: "Endereço",
              details: ["Ibiporã, Paraná", "Centro"],
            },
            {
              icon: <Phone className="h-5 w-5 text-[#d8b5b4]" />,
              title: "Telefone",
              details: ["(43) 99915-4860", "(43) 99629-7398"],
            },
            {
              icon: <Mail className="h-5 w-5 text-[#d8b5b4]" />,
              title: "Email",
              details: ["aurorafloral.contato@gmail.com"],
            },
            {
              icon: <Clock className="h-5 w-5 text-[#d8b5b4]" />,
              title: "Horário de Funcionamento",
              details: ["Segunda a Sexta: 8h às 18h", "Sábados: 8h às 14h"],
            },
          ].map((info, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-start p-4 rounded-lg hover:bg-[#f2e6e5]/50 transition-colors duration-200"
            >
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-[#f2e6e5] flex items-center justify-center shadow-sm flex-shrink-0">
                {info.icon}
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-[#d8b5b4] text-sm sm:text-base text-center mt-2">
                  {info.title}
                </h3>
                {info.details.map((detail, i) => (
                  <p
                    key={i}
                    className="text-muted-foreground text-xs sm:text-sm text-center"
                  >
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-center border-t border-[#f2e6e5] pt-6 sm:pt-8">
          <p className="text-muted-foreground mb-4 text-center text-xs sm:text-sm">
            Siga-nos nas redes sociais para novidades e inspirações florais
          </p>
          <div className="flex justify-center space-x-3 sm:space-x-4">
            <Link
              rel="stylesheet"
              target="_blank"
              href="https://www.instagram.com/aurorafloral.floricultura/"
            >
              {[{ Icon: Instagram, label: "Instagram" }].map(
                ({ Icon, label }, index) => (
                  <Button
                    key={index}
                    size="icon"
                    variant="outline"
                    className="rounded-full border-[#d8b5b4] hover:bg-[#f2e6e5] hover:text-[#d8b5b4] h-10 w-10 sm:h-12 sm:w-12  cursor-pointer"
                    aria-label={`Visite nosso ${label}`}
                  >
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                )
              )}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
