
import React from 'react';
import { Check } from 'lucide-react';

const Objectives: React.FC = () => {
  const objectivesList = [
    "To promote high-quality research in intelligent and interconnected technologies",
    "To bring together researchers and industry experts from across the globe",
    "To discuss emerging trends, challenges, and future directions",
    "To encourage innovative solutions for smart and sustainable systems"
  ];

  return (
    <section id="objectives" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="font-druk text-3xl md:text-4xl text-goldsmiths-text border-b-4 border-goldsmiths-blue pb-2 inline-block">
            Highlights
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto bg-goldsmiths-beige shadow-lg rounded-lg p-6 border border-gray-200">
          {objectivesList.map((objective, index) => (
            <div key={index} className="flex items-start mb-4 last:mb-0">
              <div className="flex-shrink-0 mt-1">
                <Check className="h-5 w-5 text-goldsmiths-blue" />
              </div>
              <p className="ml-4 font-publico text-lg text-goldsmiths-text text-justify">{objective}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Objectives;
