const data = {

  title: 'AI Mock Interview Prep',
  description: 'AI-driven platform for interview preparation with resume enhancement and mock interviews. Provides personalized feedback based on job descriptions and industry standards.',
  
  image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80',

  
  // Project Meta
  duration: 'Sept 2024 - Dec 2024',
  inProgress: false,
  
  // Technical Stack
  tags: ['GenAI', 'NextJS', 'PostgreSQL', 'Tailwind',],
 
  
  // Links
  github: 'https://github.com/piyush-ghanghav/Interview-Assistant',
  demo: 'https://mock-interview-assistant.vercel.app/',

  
 
  // Key Features
  features: [
    {
      name: 'Resume Analysis & Enhancement',
      description: 'AI-powered resume analysis that identifies gaps and suggests improvements based on job descriptions',
      technical: 'Uses NLP to parse resume content and compare against job requirements using semantic similarity'
    },
    {
      name: 'Personalized Mock Interviews',
      description: 'Dynamic interview generation based on job roles, experience level, and skill requirements',
      technical: 'Generates contextual questions using GPT-4 API with custom prompts for different interview types'
    },
    {
      name: 'Real-time Feedback System',
      description: 'Immediate analysis of interview responses with scoring and improvement suggestions',
      technical: 'Implements response evaluation using multiple AI models for comprehensive feedback'
    },
    {
      name: 'Progress Tracking Dashboard',
      description: 'Visual analytics showing improvement over time with detailed performance metrics',
      technical: 'Built with Chart.js and custom React components for data visualization'
    },
    {
      name: 'Industry-Specific Preparation',
      description: 'Tailored interview questions and scenarios for different industries and roles',
      technical: 'Maintains database of industry-specific question banks and evaluation criteria'
    }
  ],
  
 
  
  // Technical Architecture
  architecture: {
    frontend: 'Next.js with server-side rendering for optimal performance and SEO',
    backend: 'API routes handling authentication, database operations, and AI service integration',
    database: 'PostgreSQL with Prisma ORM for type-safe database operations',
    aiIntegration: 'Multiple AI providers (OpenAI, Anthropic) with intelligent routing based on task type',
    deployment: 'Vercel for application hosting with Railway for PostgreSQL database'
  },
  

  
  // Learning & Development
  // learnings: {
  //   technical: [
  //     'Advanced prompt engineering for consistent AI responses',
  //     'Implementing streaming API responses for better UX',
  //     'Database optimization for handling large text data',
  //     'Integration patterns for multiple AI service providers'
  //   ],
    
  //   product: [
  //     'Importance of user testing in AI product development',
  //     'Balancing automation with user control in feedback systems',
  //     'Designing intuitive interfaces for complex AI interactions'
  //   ],
    
  //   insights: 'Learned that users prefer transparent AI explanations over black-box feedback, leading to the implementation of detailed reasoning for all AI suggestions'
  // },
  
  
}