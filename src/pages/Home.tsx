import React, { useCallback, useState } from 'react';
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
  CheckCircle2,
  ChevronDown,
} from 'lucide-react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const stats = [
    { value: '500+', label: 'Projects Delivered', color: 'text-blue-600' },
    { value: '200+', label: 'Happy Clients', color: 'text-orange-500' },
    { value: '50+', label: 'AI Solutions', color: 'text-blue-500' },
    { value: '24/7', label: 'Support', color: 'text-orange-600' },
  ];

  const features = [
    {
      icon: Sparkles,
      title: 'AI-Powered Solutions',
      description:
        'Cutting-edge artificial intelligence to transform your business operations.',
      color: 'bg-blue-50 text-blue-600',
    },
    {
      icon: Zap,
      title: 'Rapid Development',
      description: 'Agile development with faster go-to-market and continuous delivery.',
      color: 'bg-orange-50 text-orange-600',
    },
    {
      icon: Target,
      title: 'Industry Focused',
      description: 'Tailored solutions for retail, healthcare, finance, education, and more.',
      color: 'bg-blue-50 text-blue-600',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Skilled professionals obsessed with quality and results.',
      color: 'bg-orange-50 text-orange-600',
    },
  ];

  const services = [
    {
      icon: Brain,
      title: 'Core AI Services',
      description:
        'From strategy to deployment – chatbots, predictive models, automation and more.',
      page: 'service-Core AI Services',
    },
    {
      icon: Smartphone,
      title: 'App Development',
      description:
        'Modern web & mobile apps with beautiful UI, scalable architecture, and AI built-in.',
      page: 'service-App Development',
    },
    {
      icon: Receipt,
      title: 'Billing & ERP Solutions',
      description:
        'Custom billing, POS, invoicing and lightweight ERP systems for growing businesses.',
      page: 'service-Billing & ERP Solutions',
    },
    {
      icon: LineChart,
      title: 'Data & Analytics',
      description:
        'Dashboards, reporting, and data pipelines that turn raw data into decisions.',
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
    {
      step: '01',
      title: 'Discover',
      desc: 'We understand your goals, workflows, and current tech landscape.',
    },
    {
      step: '02',
      title: 'Design',
      desc: 'We architect the solution, UX, and AI components aligned to your vision.',
    },
    {
      step: '03',
      title: 'Build',
      desc: 'Agile development with frequent demos, feedback loops, and QA.',
    },
    {
      step: '04',
      title: 'Scale',
      desc: 'We monitor, optimize, and scale your product as your business grows.',
    },
  ];

  // NEW: Interactive "Solution Planner" config
  const solutionModes = [
    {
      key: 'ai',
      label: 'AI & Automation',
      tag: 'Most popular',
      summary:
        'Perfect if you want to reduce manual work, respond faster to customers, or make smarter decisions with your data.',
      outcomes: [
        'AI chatbots for support, leads & FAQs',
        'Workflow automation for repetitive tasks',
        'Recommendation & prediction models',
        'NLP for documents, emails & tickets',
      ],
      idealFor: 'Support-heavy teams, fast-scaling businesses, or operations teams drowning in manual work.',
    },
    {
      key: 'apps',
      label: 'Apps & Portals',
      tag: 'Product builds',
      summary:
        'Ideal when you need a modern customer portal, internal tool, or mobile app that is fast, secure and future-ready.',
      outcomes: [
        'Web & mobile apps with clean UX',
        'Role-based portals for customers & staff',
        'Scalable APIs & microservices',
        'Built-in analytics & basic automation',
      ],
      idealFor:
        'Founders, PMs and business owners launching new products or replacing legacy systems.',
    },
    {
      key: 'billing',
      label: 'Billing & ERP',
      tag: 'Operations',
      summary:
        'Designed for companies that need better control over billing, invoicing, inventory and branch-wise operations.',
      outcomes: [
        'GST-ready billing & invoicing flows',
        'POS & multi-branch management',
        'Inventory, purchases & approvals',
        'Basic ERP tailored to your workflow',
      ],
      idealFor:
        'Retail, wholesale, manufacturing and service businesses that have outgrown spreadsheets.',
    },
    {
      key: 'data',
      label: 'Data & Analytics',
      tag: 'Insights',
      summary:
        'For teams that sit on a lot of data but don’t have clear dashboards, KPIs or a single source of truth.',
      outcomes: [
        'Executive dashboards & reports',
        'Power BI / custom analytics layers',
        'Data pipelines & single-source data views',
        'Projections, cohort analysis & tracking',
      ],
      idealFor: 'Leadership teams, finance heads and operations managers who need clear visibility.',
    },
  ];

  const faqs = [
    {
      question: 'How do we start working with Software Infotech?',
      answer:
        'We usually begin with a discovery call where we understand your goals, current tools and constraints. From there we propose a phased plan with clear timelines, scope and budget.',
    },
    {
      question: 'Do you only work with enterprises?',
      answer:
        'No. We work with startups, SMEs and enterprises. The approach stays the same – understand the business first, then recommend tech that actually fits your stage and budget.',
    },
    {
      question: 'Can you work with our existing systems and data?',
      answer:
        'Yes. A large part of our work involves integrating with existing CRMs, ERPs, billing tools and databases – not always replacing them. We focus on interoperability and gradual rollout.',
    },
    {
      question: 'What does support look like after go-live?',
      answer:
        'We offer flexible support models: fixed monthly retainers, ticket-based support or on-demand blocks. Monitoring, minor enhancements and training can be bundled as needed.',
    },
  ];

  // State for interactive sections
  const [activeSolutionKey, setActiveSolutionKey] = useState<string>(solutionModes[0].key);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const activeSolution =
    solutionModes.find((mode) => mode.key === activeSolutionKey) ?? solutionModes[0];

  // Parallax / tilt for hero card
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useTransform(mouseY, [0, 1], [12, -12]);
  const rotateY = useTransform(mouseX, [0, 1], [-12, 12]);
  const translateY = useTransform(mouseY, [0, 1], [10, -10]);

  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      const rect = event.currentTarget.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      mouseX.set(x);
      mouseY.set(y);
    },
    [mouseX, mouseY]
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
        className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-sky-50 to-orange-50 pt-36 pb-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        {/* subtle blobs */}
        <div className="pointer-events-none absolute inset-0">
          <motion.div
            className="absolute -top-40 -left-32 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl"
            animate={{ x: [0, 30, 0], y: [0, 40, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-orange-300/20 blur-3xl"
            animate={{ x: [0, -20, 0], y: [0, -30, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            {/* Left: text */}
            <div>
              <motion.div
                className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 py-1 text-sm mb-6 shadow-sm"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Sparkles className="w-4 h-4 text-orange-500" />
                <span className="text-slate-700">
                  Software Infotech · AI, Apps &amp; Billing Solutions
                </span>
              </motion.div>

              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Build the
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-500 to-blue-800">
                  future of your busines
                </span>
                with AI &amp; innovation.
              </motion.h1>

              <motion.p
                className="text-lg sm:text-xl text-slate-700 mb-6 max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                We help companies design, build, and scale AI-powered products, custom apps,
                and smart billing systems that actually move the needle.
              </motion.p>

              {/* Feature chips under hero text */}
              <motion.div
                className="flex flex-wrap gap-3 mb-8"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
              >
                <span className="inline-flex items-center gap-2 rounded-full bg-white/80 border border-blue-100 px-3 py-1.5 text-xs sm:text-sm text-slate-800">
                  <Brain className="w-4 h-4 text-blue-600" />
                  AI strategy, chatbots &amp; automation
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/80 border border-blue-100 px-3 py-1.5 text-xs sm:text-sm text-slate-800">
                  <Smartphone className="w-4 h-4 text-blue-600" />
                  Web &amp; mobile app development
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/80 border border-blue-100 px-3 py-1.5 text-xs sm:text-sm text-slate-800">
                  <Receipt className="w-4 h-4 text-blue-600" />
                  Billing, POS &amp; ERP solutions
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/80 border border-blue-100 px-3 py-1.5 text-xs sm:text-sm text-slate-800">
                  <LineChart className="w-4 h-4 text-blue-600" />
                  Real-time dashboards &amp; analytics
                </span>
              </motion.div>

              {/* Bottom mini-stats */}
              <motion.div
                className="flex items-center gap-6 text-sm text-slate-600"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
              >
                <div>
                  <span className="block font-semibold text-slate-900">500+ projects</span>
                  <span className="text-xs text-slate-500">
                    Delivered across multiple industries
                  </span>
                </div>
                <div className="h-10 w-px bg-slate-300" />
                <div>
                  <span className="block font-semibold text-slate-900">
                    AI-first approach
                  </span>
                  <span className="text-xs text-slate-500">
                    Strategy, build, and long-term support
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Right: Parallax card */}
            <motion.div
              style={{
                rotateX,
                rotateY,
                translateY,
                transformStyle: 'preserve-3d',
              }}
              className="relative hidden lg:block"
              transition={{ type: 'spring', stiffness: 120, damping: 20 }}
            >
              <motion.div
                className="relative bg-white border border-blue-100 rounded-3xl p-6 sm:p-8 shadow-xl"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                      AI Control Center
                    </p>
                    <p className="text-lg font-semibold text-slate-900 mt-1">
                      Software Infotech Dashboard
                    </p>
                  </div>
                  <div className="flex -space-x-2">
                    <span className="h-8 w-8 rounded-full bg-gradient-to-tr from-orange-400 to-orange-200" />
                    <span className="h-8 w-8 rounded-full bg-gradient-to-tr from-blue-400 to-blue-200" />
                    <span className="h-8 w-8 rounded-full bg-gradient-to-tr from-sky-400 to-blue-300" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <motion.div
                    className="rounded-2xl bg-blue-50 border border-blue-100 p-4"
                    whileHover={{ y: -4 }}
                  >
                    <p className="text-xs text-blue-600 mb-1">AI Automations</p>
                    <p className="text-2xl font-bold text-blue-700 mb-1">+148%</p>
                    <p className="text-xs text-blue-500">Efficiency gain</p>
                  </motion.div>
                  <motion.div
                    className="rounded-2xl bg-orange-50 border border-orange-100 p-4"
                    whileHover={{ y: -4 }}
                  >
                    <p className="text-xs text-orange-600 mb-1">Billing Accuracy</p>
                    <p className="text-2xl font-bold text-orange-600 mb-1">99.3%</p>
                    <p className="text-xs text-orange-500">Error reduction</p>
                  </motion.div>
                  <motion.div
                    className="rounded-2xl bg-slate-50 border border-slate-200 p-4 col-span-2 flex items-center gap-4"
                    whileHover={{ y: -4 }}
                  >
                    <img
                      src="/Software Infotech Logo png (3).png"
                      alt="Software Infotech"
                      className="h-12 w-auto rounded-lg bg-white p-2 border border-slate-100"
                    />
                    <div>
                      <p className="text-sm text-slate-700">
                        Trusted by teams in{' '}
                        <span className="font-semibold text-slate-900">
                          retail, healthcare, education, and finance
                        </span>
                        .
                      </p>
                      <p className="text-xs text-slate-500 mt-1">
                        Scalable, secure and future-ready architecture.
                      </p>
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  className="flex items-center justify-between text-xs text-slate-500"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <span>Live metrics · Real-time AI insights</span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                    Systems Online
                  </span>
                </motion.div>
              </motion.div>
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
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.1 },
              },
            }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <div className={`text-4xl md:text-5xl font-bold mb-2 ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="text-sm font-semibold tracking-[0.25em] text-blue-600 uppercase mb-3">
              Services
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Everything you need to ship AI-ready products
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              From strategy and design to development and long-term support, we cover the
              full lifecycle of your digital products.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <motion.button
                key={service.title}
                onClick={() => onNavigate(service.page)}
                className="group text-left bg-white border border-slate-200 hover:border-blue-400 hover:shadow-lg rounded-2xl p-6 flex flex-col justify-between transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 border border-blue-100 group-hover:bg-blue-100">
                      <service.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-transform group-hover:translate-x-1" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600">{service.description}</p>
                </div>
                <span className="mt-4 text-xs text-blue-600 group-hover:text-blue-500">
                  Learn more →
                </span>
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Software Infotech
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We combine AI expertise, product thinking, and rock-solid engineering to
              deliver solutions that drive real business outcomes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl border border-gray-100 transition-all transform hover:-translate-y-2 hover:-rotate-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ scale: 1.02 }}
              >
                <div
                  className={`${feature.color} w-16 h-16 rounded-lg flex items-center justify-center mb-6`}
                >
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div>
              <p className="text-sm font-semibold tracking-[0.25em] text-blue-600 uppercase mb-3">
                Industries
              </p>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">
                Built for your domain, not just your tech stack.
              </h2>
              <p className="text-slate-600 max-w-xl">
                Every industry has its own language and workflows. We bring domain-aware AI
                and product thinking tailored to your space.
              </p>
            </div>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 rounded-full border border-blue-500 px-6 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-50 transition-all"
            >
              Discuss your use case
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {industries.map((industry) => (
              <motion.div
                key={industry}
                className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm text-slate-800 hover:border-blue-400 hover:bg-blue-50 transition-all cursor-default"
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Work With You
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A simple, transparent process that keeps you involved from idea to launch and
              beyond.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-4">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                className="relative bg-white rounded-2xl p-6 border border-gray-100 overflow-hidden shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.05 }}
              >
                <span className="absolute right-4 top-4 text-5xl font-black text-slate-100">
                  {step.step}
                </span>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW INTERACTIVE SECTION: Solution Planner */}
      <section className="py-20 bg-slate-950 text-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-blue-400 mb-3">
              Solution Planner
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Not sure where to start? Choose what you want to improve.
            </h2>
            <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto">
              Pick a focus area below and we’ll show you what a typical engagement with
              Software Infotech looks like for that track.
            </p>
          </motion.div>

          {/* Tabs */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-8"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {solutionModes.map((mode) => {
              const isActive = mode.key === activeSolutionKey;
              return (
                <button
                  key={mode.key}
                  onClick={() => setActiveSolutionKey(mode.key)}
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs sm:text-sm transition-all ${
                    isActive
                      ? 'border-blue-400 bg-blue-500/10 text-blue-200 shadow-sm'
                      : 'border-slate-700 bg-slate-900 text-slate-300 hover:border-blue-500 hover:text-blue-100'
                  }`}
                >
                  <span>{mode.label}</span>
                  {mode.tag && (
                    <span className="hidden sm:inline-flex rounded-full bg-blue-500/20 px-2 py-0.5 text-[10px] uppercase tracking-wide text-blue-200">
                      {mode.tag}
                    </span>
                  )}
                </button>
              );
            })}
          </motion.div>

          {/* Active card */}
          <motion.div
            key={activeSolution.key}
            className="grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-start rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-6 sm:p-8 shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div>
              <h3 className="text-2xl font-semibold mb-3">
                {activeSolution.label} with Software Infotech
              </h3>
              <p className="text-sm md:text-base text-slate-200 mb-6">
                {activeSolution.summary}
              </p>

              <ul className="space-y-3 mb-6 text-sm text-slate-100">
                {activeSolution.outcomes.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-blue-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-xs md:text-sm text-slate-400">
                <span className="font-semibold text-slate-100">Ideal for:</span>{' '}
                {activeSolution.idealFor}
              </p>
            </div>

            <div className="space-y-4 text-sm">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 mb-2">
                  Typical timeline
                </p>
                <p className="text-base text-slate-100 mb-1">
                  4–10 weeks from idea to production-ready v1.
                </p>
                <p className="text-xs text-slate-400">
                  Starts with a discovery sprint, followed by design, implementation and a
                  guided rollout period.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 mb-2">
                  What we’ll ask you
                </p>
                <ul className="space-y-2 text-slate-200">
                  <li>• What does success look like in 3–6 months?</li>
                  <li>• What tools and data do you already use?</li>
                  <li>• Who are the key users and decision makers?</li>
                </ul>
              </div>

              <button
                onClick={() => onNavigate('contact')}
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl"
              >
                Talk to us about {activeSolution.label}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* NEW INTERACTIVE SECTION: FAQ */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-blue-600 mb-3">
              FAQ
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              Questions teams often ask us.
            </h2>
            <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
              If you&apos;re planning a new AI, app or billing project, you&apos;re probably
              thinking about these as well.
            </p>
          </motion.div>

          <div className="grid gap-10 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] items-start">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
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
                      onClick={() =>
                        setOpenFaqIndex(isOpen ? null : index)
                      }
                      className="flex w-full items-center justify-between px-4 py-3 md:px-5 md:py-4 text-left"
                    >
                      <span className="text-sm md:text-base font-semibold text-slate-900">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`ml-3 h-4 w-4 flex-shrink-0 text-slate-500 transition-transform ${
                          isOpen ? 'rotate-180' : ''
                        }`}
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
              className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-sky-50 to-orange-50 p-6 md:p-8 shadow-md"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Still unsure what you need?
              </h3>
              <p className="text-sm text-slate-700 mb-5">
                Share your current tools, bottlenecks and goals with us. We&apos;ll send you a
                simple roadmap outlining where AI, apps or billing upgrades can help – even if
                you don&apos;t start immediately.
              </p>
              <ul className="space-y-2 text-sm text-slate-800 mb-5">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 text-blue-500" />
                  <span>Honest suggestions – no jargon and no pressure to sign.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 text-blue-500" />
                  <span>High-level estimate of timelines and effort.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 text-blue-500" />
                  <span>Ideas you can use even if you work with another team.</span>
                </li>
              </ul>
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl"
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
          <div className="rounded-3xl border border-slate-200 bg-white/80 backdrop-blur shadow-xl px-6 py-12 md:px-10 md:py-14 text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6 text-slate-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
            >
              Ready to transform your business with AI-driven products?
            </motion.h2>

            <motion.p
              className="text-lg mb-8 text-slate-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
            >
              Tell us about your challenges and we’ll show you how AI, custom apps, and smart
              billing can unlock your next phase of growth.
            </motion.p>

            <motion.button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-10 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl"
              whileHover={{ scale: 1.06, y: -3 }}
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
