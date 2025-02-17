import React, { useState } from "react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { motion, AnimatePresence } from "framer-motion";
import { Menu } from "lucide-react";

interface HeaderProps {
  logo?: string;
  menuItems?: Array<{
    label: string;
    href: string;
  }>;
}

const Header = ({
  logo = "BlengLen Farm",
  menuItems = [
    { label: "Products", href: "#products" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
}: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("");

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="w-full h-20 bg-white/80 backdrop-blur-md border-b border-gray-200 fixed top-0 left-0 z-50"
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-orange-600 flex items-center gap-2"
        >
          <img
            src="https://api.dicebear.com/7.x/icons/svg?seed=chicken"
            alt="logo"
            className="w-8 h-8"
          />
          {logo}
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onHoverStart={() => setActiveItem(item.label)}
              onHoverEnd={() => setActiveItem("")}
              className="relative"
            >
              <a
                href={item.href}
                className="px-4 py-2 text-gray-700 hover:text-orange-600 transition-colors rounded-md relative"
              >
                {item.label}
                {activeItem === item.label && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </a>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Button className="bg-orange-600 hover:bg-orange-700 ml-4">
              Order Now
            </Button>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[240px] bg-white">
              <nav className="flex flex-col gap-4 mt-8">
                <AnimatePresence>
                  {menuItems.map((item, index) => (
                    <motion.a
                      key={item.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ delay: index * 0.1 }}
                      href={item.href}
                      className="text-lg text-gray-700 hover:text-orange-600 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </motion.a>
                  ))}
                </AnimatePresence>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
