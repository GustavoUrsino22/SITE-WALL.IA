import React from 'react';

const teamMembers = [
  {
    name: 'Gustavo Henrique',
    role: 'Co-Founder & CFO',
    image: 'fotogu.png',
  },
  {
    name: 'Giovanna Pires',
    role: 'Co-Founder & CTO',
    image: 'fotogi.png',
  },
  {
    name: 'Ellen Freitas',
    role: 'Co-Founder & CEO',
    image: 'fotoelen2.png',
  },
];

const Team: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Nosso Time</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Conheça as pessoas por trás da inteligência e tecnologia que protege vidas e o planeta.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 justify-center">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg border-4 border-accent mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl font-semibold text-gray-800">{member.name}</h4>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

