import React from 'react';
import { Droplets, Mountain, Wind, Flame } from 'lucide-react';

interface SolutionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="rounded-full bg-primary bg-opacity-10 w-16 h-16 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Solutions: React.FC = () => {
  const solutions = [
    {
      icon: <Droplets className="h-8 w-8 text-primary" />,
      title: "Enchentes",
      description: "Este módulo permite prever, monitorar e responder de forma inteligente aos riscos de enchentes e inundações urbanas."
    },
    {
      icon: <Flame className="h-8 w-8 text-primary" />,
      title: "Queimadas",
      description: "Este módulo permite prever, monitorar e responder rapidamente aos riscos de queimadas e incêndios florestais ou urbanos."
    },
    {
      icon: <Wind className="h-8 w-8 text-primary" />,
      title: "Tornados",
      description: "Este módulo permite prever, monitorar e responder de forma rápida e eficiente a eventos de vendavais, tempestades severas e tornados."
    },
    {
      icon: <Mountain className="h-8 w-8 text-primary" />,
      title: "Deslizamentos",
      description: "Este módulo é focado na prevenção, monitoramento e resposta a deslizamentos de terra, principalmente em áreas urbanas e encostas."
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Soluções para Eventos Extremos
          </h2>
          <div className="h-1 w-20 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Criamos tecnologias e estratégias inteligentes para antecipar, mitigar e enfrentar eventos extremos que afetam o Mundo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <SolutionCard 
              key={index}
              icon={solution.icon}
              title={solution.title}
              description={solution.description}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-md transition-all hover:shadow-lg">
            View All Solutions
          </button>
        </div>
      </div>
    </section>
  );
};

export default Solutions;