
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-goldsmiths-beige">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="font-druk text-3xl md:text-4xl text-goldsmiths-text border-b-4 border-goldsmiths-blue pb-2 inline-block">
            About the Conference
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white shadow-lg border border-gray-200 rounded-lg p-6">
          <p className="font-publico text-lg text-goldsmiths-text mb-6 leading-relaxed text-justify">
            International Conference on Intelligent Computing, Information &amp; Innovative Data Technologies 
            (ICI3T 2026) aims to provide a premier international platform for researchers, academicians,
            industry professionals, and practitioners to present and exchange recent advances, research
            findings, and innovative ideas in the domains of intelligent systems, interconnected
            technologies, and advanced computing paradigms.
          </p>
          <p className="font-publico text-lg text-goldsmiths-text mb-6 leading-relaxed text-justify">
            The conference focuses on the convergence of Internet of Things (IoT), Artificial
            Intelligence, Data Science, Smart Computing, Communication Technologies, and Cyber-
            Physical Systems, addressing both theoretical foundations and real-world applications.
            ICI3T 2026 encourages interdisciplinary research and fosters collaboration between academia
            and industry to address emerging technological challenges.
          </p>
          <p className="font-publico text-lg text-goldsmiths-text leading-relaxed text-justify">
            ICI3T invites original research papers, case studies, and industrial experiences that address current trends, breakthroughs, and future directions in the interdisciplinary areas of networks, computing systems, and data analytics.
          </p>
          <p className="font-publico text-lg text-goldsmiths-text leading-relaxed text-justify">
            <strong>All the accepted papers of ICI3T 2026 will be published as a proceedings of ICI3T 2026  in Springer Lecture Notes in Networks & Systems (LNNS), indexed by Scopus, EI, WoS and other reputed Databases.</strong>
          </p>
          <Link to="https://cmt3.research.microsoft.com/ICIIIT2026" >
            <Button className="mt-4">Paper Submission Link</Button>
          </Link>
        </div>
        
      </div>
    </section>
  );
};

export default About;
