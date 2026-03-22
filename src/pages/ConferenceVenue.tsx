import React from 'react';
import Footer from '@/components/Footer';
import { Map, MapPin, Building } from 'lucide-react';

const ConferenceVenue = () => {
  const venueImages = [
    { src: "/temp/4.jpeg", alt: "School of Open Learning Campus" },
    { src: "/temp/6.webp", alt: "University of Delhi Building" },
    { src: "/temp/7.webp", alt: "University of Delhi Entrance" },
    { src: "/temp/2.jpeg", alt: "Aerial view of University of Delhi" },
  ];

  const locationImages = [
    { src: "/temp/d1.jpg", alt: "Delhi city view" },
    { src: "/temp/d2.jpg", alt: "University of Delhi campus" },
    { src: "/temp/d3.webp", alt: "Delhi landmarks" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center text-blue-600">ABOUT US</h1>
          
          {/* Main venue section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="grid grid-cols-2 gap-4">
              {venueImages.map((image, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                  <img 
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-center">
              <h2 className="text-3xl font-semibold mb-4 text-blue-600">School of Open Learning, University of Delhi</h2>
              <div className="flex items-start gap-3 mb-3">
                <Building className="mt-1 flex-shrink-0" size={20} />
                <p>
                  School of Open Learning, University of Delhi is a premier institution offering open and distance learning programs. It provides flexible education opportunities to a diverse student community, focusing on academic excellence and innovation in various disciplines.
                </p>
              </div>
              <div className="flex items-start gap-3 mb-3">
                <MapPin className="mt-1 flex-shrink-0" size={20} />
                <p>Seminar Room, School of Open Learning, 5 Cavalry Lines, University of Delhi, Delhi-110007</p>
              </div>
              <a 
                href="https://share.google/DJL0Ewj7sIg86WslW" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:underline mt-2"
              >
                <Map className="mr-1" size={16} />
                View Location
              </a>
            </div>
          </div>

          {/* Location section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-3xl font-semibold mb-4 text-blue-600">LOCATION</h2>
              <p className="text-justify">
                The University of Delhi is India's premier university, located in the heart of New Delhi. The School of Open Learning is situated in the historic Cavalry Lines area, providing a conducive environment for academic and research activities. The campus offers modern facilities and easy access to the city's cultural and academic resources.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.123456789012!2d77.206615!3d28.613939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2daa9eb4d0b%3A0x717971125923e5d!2sUniversity%20of%20Delhi!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin"
                width="100%" 
                height="300" 
                style={{border: 0}} 
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              />
            </div>
          </div>

          {/* About section */}
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-3xl font-semibold mb-6 text-center text-blue-600">ACADEMIC EXCELLENCE</h2>
            <p className="text-justify mb-6">
              School of Open Learning, University of Delhi continues to be a hub of academic excellence in India. It is renowned for its commitment to accessible education, strong research output, and partnerships with academic and industry institutions.
            </p>
            <p className="text-justify text-gray-600 text-sm">
              Students and researchers benefit from modern facilities, interdisciplinary programs, and a diverse academic environment. With a focus on innovation, inclusivity, and global collaboration, the institution prepares learners to lead in various fields worldwide.
            </p>
          </div>

          {/* Iasi & Romania section */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold mb-6 text-center text-blue-600">DELHI & INDIA</h2>
            <p className="mb-6 text-justify">
              Delhi is India's capital city, a blend of ancient history and modern dynamism. As the seat of government and education, it hosts numerous prestigious institutions including the University of Delhi. The city offers participants a rich combination of cultural heritage, academic excellence, and vibrant urban life. Visitors can enjoy both the conference proceedings at the School of Open Learning and explore Delhi's historical monuments, museums, and diverse culinary scene.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {locationImages.map((image, index) => (
                <div key={index} className="bg-black p-2 rounded-lg">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-48 object-cover rounded"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ConferenceVenue;

