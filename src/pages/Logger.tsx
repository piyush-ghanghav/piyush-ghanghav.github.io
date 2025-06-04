import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Lock, Clock, Ban, AlertCircle, Trash, User,  Globe, Timer, } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer,  } from 'recharts';
import { SmartInsights } from '@/components/logger/SmartInsights';

interface VisitData {
  path: string;
  timestamp: string;
  device: string;
  browser: string;
  screenSize: string;
  referrer: string;
  timeSpent?: number;
  scrollDepth?: number;
}

const Logger = () => {
  const [secretMessage, setSecretMessage] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [cooldownTime, setCooldownTime] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [visits, setVisits] = useState<VisitData[]>([]);
  const [timeSpent, setTimeSpent] = useState(0);
  const [scrollDepth, setScrollDepth] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const MAX_ATTEMPTS = 3;
  const COOLDOWN_DURATION = 30; // seconds
  const COOLDOWN_KEY = 'logger_cooldown';
  const ATTEMPTS_KEY = 'logger_attempts';

  useEffect(() => {
    // Check for existing cooldown
    const storedCooldown = localStorage.getItem(COOLDOWN_KEY);
    const storedAttempts = localStorage.getItem(ATTEMPTS_KEY);
    
    if (storedCooldown) {
      const cooldownUntil = parseInt(storedCooldown);
      if (Date.now() < cooldownUntil) {
        setIsLocked(true);
        setCooldownTime(Math.ceil((cooldownUntil - Date.now()) / 1000));
      } else {
        localStorage.removeItem(COOLDOWN_KEY);
        localStorage.removeItem(ATTEMPTS_KEY);
      }
    }

    if (storedAttempts) {
      setAttempts(parseInt(storedAttempts));
    }

    // Verify secret key
    const secretKey = sessionStorage.getItem('secretKey');
    if (secretKey !== 'piyush-secret-key') {
      navigate('/');
      return;
    }

    inputRef.current?.focus();
  }, [navigate]);

  // Cooldown timer
  useEffect(() => {
    if (isLocked && cooldownTime > 0) {
      const timer = setInterval(() => {
        setCooldownTime(prev => {
          if (prev <= 1) {
            setIsLocked(false);
            localStorage.removeItem(COOLDOWN_KEY);
            localStorage.removeItem(ATTEMPTS_KEY);
            setAttempts(0);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isLocked, cooldownTime]);

  useEffect(() => {
    if (isAuthorized) {
      // Load existing visits
      const storedVisits = JSON.parse(localStorage.getItem('portfolioVisits') || '[]');
      
      // Add new visit with enhanced data
      const newVisit: VisitData = {
        path: window.location.pathname,
        timestamp: new Date().toISOString(),
        device: /Mobile|Android|iPhone/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop',
        browser: getBrowserInfo(),
        screenSize: `${window.innerWidth}x${window.innerHeight}`,
        referrer: document.referrer || 'Direct',
      };

      const updatedVisits = [...storedVisits, newVisit];
      localStorage.setItem('portfolioVisits', JSON.stringify(updatedVisits));
      setVisits(updatedVisits);

      // Track scroll depth
      const handleScroll = () => {
        const scrolled = window.scrollY;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const depth = Math.round((scrolled / maxScroll) * 100);
        setScrollDepth(depth);
      };

      // Track time spent
      const startTime = Date.now();
      const timeInterval = setInterval(() => {
        setTimeSpent(Math.round((Date.now() - startTime) / 1000));
      }, 1000);

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
        clearInterval(timeInterval);
      };
    }
  }, [isAuthorized]);

  const handleSecretSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isLocked) return;

    const validationMessage = import.meta.env.VITE_SECRET_MSG;
    const newAttempts = attempts + 1;
    
    if (secretMessage === validationMessage) {
      setIsAuthorized(true);
      localStorage.removeItem(ATTEMPTS_KEY);
      setAttempts(0);
    } else {
      setAttempts(newAttempts);
      localStorage.setItem(ATTEMPTS_KEY, newAttempts.toString());
      setSecretMessage('');

      if (newAttempts >= MAX_ATTEMPTS) {
        const cooldownUntil = Date.now() + (COOLDOWN_DURATION * 1000);
        localStorage.setItem(COOLDOWN_KEY, cooldownUntil.toString());
        setIsLocked(true);
        setCooldownTime(COOLDOWN_DURATION);
      }
    }
  };

  const getBrowserInfo = () => {
    const ua = navigator.userAgent;
    if (ua.includes('Chrome')) return 'Chrome';
    if (ua.includes('Firefox')) return 'Firefox';
    if (ua.includes('Safari')) return 'Safari';
    if (ua.includes('Edge')) return 'Edge';
    return 'Other';
  };

  const getVisitsByDate = () => {
    return visits.reduce((acc: { date: string; count: number }[], visit) => {
      const date = visit.timestamp.split('T')[0];
      const existing = acc.find(item => item.date === date);
      if (existing) {
        existing.count++;
      } else {
        acc.push({ date, count: 1 });
      }
      return acc;
    }, []);
  };

  const formatReferrer = (referrer: string) => {
    if (!referrer || referrer === 'Direct') return null;
    
    try {
      const url = new URL(referrer);
      return url.hostname;
    } catch (error) {
      return 'Unknown Source';
    }
  };

  if (!isAuthorized) {
    return (
      <div className="min-h-screen bg-[--base] p-8 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <form 
            onSubmit={handleSecretSubmit}
            className="bg-[--surface0] rounded-xl p-6 border border-[--surface1]"
          >
            <div className="flex items-center gap-3 mb-6">
              {isLocked ? (
                <Ban className="w-6 h-6 text-[--red]" />
              ) : (
                <Lock className="w-6 h-6 text-[--blue]" />
              )}
              <h2 className="text-xl font-orbitron font-bold text-[--text]">
                {isLocked ? 'Access Locked' : 'Verification Required'}
              </h2>
            </div>

            {attempts > 0 && !isLocked && (
              <div className="mb-4 flex items-center gap-2 text-[--yellow] text-sm">
                <AlertCircle className="w-4 h-4" />
                <span>Attempts remaining: {MAX_ATTEMPTS - attempts}</span>
              </div>
            )}

            {isLocked ? (
              <div className="flex items-center gap-2 text-[--red]">
                <Clock className="w-5 h-5" />
                <span>Try again in {cooldownTime} seconds</span>
              </div>
            ) : (
              <input
                ref={inputRef}
                type="password"
                value={secretMessage}
                onChange={(e) => setSecretMessage(e.target.value)}
                className="w-full p-3 rounded-lg bg-[--surface1] text-[--text] border-2 border-transparent 
                  focus:border-[--blue] outline-none"
                placeholder="Enter secret message..."
                disabled={isLocked}
              />
            )}
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[--base] p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto space-y-6"
      >
        {/* Analytics Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-[--surface0] rounded-xl p-4 border border-[--surface1]">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-5 h-5 text-[--blue]" />
              <h3 className="font-medium">Time Spent</h3>
            </div>
            <p className="text-2xl font-bold">{timeSpent}s</p>
          </div>
          
          <div className="bg-[--surface0] rounded-xl p-4 border border-[--surface1]">
            <div className="flex items-center gap-2 mb-2">
              {/* <Device className="w-5 h-5 text-[--green]" /> */}
              <h3 className="font-medium">Current Device</h3>
            </div>
            <p className="text-2xl font-bold">{/Mobile|Android|iPhone/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop'}</p>
          </div>

          <div className="bg-[--surface0] rounded-xl p-4 border border-[--surface1]">
            <div className="flex items-center gap-2 mb-2">
              <Globe className="w-5 h-5 text-[--yellow]" />
              <h3 className="font-medium">Browser</h3>
            </div>
            <p className="text-2xl font-bold">{getBrowserInfo()}</p>
          </div>
        </div>

        {/* Smart Insights Section */}
        <SmartInsights visits={visits} />

        {/* Visit Timeline Chart */}
        <div className="bg-[--surface0] rounded-xl p-6 border border-[--surface1]">
          <h3 className="text-lg font-medium mb-4">Visit Timeline</h3>
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={getVisitsByDate()}>
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="count" stroke="var(--blue)" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Visit History */}
        <div className="bg-[--surface0] rounded-xl p-6 border border-[--surface1] space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-[--blue] font-medium">
              <Timer className="w-5 h-5" />
              <span>Visit History</span>
            </div>
            <button
              onClick={() => {
                localStorage.removeItem('portfolioVisits');
                setVisits([]);
              }}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[--surface1] text-[--text] 
                hover:bg-[--surface2] transition-colors"
            >
              <Trash className="w-4 h-4" />
              Clear History
            </button>
          </div>

          <div className="space-y-3">
            {visits.map((visit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col md:flex-row md:items-center justify-between p-4 rounded-lg bg-[--surface1] gap-2"
              >
                <div className="flex items-center gap-3">
                  <User className="w-4 h-4 text-[--subtext0]" />
                  <div>
                    <span className="text-[--text] font-medium">{visit.path}</span>
                    <div className="text-xs text-[--subtext0] mt-1">
                      {visit.device} • {visit.browser} • {visit.screenSize}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-[--subtext0]">
                    {new Date(visit.timestamp).toLocaleString()}
                  </span>
                  {visit.referrer && visit.referrer !== 'Direct' && (
                    <span className="text-xs bg-[--surface2] px-2 py-1 rounded">
                      via {formatReferrer(visit.referrer)}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Logger;