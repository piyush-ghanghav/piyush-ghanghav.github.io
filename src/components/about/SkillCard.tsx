export const SkillCard = ({ skill }: { skill: { id: string; title: string } }) => (
  <div className="group/skill relative">
    <div className="relative flex items-center justify-center w-12 h-12
      bg-[--surface1] rounded-xl  shadow-sm hover:shadow-md transition-all duration-300
      border border-[--surface2] flex-shrink-0">
      <img
        src={`https://skillicons.dev/icons?i=${skill.id}`}
        alt={skill.title}
        className="w-full h-full object-contain transition-transform duration-300
          group-hover/skill:scale-110"
      />
    </div>
  
  </div>
);