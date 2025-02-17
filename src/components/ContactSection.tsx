import React from "react";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

interface ContactSectionProps {
  businessHours?: string[];
  address?: string;
  phone?: string;
  email?: string;
  onSubmit?: (data: any) => void;
}

const ContactSection = ({
  businessHours = [
    "Monday - Friday: 8:00 AM - 6:00 PM",
    "Saturday: 9:00 AM - 4:00 PM",
    "Sunday: Closed",
  ],
  address = "123 Farm Road, Countryside, ST 12345",
  phone = "(555) 123-4567",
  email = "contact@blenglenpoultry.com",
  onSubmit = (data) => console.log("Form submitted:", data),
}: ContactSectionProps) => {
  return (
    <section className="w-full py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Contact Us
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="p-6 bg-white">
            <CardContent>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  onSubmit(Object.fromEntries(formData));
                }}
              >
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        First Name
                      </label>
                      <Input name="firstName" placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Last Name
                      </label>
                      <Input name="lastName" placeholder="Doe" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Phone
                    </label>
                    <Input
                      name="phone"
                      type="tel"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      name="message"
                      placeholder="How can we help you?"
                      className="min-h-[150px]"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-orange-600 hover:bg-orange-700"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-6 bg-white">
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Our Location</h3>
                    <p className="text-gray-600">{address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Business Hours</h3>
                    <ul className="text-gray-600 space-y-1">
                      {businessHours.map((hours, index) => (
                        <li key={index}>{hours}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Phone</h3>
                    <p className="text-gray-600">{phone}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Email</h3>
                    <p className="text-gray-600">{email}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <div className="h-[300px] bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Map Integration Placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
