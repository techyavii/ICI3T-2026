import Footer from '@/components/Footer';
import InvitedSpeakerCard from '@/components/InvitedSpeakerCard';

const InvitedSpeakers = () => {
    const speakers = [
{
  name: "Anshul Vyas",
  designation: "Staff Software Engineer",
  company: "Turo",
  experience: "7+ Years",
  email: "anshu7vyas@gmail.com",
  conferenceLink: "https://www.ici3t.com/",
  areaOfResearch:
    "On-Device Machine Learning, Android Engineering, Mobile AI, Release Engineering, Mobile Architecture, AI Orchestration",
  profilePic: "invited-speakers/anshul-vyas.jpeg",
  country: "",
  city: "",
},

  {
  name: "Kedar Rajiv Pradhan",
  designation: "Senior Cloud Engineer",
  company: "Netskope",
  experience: "9 Years",
  email: "kedar_pradhan90@yahoo.com",
  conferenceLink: "https://www.ici3t.com/",
  areaOfResearch:
    "Cloud Computing, AWS Architecture, Cybersecurity, Enterprise Networking, Generative AI, Cloud Security",
  profilePic: "invited-speakers/kedar-rajiv-pradhan.jpeg",
  country: "",
  city: "",
},
{
  name: "Pratham Pravin Patkar",
  designation: "Director of Business Systems",
  company: "Society for Science & the Public",
  experience: "12 Years",
  email: "prathamppatkar@gmail.com",
  conferenceLink: "https://www.ici3t.com/",
  areaOfResearch:
    "Data Governance, Enterprise Data Architecture, AI Readiness, Microsoft Fabric, Dynamics 365, Data Privacy & Compliance",
  profilePic: "invited-speakers/pratham-pravin-patkar.jpeg",
  country: "",
  city: "",
}
];

  return (
    <div>
      <section className="py-16 bg-[#f7faff]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold font-publico text-center text-gray-900 mb-12">
          Invited Speakers
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {speakers.map((speaker, idx) => (
            <InvitedSpeakerCard key={idx} {...speaker} />
          ))}
        </div>
      </div>
    </section>
    <Footer/>
    </div>
  )
}

export default InvitedSpeakers
