import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  inStock: boolean;
  category: string;
}

interface ProductGridProps {
  products?: Product[];
  onOrderClick?: (productId: number) => void;
}

const ProductGrid = ({
  products = [
    {
      id: 1,
      title: "Premium Whole Chicken",
      price: 12.99,
      image:
        "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?w=500&auto=format&fit=crop&q=60",
      description:
        "Farm-fresh, free-range whole chicken, perfect for roasting.",
      inStock: true,
      category: "Whole Chicken",
    },
    {
      id: 2,
      title: "Chicken Breast",
      price: 8.99,
      image:
        "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=500&auto=format&fit=crop&q=60",
      description: "Lean, boneless chicken breast from free-range chickens.",
      inStock: true,
      category: "Cuts",
    },
    {
      id: 3,
      title: "Chicken Thighs",
      price: 7.99,
      image:
        "https://images.unsplash.com/photo-1620574387735-3624d75b2dbc?w=500&auto=format&fit=crop&q=60",
      description: "Juicy, bone-in chicken thighs, perfect for grilling.",
      inStock: true,
      category: "Cuts",
    },
    {
      id: 4,
      title: "Organic Eggs",
      price: 5.99,
      image:
        "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=500&auto=format&fit=crop&q=60",
      description: "Farm-fresh organic eggs from our free-range chickens.",
      inStock: true,
      category: "Eggs",
    },
  ],
  onOrderClick = (productId: number) =>
    console.log(`Order clicked for product ${productId}`),
}: ProductGridProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" ||
      product.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  const categories = [
    "all",
    ...new Set(products.map((product) => product.category.toLowerCase())),
  ];

  return (
    <div className="w-full max-w-[1200px] mx-auto p-6 bg-gray-50">
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <Input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="md:w-64"
        />
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="md:w-48">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500">No products found</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              description={product.description}
              inStock={product.inStock}
              onOrderClick={() => onOrderClick(product.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
