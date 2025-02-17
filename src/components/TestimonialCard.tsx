import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

const TestimonialCard = ({
  name,
  role,
  content,
  rating,
  image,
}: TestimonialCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="bg-white overflow-hidden">
        <CardContent className="p-6">
          <div className="flex items-center space-x-4 mb-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">{name}</h4>
              <p className="text-sm text-gray-500">{role}</p>
            </div>
          </div>
          <div className="flex mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
                fill={i < rating ? "currentColor" : "none"}
              />
            ))}
          </div>
          <p className="text-gray-600 italic">"{content}"</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TestimonialCard;
