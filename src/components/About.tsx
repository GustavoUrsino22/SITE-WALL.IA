import React from 'react';
import { Award, Users, Globe, Leaf } from 'lucide-react';

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center p-6">
      <div className="rounded-full bg-primary bg-opacity-10 w-16 h-16 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const About: React.FC = () => {
  const values = [
    {
      icon: <Leaf className="h-7 w-7 text-primary" />,
      title: "Inovação",
      description: "Utilizamos IA de ponta e análises avançadas para criar soluções sustentáveis."
    },
    {
      icon: <Award className="h-7 w-7 text-primary" />,
      title: "Excelência",
      description: "Entregamos soluções analíticas de classe mundial com impacto mensurável."
    },
    {
      icon: <Users className="h-7 w-7 text-primary" />,
      title: "Foco Humano",
      description: "Nossas soluções priorizam melhorar e prolongar a vida humana."
    },
    {
      icon: <Globe className="h-7 w-7 text-primary" />,
      title: "Impacto Global",
      description: "Analisamos dados do mundo inteiro para criar soluções por um futuro melhor."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About WALL.AI</h2>
            <div className="h-1 w-20 bg-accent mb-6"></div>
            
            <p className="text-lg text-gray-600 mb-6">
              Somos uma empresa apaixonada por inovação, sustentabilidade e proteção da vida.
            </p>
            
            <p className="text-lg text-gray-600 mb-6">
              Nascemos da urgência de enfrentar os impactos crescentes das mudanças climáticas nas cidades, transformando dados complexos em soluções práticas e inteligentes.
              Nosso propósito é apoiar cidades, governos e instituições na construção de ambientes urbanos mais seguros, eficientes e sustentáveis.
            </p>
            
            <p className="text-lg text-gray-600 mb-8">
               Desenvolvemos protótipos e soluções que permitem prever, monitorar e responder a eventos como enchentes, deslizamentos, queimadas, vendavais e desmatamento, com base em dados em tempo real e modelos preditivos avançados.
                Nosso diferencial está na união entre ciência de dados, inteligência artificial e automação, aplicada de forma ética, transparente e colaborativa. Atuamos lado a lado com gestores públicos, órgãos de emergência e comunidades, oferecendo ferramentas que fortalecem a capacidade de resposta.
                Mais do que uma solução tecnológica, somos uma empresa que constrói o futuro.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { label: "Data Points Analyzed", value: "1B+" },
                { label: "AI Models Deployed", value: "50+" },
                { label: "Global Partners", value: "100+" },
                { label: "Years of Innovation", value: "5+" }
              ].map((stat, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="text-primary font-bold text-2xl">{stat.value}</p>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="\public\Logo2.png" 
                alt="Our team" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute top-1/2 right-0 transform translate-x-1/4 -translate-y-1/2 w-32 h-32 md:w-48 md:h-48 bg-accent rounded-full z-0 opacity-30 blur-2xl"></div>
            <div className="absolute bottom-1/3 left-0 transform -translate-x-1/4 w-32 h-32 md:w-48 md:h-48 bg-primary rounded-full z-0 opacity-30 blur-2xl"></div>
          </div>
        </div>

        <div className="mt-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Nossos Valores</h2>
            <div className="h-1 w-16 bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              "Os princípios que orientam nosso trabalho e definem nossa abordagem."
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <ValueCard 
                key={index}
                icon={value.icon}
                title={value.title}
                description={value.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;