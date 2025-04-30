import { Code2 } from 'lucide-react';

const Logo = () => (
  <div className="flex items-center gap-3 group ml-6">
    <div className="relative animate-[spin_2s_ease-in-out] hover:animate-none">
      <Code2 
        size={28} 
        className="text-blue-700 transform transition-all duration-300 group-hover:rotate-12 hover:scale-110" 
      />
      <div className="absolute -inset-1 bg-blue-500/20 rounded-lg blur-sm group-hover:bg-blue-500/30 transition-all duration-300" />
    </div>
    <div className="flex flex-col ml-2">
      <span className="font-bold text-xl bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">
        Piyush Ghanghav
      </span>
      <span className="text-xs text-gray-500 font-medium tracking-wider">
        {/* COMPUTER ENGINEER */}
      </span>
    </div>
  </div>
);

export default Logo;