import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  ArrowRight,
  Sparkles,
  Zap,
  Target,
  Users,
  Brain,
  Smartphone,
  Receipt,
  LineChart,
  GraduationCap,
  CheckCircle2,
  ChevronDown,
  ShieldCheck,
  Layers,
  Cpu,
} from 'lucide-react';
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
  useReducedMotion,
} from 'framer-motion';

interface HomeProps {
  onNavigate: (page: string) => void;
}

/* ---------------------------------------------
   Small helpers
---------------------------------------------- */

function cx(...classes: Array<string | boolean | undefined | null>) {
  return classes.filter(Boolean).join(' ');
}

function FloatingBadge({
  icon: Icon,
  label,
  tone = 'blue',
  delay = 0,
}: {
  icon: React.ElementType;
  label: string;
  tone?: 'blue' | 'orange' | 'slate';
  delay?: number;
}) {
  const tones: Record<string, string> = {
    blue: 'border-blue-200/60 bg-white/70 text-slate-800',
    orange: 'border-orange-200/60 bg-white/70 text-slate-800',
    slate: 'border-slate-200/70 bg-white/70 text-slate-800',
  };

  return (
    <motion.span
      className={cx(
        'inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs sm:text-sm shadow-sm backdrop-blur',
        tones[tone]
      )}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4, ease: 'easeOut' }}
      whileHover={{ y: -2 }}
    >
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-900/5">
        <Icon className={cx('h-4 w-4', tone === 'orange' ? 'text-orange-600' : 'text-blue-700')} />
      </span>
      {label}
    </motion.span>
  );
}

