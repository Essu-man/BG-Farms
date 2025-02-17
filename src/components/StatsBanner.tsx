import React from "react";
import { motion } from "framer-motion";
import { Users2, Star, Truck, Award } from "lucide-react";

interface Stat {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const stats: Stat[] = [
  {
    icon: <Users2 className="w-6 h-6" />,
    value: "5000+",
    label: "Happy Customers",
  },
  {
    icon: <Star className="w-6 h-6" />,
    value: "4.9",
    label: "Customer Rating",
  },
  {
    icon: <Truck className="w-6 h-6" />,
    value: "24h",
    label: "Fast Delivery",
  },
  {
    icon: <Award className="w-6 h-6" />,
    value: "35+",
    label: "Years Experience",
  },
];

const StatsBanner = () => {
  return (
    <div className="w-full bg-gradient-to-r from-orange-600 to-orange-500 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center text-white"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-white/10 rounded-full">{stat.icon}</div>
              </div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                className="text-3xl font-bold mb-2"
              >
                {stat.value}
              </motion.div>
              <div className="text-sm opacity-80">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsBanner;
