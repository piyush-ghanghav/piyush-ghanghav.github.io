import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const SocialLinks = () => (
  <div className="flex justify-center space-x-6 mb-4">
    <a href="https://github.com/piyush-ghanghav" className="hover:text-blue-400 transition-colors" target="_blank">
      <Github size={24} />
    </a>
    <a href="https://linkedin.com/in/piyush-  ghanghav" className="hover:text-blue-400 transition-colors" target='blank'>
      <Linkedin size={24} />
    </a>
    <a href="mailto:piyushghanghav@gmail.com" className="hover:text-blue-400 transition-colors">
      <Mail size={24} />
    </a>
  </div>
);

export default SocialLinks;