/* ---------------------------------------------
   HERO RIGHT: new animated “control panel” card
---------------------------------------------- */
function HeroControlPanel() {
  const prefersReduced = useReducedMotion();
  const uid = React.useId().replace(/:/g, '');
  const gradId = `grad-${uid}`;
  const glowId = `glow-${uid}`;

  return (
    <motion.div
      className="relative rounded-[28px] border border-white/60 bg-white/55 backdrop-blur-xl shadow-[0_30px_90px_-45px_rgba(2,6,23,0.55)] overflow-hidden"
      whileHover={{ scale: prefersReduced ? 1 : 1.02 }}
      transition={{ type: 'spring', stiffness: 140, damping: 18 }}
    >
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -inset-[2px] rounded-[30px] opacity-60"
          style={{
            background:
              'conic-gradient(from 180deg at 50% 50%, rgba(59,130,246,0.55), rgba(14,165,233,0.25), rgba(249,115,22,0.45), rgba(59,130,246,0.55))',
          }}
          animate={prefersReduced ? undefined : { rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        />
        <div className="absolute inset-[2px] rounded-[28px] bg-white/55 backdrop-blur-xl" />
      </div>

      <div className="relative z-10 p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.26em] text-slate-500">Training Command Center</p>
            <p className="mt-1 text-base font-semibold text-slate-900">Training &amp; Delivery Hub</p>
          </div>

          <div className="flex -space-x-2">
            <span className="h-9 w-9 rounded-full bg-gradient-to-tr from-orange-400 to-orange-200 shadow-sm" />
            <span className="h-9 w-9 rounded-full bg-gradient-to-tr from-blue-600 to-blue-300 shadow-sm" />
            <span className="h-9 w-9 rounded-full bg-gradient-to-tr from-sky-400 to-blue-300 shadow-sm" />
          </div>
        </div>

        <div className="mt-5 rounded-2xl border border-slate-200/70 bg-white/70 p-4 shadow-sm">
          <svg viewBox="0 0 560 300" className="w-full h-auto" aria-hidden="true">
            <defs>
              <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="rgba(59,130,246,0.20)" />
                <stop offset="45%" stopColor="rgba(14,165,233,0.08)" />
                <stop offset="100%" stopColor="rgba(249,115,22,0.16)" />
              </linearGradient>
              <filter id={glowId} x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="8" />
              </filter>
            </defs>

            <rect x="0" y="0" width="560" height="300" rx="18" fill={`url(#${gradId})`} />
            <rect x="22" y="20" width="516" height="260" rx="18" fill="rgba(255,255,255,0.72)" />
            <rect x="22" y="20" width="516" height="260" rx="18" fill="none" stroke="rgba(2,6,23,0.08)" />

            {/* ✅ TOP TILES (fixed – no overlap) */}
            <g>
              <rect x="44" y="40" width="244" height="96" rx="16" fill="rgba(255,255,255,0.92)" />
              <rect x="44" y="40" width="244" height="96" rx="16" fill="none" stroke="rgba(37,99,235,0.15)" />

              <text x="64" y="68" fontSize="12" fill="rgba(37,99,235,0.95)" fontWeight="800">
                Full-Stack Track
              </text>

              <text x="64" y="106" fontSize="28" fill="rgba(15,23,42,0.95)" fontWeight="900">
                12 Weeks
              </text>

              {/* moved to its own line */}
              <text x="64" y="126" fontSize="12" fill="rgba(15,23,42,0.62)" fontWeight="800">
                Live + projects
              </text>
            </g>

            <g>
              <rect x="312" y="40" width="204" height="96" rx="16" fill="rgba(255,255,255,0.92)" />
              <rect x="312" y="40" width="204" height="96" rx="16" fill="none" stroke="rgba(249,115,22,0.16)" />

              <text x="332" y="68" fontSize="12" fill="rgba(234,88,12,0.95)" fontWeight="800">
                AI &amp; Automation
              </text>

              <text x="332" y="106" fontSize="28" fill="rgba(15,23,42,0.95)" fontWeight="900">
                6 Builds
              </text>

              {/* moved to its own line */}
              <text x="332" y="126" fontSize="12" fill="rgba(15,23,42,0.62)" fontWeight="800">
                Portfolio ready
              </text>
            </g>

            {/* pipeline (NOT graph) */}
            <path
              d="M70 196 C 150 160, 215 236, 280 196 C 345 160, 410 236, 490 196"
              fill="none"
              stroke="rgba(37,99,235,0.35)"
              strokeWidth="12"
              strokeLinecap="round"
              filter={`url(#${glowId})`}
            />
            <path
              d="M70 196 C 150 160, 215 236, 280 196 C 345 160, 410 236, 490 196"
              fill="none"
              stroke="rgba(37,99,235,0.72)"
              strokeWidth="4"
              strokeLinecap="round"
            />

            {[
              { x: 70, y: 196, t: 'Basics' },
              { x: 280, y: 196, t: 'Build' },
              { x: 490, y: 196, t: 'Deploy' },
            ].map((n, i) => (
              <g key={i}>
                <circle cx={n.x} cy={n.y} r="12" fill="rgba(255,255,255,0.98)" />
                <circle cx={n.x} cy={n.y} r="7" fill="rgba(37,99,235,0.95)" />
                <text x={n.x} y={n.y + 34} textAnchor="middle" fontSize="12" fill="rgba(15,23,42,0.70)" fontWeight="900">
                  {n.t}
                </text>
              </g>
            ))}

            <g>
              <rect x="44" y="230" width="472" height="40" rx="14" fill="rgba(255,255,255,0.92)" />
              <rect x="44" y="230" width="472" height="40" rx="14" fill="none" stroke="rgba(2,6,23,0.10)" />
              <text x="64" y="256" fontSize="12" fill="rgba(15,23,42,0.78)" fontWeight="900">
                Live sessions · Assignments · Mentorship · Certificates
              </text>
              <circle cx="482" cy="250" r="6" fill="rgba(34,197,94,0.92)" />
              <text x="498" y="254" fontSize="11" fill="rgba(15,23,42,0.55)" fontWeight="900">
                Active
              </text>
            </g>

            <motion.circle
              cx="70"
              cy="196"
              r="6"
              fill="rgba(249,115,22,0.95)"
              animate={prefersReduced ? undefined : { cx: [70, 280, 490, 70] }}
              transition={{ duration: 6.8, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* softer scan line so it doesn't “wash” text */}
            <motion.rect
              x="28"
              y="26"
              width="504"
              height="3"
              rx="2"
              fill="rgba(59,130,246,0.25)"
              animate={prefersReduced ? undefined : { y: [26, 270, 26] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
              opacity="0.5"
            />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

/* ---------------------------------------------
   Page
---------------------------------------------- */

export default function Home({ onNavigate }: HomeProps) {
  const prefersReduced = useReducedMotion();

  const stats = [
    { value: '500+', label: 'Projects Delivered', color: 'text-blue-700' },
    { value: '200+', label: 'Happy Clients', color: 'text-orange-600' },
    { value: '50+', label: 'Solutions', color: 'text-sky-600' },
    { value: '24/7', label: 'Support', color: 'text-slate-800' },
  ];

  const features = [
    {
      icon: Sparkles,
      title: 'AI-Powered Solutions',
      description: 'Practical AI that reduces workload and improves speed, accuracy and experience.',
      color: 'bg-blue-50 text-blue-700',
    },
    {
      icon: Zap,
      title: 'Rapid Delivery',
      description: 'Agile sprints, frequent demos, and production-ready engineering standards.',
      color: 'bg-orange-50 text-orange-700',
    },
    {
      icon: Target,
      title: 'Industry Focused',
      description: 'Domain-aware solutions for retail, healthcare, finance, education and more.',
      color: 'bg-sky-50 text-sky-700',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'UI/UX + engineering + AI — aligned to outcomes, not buzzwords.',
      color: 'bg-slate-50 text-slate-800',
    },
  ];

  const services = [
    {
      icon: Brain,
      title: 'Core AI Services',
      description: 'Strategy → chatbots → automation → deployment.',
      page: 'service-Core AI Services',
    },
    {
      icon: Smartphone,
      title: 'App Development',
      description: 'Modern web & mobile apps with scalable architecture.',
      page: 'service-App Development',
    },
    {
      icon: Receipt,
      title: 'Billing & ERP Solutions',
      description: 'Billing, POS, invoicing, inventory & ops control.',
      page: 'service-Billing & ERP Solutions',
    },
    {
      icon: LineChart,
      title: 'Data & Analytics',
      description: 'Dashboards, reporting, pipelines and KPIs.',
      page: 'service-Data & Analytics',
    },
  ];

  const industries = [
    'Retail & E-Commerce',
    'Healthcare & Clinics',
    'Education & EdTech',
    'Finance & Insurance',
    'Real Estate & Property',
    'Manufacturing & Logistics',
  ];

  const processSteps = [
    { step: '01', title: 'Discover', desc: 'Understand goals, workflows, users and constraints.' },
    { step: '02', title: 'Design', desc: 'UX + architecture + AI approach aligned to your vision.' },
    { step: '03', title: 'Build', desc: 'Agile delivery with demos, QA and feedback loops.' },
    { step: '04', title: 'Scale', desc: 'Monitoring, optimization, training and long-term support.' },
  ];

  const solutionModes = [
    {
      key: 'ai',
      label: 'AI & Automation',
      tag: 'Most popular',
      summary: 'Reduce manual work, respond faster, and make smarter decisions with your data.',
      outcomes: [
        'AI chatbots for support, leads & FAQs',
        'Workflow automation for repetitive tasks',
        'Recommendation & prediction models',
        'NLP for documents, emails & tickets',
      ],
      idealFor: 'Support-heavy teams, fast-scaling businesses, and ops teams drowning in manual work.',
    },
    {
      key: 'apps',
      label: 'Apps & Portals',
      tag: 'Product builds',
      summary: 'Build customer portals, internal tools, and mobile apps that are fast and secure.',
      outcomes: [
        'Web & mobile apps with clean UX',
        'Role-based portals for customers & staff',
        'Scalable APIs & microservices',
        'Built-in analytics & basic automation',
      ],
      idealFor: 'Founders, PMs and business owners launching new products or replacing legacy systems.',
    },
    {
      key: 'billing',
      label: 'Billing & ERP',
      tag: 'Operations',
      summary: 'Better control over billing, invoicing, inventory and branch-wise operations.',
      outcomes: ['Billing & invoicing flows', 'POS & multi-branch management', 'Inventory & purchases', 'Approvals + basic ERP'],
      idealFor: 'Retail, wholesale, manufacturing and services that have outgrown spreadsheets.',
    },
    {
      key: 'data',
      label: 'Data & Analytics',
      tag: 'Insights',
      summary: 'Dashboards, KPIs and a single source of truth for decision-making.',
      outcomes: ['Executive dashboards', 'Analytics layers', 'Data pipelines', 'Tracking + cohort analysis'],
      idealFor: 'Leadership, finance and ops teams who need clear visibility.',
    },
  ];

  const faqs = [
    {
      question: 'How do we start working with Software Infotech?',
      answer:
        'We start with a discovery call to understand your goals and existing tools. Then we propose a phased plan with timelines, scope, and budget.',
    },
    {
      question: 'Do you only work with enterprises?',
      answer:
        'No. We work with startups, SMEs and enterprises. We recommend tech that fits your stage and budget.',
    },
    {
      question: 'Can you work with our existing systems and data?',
      answer:
        'Yes. We often integrate with existing CRMs/ERPs/billing tools and databases. We focus on interoperability and gradual rollout.',
    },
    {
      question: 'What does support look like after go-live?',
      answer:
        'We offer flexible support models: monthly retainers, ticket-based support, or on-demand blocks. Monitoring and enhancements can be bundled.',
    },
  ];

  const trainingSlides = useMemo(
    () => [
      { title: 'Live mentor-led sessions', desc: 'Weekly classes + doubt clearing + guided practice.' },
      { title: 'Hands-on projects', desc: 'Build real apps, dashboards, and AI features end-to-end.' },
      { title: 'Portfolio & deployment', desc: 'Ship to production with Git, CI/CD and hosting.' },
      { title: 'Interview readiness', desc: 'Mock interviews, resume reviews and career support.' },
    ],
    []
  );

  const [activeSolutionKey, setActiveSolutionKey] = useState<string>(solutionModes[0].key);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [trainingIndex, setTrainingIndex] = useState(0);

  useEffect(() => {
    if (prefersReduced) return;
    const t = window.setInterval(() => {
      setTrainingIndex((i) => (i + 1) % trainingSlides.length);
    }, 2600);
    return () => window.clearInterval(t);
  }, [trainingSlides.length, prefersReduced]);

  const activeSolution = solutionModes.find((m) => m.key === activeSolutionKey) ?? solutionModes[0];

  // Parallax / tilt for hero right card
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const rotateX = useTransform(mouseY, [0, 1], [10, -10]);
  const rotateY = useTransform(mouseX, [0, 1], [-10, 10]);
  const translateY = useTransform(mouseY, [0, 1], [10, -10]);

  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (prefersReduced) return;
      const rect = event.currentTarget.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      mouseX.set(x);
      mouseY.set(y);
    },
    [mouseX, mouseY, prefersReduced]
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  }, [mouseX, mouseY]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* HERO */}
      <motion.section
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={cx(
          'relative overflow-hidden',
          // ✅ FIX overlap with fixed navbar: give a safer top padding on all screens
          'pt-28 sm:pt-32 lg:pt-36 pb-20',
          'bg-[radial-gradient(circle_at_10%_10%,rgba(59,130,246,0.18),transparent_38%),radial-gradient(circle_at_85%_25%,rgba(249,115,22,0.16),transparent_35%),radial-gradient(circle_at_60%_95%,rgba(14,165,233,0.14),transparent_40%)]'
        )}
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        {/* animated background grid + blobs */}
        <div className="pointer-events-none absolute inset-0">
          <div className="pointer-events-none absolute inset-0" />
          <motion.div
            className="absolute -top-40 -left-36 h-80 w-80 rounded-full bg-blue-400/20 blur-3xl"
            animate={prefersReduced ? undefined : { x: [0, 24, 0], y: [0, 40, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute -bottom-36 -right-20 h-96 w-96 rounded-full bg-orange-400/18 blur-3xl"
            animate={prefersReduced ? undefined : { x: [0, -18, 0], y: [0, -32, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute left-1/2 top-28 h-64 w-64 -translate-x-1/2 rounded-full bg-sky-400/10 blur-3xl"
            animate={prefersReduced ? undefined : { scale: [1, 1.12, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            {/* Left */}
            <div>
              <motion.div
                className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/60 px-4 py-1 text-sm shadow-sm backdrop-blur"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 }}
              >
                <Sparkles className="w-4 h-4 text-orange-600" />
                <span className="text-slate-700">Software Infotech · AI, Apps &amp; IT Fullstack Training</span>
              </motion.div>

              {/* New style heading (no clipping + no weird “&”) */}
              <motion.h1
                className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05]"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12 }}
              >
                AI-driven innovation
                <span className="block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-sky-500 to-orange-500">
                    future-ready IT training
                  </span>
                </span>
                <span className="block text-slate-900">for tomorrow’s business.</span>
              </motion.h1>

              <motion.p
                className="mt-5 text-lg sm:text-xl text-slate-700 max-w-xl"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                We build AI-enabled products and train teams to ship real outcomes — faster, cleaner, and production-ready.
              </motion.p>

              {/* badges */}
              <div className="mt-7 flex flex-wrap gap-3">
                <FloatingBadge icon={Brain} label="AI strategy, chatbots & automation" tone="blue" delay={0.22} />
                <FloatingBadge icon={Smartphone} label="Web & mobile app development" tone="slate" delay={0.26} />
                <FloatingBadge icon={Receipt} label="Billing, POS & ERP solutions" tone="orange" delay={0.3} />
                <FloatingBadge icon={LineChart} label="Dashboards & analytics" tone="blue" delay={0.34} />
                <FloatingBadge icon={GraduationCap} label="IT training & upskilling programs" tone="orange" delay={0.38} />
              </div>

              {/* Training block (animated) */}
              <div className="mt-7 max-w-xl">
                <div className="rounded-2xl border border-white/70 bg-white/60 backdrop-blur px-4 py-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-3">
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-50 border border-blue-100">
                        <GraduationCap className="w-5 h-5 text-blue-700" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900">Training that ships outcomes</p>
                        <p className="text-xs text-slate-500">Full-stack · AI · Real projects</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-2 text-xs text-slate-500">
                      <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                      Live
                    </span>
                  </div>

                  <div className="mt-3">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={trainingSlides[trainingIndex].title}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.28, ease: 'easeOut' }}
                        className="rounded-xl border border-slate-200 bg-white/85 px-3 py-2"
                      >
                        <p className="text-sm font-bold text-slate-900">{trainingSlides[trainingIndex].title}</p>
                        <p className="text-xs text-slate-600">{trainingSlides[trainingIndex].desc}</p>
                      </motion.div>
                    </AnimatePresence>

                    <div className="mt-2 flex gap-1.5">
                      {trainingSlides.map((_, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => setTrainingIndex(i)}
                          className={cx(
                            'h-1.5 rounded-full transition-all',
                            i === trainingIndex ? 'w-7 bg-blue-700' : 'w-3 bg-slate-300 hover:bg-slate-400'
                          )}
                          aria-label={`Show training item ${i + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <motion.div
                className="mt-8 flex flex-wrap items-center gap-3"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
              >
                <motion.button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-sm font-bold text-white shadow-lg hover:shadow-xl"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Book a free consult <ArrowRight className="w-4 h-4" />
                </motion.button>

                <motion.button
                  onClick={() => onNavigate('courses')}
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white/70 px-6 py-3 text-sm font-bold text-slate-900 shadow-sm hover:bg-white"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Explore courses <ArrowRight className="w-4 h-4" />
                </motion.button>

                <div className="flex items-center gap-6 text-sm text-slate-600 ml-1">
                  <div>
                    <span className="block font-bold text-slate-900">500+ projects</span>
                    <span className="text-xs text-slate-500">Delivered across industries</span>
                  </div>
                  <div className="hidden sm:block h-10 w-px bg-slate-300" />
                  <div className="hidden sm:block">
                    <span className="block font-bold text-slate-900">AI-first approach</span>
                    <span className="text-xs text-slate-500">Strategy → build → support</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right */}
            <motion.div
              style={{ rotateX, rotateY, translateY, transformStyle: 'preserve-3d' }}
              className="relative hidden lg:block"
              transition={{ type: 'spring', stiffness: 120, damping: 20 }}
            >
              <HeroControlPanel />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* STATS */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.08 } },
            }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}
              >
                <div className={cx('text-4xl md:text-5xl font-black mb-2', stat.color)}>{stat.value}</div>
                <div className="text-gray-600 font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* KEY SERVICES */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="text-sm font-black tracking-[0.25em] text-blue-700 uppercase mb-3">Services</p>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
              Everything you need to ship AI-ready products
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              From strategy and design to development and long-term support — end-to-end delivery.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <motion.button
                key={service.title}
                onClick={() => onNavigate(service.page)}
                className="group text-left rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900/5 border border-slate-200 group-hover:bg-slate-900/10">
                    <service.icon className="w-6 h-6 text-slate-900" />
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-slate-900 transition-transform group-hover:translate-x-1" />
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-2">{service.title}</h3>
                <p className="text-sm text-slate-600">{service.description}</p>
                <span className="mt-4 inline-block text-xs font-bold text-blue-700">Learn more →</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-white/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Why Choose Software Infotech</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              AI expertise + product thinking + rock-solid engineering — focused on outcomes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl border border-gray-100 transition-all"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -6 }}
              >
                <div className={`${feature.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-5 border border-slate-200/50`}>
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-black text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div>
              <p className="text-sm font-black tracking-[0.25em] text-blue-700 uppercase mb-3">Industries</p>
              <h2 className="text-3xl font-black text-slate-900 mb-2">Built for your domain, not just your stack.</h2>
              <p className="text-slate-600 max-w-xl">
                Every industry has its own workflows. We build domain-aware solutions that fit your reality.
              </p>
            </div>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 rounded-full border border-slate-900 px-6 py-2 text-sm font-black text-slate-900 hover:bg-slate-900 hover:text-white transition-all"
            >
              Discuss your use case
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {industries.map((industry) => (
              <motion.div
                key={industry}
                className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all cursor-default"
                whileHover={{ y: -2 }}
              >
                {industry}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-white/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">How We Work With You</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Clear steps, transparent delivery, and a rollout that doesn’t break your operations.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-4">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                className="relative rounded-2xl p-6 border border-gray-100 bg-white shadow-sm overflow-hidden"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -6 }}
              >
                {/* ✅ FIX: background step number never overlaps content */}
                <span className="pointer-events-none absolute right-3 top-2 text-[72px] font-black leading-none text-slate-200/70 select-none -z-0">
                  {step.step}
                </span>

                <div className="relative z-10">
                  <h3 className="text-lg font-black text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTION PLANNER */}
      <section className="py-20 bg-slate-950 text-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-10 text-center"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="text-xs font-black tracking-[0.25em] uppercase text-sky-300 mb-3">Solution Planner</p>
            <h2 className="text-3xl md:text-4xl font-black mb-3">
              Not sure where to start? Pick what you want to improve.
            </h2>
            <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto">
              Choose a focus area and we’ll show what a typical engagement looks like.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-8"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {solutionModes.map((mode) => {
              const isActive = mode.key === activeSolutionKey;
              return (
                <button
                  key={mode.key}
                  onClick={() => setActiveSolutionKey(mode.key)}
                  className={cx(
                    'inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs sm:text-sm transition-all font-bold',
                    isActive
                      ? 'border-white/30 bg-white/10 text-white shadow-sm'
                      : 'border-slate-800 bg-slate-950 text-slate-300 hover:border-white/30 hover:text-white'
                  )}
                >
                  <span>{mode.label}</span>
                  {mode.tag && (
                    <span className="hidden sm:inline-flex rounded-full bg-white/10 px-2 py-0.5 text-[10px] uppercase tracking-wide text-slate-100">
                      {mode.tag}
                    </span>
                  )}
                </button>
              );
            })}
          </motion.div>

          <motion.div
            key={activeSolution.key}
            className="grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-start rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-6 sm:p-8 shadow-2xl"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div>
              <h3 className="text-2xl font-black mb-3">{activeSolution.label} with Software Infotech</h3>
              <p className="text-sm md:text-base text-slate-200 mb-6">{activeSolution.summary}</p>

              <ul className="space-y-3 mb-6 text-sm text-slate-100">
                {activeSolution.outcomes.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-sky-300 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-xs md:text-sm text-slate-400">
                <span className="font-black text-slate-100">Ideal for:</span> {activeSolution.idealFor}
              </p>
            </div>

            <div className="space-y-4 text-sm">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-2">Typical timeline</p>
                <p className="text-base text-slate-100 mb-1 font-black">4–10 weeks to production-ready v1.</p>
                <p className="text-xs text-slate-400">
                  Starts with discovery, then design, implementation, and guided rollout.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-2">What we’ll ask</p>
                <ul className="space-y-2 text-slate-200">
                  <li>• What does success look like in 3–6 months?</li>
                  <li>• What tools and data do you already use?</li>
                  <li>• Who are the key users and decision makers?</li>
                </ul>
              </div>

              <button
                onClick={() => onNavigate('contact')}
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-black text-slate-950 shadow-lg transition-all hover:shadow-xl"
              >
                Talk to us about {activeSolution.label}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-10 text-center"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="text-xs font-black tracking-[0.25em] uppercase text-blue-700 mb-3">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3">Questions teams often ask.</h2>
            <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
              If you’re planning a new AI, app or billing project, these usually come up.
            </p>
          </motion.div>

          <div className="grid gap-10 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] items-start">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-3"
            >
              {faqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <motion.div
                    key={faq.question}
                    className="rounded-2xl border border-slate-200 bg-white shadow-sm"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      className="flex w-full items-center justify-between px-4 py-3 md:px-5 md:py-4 text-left"
                    >
                      <span className="text-sm md:text-base font-black text-slate-900">{faq.question}</span>
                      <ChevronDown
                        className={cx(
                          'ml-3 h-4 w-4 flex-shrink-0 text-slate-500 transition-transform',
                          isOpen && 'rotate-180'
                        )}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4 md:px-5 md:pb-5 text-xs md:text-sm text-slate-600 border-t border-slate-100">
                        {faq.answer}
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.div
              className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-md"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3 className="text-xl font-black text-slate-900 mb-3">Still unsure what you need?</h3>
              <p className="text-sm text-slate-700 mb-5">
                Share your tools, bottlenecks and goals. We’ll send a simple roadmap with options — no pressure.
              </p>
              <ul className="space-y-2 text-sm text-slate-800 mb-5">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 text-blue-700" />
                  <span>Honest suggestions (no jargon).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 text-blue-700" />
                  <span>High-level timeline and effort estimate.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 text-blue-700" />
                  <span>Ideas you can use even if you build elsewhere.</span>
                </li>
              </ul>
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-sm font-black text-white shadow-lg transition-all hover:shadow-xl"
              >
                Ask your question
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-white shadow-xl px-6 py-12 md:px-10 md:py-14 text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-black mb-6 text-slate-900"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
            >
              Ready to transform your business with AI-driven products?
            </motion.h2>

            <motion.p
              className="text-lg mb-8 text-slate-600"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
            >
              Tell us your goals — we’ll map how AI, custom apps, and smarter operations can unlock your next phase.
            </motion.p>

            <motion.button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-10 py-4 text-lg font-black text-white shadow-lg transition-all hover:shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Contact Us Today</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
}
