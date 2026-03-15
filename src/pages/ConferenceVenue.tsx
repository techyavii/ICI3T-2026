import React from 'react';
import Footer from '@/components/Footer';
import { Map, MapPin, Building } from 'lucide-react';

const ConferenceVenue = () => {
  const venueImages = [
    { src: "/lovable-uploads/lasi1.webp", alt: "University of Essex Campus" },
    { src: "/lovable-uploads/lasi2.jpg", alt: "University of Essex Building" },
    { src: "/lovable-uploads/lasi3.jpg", alt: "University of Essex Entrance" },
    { src: "/lovable-uploads/lasi4.webp", alt: "Aerial view of University of Essex" },
  ];

  const locationImages = [
    { src: "/lovable-uploads/romania1.webp", alt: "Colchester city view" },
    { src: "/lovable-uploads/romania2.jpeg", alt: "London cityscape near Essex" },
    { src: "/lovable-uploads/romania3.jpg", alt: "Albert Sloman Library at Essex" }
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
              <h2 className="text-3xl font-semibold mb-4 text-blue-600">"Gheorghe Asachi" Technical University of Iasi</h2>
              <div className="flex items-start gap-3 mb-3">
                <Building className="mt-1 flex-shrink-0" size={20} />
                <p>
                  "Gheorghe Asachi" Technical University of Iasi is Romania’s leading technical university with a rich heritage in engineering, computer science, and applied technologies. Founded in 1813, it is internationally recognized for research excellence, academic innovation, and strong industry collaboration.
                </p>
              </div>
              <div className="flex items-start gap-3 mb-3">
                <MapPin className="mt-1 flex-shrink-0" size={20} />
                <p>60 Dimitrie Mangeron Blvd, 700050 Iași, Romania</p>
              </div>
              <a 
                href="https://www.google.com/maps?q=Gheorghe+Asachi+Technical+University+Ia%C8%99i+Romania" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:underline mt-2"
              >
                <Map className="mr-1" size={16} />
                View on Google Maps
              </a>
            </div>
          </div>

          {/* Location section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-3xl font-semibold mb-4 text-blue-600">LOCATION</h2>
              <p className="text-justify">
                The University’s Colchester Campus is located in the scenic Wivenhoe Park — a historic estate surrounded by green spaces and lakes. The campus is divided into North, Central, and South areas, hosting accommodation, academic buildings, and vibrant student facilities such as libraries, sports centers, and social hubs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2713.166281385506!2d27.596815712767665!3d47.15459767103157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40cafb989a8fd58f%3A0x9555362d21a1311!2sTechnical%20University%20Gheorghe%20Asachi%20Iasi!5e0!3m2!1sen!2sin!4v1773592964646!5m2!1sen!2sin"
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
              "Gheorghe Asachi" Technical University of Iasi continues to be a hub of academic excellence in Romania and Eastern Europe. It is renowned for its multidisciplinary approach, strong research output, and strategic partnerships with industry and international institutions.
            </p>
            <p className="text-justify text-gray-600 text-sm">
              Students benefit from modern laboratories, interdisciplinary research centers, and a diverse academic environment. With a focus on innovation, sustainability, and global collaboration, the university prepares graduates to lead in technology and engineering fields worldwide.
            </p>
          </div>

          {/* Iasi & Romania section */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold mb-6 text-center text-blue-600">IAȘI & ROMANIA</h2>
            <p className="mb-6 text-justify">
              Iași is Romania’s historic cultural and academic center, with UNESCO heritage sites, museums, and a vibrant student community. The city offers visitors a rich combination of history, modern amenities, and easy transportation links to Bucharest and neighboring European cities. Participants can enjoy both academic engagement at the university and cultural exploration across the region.
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

