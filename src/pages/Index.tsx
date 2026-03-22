
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
    { src: "/temp/4.jpeg", alt: "Aerial view of University of Essex" },
    { src: "/temp/6.webp", alt: "University of Essex campus with students" },
    { src: "/temp/7.webp", alt: "University of Essex Modern Building" },
    { src: "/temp/1.jpeg", alt: "University of Essex Campus" },
    { src: "/temp/2.jpeg", alt: "University of Essex Building" },
    { src: "/temp/3.jpeg", alt: "University of Essex Entrance" },
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
