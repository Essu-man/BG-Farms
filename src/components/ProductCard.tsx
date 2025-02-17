import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

interface ProductCardProps {
  title?: string;
  price?: number;
  image?: string;
  description?: string;
  inStock?: boolean;
  onOrderClick?: () => void;
}

const ProductCard = ({
  title = "Farm Fresh Chicken",
  price = 12.99,
  image = "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  description = "Free-range, organic chicken raised with care on our family farm.",
  inStock = true,
  onOrderClick = () => console.log("Order clicked"),
}: ProductCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="w-[280px] h-[380px] bg-white overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <CardHeader className="p-0">
          <div className="relative h-48 w-full">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
            {inStock ? (
              <Badge className="absolute top-2 right-2 bg-green-500">
                In Stock
              </Badge>
            ) : (
              <Badge className="absolute top-2 right-2 bg-red-500">
                Out of Stock
              </Badge>
            )}
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-sm text-gray-600 line-clamp-3">{description}</p>
          <p className="text-xl font-bold text-green-700 mt-2">
            ${price.toFixed(2)}
          </p>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <Button
            onClick={onOrderClick}
            className="w-full bg-orange-600 hover:bg-orange-700"
            disabled={!inStock}
          >
            Order Now
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProductCard;
