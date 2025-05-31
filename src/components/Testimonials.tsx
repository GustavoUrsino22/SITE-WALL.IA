import React, { useState, useEffect } from 'react';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  position: string;
  organization: string;
}

const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "A solução de monitoramento climático em tempo real da WALL.AI nos permitiu agir com antecedência e evacuar áreas de risco antes que o pior acontecesse. Salvamos centenas de vidas.",
      author: "Capitão Roberto Silva",
      position: "Coordenador de Emergências",
      organization: "Defesa Estadual"
    },
    {
      id: 2,
      quote: "Graças aos sistemas inteligentes de mitigação de desastres da WALL.AI, conseguimos proteger nossas operações industriais de enchentes frequentes, reduzindo prejuízos e garantindo a continuidade do negócio.",
      author: "Fernanda Oliveira",
      position: "Diretora de Sustentabilidade",
      organization: "Grupo VerdeTech"
    },
    {
      id: 3,
      quote: "Recebemos o alerta de fumaça da WALL.AI pouco antes do fogo atingir nossa comunidade. Foi o tempo exato para fugir com minha família. Somos eternamente gratos!",
      author: "Carlos Mendes",
      position: "Morador afetado por incêndio",
      organization: "Comunidade Vale do Sol"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Depoimentos de nossos clientes</h2>
          <div className="h-1 w-20 bg-accent mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-lg p-8 shadow-lg">
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      currentTestimonial === index ? 'bg-accent' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  ></button>
                ))}
              </div>
            </div>
            
            <div className="relative overflow-hidden h-[250px]">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`absolute w-full transition-all duration-500 ${
                    index === currentTestimonial
                      ? 'opacity-100 translate-x-0'
                      : index < currentTestimonial
                      ? 'opacity-0 -translate-x-full'
                      : 'opacity-0 translate-x-full'
                  }`}
                >
                  <div className="text-center">
                    <blockquote className="text-xl italic text-gray-700 mb-6">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="mt-4">
                      <p className="text-lg font-semibold text-primary">{testimonial.author}</p>
                      <p className="text-gray-600">
                        {testimonial.position}, {testimonial.organization}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;