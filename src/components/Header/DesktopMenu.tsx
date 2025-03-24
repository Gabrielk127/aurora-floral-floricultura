"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const DesktopMenu = () => {
  const menuItems = [
    { label: "Início", href: "/" },
    { label: "Sobre", href: "/#sobre" },
    { label: "Serviços", href: "/#servicos" },
    { label: "Galeria", href: "/#galeria" },
    { label: "Contato", href: "/#contato" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg shadow-lg py-2 max-w-[1200px] rounded-3xl mx-auto mt-4">
      <div className="container mx-auto flex justify-between items-center px-8 gap-4">
        <motion.div
          className="text-[#d8b5b4] text-3xl font-bold cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-10 w-10">
              <Image
                src="/logo.png?height=40&width=40"
                alt="Aurora Floral Logo"
                fill
                className="object-contain rounded-full"
              />
            </div>
            <span className="text-xl font-semibold text-[#d8b5b4]">
              Aurora Floral
            </span>
          </Link>
        </motion.div>

        {/* Menu Links */}
        <nav className="hidden md:flex space-x-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: -10 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: index * 0.1, duration: 0.5 },
              }}
            >
              <a
                href={item.href}
                className="text-[#d8b5b4] text-lg hover:text-[#b08e8d] transition text-nowrap"
              >
                {item.label}
              </a>

              {/* Barra deslizante abaixo do texto ao passar o mouse */}
              <motion.div
                className="absolute left-0 bottom-0 h-0.5 bg-[#d8b5b4] w-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
                layoutId="underline"
                transition={{ type: "spring", stiffness: 200, damping: 30 }}
              />
            </motion.div>
          ))}
        </nav>
        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.5 } }}
        >
          <a href="#contato" className="pl-4">
            <button className="bg-[#d8b5b4] text-white font-bold px-6 py-2 rounded-xl cursor-pointer hover:bg-[#b08e8d] transition duration-300">
              Fazer Pedido
            </button>
          </a>
        </motion.div>
      </div>
    </header>
  );
};

export default DesktopMenu;
