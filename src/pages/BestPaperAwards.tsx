import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, FileText, Users } from 'lucide-react';
import Footer from '@/components/Footer';

interface Paper {
  title: string;
  authors: string;
}

const BestPaperAwards: React.FC = () => {
  const papers: Paper[] = [
    { title: 'AI-Assisted Health Monitoring of Industrial Embedded Devices for Enterprise Asset Management', authors: 'Aastha Chaudhary' },
    { title: 'Multimodal data intelligence framework using vision language modals for cross domain analytics, business intelligence and smart decision making', authors: 'Dr. Rahul Azmeera' },
    { title: 'Large Language Model–Driven Predictive Data Analytics Framework for Enterprise Intelligence, Strategic Business Forecasting and Explainable Decision Support', authors: 'Sridhar Gajavelli' },
    { title: 'Agentic AI Framework for Autonomous Financial Intelligence, Smart FinTech Risk Assessment, Fraud Analytics and Explainable Decision Support', authors: 'Rajitha Gentyala' },
    { title: 'Decision Analytics for Enterprise AI-Agent Adoption: A Readiness, Risk, and Autonomy Framework', authors: 'Ankur Khare, Sachin Suryawanshi' },
    { title: 'Consistency and Availability Trade-Offs in Distributed NoSQL Database Systems', authors: 'Amit Mishra' },
    { title: 'DevOps-Based AI Deployment for Embedded Automation Systems in Smart Factories', authors: 'Veera Venkateswara Rao Yerajerla, Manish Kumar Atnere, Vivek Shukla' },
    { title: 'AI-Driven Smart Data Management Framework for Digital Government and e-Governance Applications', authors: 'Gagan Vyas' },
    { title: 'A Federated Machine Learning Framework for Privacy-Preserving Distributed Data Analytics', authors: 'Mahendran Vasagam' },
    { title: 'An Intelligent AI-Enabled Enterprise Resource Planning Framework for Business Process Optimization and Predictive Decision Making', authors: 'Varsha Shah' },
    { title: 'Agentic AI for Autonomous Project Management of AWS Data Center Services Through Intelligent Workflow Coordination, Risk Management, and Operational Analytics', authors: 'Mohammad Shafat Ahsan' },
    { title: 'Foundation AI Models for Explainable Artificial Intelligence, Adaptive Learning and Autonomous Decision Intelligence in Complex Computing Environments', authors: 'Shubh Prabhat' },
    { title: 'Agentic AI Framework for Autonomous Data Integration, Cleansing and Knowledge Management in Distributed Enterprises', authors: 'Sai Arundeep Aetukuri' },
    { title: 'Geodesic Diagnostic Trajectories: A Differential Geometry Framework for Adaptive Decision Support in EHR Systems', authors: 'Hemanth Manchabale Papachappa, Aniruddha Ganguly' }
  ];

  return (
    <>
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Award className="h-12 w-12 text-yellow-500 mr-4" />
            <h1 className="text-4xl font-bold text-gray-900">Best Paper Awards</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Celebrating outstanding research contributions at ICI3T 2026. These papers represent the pinnacle of innovation and excellence in their respective fields.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {papers.map((paper, index) => (
            <Card key={`${paper.title}-${index}`} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center text-yellow-500">
                    <Award className="h-5 w-5" />
                  </div>
                </div>
                <CardTitle className="text-lg leading-tight">
                  {paper.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start space-x-2">
                  <Users className="h-4 w-4 text-gray-500 mt-1 flex-shrink-0" />
                  <p className="text-base font-bold text-yellow-700 leading-relaxed">
                    {paper.authors}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white rounded-lg shadow-md p-8 max-w-4xl mx-auto">
            <FileText className="h-16 w-16 text-blue-500 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Recognition of Excellence
            </h2>
            <p className="text-gray-600 leading-relaxed">
              These distinguished papers were selected through rigorous peer review and evaluation by our expert committee.
              Each submission represents cutting-edge research that advances knowledge and innovation in artificial intelligence,
              data science, and related fields. Congratulations to all the authors for their outstanding contributions to ICI3T 2026.
            </p>
          </div>
        </div>
      </div>
      
    </div>
    <Footer/>
    </>
  );
};

export default BestPaperAwards;
