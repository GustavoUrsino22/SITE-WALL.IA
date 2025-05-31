import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-primary opacity-70"></div>
        <img  
            src="/Cidade.png.jpg" 
            alt="Cidade Gumball" 
            className="w-full h-full object-cover"
          />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-24 md:pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              <span className="block">World Analytics</span> 
              <span className="block mt-2">for Long Life</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-lg">
              Soluções inteligentes e análises globais para prever, mitigar e reduzir os impactos de eventos extremos da natureza..
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-accent hover:bg-accent-dark text-white font-semibold py-3 px-6 rounded-md transition-all transform hover:scale-105 flex items-center justify-center">
                Explore Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="bg-transparent border-2 border-white text-white font-semibold py-3 px-6 rounded-md hover:bg-white hover:text-primary transition-colors flex items-center justify-center">
                Contact Us
              </button>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg border border-white border-opacity-20 transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <h3 className="text-white text-xl font-semibold mb-3">Global Impact</h3>
              <div className="space-y-4">
                {[
                  { label: 'Data Points Analyzed', value: '1B+' },
                  { label: 'AI Models Deployed', value: '50+' },
                  { label: 'Countries Served', value: '15+' }
                ].map((stat, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-200">{stat.label}</span>
                    <span className="text-accent font-bold text-2xl">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;