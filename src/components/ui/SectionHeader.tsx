import { LucideIcon } from 'lucide-react';

interface SectionHeaderProps {
  icon: LucideIcon;
  title: string;
}

const SectionHeader = ({ icon: Icon, title }: SectionHeaderProps) => {
  return (
    <div className="relative">
      <div className="absolute -top-3 left-8 z-10">
        <div className="flex items-center gap-2 px-4 py-2 rounded-[0.6vw] bg-[--surface1]">
          <Icon className="w-5 h-5 text-[--blue]" />
          <span className="text-lg font-bold text-[--text]">{title}</span>
        </div>
      </div>
    </div>
  );
};

export default SectionHeader;