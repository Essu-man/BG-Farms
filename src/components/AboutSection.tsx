import React from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

interface AboutSectionProps {
  farmStory?: string;
  sustainabilityPractices?: string[];
  farmImage?: string;
  sustainabilityImage?: string;
}

const AboutSection = ({
  farmStory = "Our family farm has been producing the highest quality eggs since 1985. We believe happy hens lay the best eggs, which is why our chickens roam freely on green pastures, enjoying natural sunlight and fresh air. Our commitment to ethical farming and sustainable practices ensures you get the freshest, most nutritious eggs possible.",
  sustainabilityPractices = [
    "Free-range hen housing",
    "Organic feed for our hens",
    "Daily fresh egg collection",
    "Natural pest control",
    "Zero-waste egg packaging",
  ],
  farmImage = "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=800&auto=format&fit=crop&q=60",
  sustainabilityImage = "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&auto=format&fit=crop&q=60",
}: AboutSectionProps) => {
  return (
    <section className="w-full py-16 px-4 md:px-8 bg-stone-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-stone-800">
          Our Story
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[400px] rounded-lg overflow-hidden"
          >
            <img
              src={farmImage}
              alt="Our Farm"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <Card className="bg-white">
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-4 text-stone-800">
                Farm Heritage
              </h3>
              <p className="text-stone-600 leading-relaxed mb-6">{farmStory}</p>
              <Button
                className="bg-orange-600 hover:bg-orange-700"
                onClick={() => console.log("Learn more clicked")}
              >
                Learn More
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-white order-2 md:order-1">
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-4 text-stone-800">
                Sustainability Practices
              </h3>
              <ul className="space-y-3 mb-6">
                {sustainabilityPractices.map((practice, index) => (
                  <li key={index} className="flex items-center text-stone-600">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                    {practice}
                  </li>
                ))}
              </ul>
              <Button
                variant="outline"
                className="border-orange-600 text-orange-600 hover:bg-orange-50"
                onClick={() =>
                  console.log("Learn more about sustainability clicked")
                }
              >
                Learn More About Our Practices
              </Button>
            </CardContent>
          </Card>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[400px] rounded-lg overflow-hidden order-1 md:order-2"
          >
            <img
              src={sustainabilityImage}
              alt="Sustainable Practices"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
