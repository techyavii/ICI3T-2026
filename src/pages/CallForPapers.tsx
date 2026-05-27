import React from 'react';
import Footer from '@/components/Footer';

const CallForPapers: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 py-12 flex-grow">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h1 className="font-druk text-3xl md:text-4xl text-[#001324] mb-6">Call for Papers — ICI3T 2026</h1>

          <div className="mb-8">
            <p className="font-publico text-lg mb-4">
              International Conference on Intelligent Computing, Information &amp; Innovative Data Technologies (ICI3T 2026) aims to bring together leading academicians, researchers, innovators, and industry experts to explore cutting-edge advancements in data-driven computing, intelligent systems, and technology innovation for the future.
            </p>
            <p className="font-publico text-lg mb-4">
              In today’s rapidly evolving digital landscape, the convergence of Artificial Intelligence (AI), Internet of Things (IoT), Smart Grids, Green Energy, Blockchain, Cloud Computing, and Data Analytics plays a transformative role in shaping sustainable societies. This conference serves as a premier platform to exchange ideas, present novel research, and discuss innovative solutions that address global challenges such as climate change, energy efficiency, smart cities, sustainable manufacturing, and digital governance.
            </p>
            <p className="font-publico text-lg">
              ICI3T 2026 will feature keynote lectures, technical paper presentations, panel discussions, industry sessions, and workshops designed to foster collaboration between academia and industry. We invite original and unpublished research contributions in (but not limited to) the thematic areas below.
            </p>
          </div>

          <div className="mb-6">
            <div className="flex flex-col gap-6">
              <div>
                <h4 className="font-druk text-xl">Track 1: Intelligent Computing &amp; Artificial Intelligence</h4>
                <ul className="list-disc pl-6 space-y-1 font-graphik mt-2">
                  <li>Artificial Intelligence and Machine Learning</li>
                  <li>Deep Learning and Neural Networks</li>
                  <li>Explainable AI</li>
                  <li>Natural Language Processing</li>
                  <li>Computer Vision and Image Processing</li>
                  <li>Reinforcement Learning</li>
                  <li>Cognitive Computing</li>
                  <li>Intelligent Decision Support Systems</li>
                  <li>Robotics and Autonomous Systems</li>
                  <li>AI for Healthcare, Education, and Smart Cities</li>
                </ul>
              </div>

              <div>
                <h4 className="font-druk text-xl">Track 2: Data Science &amp; Innovative Data Technologies</h4>
                <ul className="list-disc pl-6 space-y-1 font-graphik mt-2">
                  <li>Big Data Analytics</li>
                  <li>Data Mining and Knowledge Discovery</li>
                  <li>Predictive Analytics</li>
                  <li>Business Intelligence</li>
                  <li>Data Visualization</li>
                  <li>Cloud Data Platforms</li>
                  <li>Data Warehousing</li>
                  <li>Real-Time Data Processing</li>
                  <li>Data Governance and Ethics</li>
                  <li>Smart Data Management</li>
                  <li>Industrial Data Analytics</li>
                  <li>Social Network Analytics</li>
                </ul>
              </div>

              <div>
                <h4 className="font-druk text-xl">Track 3: Information &amp; Communication Technologies</h4>
                <ul className="list-disc pl-6 space-y-1 font-graphik mt-2">
                  <li>Wireless Communication</li>
                  <li>5G/6G Networks</li>
                  <li>Internet of Things (IoT)</li>
                  <li>Edge and Fog Computing</li>
                  <li>Mobile Computing</li>
                  <li>Cyber-Physical Systems</li>
                  <li>Human-Computer Interaction</li>
                  <li>Multimedia Technologies</li>
                  <li>Smart Communication Systems</li>
                  <li>Software Engineering and Applications</li>
                </ul>
              </div>

              <div>
                <h4 className="font-druk text-xl">Track 4: Cybersecurity &amp; Privacy</h4>
                <ul className="list-disc pl-6 space-y-1 font-graphik mt-2">
                  <li>Information Security</li>
                  <li>Network Security</li>
                  <li>Blockchain Technologies</li>
                  <li>Digital Forensics</li>
                  <li>Privacy-Preserving Technologies</li>
                  <li>Cryptography and Authentication</li>
                  <li>Cyber Threat Intelligence</li>
                  <li>Secure Cloud Computing</li>
                </ul>
              </div>

              <div>
                <h4 className="font-druk text-xl">Track 5: Emerging and Interdisciplinary Technologies</h4>
                <ul className="list-disc pl-6 space-y-1 font-graphik mt-2">
                  <li>Quantum Computing</li>
                  <li>Green Computing</li>
                  <li>Industry 5.0</li>
                  <li>Smart Manufacturing</li>
                  <li>Digital Twin Technologies</li>
                  <li>FinTech and Smart Banking</li>
                  <li>Intelligent Transportation Systems</li>
                  <li>AR/VR Applications</li>
                  <li>Sustainable Computing Technologies</li>
                </ul>
              </div>
            </div>
          </div>

          {/* <div className="mt-8">
            <h3 className="font-druk text-xl text-[#001324] mb-4">Important Dates</h3>
            <ul className="list-disc pl-6 space-y-2 font-graphik">
              <li>Paper Submission Deadline: <strong>30th December 2025</strong></li>
              <li>Acceptance Notification Due: <strong>30th January 2026</strong></li>
              <li>Registration Due: <strong>30th December 2025</strong></li>
              <li>Camera Ready Submission: <strong>30th January 2026</strong></li>
              <li>Conference Dates: <strong>22nd - 23rd July 2026</strong></li>
            </ul>
          </div> */}

          <div className="mt-10">
            <h3 className="font-druk text-xl text-[#001324] mb-4">Submission Guidelines</h3>
            <ul className="list-disc pl-6 space-y-2 font-graphik">
              <li>Submissions must be original and unpublished.
              Authors should follow the conference formatting instructions (details on the website).</li>
              <li>All submissions will undergo peer review by the Technical Program Committee.</li>
              <li>Accepted papers will be included in the conference proceedings; selected high-quality papers may be invited for journal special issues.</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CallForPapers;
