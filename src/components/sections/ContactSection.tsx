import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { trackContactSubmit } from '@/lib/analytics';
import {
  Mail, MapPin, Send, Github, Linkedin,
  CheckCircle2, AlertCircle,
} from 'lucide-react';
import emailjs from '@emailjs/browser';

// ─── Platform icons (no Lucide equivalents) ───────────────────

const LeetCodeIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
  </svg>
);

const GFGIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="none"
    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 7H7a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h2v-3H7.5" />
    <path d="M15 7h2a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-2v-3h1.5" />
    <line x1="9" y1="12" x2="15" y2="12" />
  </svg>
);

// ─── Social links ─────────────────────────────────────────────

const SOCIALS = [
  {
    label: 'GitHub',
    href: 'https://github.com/piyush-ghanghav',
    icon: <Github size={15} strokeWidth={1.5} />,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/piyush-ghanghav',
    icon: <Linkedin size={15} strokeWidth={1.5} />,
  },
  {
    label: 'LeetCode',
    href: 'https://leetcode.com/piyushghanghav',
    icon: <LeetCodeIcon />,
  },
  {
    label: 'GeeksForGeeks',
    href: 'https://www.geeksforgeeks.org/user/piyushghanghav10/',
    icon: <GFGIcon />,
  },
  {
    label: 'Chess.com',
    href: 'https://www.chess.com/member/therooooksgambit',
    icon: <span className="font-mono text-sm leading-none">♞</span>,
  },
];

// ─── Form state type ──────────────────────────────────────────

type SubmitState = 'idle' | 'sending' | 'success' | 'error';

// ─── Animation ────────────────────────────────────────────────

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1], delay },
});

// ─── Field component ──────────────────────────────────────────

const inputBase = `
  w-full px-4 py-2.5 rounded-md text-sm
  bg-surface border border-border
  text-text-primary placeholder:text-text-tertiary
  focus:outline-none focus:border-accent
  transition-colors duration-200 font-body
`;

const Field = ({
  label, name, type = 'text', value, onChange, required, rows,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  rows?: number;
}) => (
  <div className="flex flex-col gap-1.5">
    <label className="font-body text-xs font-medium text-text-secondary">
      {label}
      {required && <span className="text-accent ml-0.5">*</span>}
    </label>
    {rows ? (
      <textarea
        name={name}
        value={value}
        onChange={e => onChange(e.target.value)}
        rows={rows}
        required={required}
        className={`${inputBase} resize-none`}
      />
    ) : (
      <input
        type={type}
        name={name}
        value={value}
        onChange={e => onChange(e.target.value)}
        required={required}
        className={inputBase}
      />
    )}
  </div>
);

// ─── Main export ──────────────────────────────────────────────

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<SubmitState>('idle');

  const update = (field: keyof typeof form) => (val: string) =>
    setForm(prev => ({ ...prev, [field]: val }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus('sending');

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      setStatus('success');
      trackContactSubmit();

      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
  };

  return (
    <div>
      {/* Section header */}
      <motion.div {...fadeUp(0)} className="mb-10">
        <p className="section-label mb-2">06 / contact</p>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-text-primary">
          Let's Talk
        </h2>
      </motion.div>

      {/* Two-column card */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 card overflow-hidden">

        {/* ── Left: contact info + socials ── */}
        <motion.div
          {...fadeUp(0.1)}
          className="lg:col-span-2 p-8 flex flex-col gap-8
                     border-b lg:border-b-0 lg:border-r border-border"
        >
          {/* Intro */}
          <div>
            <h3 className="font-display font-semibold text-lg text-text-primary mb-2">
              Get in touch
            </h3>
            <p className="font-body text-sm text-text-secondary leading-relaxed">
              Open to SDE-1 roles in backend and full-stack engineering.
              Drop a message or connect on any of the platforms below.
            </p>
          </div>

          {/* Contact details */}
          <div className="flex flex-col gap-4">
            <a
              href="mailto:piyushghanghav@gmail.com"
              className="flex items-center gap-3 group"
            >
              <div className="w-8 h-8 rounded-md bg-surface-elevated border border-border
                              flex items-center justify-center flex-shrink-0
                              group-hover:border-accent/40 transition-colors">
                <Mail size={14} strokeWidth={1.5} className="text-accent" />
              </div>
              <div>
                <p className="font-mono text-[10px] text-text-tertiary uppercase tracking-wider">
                  Email
                </p>
                <p className="font-body text-sm text-text-primary group-hover:text-accent
                               transition-colors">
                  piyushghanghav@gmail.com
                </p>
              </div>
            </a>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-md bg-surface-elevated border border-border
                              flex items-center justify-center flex-shrink-0">
                <MapPin size={14} strokeWidth={1.5} className="text-text-tertiary" />
              </div>
              <div>
                <p className="font-mono text-[10px] text-text-tertiary uppercase tracking-wider">
                  Location
                </p>
                <p className="font-body text-sm text-text-primary">
                  Pune, Maharashtra · Open to remote
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-border" />

          {/* Social links — horizontal pills */}
          <div>
            <p className="section-label mb-3">Find me on</p>
            <div className="flex flex-wrap gap-2">
              {SOCIALS.map(social => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-md
                             bg-surface-elevated border border-border
                             text-text-secondary hover:text-text-primary
                             hover:border-accent/30 transition-all duration-200
                             font-body text-xs"
                >
                  <span className="text-text-tertiary flex-shrink-0">
                    {social.icon}
                  </span>
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right: form */}
        <motion.div
          {...fadeUp(0.2)}
          className="lg:col-span-3 p-8 flex flex-col"
        >
          {status === 'success' ? (
            <div className="flex-1 flex flex-col items-center justify-center gap-4 py-12 text-center">
              <div className="w-12 h-12 rounded-full bg-accent-muted
                              flex items-center justify-center">
                <CheckCircle2 size={24} strokeWidth={1.5} className="text-accent" />
              </div>
              <div>
                <p className="font-display font-semibold text-lg text-text-primary">
                  Message sent
                </p>
                <p className="font-body text-sm text-text-secondary mt-1">
                  Thanks for reaching out — I'll get back to you soon.
                </p>
              </div>
              <button onClick={() => setStatus('idle')} className="btn-ghost mt-2">
                Send another
              </button>
            </div>
          ) : (
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col flex-1 gap-5"
            >
              <Field label="Name" name="user_name" value={form.name} onChange={update('name')} required />
              <Field label="Email" name="user_email" type="email" value={form.email} onChange={update('email')} required />
              <Field label="Message" name="message" value={form.message} onChange={update('message')} required rows={5} />

              {status === 'error' && (
                <div className="flex items-center gap-2 text-error text-xs font-body">
                  <AlertCircle size={13} strokeWidth={1.5} />
                  Something went wrong. Please try again or email me directly.
                </div>
              )}

              <div className="flex items-center justify-between gap-4 mt-auto">
                {/* <p className="font-mono text-[10px] text-text-tertiary">
                  Typically respond within 24–48 hrs
                </p> */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className={`btn-primary  ${status === 'sending' ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                >
                  <Send size={15} strokeWidth={1.5}
                    className={status === 'sending' ? 'animate-pulse' : ''} />
                  {status === 'sending' ? 'Sending…' : 'Send Message'}
                </button>
              </div>
            </form>
          )}
        </motion.div>

      </div>
    </div>
  );
};

export default ContactSection;