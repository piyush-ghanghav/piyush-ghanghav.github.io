import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current!,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error('Error sending email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="mb-16">
      <Toaster position="bottom-right" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[--surface0] p-8 rounded-[15px] border border-[--surface1]"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <ContactInfo
              icon={<Mail className="w-5 h-5 text-[--blue]" />}
              title="Email"
              content="piyushghanghav@gmail.com"
            />
            <ContactInfo
              icon={<Phone className="w-5 h-5 text-[--green]" />}
              title="Phone"
              content="+91 9604177859"
            />
            <ContactInfo
              icon={<MapPin className="w-5 h-5 text-[--red]" />}
              title="Location"
              content="Nashik, Maharashtra, India"
            />
          </div>

          {/* Contact Form */}
          <form 
            ref={formRef} 
            onSubmit={handleSubmit} 
            className="space-y-6 bg-[--surface1] p-6 rounded-xl transition-all duration-300 
              shadow-md hover:shadow-lg border border-[--surface2] hover:border-[--blue]"
          >
            <div>
              <label className="block text-sm font-medium text-[--text] mb-2">Name</label>
              <input
                type="text"
                name="user_name"
                required
                className="w-full px-4 py-2 rounded-lg bg-[--surface0] border border-[--surface2] 
                  focus:border-[--blue] outline-none transition-all duration-200 text-[--text]"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[--text] mb-2">Email</label>
              <input
                type="email"
                name="user_email"
                required
                className="w-full px-4 py-2 rounded-lg bg-[--surface0] border border-[--surface2] 
                  focus:border-[--blue] outline-none transition-all duration-200 text-[--text]"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[--text] mb-2">Message</label>
              <textarea
                name="message"
                required
                className="w-full px-4 py-2 rounded-lg bg-[--surface0] border border-[--surface2] 
                  focus:border-[--blue] outline-none transition-all duration-200 h-32 
                  resize-none text-[--text]"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-[--blue] hover:bg-[--blue]/90 text-white py-2 px-6 
                rounded-lg flex items-center justify-center gap-2 transition-colors
                ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              <Send size={20} className={isSubmitting ? 'animate-pulse' : ''} />
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

const ContactInfo = ({ 
  icon, 
  title, 
  content 
}: { 
  icon: React.ReactNode; 
  title: string; 
  content: string; 
}) => (
  <div className="flex items-start gap-4">
    <div>{icon}</div>
    <div>
      <h3 className="font-orbitron font-bold text-[--text-color] mb-1">{title}</h3>
      <p className="text-[--subtext0]">{content}</p>
    </div>
  </div>
);