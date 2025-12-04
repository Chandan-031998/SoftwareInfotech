import {
  Target,
  Eye,
  Award,
  TrendingUp,
  ArrowRight,
  Users,
  MapPin,
  CheckCircle2,
  Clock,
} from 'lucide-react';
import { motion } from 'framer-motion';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function About({ onNavigate }: HomeProps) {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description:
        'To empower businesses worldwide with innovative AI solutions and custom software that drives growth, efficiency, and competitive advantage.',
      color: 'bg-blue-50 text-blue-600',
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description:
        'To be the global leader in AI-driven digital transformation, making advanced technology accessible and beneficial for businesses of all sizes.',
      color: 'bg-orange-50 text-orange-600',
    },
    {
      icon: Award,
      title: 'Our Values',
      description:
        'Excellence, innovation, integrity, and customer success are at the core of everything we do. We believe in building lasting partnerships.',
      color: 'bg-blue-50 text-blue-600',
    },
    {
      icon: TrendingUp,
      title: 'Our Approach',
      description:
        'We combine cutting-edge technology with deep industry expertise to deliver solutions that are not just innovative but also practical and results-driven.',
      color: 'bg-orange-50 text-orange-600',
    },
  ];

  const expertise = [
    { area: 'Artificial Intelligence', percentage: 95, color: 'bg-blue-600' },
    { area: 'Custom Software Development', percentage: 98, color: 'bg-orange-500' },
    { area: 'Process Automation', percentage: 92, color: 'bg-blue-500' },
    { area: 'Data Analytics', percentage: 90, color: 'bg-orange-400' },
  ];

  const journey = [
    {
      phase: 'Discovery & Strategy',
      icon: Target,
      description:
        'We start by understanding your business model, current tools and success metrics, then identify the highest-impact opportunities.',
    },
    {
      phase: 'Design & Architecture',
      icon: Eye,
      description:
        'Our team designs the user experience and technical architecture—ensuring scalability, security and maintainability from day one.',
    },
    {
      phase: 'Build, Test & Launch',
      icon: Award,
      description:
        'We implement in agile sprints with regular demos, feedback loops and rigorous QA before rolling out to real users.',
    },
    {
      phase: 'Scale & Evolve',
      icon: TrendingUp,
      description:
        'Once live, we monitor, optimize and extend your solution as your business grows and your roadmap evolves.',
    },
  ];

  const culturePoints = [
    'We treat every project as a long-term partnership, not a one-off delivery.',
    'We communicate in simple language—no unnecessary jargon, clear expectations.',
    'We prefer small, senior squads over large, inefficient teams.',
    'We design with your team’s real day-to-day workflows in mind.',
  ];

  const deliveryStats = [
    { label: 'Average project rating', value: '4.8/5' },
    { label: 'On-time delivery', value: '95%+' },
    { label: 'Repeat customers', value: '70%+' },
  ];

  return (
    <div className="min-h-screen pt-20 bg-slate-50 text-slate-900">
      {/* HERO */}
      <motion.section
        className="relative bg-gradient-to-br from-blue-50 via-sky-50 to-orange-50 text-slate-900 py-20 overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {/* subtle blobs */}
        <div className="pointer-events-none absolute inset-0">
          <motion.div
            className="absolute -top-32 -left-24 h-64 w-64 rounded-full bg-blue-300/20 blur-3xl"
            animate={{ x: [0, 25, 0], y: [0, 35, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute -bottom-28 -right-20 h-72 w-72 rounded-full bg-orange-300/20 blur-3xl"
            animate={{ x: [0, -20, 0], y: [0, -30, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            About{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-400 to-blue-600">
              Software Infotech
            </span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-slate-700 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            We are a team of passionate innovators, developers, and AI specialists committed
            to transforming businesses through technology.
          </motion.p>
        </div>
      </motion.section>

      {/* STORY + LOGO CARD */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Pioneering Digital Transformation Since Day One
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Software Infotech has been at the forefront of technological innovation,
                helping businesses across industries leverage the power of AI, automation,
                and custom software solutions.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our multidisciplinary team brings together expertise in artificial
                intelligence, machine learning, software engineering, and business
                consulting to deliver comprehensive solutions that address real-world
                challenges.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From startups to enterprises, we&apos;ve helped organizations streamline
                operations, enhance customer experiences, and unlock new revenue
                opportunities through intelligent technology.
              </p>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-300 to-blue-400 rounded-2xl transform rotate-2 opacity-60" />
              <motion.div
                className="relative bg-white rounded-2xl p-8 shadow-2xl border border-slate-100"
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 200, damping: 18 }}
              >
                <img
                  src="/Software Infotech Logo png (3).png"
                  alt="Software Infotech"
                  className="w-full h-auto"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* OUR JOURNEY / DELIVERY FLOW */}
      <section className="py-20 bg-slate-900 text-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div>
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-blue-400 mb-3">
                How we partner with you
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                A clear, outcome-driven delivery model.
              </h2>
              <p className="text-sm md:text-base text-slate-300 max-w-xl">
                Every engagement follows a proven roadmap—from understanding your business
                context to scaling a solution that actually moves your metrics.
              </p>
            </div>
            <div className="flex items-center gap-4 text-xs md:text-sm text-slate-300">
              <Clock className="w-5 h-5 text-blue-300" />
              <div>
                <p className="font-semibold text-slate-100">4–10 weeks to ship v1</p>
                <p className="text-slate-400">
                  Depending on scope, we prefer small, focused releases over big-bang
                  launches.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {journey.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.phase}
                  className="relative rounded-2xl border border-slate-700 bg-slate-900/60 p-5 shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -4, borderColor: '#38bdf8' }}
                >
                  <span className="absolute right-4 top-3 text-xs font-mono text-slate-500">
                    0{index + 1}
                  </span>
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 border border-blue-400/40">
                    <Icon className="w-5 h-5 text-blue-300" />
                  </div>
                  <h3 className="text-base md:text-lg font-semibold mb-2">
                    {item.phase}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CORE PRINCIPLES */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Principles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These values guide every project we undertake and every relationship we build.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -4 }}
              >
                <div
                  className={`${value.color} w-16 h-16 rounded-lg flex items-center justify-center mb-6`}
                >
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven capabilities across multiple domains of technology and business.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {expertise.map((item, index) => (
              <motion.div
                key={item.area}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="text-lg font-semibold text-gray-900">{item.area}</span>
                  <span className="text-lg font-bold text-gray-700">
                    {item.percentage}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                  <motion.div
                    className={`${item.color} h-full rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.percentage}%` }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM & CULTURE */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid gap-10 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] items-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 border border-slate-200 mb-4">
                <Users className="w-4 h-4 text-blue-600" />
                Our team & culture
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-3">
                Built by people who love solving hard problems.
              </h2>
              <p className="text-sm md:text-base text-slate-700 mb-5 max-w-2xl">
                We deliberately keep our teams lean and senior-heavy. That means fewer layers
                of management, more direct access to experts, and faster decision making on
                your projects.
              </p>
              <ul className="space-y-3 text-sm md:text-base text-slate-800">
                {culturePoints.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-blue-600 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <motion.div
                className="rounded-2xl bg-white shadow-md border border-slate-200 p-5 flex items-start gap-3"
                whileHover={{ y: -3 }}
              >
                <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                <div>
                  <p className="text-sm font-semibold text-slate-900 mb-1">
                    Remote-friendly, India-first delivery
                  </p>
                  <p className="text-xs text-slate-600">
                    We&apos;re based in Bengaluru and work comfortably across time zones,
                    combining cost efficiency with senior engineering talent.
                  </p>
                </div>
              </motion.div>

              <div className="grid grid-cols-3 gap-3">
                {deliveryStats.map((stat) => (
                  <motion.div
                    key={stat.label}
                    className="rounded-2xl bg-white shadow-sm border border-slate-200 p-4 text-center"
                    whileHover={{ y: -3 }}
                  >
                    <p className="text-lg font-bold text-slate-900 mb-1">
                      {stat.value}
                    </p>
                    <p className="text-[11px] text-slate-500">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
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
