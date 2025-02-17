import React, { useState } from "react";
import ProductCard from "./ProductCard";
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
      title: "Premium Organic Eggs",
      price: 6.99,
      image:
        "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=500&auto=format&fit=crop&q=60",
      description:
        "Farm-fresh organic eggs from our free-range hens. Rich in nutrients and flavor.",
      inStock: true,
      category: "Organic",
    },
    {
      id: 2,
      title: "Large Brown Eggs",
      price: 5.99,
      image:
        "https://images.unsplash.com/photo-1569288052389-dac9b0ac9eeb?w=500&auto=format&fit=crop&q=60",
      description:
        "Fresh, large brown eggs from pasture-raised hens. Perfect for everyday use.",
      inStock: true,
      category: "Standard",
    },
    {
      id: 3,
      title: "Duck Eggs",
      price: 8.99,
      image:
        "https://images.unsplash.com/photo-1598965675045-45c5e72c7d05?w=500&auto=format&fit=crop&q=60",
      description:
        "Rich and creamy duck eggs, perfect for baking and gourmet dishes.",
      inStock: true,
      category: "Specialty",
    },
    {
      id: 4,
      title: "Quail Eggs",
      price: 7.99,
      image:
        "https://images.unsplash.com/photo-1551887373-3c5bd224f0e3?w=500&auto=format&fit=crop&q=60",
      description:
        "Small, delicate quail eggs. Ideal for appetizers and garnishes.",
      inStock: true,
      category: "Specialty",
    },
    {
      id: 5,
      title: "Medium Eggs Value Pack",
      price: 4.99,
      image:
        "https://images.unsplash.com/photo-1506976785307-8732e854ad03?w=500&auto=format&fit=crop&q=60",
      description:
        "Great value pack of medium-sized eggs. Perfect for families.",
      inStock: true,
      category: "Standard",
    },
    {
      id: 6,
      title: "Jumbo Organic Eggs",
      price: 7.99,
      image:
        "https://images.unsplash.com/photo-1592005285852-4292e211c6e9?w=500&auto=format&fit=crop&q=60",
      description:
        "Extra-large organic eggs from our best-fed hens. A breakfast favorite!",
      inStock: true,
      category: "Organic",
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
          placeholder="Search eggs..."
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
