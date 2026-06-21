import React from 'react';
import Footer from '@/components/Footer';

const Committee = () => {

const generalChairs = [
  { name: "Iulian Ciocoiu", affiliation: "Gheorghe Asachi Technical University of Iasi, Romania" },
  { name: "George A. Tsihrintzis", affiliation: "University of Piraeus, Greece" },
];

const honoraryChairs = [
  { name: "Daniela Tărniceriu", affiliation: "Gheorghe Asachi Technical University of Iasi, Romania" },
];

const conferenceChairs = [
  { name: "Marius Hăgan", affiliation: "Gheorghe Asachi Technical University of Iasi, Romania" },
  { name: "Ginu Rajan", affiliation: "Cardiff Metropolitan University, UK" },
];

const technicalProgramChairs = [
  { name: "Nicolae Lucanu", affiliation: "Gheorghe Asachi Technical University of Iasi, Romania" },
  { name: "Weiwei Jiang", affiliation: "Beijing University of Posts and Telecommunications, China" },
  { name: "Rajkumar Singh Rathore", affiliation: "Cardiff Metropolitan University, UK" },
  { name: "Cristian Aghion", affiliation: "Gheorghe Asachi Technical University of Iasi, Romania" },
];

const publicationChairs = [
  { name: "Utku Kose", affiliation: "Suleyman Demirel University, Isparta, Turkey" },
  { name: "Prasanalakshmi B", affiliation: "King Khalid University, Saudi Arabia" },
];

const conveners = [
  { name: "Prerna Mann", affiliation: "Maharaja Agrasen Institute of Technology, Delhi, India" },
  { name: "Oana Gemen", affiliation: "Chalmers University of Technology, Sweden" },
];

const advisoryCommittee = [
  { name: "George A. Tsihrintzis", affiliation: "University of Piraeus, Greece" },
  { name: "Dijana Oreski", affiliation: "University of Zagreb, Varazdin, Croatia" },
  { name: "Nuno M. Garcia", affiliation: "University of Beira Interior, Portugal" },
  { name: "Jaafar Alghazo", affiliation: "Virginia Military Institute, USA" },
  { name: "Prajoy Podder", affiliation: "Institute of ICT, BUET, Dhaka" },
  { name: "M. Rubaiyat Hossain Mondal", affiliation: "Institute of ICT, BUET, Dhaka" },
  { name: "Daniel Nogueira", affiliation: "University of Minho, Brazil" },
  { name: "Khan Muhammad", affiliation: "Sejong University, South Korea" },
  { name: "Alireza Jolfaei", affiliation: "Macquarie University, Australia" },
  { name: "Flah Aymen", affiliation: "National School of Engineering of Gabes, Tunisia" },
  { name: "Placido Rogerio Pinheiro", affiliation: "University of Fortaleza, Brazil" },
  { name: "Daniela Clara Moraru", affiliation: "University of Luxembourg, Luxembourg" },
  { name: "Vassilis C. Gerogiannis", affiliation: "University of Thessaly, Greece" },
];

const technicalProgramCommittee = [
  { name: "Utku Kose", affiliation: "Suleyman Demirel University, Isparta, Turkey" },
  { name: "Oana Geman", affiliation: "Chalmers University of Technology, University of Gothenburg, Romania" },
  { name: "GaganGeet Singh Aujla", affiliation: "Durham University, UK" },
  { name: "Sachin Kumar", affiliation: "South Ural State University, Chelyabinsk, Russia" },
  { name: "Francesco Piccialli", affiliation: "University of Naples Federico II, Italy" },
  { name: "Lalit Garg", affiliation: "University of Malta, Msida, Malta" },
  { name: "Mamoun Alazab", affiliation: "Charles Darwin University, Australia" },
  { name: "Med Salim BOUHLEL", affiliation: "Lab SETIT; Sfax University, Tunisia" },
  { name: "Dijana Oreski", affiliation: "University of Zagreb, Croatia" },
  { name: "Jafar A. Alzubi", affiliation: "Al-Balqa Applied University, Jordan" },
  { name: "Alex Norta", affiliation: "Tallinn University of Technology, Estonia" },
  { name: "Mohammad Shojafar", affiliation: "University of Surrey, UK" },
  { name: "Anish Jindal", affiliation: "Durham University, UK" },
  { name: "Prayag Tiwari", affiliation: "Halmstad University, Sweden" },
  { name: "Amit Kumar Jaiswal", affiliation: "University of Surrey, UK" },
  { name: "Qianqian Xie", affiliation: "University of Manchester, UK" },
  { name: "Ashiq Anjum", affiliation: "University of Leicester, UK" },
  { name: "Yu-Dong Zhang", affiliation: "University of Leicester, UK" },
  { name: "Daniel Nogueira", affiliation: "University of Minho, Brazil" },
  { name: "Yenumula B Reddy", affiliation: "Grambling State University, USA" },
  { name: "Placido Rogerio Pinheiro", affiliation: "University of Fortaleza, Brazil" },
  { name: "Daniela Clara Moraru", affiliation: "University of Luxembourg, Luxembourg" },
  { name: "Rab Nawaz", affiliation: "University of Essex, UK" },
  { name: "Kashif Saleem", affiliation: "Universiti Teknologi Malaysia, Riyadh, Saudi Arabia" },
  { name: "Kemal Polat", affiliation: "Abant Izzet Baysal University, Turkey" },
  { name: "Juhriyansyah Dalle", affiliation: "Universitas Lambung Mangkurat, Indonesia" },
  { name: "Sarada Prasad Gochhayat", affiliation: "IIT Jammu, India" },
  { name: "Meng Li", affiliation: "Hefei University of Technology, China" },
  { name: "Alfredo Grieco", affiliation: "Politecnico di Bari, Italy" },
  { name: "Quoc-Viet Pham", affiliation: "Pusan National University, South Korea" },
  { name: "Assunta Di Vaio", affiliation: "University of Naples Parthenope, Italy" },
  { name: "Daniel Lucky Michael", affiliation: "San Francisco Bay University, USA" },
  { name: "Md Sazol Ahmmed", affiliation: "Missouri University of Science and Technology, USA" },
  { name: "Rajani Kumari Vaddepalli", affiliation: "Callaway Golf, USA" },
];

  const CommitteeSection = ({ title, members }: { title: string; members: { name: string; affiliation: string }[] }) => (
    <div className="mb-8">
      <h3 className="font-druk text-xl md:text-2xl text-goldsmiths-text mb-4 border-b-2 border-goldsmiths-blue pb-2">
        {title}
      </h3>
      <div className="space-y-2">
        {members.map((member, index) => (
          <div key={index} className="bg-goldsmiths-beige p-3 rounded">
            <p className="font-graphik font-bold text-goldsmiths-text">{member.name}</p>
            <p className="font-publico text-sm text-goldsmiths-text">{member.affiliation}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-druk text-3xl md:text-4xl text-goldsmiths-text text-center mb-8 border-b-4 border-goldsmiths-blue pb-2 inline-block mx-auto">
            Committee
          </h1>

          <div className="space-y-8">
            <CommitteeSection title="General Chair(s)" members={generalChairs} />
            <CommitteeSection title="Honorary Chair(s)" members={honoraryChairs} />
            {/* <CommitteeSection title="Organising Chair(s)" members={organisingChairs} /> */}
            <CommitteeSection title="Conference Chair(s)" members={conferenceChairs} />
            <CommitteeSection title="Technical Program Chair(s)" members={technicalProgramChairs} />
            <CommitteeSection title="Publication Chair(s)" members={publicationChairs} />
            <CommitteeSection title="Convener(s)" members={conveners} />
            {/* <CommitteeSection title="Awards Chair(s)" members={awardsChairs} /> */}
            <CommitteeSection title="Advisory Committee" members={advisoryCommittee} />
            <CommitteeSection title="Technical Program Committee" members={technicalProgramCommittee} />

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Committee;
