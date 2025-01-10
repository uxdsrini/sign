import React from 'react';
import * as Icons from 'lucide-react';
import ServicesNav from '../views/ServicesNav.js';
import Footer from '../views/Footer.js';
import Header from '../views/Header.js';
      
                  
function ServicePage() {
  const services = [
    {
      icon: <Icons.Palette className="w-8 h-8 text-orange-500" />,
      title: "Band Identity",
      description: "Complete branding solutions including logo design, color palettes, typography, and brand guidelines that capture your unique identity.",
      features: ["Logo Design", "Brand Guidelines", "Color Schemes", "Typography Selection"]
    },
    {
      icon: <Icons.Globe className="w-8 h-8 text-orange-500" />,
      title: "Web Design",
      description: "Stunning website designs that combine aesthetics with functionality, optimized for all devices and user experiences.",
      features: ["UI/UX Design", "Responsive Layouts", "Interactive Prototypes", "Design Systems"]
    },
    {
      icon: <Icons.Users className="w-8 h-8 text-orange-500" />,
      title: "Social Media",
      description: "Engaging social media designs that boost your online presence and maintain brand consistency across all platforms.",
      features: ["Post Templates", "Story Designs", "Profile Graphics", "Ad Creatives"]
    },
    {
      icon: <Icons.Package className="w-8 h-8 text-orange-500" />,
      title: "Packaging Design",
      description: "Eye-catching packaging solutions that make your products stand out on shelves and create memorable unboxing experiences.",
      features: ["Product Packaging", "Label Design", "Box Design", "Mockups"]
    },
    {
      icon: <Icons.PenTool className="w-8 h-8 text-orange-500" />,
      title: "Print Design",
      description: "Professional print materials that leave a lasting impression, from business cards to large-format designs.",
      features: ["Business Cards", "Brochures", "Posters", "Marketing Materials"]
    },
    {
      icon: <Icons.BookOpen className="w-8 h-8 text-orange-500" />,
      title: "Editorial Design",
      description: "Beautiful layouts for magazines, books, and digital publications that enhance readability and visual appeal.",
      features: ["Magazine Layouts", "Book Covers", "Annual Reports", "Digital Publications"]
    }
  ];

  return (
    
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Previous Hero Section remains unchanged */}
      <ServicesNav />
      <Header />
      {/* Expanded Services Section */}
      <section className="px-4 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-black">Our Design Services</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Comprehensive design solutions tailored to elevate your brand across all platforms and touchpoints.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group">
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 ">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center text-sm text-gray-500">
                      <Icons.CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="mt-6 text-orange-600 font-medium inline-flex items-center group-hover:text-orange-700 transform group-hover:scale-110 transition-transform duration-300">
                  Learn More <Icons.ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
      {/* Rest of the sections remain unchanged */}
    </div>
    
  );
}

export default ServicePage;