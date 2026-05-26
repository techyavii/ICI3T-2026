import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Network, Cpu, Database, Shield, Rocket } from 'lucide-react';

const ConferenceTracks: React.FC = () => {
  const tracks = [
  {
    id: 1,
    title: "Intelligent Computing & Artificial Intelligence",
    icon: Cpu,
    topics: [
      "Artificial Intelligence and Machine Learning",
      "Deep Learning and Neural Networks",
      "Explainable AI",
      "Natural Language Processing",
      "Computer Vision and Image Processing",
      "Reinforcement Learning",
      "Cognitive Computing",
      "Intelligent Decision Support Systems",
      "Robotics and Autonomous Systems",
      "AI for Healthcare, Education, and Smart Cities"
    ]
  },
  {
    id: 2,
    title: "Data Science & Innovative Data Technologies",
    icon: Database,
    topics: [
      "Big Data Analytics",
      "Data Mining and Knowledge Discovery",
      "Predictive Analytics",
      "Business Intelligence",
      "Data Visualization",
      "Cloud Data Platforms",
      "Data Warehousing",
      "Real-Time Data Processing",
      "Data Governance and Ethics",
      "Smart Data Management",
      "Industrial Data Analytics",
      "Social Network Analytics"
    ]
  },
  {
    id: 3,
    title: "Information & Communication Technologies",
    icon: Network,
    topics: [
      "Wireless Communication",
      "5G/6G Networks",
      "Internet of Things (IoT)",
      "Edge and Fog Computing",
      "Mobile Computing",
      "Cyber-Physical Systems",
      "Human-Computer Interaction",
      "Multimedia Technologies",
      "Smart Communication Systems",
      "Software Engineering and Applications"
    ]
  },
  {
    id: 4,
    title: "Cybersecurity & Privacy",
    icon: Shield,
    topics: [
      "Information Security",
      "Network Security",
      "Blockchain Technologies",
      "Digital Forensics",
      "Privacy-Preserving Technologies",
      "Cryptography and Authentication",
      "Cyber Threat Intelligence",
      "Secure Cloud Computing"
    ]
  },
  {
    id: 5,
    title: "Emerging and Interdisciplinary Technologies",
    icon: Rocket,
    topics: [
      "Quantum Computing",
      "Green Computing",
      "Industry 5.0",
      "Smart Manufacturing",
      "Digital Twin Technologies",
      "FinTech and Smart Banking",
      "Intelligent Transportation Systems",
      "AR/VR Applications",
      "Sustainable Computing Technologies"
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

