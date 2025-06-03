import { 
  Code, Music, Book, Gamepad,
   Trees, Tv, MapPin,
  Smile, Mountain
} from "lucide-react";
import { ChessTreeIcon } from "@/components/icons/abstract/ChessTreeIcon";
import { FCBIcon } from "@/components/icons/abstract/FCBIcon";
import { GoatIcon } from "../icons/abstract/GoatIcon";

const facts = [
  {
    icon: <Code className="w-6 h-6 text-[--blue]" />,
    title: "Favorite Stack",
    content: "TypeScript, React, Node.js"
  },
  {
    icon: <Book className="w-6 h-6 text-[--green]" />,
    title: "Currently Learning",
    content: "AIML & DevOps"
  },
  {
    icon: <ChessTreeIcon />,
    title: "Chess",
    content: "Play Me • 1400 ELO",
    link: "https://www.chess.com/member/therooooksgambit" 
  },
  {
    icon: <FCBIcon />,
    title: "Fútbol",
        content: "FCB • Més que un club"
  },
  {
    icon: <GoatIcon />,
    title: "GOAT",
    content: "Leo Messi • Idol "
  },
  {
    icon: <MapPin className="w-6 h-6 text-[--red]" />,
    title: "Dream Destination",
    content: "Camp Nou • Barcelona"
  },
  
  {
      icon: <Music className="w-6 h-6 text-[--pink]" />,
      title: "Music Taste",
      content: "Chill Beats "
    },
    {
        icon: <Tv className="w-6 h-6 text-[--teal]" />,
        title: "Free Time",
        content: "Code | Series | Football "
    },
    {
        icon: <Gamepad className="w-6 h-6 text-[--mauve]" />,
        title: "Gaming",
        content: "BGMI | FC-25 "
      },
      {
          icon: <Mountain className="w-6 h-6 text-[--teal]" />,
          title: "Adventure",
          content: "Hiking • Exploring "
        },
        {
          icon: <Trees className="w-6 h-6 text-[--green]" />,
          title: "Green Thumb",
                content: "Gardening • My zen time"
        },
        
  {
    icon: <Smile className="w-6 h-6 text-[--yellow]" />,
    title: "Fun Fact",
    content: "Can solve Rubik's cube"
  }
];

export const AbstractSection = () => (
  <section className="mb-16">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {facts.map((fact) => (
        <div
          key={fact.title}
          className="group bg-[--surface0] p-6 rounded-[15px] border border-[--surface1] 
            hover:border-[--blue] transition-all duration-300 hover:shadow-lg"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-[--surface1] group-hover:scale-110 transition-transform duration-300">
              {fact.icon}
            </div>
            <div className="flex-1">
              <h3 className="font-inter font-bold text-lg text-[--text-color] mb-1">
                {fact.title}
              </h3>
              {fact.link ? (
                <a 
                  href={fact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-aldrich text-sm text-[--subtext0] hover:text-[--green] transition-colors"
                >
                  {fact.content}
                </a>
              ) : (
                <p className="font-aldrich text-sm text-[--subtext0]">
                  {fact.content}
                </p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);