import Image from "next/image";
import Link from "next/link";
import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-[#d8b5b4] text-white py-12">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="relative h-32 w-32">
                <Image
                  src="/logo.png?height=64&width=64"
                  alt="Aurora Floral Logo"
                  fill
                  className="object-contain rounded-full"
                />
              </div>
              <span className="text-xl font-semibold">Aurora Floral</span>
            </div>
            <p className="text-white/80 mb-4">
              Transformando momentos especiais com a beleza natural das flores
              desde 2005.
            </p>
            <div className="flex space-x-3">
              <Link
                rel="stylesheet"
                target="_blank"
                href="https://www.instagram.com/aurorafloral.floricultura/"
              >
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-8 w-8 text-white hover:text-white hover:bg-[#b08e8d] cursor-pointer"
                >
                  <Instagram className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  href="/#sobre"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  href="/#servicos"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Serviços
                </Link>
              </li>
              <li>
                <Link
                  href="/#galeria"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Galeria
                </Link>
              </li>
              <li>
                <Link
                  href="/#contato"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Buquês & Arranjos
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Presentes Especiais
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Decoração de Ambientes
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Eventos
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Assinaturas Florais
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/80 text-sm">
            © {new Date().getFullYear()} Aurora Floral. Todos os direitos
            reservados.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link
              href="/termos-de-uso"
              className="text-white/80 hover:text-white text-sm"
            >
              Termos de Uso
            </Link>
            <Link
              href="/politica-de-privacidade"
              className="text-white/80 hover:text-white text-sm"
            >
              Política de Privacidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
