import React from 'react';
import { Award, Trophy, Users } from 'lucide-react';
import Footer from '@/components/Footer';

interface AwardWinner {
  name: string;
  category: string;
  subAward: string;
}

const awardWinners: AwardWinner[] = [
  {
    name: 'Saddam Hussain',
    category: 'Manufacturing & Industry 4.0 Awards (Industrial AI & Data Analytics)',
    subAward: 'Smart Manufacturing Innovation Excellence Award'
  },
  {
    name: 'Collins Lemeke',
    category: 'Artificial Intelligence & Advanced Technologies Awards (Human-Centered NLP & Affective State Recognition)',
    subAward: 'Natural Language Processing (NLP) Excellence Award'
  },
  {
    name: 'Sandeep Raichura',
    category: 'Innovation & Entrepreneurship Awards (Cloud Infrastructure & Platform Management)',
    subAward: 'Continuous Innovation Excellence Award'
  },
  {
    name: 'Harshit Bhatia',
    category: 'Research, Innovation & Impact Awards (Cryptography & Information Security)',
    subAward: 'Early Career Research Distinction Award (Under 35)'
  },
  {
    name: 'Dr. Sheshang Degadwala',
    category: 'Research, Innovation & Impact Awards (Computer Vision & Artificial Intelligence)',
    subAward: 'Research Excellence & Innovation Award'
  }
];

const AwardsResults: React.FC = () => {
  const groupedWinners = awardWinners.reduce((acc, winner) => {
    if (!acc[winner.category]) acc[winner.category] = [];
    acc[winner.category].push(winner);
    return acc;
  }, {} as Record<string, AwardWinner[]>);

  return (
    <>
      <main className="min-h-screen bg-slate-50 text-slate-900">
        {/* Hero */}
        <section className="relative isolate overflow-hidden border-b border-slate-200 bg-white">
          <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -right-20 -top-28 h-80 w-80 rounded-full bg-blue-100/70 blur-3xl" />
            <div className="absolute -left-20 bottom-[-7rem] h-72 w-72 rounded-full bg-amber-100/70 blur-3xl" />
          </div>
          <div className="mx-auto max-w-7xl px-4 py-14 text-center sm:px-6 sm:py-20 lg:px-8">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-amber-200 bg-amber-50 shadow-sm">
              <Trophy className="h-8 w-8 text-amber-600" aria-hidden="true" />
            </div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-blue-700 sm:text-sm">
              Celebrating achievement and innovation
            </p>
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
              CVS3 Awards Results
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Recognizing the people making an impact across artificial intelligence, cloud platforms,
              research, manufacturing, and enterprise technology.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 shadow-sm">
                <span className="font-bold text-slate-900">{awardWinners.length}</span> recognitions
              </div>
              <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 shadow-sm">
                <span className="font-bold text-slate-900">{Object.keys(groupedWinners).length}</span> award categories
              </div>
            </div>
          </div>
        </section>

        {/* Award categories */}
        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <div className="mb-8 flex flex-col gap-2 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-blue-700">The awardees</p>
              <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                Winners by category
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-slate-500">
              Each recognition is listed with its award name, expertise domain, and sub-award.
            </p>
          </div>

          <div className="space-y-8 sm:space-y-10">
            {Object.entries(groupedWinners).map(([category, winners]) => (
              <section key={category} aria-label={category} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="flex flex-col gap-3 border-b border-slate-200 bg-gradient-to-r from-slate-50 to-blue-50/70 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                      <Award className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold leading-snug text-slate-900 sm:text-xl">{category}</h3>
                      <p className="mt-1 text-sm text-slate-500">Recognizing excellence and impact</p>
                    </div>
                  </div>
                  <span className="inline-flex w-fit shrink-0 items-center rounded-full border border-blue-200 bg-white px-3 py-1 text-xs font-semibold text-blue-800">
                    {winners.length} {winners.length === 1 ? 'awardee' : 'awardees'}
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 sm:p-6 xl:grid-cols-3">
                  {winners.map((winner, index) => (
                    <article
                      key={`${winner.name}-${index}`}
                      className="group flex h-full min-w-0 gap-3 rounded-xl border border-slate-200 bg-white p-4 transition duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md sm:p-5"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 ring-1 ring-amber-100 transition-colors group-hover:bg-amber-100">
                        <Trophy className="h-5 w-5 text-amber-600" aria-hidden="true" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="break-words text-base font-bold leading-6 text-slate-900 sm:text-[17px]">
                          {winner.name}
                        </h4>
                        <div className="mt-4 border-t border-slate-100 pt-3">
                          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                            Award name (expertise domain)
                          </p>
                          <p className="mt-1 break-words text-sm leading-5 text-slate-600">
                            {winner.category}
                          </p>
                        </div>
                        <div className="mt-3 rounded-lg bg-blue-50/80 px-3 py-2.5">
                          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-blue-700">
                            Sub-award
                          </p>
                          <p className="mt-1 break-words text-sm font-semibold leading-5 text-slate-800">
                            {winner.subAward}
                          </p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-slate-200 bg-white px-6 py-8 text-center shadow-sm sm:mt-16 sm:px-10">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
              <Users className="h-6 w-6" aria-hidden="true" />
            </div>
            <h2 className="mt-4 text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">
              Recognition of Excellence
            </h2>
            <p className="mx-auto mt-3 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
              These awards celebrate meaningful contributions across technology, industry, entrepreneurship,
              and research. Congratulations to all award winners on this well-deserved recognition.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AwardsResults;
