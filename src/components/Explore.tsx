import React from 'react';

const Explore: React.FC = () => {
  return (
    <section id="explore" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6 text-center">
        
        {/* Texto principal */}
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Explore as Soluções</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Descubra nossas iniciativas tecnológicas para prevenir eventos climáticos extremos com dados, IA e sensores.
          Nosso aplicativo oferece funcionalidades como alertas em tempo real, mapas de risco e apoio a comunidades.
        </p>

        {/* Mockups do app */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center items-start mb-20">
          {['mockup1.png', 'mockup2.png', 'mockup3.png', 'mockup4.png'].map((file, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-2 w-full h-[500px] flex items-center justify-center"
            >
              <img
                src={`/${file}`}
                alt={`Mockup ${index + 1}`}
                className="h-full object-contain"
              />
            </div>
          ))}
        </div>

        {/* Separador entre mockups e dashboards */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Painéis Interativos</h3>
          <p className="text-gray-600 max-w-xl mx-auto">
            Nossos dashboards mostram dados em tempo real, com análises preditivas, mapas de calor e indicadores de risco por região.
          </p>
        </div>

        {/* Dashboards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center items-start">
          {['dash1.png', 'dash2.png', 'dash3.png', 'dash4.png'].map((file, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-2 w-full h-[300px] flex items-center justify-center"
            >
              <img
                src={`/${file}`}
                alt={`Dashboard ${index + 1}`}
                className="h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Explore;
