import React, { useState } from 'react';

interface CaseStudy {
  id: number;
  title: string;
  location: string;
  image: string;
  challenge: string;
  solution: string;
  result: string;
}

const CaseStudies: React.FC = () => {
  const [activeCase, setActiveCase] = useState<number>(1);

  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      title: "Monitoramento de Deslizamentos em Áreas de Risco",
      location: "Complexo do Alemão, Rio de Janeiro",
      image: "\deslisamento3.png",
      challenge: "Chuvas intensas em regiões montanhosas urbanizadas causavam deslizamentos súbitos, ameaçando vidas e dificultando a evacuação segura.",
      solution: "Integramos imagens de satélite com sensores geotécnicos e sistemas de sirenes inteligentes, gerando alertas automáticos baseados em análise de inclinação e saturação do solo.",
      result: "Emissão de alertas com até 3 horas de antecedência, permitindo evacuação organizada das comunidades."
    }
,
    {
      id: 2,
      title: "Tenacidade Contra Enchentes",
      location: "São Paulo, São Paulo",
      image: "\satelite chuvas.png",
      challenge: "Chuvas intensas recorrentes causavam alagamentos em áreas urbanas críticas, afetando residências, comércios e infraestrutura pública.",
      solution: "Implementamos sensores e previsões climáticas com IA e um sistema de alerta em tempo real integrado.",
      result: "Alertas emitidos com até 2 horas de antecedência para evacuação e contenção."
    },
    {
      id: 3,
      title: "Resiliência Contra Ventos Extremos",
      location: "Oklahoma City, Oklahoma",
      image: "\satelite.png.jpg",
      challenge: "Rajadas intensas e tempestades de vento colocavam em risco a integridade de estruturas, redes elétricas e a segurança da população em regiões expostas.",
      solution: "Utilizamos imagens e dados de satélites em tempo real combinados com sensores locais e inteligência artificial para prever padrões de vento e acionar protocolos de emergência.",
      result: "Alertas com até 1 hora de antecedência para proteção de equipamentos e evacuação segura."
    },
    {
      id: 4,
      title: "Monitoramento de Incêndios com Drones",
      location: "Rondônia, Brasil",
      image: "/imagem_drone.png.jpeg",
      challenge: "Altas temperaturas e queimadas ilegais colocavam florestas e populações em risco.",
      solution: "Uso de drones movidos a energia solar com sensores de imagem para detectar focos de fumaça.",
      result: "Redução no tempo de resposta a incêndios e maior cobertura de monitoramento em áreas remotas."
    }
  ];

  return (
    <section id="case-studies" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Histórias de Sucesso</h2>
          <div className="h-1 w-20 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Descubra como nossas soluções climáticas fizeram a diferença ao redor do mundo.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Navegação entre os cases */}
          <div className="lg:w-1/3">
            <div className="bg-gray-50 rounded-lg p-4">
              {caseStudies.map((caseStudy) => (
                <div 
                  key={caseStudy.id}
                  className={`p-4 mb-3 rounded-md cursor-pointer transition-colors ${
                    activeCase === caseStudy.id 
                      ? 'bg-primary text-white' 
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setActiveCase(caseStudy.id)}
                >
                  <h3 className={`font-semibold ${activeCase === caseStudy.id ? 'text-white' : 'text-gray-800'}`}>
                    {caseStudy.title}
                  </h3>
                  <p className={`text-sm ${activeCase === caseStudy.id ? 'text-gray-100' : 'text-gray-500'}`}>
                    {caseStudy.location}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Detalhes do case selecionado */}
          {caseStudies.map((caseStudy) => (
            caseStudy.id === activeCase && (
              <div key={caseStudy.id} className="lg:w-2/3">
                <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={caseStudy.image}
                      alt={caseStudy.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-100"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{caseStudy.title}</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-primary font-semibold mb-1">Desafio</h4>
                        <p className="text-gray-600">{caseStudy.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-primary font-semibold mb-1">Nossa Solução</h4>
                        <p className="text-gray-600">{caseStudy.solution}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-primary font-semibold mb-1">Resultado</h4>
                        <p className="text-gray-600">{caseStudy.result}</p>
                      </div>
                    </div>
                    
                    <button className="mt-6 bg-accent hover:bg-accent-dark text-white font-semibold py-2 px-4 rounded-md transition-all hover:shadow-md">
                      Ver Estudo Completo
                    </button>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
