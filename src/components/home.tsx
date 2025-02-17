import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import ProductGrid from "./ProductGrid";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";

interface HomeProps {
  onProductOrder?: (productId: number) => void;
  onContactSubmit?: (data: any) => void;
}

const Home = ({
  onProductOrder = (productId) =>
    console.log(`Order placed for product ${productId}`),
  onContactSubmit = (data) => console.log("Contact form submitted:", data),
}: HomeProps) => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Main content starts below header */}
      <main className="pt-20">
        {" "}
        {/* pt-20 to account for fixed header height */}
        <HeroSection
          onCtaClick={() => {
            const productsSection = document.getElementById("products");
            productsSection?.scrollIntoView({ behavior: "smooth" });
          }}
        />
        <section id="products" className="py-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Our Products
          </h2>
          <ProductGrid onOrderClick={onProductOrder} />
        </section>
        <section id="about">
          <AboutSection />
        </section>
        <section id="contact">
          <ContactSection onSubmit={onContactSubmit} />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-stone-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">BlengLen Poultry Farm</h3>
              <p className="text-stone-300">
                Providing quality poultry products since 1985
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#products"
                    className="text-stone-300 hover:text-white"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-stone-300 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-stone-300 hover:text-white"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
              <p className="text-stone-300">
                Follow us on social media for updates and special offers
              </p>
              <div className="flex space-x-4 mt-4">
                {/* Social media links would go here */}
              </div>
            </div>
          </div>
          <div className="border-t border-stone-700 mt-8 pt-8 text-center text-stone-300">
            <p>
              &copy; {new Date().getFullYear()} BlengLen Poultry Farm. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
