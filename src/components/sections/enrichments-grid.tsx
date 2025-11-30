import React from 'react';
import {
  Linkedin,
  Contact,
  Building2,
  Users,
  ClipboardList,
  MapPin,
  BrainCircuit,
  Globe2,
} from 'lucide-react';

const enrichmentData = [
  {
    icon: Linkedin,
    bgColor: 'bg-[#0A66C2]',
    title: 'LinkedIn Profiles',
    description: 'Full profile enrichment with work history, skills & education',
  },
  {
    icon: Contact,
    bgColor: 'bg-emerald-500',
    title: 'Contact Info',
    description: 'Work emails, personal emails & phone numbers',
  },
  {
    icon: Building2,
    bgColor: 'bg-violet-500',
    title: 'Company Intel',
    description: 'Firmographics, financials, traffic & headcount trends',
  },
  {
    icon: Users,
    bgColor: 'bg-blue-500',
    title: 'Employee Search',
    description: 'Find decision makers by title, department & seniority',
  },
  {
    icon: ClipboardList,
    bgColor: 'bg-amber-500',
    title: 'Job Listings',
    description: 'Scrape career pages & track hiring signals',
  },
  {
    icon: MapPin,
    bgColor: 'bg-red-500',
    title: 'Google Maps',
    description: 'Local businesses, reviews, contact info & locations',
  },
  {
    icon: BrainCircuit,
    bgColor: 'bg-gradient-to-br from-fuchsia-500 to-purple-600',
    title: 'AI Research',
    description: 'Deep research reports with live web access',
  },
  {
    icon: Globe2,
    bgColor: 'bg-neutral-800',
    title: 'Web Scraping',
    description: 'Extract data from any website with AI parsing',
  },
];

const EnrichmentsGrid = () => {
  return (
    <>
      <hr className="w-full bg-neutral-200 border-neutral-200 h-px my-5" />
      <div className="flex flex-col justify-center items-center gap-8 lg:gap-12 px-6 md:px-16 lg:px-32 py-12 lg:py-20">
        <div className="flex flex-col items-center gap-3 max-w-2xl text-center">
          <p className="text-2xl md:text-3xl lg:text-4xl tracking-tighter">
            Every enrichment you need.
            <br />
            <span className="text-neutral-400">Built in.</span>
          </p>
          <p className="text-neutral-500 text-sm md:text-base">
            Access a fully-typed library of data enrichments—from LinkedIn profiles
            to contact info to company intelligence. All available directly in
            your code.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 w-full max-w-5xl">
          {enrichmentData.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col gap-3 p-4 md:p-5 rounded-xl border border-neutral-200 bg-white hover:border-neutral-300 hover:shadow-lg transition-all duration-200"
            >
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center ${item.bgColor}`}
              >
                <item.icon className="w-5 h-5 text-white" strokeWidth={2} />
              </div>
              <div>
                <p className="font-medium text-sm">{item.title}</p>
                <p className="text-xs text-neutral-500 mt-0.5">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-neutral-400 text-center max-w-md">
          All enrichments are fully typed with TypeScript definitions. Just call{' '}
          <code className="px-1.5 py-0.5 bg-neutral-100 rounded text-neutral-600 font-mono">
            services.person.contact.get()
          </code>{' '}
          and go.
        </p>
      </div>
    </>
  );
};

export default EnrichmentsGrid;