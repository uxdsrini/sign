export default function ServicesSection() {
    const services = [
      { name: 'Landing pages', color: 'bg-[#FF9ED8]' },
      { name: 'Mobile apps', color: 'bg-[#4E9BFF]' },
      { name: 'Logos', color: 'bg-[#2DDAB4]' },
      { name: 'Branding', color: 'bg-[#FFD748]' },
      { name: 'Slide Decks', color: 'bg-[#FF5C35]' },
      { name: 'Webflow', color: 'bg-[#A055FF]' },
      { name: 'AI Web Development', color: 'bg-black' },
    ]
  
    const moreServices = [
      { name: 'Social media', color: 'bg-[#FF5C35]' },
      { name: 'Icons', color: 'bg-[#FFD748]' },
      { name: 'Brand Guides', color: 'bg-[#4E9BFF]' },
      { name: 'Blog Graphics', color: 'bg-[#2DDAB4]' },
      { name: '+ more', color: 'bg-black' },
    ]
  
    return (
      <section id='services' className="max-w-7xl mx-2 md:mx-auto px-4 py-20 text-gray-900 bg-pattern rounded-3xl">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-16">
          Apps, websites,<br />
          logos & more
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4">
          {services.map((service) => (
            <div
              key={service.name}
              className={`${service.color} text-white px-8 py-4 rounded-full text-lg md:text-xl font-light`}
            >
              {service.name}
            </div>
          ))}
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mt-4 ">
          {moreServices.map((service) => (
            <div
              key={service.name}
              className={`${service.color}  text-white px-8 py-4 rounded-full text-lg md:text-xl font-light`}
            >
              {service.name}
            </div>
          ))}
        </div>
      </section>
    )
  }
  
  