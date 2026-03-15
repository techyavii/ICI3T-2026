
import React from 'react';
import About from '@/components/About';
import ConferenceHighlights from '@/components/ConferenceHighlights';
import ConferenceTracks from '@/components/ConferenceTracks';
import ImportantDatesSection from '@/components/ImportantDatesSection';
import Footer from '@/components/Footer';
import ImageCarousel from '@/components/ImageCarousel';
import IndexingSection from '@/components/IndexingSection';
import AssociatedPartners from '@/components/AssociatedPartners';

const Index: React.FC = () => {
  const carouselImages = [
    { src: "/lovable-uploads/lasi1.webp", alt: "University of Essex Campus" },
    { src: "/lovable-uploads/lasi2.jpg", alt: "University of Essex Building" },
    { src: "/lovable-uploads/lasi3.jpg", alt: "University of Essex Entrance" },
    { src: "/lovable-uploads/lasi4.webp", alt: "Aerial view of University of Essex" },
    { src: "/lovable-uploads/lasi5.webp", alt: "University of Essex campus with students" },
    { src: "/lovable-uploads/lasi6.webp", alt: "University of Essex Modern Building" },
    { src: "/lovable-uploads/lasi7.webp", alt: "University of Essex Modern Building" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <ImageCarousel images={carouselImages} />
      <IndexingSection />
      <About />
      <ConferenceHighlights />
      <ConferenceTracks />
      <ImportantDatesSection />
      <AssociatedPartners/>
      <Footer />
    </div>
  );
};


export default Index;
