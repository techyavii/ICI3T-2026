
import React from 'react';
import Footer from '@/components/Footer';

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Image with Overlay */}
      <div 
        className="w-full h-64 bg-goldsmiths-blue relative"
        style={{
          backgroundImage: "linear-gradient(rgba(141, 169, 214, 0.8), rgba(141, 169, 214, 0.8)), url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="container mx-auto h-full flex items-center justify-center px-4">
          <h1 className="font-druk text-3xl md:text-5xl text-white text-center">About Us</h1>
        </div>
      </div>
      
      {/* About the University Section */}
      <section className="py-16 bg-goldsmiths-beige">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="md:w-1/3 flex justify-center md:justify-start mb-6 md:mb-0">
              <img 
                src="/lovable-uploads/university-main.jpeg" 
                alt="University of Essex Main Building" 
                className="w-full h-64 object-cover rounded-lg shadow-lg border border-gray-200"
              />
            </div>
            
            <div className="md:w-2/3">
              <h2 className="font-druk text-2xl md:text-3xl text-goldsmiths-text mb-6 border-b-4 border-goldsmiths-blue pb-2 inline-block">
                Organising Institute
              </h2>
              
              <div className="bg-white shadow-lg border border-gray-200 rounded-lg p-6">
                <p className="font-publico text-lg text-goldsmiths-text mb-4 leading-relaxed">
              The International Conference on Intelligent, Interconnected &amp; Innovative Technologies (ICI3T 2026) is organised by "Gheorghe Asachi" Technical University of Iasi, Romania, a leading technical university with a strong tradition of research and education in engineering, information technology, and applied sciences.
            </p>
            <p className="font-publico text-lg text-goldsmiths-text mb-4 leading-relaxed">
              Established in 1813, "Gheorghe Asachi" Technical University of Iasi is one of the oldest technical universities in Eastern Europe. It is dedicated to international cooperation, advanced technological innovation, and building bridges between academic research and industry impact.
            </p>
            <p className="font-publico text-lg text-goldsmiths-text leading-relaxed">
              As organiser of ICI3T 2026, the university brings together global experts, delegates, and thought leaders to foster interdisciplinary dialogue and address the challenges of tomorrow in intelligent systems and interconnected technologies.
            </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
