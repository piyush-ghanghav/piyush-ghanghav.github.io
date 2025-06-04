import { Calendar,  } from "lucide-react";
import { ExternalLinkIcon } from "../icons/ExternalLinkIcon";
import { motion } from "framer-motion";

interface Publication {
  title: string;
  venue: string;
  date: string;
  doi: string;
  keywords: string[];
}

const PublicationCard = ({ pub, index }: { pub: Publication; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    className="group bg-[--surface0] rounded-xl border border-[--surface1] overflow-hidden
      hover:border-[--blue] transition-all duration-300"
  >
    <div className="p-4 space-y-3">
      <h3 className="font-orbitron font-bold text-[--text-color] line-clamp-2">
        {pub.title}
      </h3>
      <div className="flex items-center justify-between text-sm">
        <span className="text-[--subtext0] line-clamp-1">{pub.venue}</span>
        <div className="flex items-center gap-1.5 text-xs text-[--subtext0] shrink-0">
          <Calendar className="w-4 h-4" />
          <span>{pub.date}</span>
        </div>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {pub.keywords.map((keyword) => (
          <span
            key={keyword}
            className="px-2 py-0.5 text-xs bg-[--surface1] text-[--text-color] rounded-full"
          >
            {keyword}
          </span>
        ))}
      </div>
      <a
        href={pub.doi}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 text-xs text-[--text-colo] hover:text-[--blue] transition-colors"
      >
        <ExternalLinkIcon  />
        <span>View Publication</span>
      </a>
    </div>
  </motion.div>
);

export const PublicationsSection = () => {
  const publications = [
    {
      title: "Social Media Sentiment Analysis Using Machine Learning",
      venue: "2025 3rd International Conference on Disruptive Technologies (ICDT)",
      date: "March 2025",
      doi: "https://doi.org/10.1109/ICDT63985.2025.10986650",
      keywords: ["Machine Learning", "Sentiment Analysis", "Social Media", "NLP"]
    },
     {
    title: "Advancing Code Generation: Insights into Large Language Models",
    venue: "Journal of Cryptography and Network Security, Design and Codes, Volume 1 Issue 3",
    date: "December 2024",
    doi: "N/A (Requires subscription access)",
    keywords: ["Large Language Models", "CodeSearchNet", "PLCs", "Transformers", "IDEs"]
  }
    ,
  {
    title: "AI Interview Mocker",
    venue: "2nd International Conference on Multi-Strategy Learning Environment (ICMSLE-2025), Graphic Era Hill University, Haldwani, India",
    date: "February 2025",
    doi: "To be published by Springer in 'Multi-Strategy Learning Environment: Proceedings of ICMSLE 2025'",
    keywords: ["Artificial Intelligence", "Interview Preparation", "LLMs", "Education Technology", "Mock Interviews"]
  }

  ];

  return (
    <section className="space-y-6">
      <div className="grid grid-cols-1  gap-4">
        {publications.map((pub, index) => (
          <PublicationCard
            key={pub.title}
            pub={pub}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};