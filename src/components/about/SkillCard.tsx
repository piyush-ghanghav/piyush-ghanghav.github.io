export const SkillCard = ({ skill }: { skill: { id: string; title: string } }) => (
  <div className="group/skill relative">
    <div className="relative flex items-center justify-center w-16 h-16
      bg-[--surface1] rounded-xl p-3 shadow-sm hover:shadow-md transition-all duration-300
      border border-[--surface2] hover:border-[--blue] flex-shrink-0">
      <img
        src={`https://skillicons.dev/icons?i=${skill.id}`}
        alt={skill.title}
        className="w-full h-full object-contain transition-transform duration-300
          group-hover/skill:scale-110"
      />
    </div>
    <div className="absolute -bottom-0 left-1/2 -translate-x-1/2 opacity-0 
      group-hover/skill:opacity-100 transition-all duration-300 z-[999999]
      pointer-events-none">
      <div className="relative">
        <div className="bg-[--surface1] px-3 py-2 rounded-lg shadow-lg 
          border border-[--surface2] text-xs font-aldrich text-[--text] 
          whitespace-nowrap">
          {skill.title}
        </div>
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 
          border-8 border-transparent border-t-[--surface1]"/>
      </div>
    </div>
  </div>
);