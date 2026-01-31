import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Network, Cpu, Database, Shield, Rocket } from 'lucide-react';

const ConferenceTracks: React.FC = () => {
  const tracks = [
  {
    id: 1,
    title: "Internet of Things & Smart Systems",
    icon: Network,
    topics: [
      "IoT architectures and protocols",
      "Smart cities and smart infrastructure",
      "Industrial IoT and automation",
      "IoT applications in healthcare, agriculture, and energy",
      "IoT security and privacy"
    ]
  },
  {
    id: 2,
    title: "Intelligent Computing & Artificial Intelligence",
    icon: Cpu,
    topics: [
      "Machine learning and deep learning",
      "Explainable AI and ethical AI",
      "AI for IoT and edge intelligence",
      "Natural language processing and computer vision",
      "Intelligent decision support systems"
    ]
  },
  {
    id: 3,
    title: "Cloud, Edge & Distributed Computing",
    icon: Database,
    topics: [
      "Cloud and fog computing",
      "Edge intelligence and edge analytics",
      "Distributed systems and services",
      "Resource management and optimization",
      "Serverless and container-based computing"
    ]
  },
  {
    id: 4,
    title: "Data Science & Big Data Analytics",
    icon: Shield,
    topics: [
      "Big data architectures and frameworks",
      "Data mining and knowledge discovery",
      "Real-time data analytics",
      "Data security and privacy",
      "Visualization and data-driven intelligence"
    ]
  },
  {
    id: 5,
    title: "Communication & Networking Technologies",
    icon: Network,
    topics: [
      "5G/6G networks and beyond",
      "Wireless sensor networks",
      "Software-defined networking",
      "Network security and performance optimization",
      "Vehicular and mobile ad hoc networks"
    ]
  },
  {
    id: 6,
    title: "Cyber-Physical Systems & Emerging Technologies",
    icon: Rocket,
    topics: [
      "Digital twins",
      "Cyber-physical system design",
      "Blockchain and decentralized systems",
      "Quantum-inspired computing",
      "Sustainable and green technologies"
    ]
  }
];

  return (
    <section id="tracks" className="py-16 bg-goldsmiths-beige">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-druk text-3xl md:text-4xl text-goldsmiths-text border-b-4 border-goldsmiths-blue pb-2 inline-block">
            Conference Tracks
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {tracks.map((track) => {
            const IconComponent = track.icon;
            return (
              <Card key={track.id} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <IconComponent className="h-8 w-8 text-goldsmiths-blue" />
                    <CardTitle className="font-druk text-xl text-goldsmiths-text">
                      Track {track.id}
                    </CardTitle>
                  </div>
                  <CardDescription className="font-graphik text-base text-goldsmiths-text">
                    {track.title}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {track.topics.map((topic, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-goldsmiths-blue mr-2">•</span>
                        <span className="font-publico text-sm text-goldsmiths-text">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ConferenceTracks;

