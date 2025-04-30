import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
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

      // Add loading state for better UX
      toast.promise(
        Promise.resolve(),
        {
          loading: 'Sending message...',
          success: 'Message sent successfully!',
          error: 'Failed to send message.',
        }
      );

      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error('Error sending email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-16 relative">
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: 'white',
            color: '#333',
            padding: '16px',
            borderRadius: '0.75rem',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            border: '1px solid rgba(59, 130, 246, 0.1)',
          },
          success: {
            style: {
              background: '#fff',
              border: '1px solid #059669',
              color: '#059669',
            },
            iconTheme: {
              primary: '#059669',
              secondary: '#fff',
            },
          },
          error: {
            style: {
              background: '#fff',
              border: '1px solid #DC2626',
              color: '#DC2626',
            },
            iconTheme: {
              primary: '#DC2626',
              secondary: '#fff',
            },
          },
        }}
        gutter={12}
        containerStyle={{
          top: 20,
          right: 20,
          bottom: 20,
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-12">Get in Touch</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="space-y-8">
              <ContactInfo
                icon={<Mail />}
                title="Email"
                content="piyushghanghav@gmail.com"
              />
              <ContactInfo
                icon={<Phone />}
                title="Phone"
                content="+91 9604177859"
              />
              <ContactInfo
                icon={<MapPin />}
                title="Location"
                content="Nashik, Maharashtra, India"
              />
            </div>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 bg-gradient-to-br from-white to-blue-50/30 hover:to-blue-100/50 p-8 rounded-xl transition-all duration-300 shadow-md hover:shadow-xl border border-blue-100/30 hover:border-blue-200/50">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input
                type="text"
                name="user_name"
                required
                className="w-full px-4 py-2 rounded-lg bg-white border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all duration-200"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="user_email"
                required
                className="w-full px-4 py-2 rounded-lg bg-white border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all duration-200"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea
                name="message"
                required
                className="w-full px-4 py-2 rounded-lg bg-white border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all duration-200 h-32 resize-none"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              <Send size={20} className={isSubmitting ? 'animate-pulse' : ''} />
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

const ContactInfo = ({ icon, title, content }: { icon: React.ReactNode; title: string; content: string }) => (
  <div className="flex items-start gap-4">
    <div className="text-blue-600">{icon}</div>
    <div>
      <h3 className="font-medium mb-1">{title}</h3>
      <p className="text-gray-600">{content}</p>
    </div>
  </div>
);

export default Contact;