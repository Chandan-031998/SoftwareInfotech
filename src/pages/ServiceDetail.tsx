import { ArrowLeft, CheckCircle } from 'lucide-react';
import * as Icons from 'lucide-react';
import { services } from '../types/services';
import { motion } from 'framer-motion';

interface ServiceDetailProps {
  category: string;
  onNavigate: (page: string) => void;
}

export default function ServiceDetail({ category, onNavigate }: ServiceDetailProps) {
  const categoryServices = services.filter((service) => service.category === category);

  const colorClasses = [
    { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200' },
    { bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-200' },
  ];

  const deliverySteps = [
    {
      step: '01',
      title: 'Discover & Define',
      desc: 'We start by understanding your goals, challenges, and existing systems around this service area.',
    },
    {
      step: '02',
      title: 'Design the Solution',
      desc: 'We map workflows, architecture, and UX so the solution fits naturally into your business.',
    },
    {
      step: '03',
      title: 'Build & Integrate',
      desc: 'Our team develops, tests, and integrates the solution into your current environment.',
    },
    {
      step: '04',
      title: 'Launch & Evolve',
      desc: 'We roll out, train your team, and iterate based on real-world usage and feedback.',
    },
  ];

  const useCases = [
    'Automating repetitive workflows and manual processes',
    'Improving decision-making with data-driven insights',
    'Enhancing customer experiences with faster, smarter interactions',
    'Reducing operational costs and eliminating bottlenecks',
    'Launching new digital products or services faster',
  ];

  return (
    <div className="min-h-screen pt-20 bg-slate-50 text-slate-900">
      {/* HERO */}
      <motion.section
        className="bg-gradient-to-br from-blue-50 via-sky-50 to-orange-50 py-16 border-b border-blue-100/60"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center space-x-2 text-blue-700 hover:text-blue-900 mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </button>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            <span className="inline-flex items-center rounded-full bg-white/80 border border-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-blue-600 mb-4">
              Services · {category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              {category}
            </h1>
            <p className="text-lg md:text-xl text-slate-700 max-w-3xl">
              Explore our comprehensive suite of {category.toLowerCase()} services designed to
              streamline operations, unlock new opportunities, and drive measurable results.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* OVERVIEW */}
      <section className="py-14 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid gap-10 md:grid-cols-[minmax(0,1.8fr)_minmax(0,1.2fr)] md:items-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                What you get with our {category.toLowerCase()} offerings
              </h2>
              <p className="text-lg text-slate-700 mb-4 leading-relaxed">
                Every organization is different, which is why our {category.toLowerCase()} services
                are built to be flexible and scalable. We focus on understanding your workflows,
                customer journeys, and business goals before we write a single line of code.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Whether you&apos;re modernizing legacy systems, introducing AI capabilities, or
                building entirely new solutions, we ensure the technology fits seamlessly into your
                operations and delivers clear business value.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-sm font-semibold tracking-[0.2em] uppercase text-slate-500 mb-2">
                Why teams choose us
              </h3>
              <p className="text-sm text-slate-700 mb-4">
                Software Infotech blends AI expertise, product thinking, and engineering discipline
                into every engagement.
              </p>
              <ul className="space-y-2 text-sm text-slate-800">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
                  <span>Deep experience across AI, apps, billing and analytics.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
                  <span>Transparent communication and milestone-based delivery.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
                  <span>Focus on measurable impact, not just shipping features.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
                  <span>Long-term partnership mindset with ongoing support.</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICE CARDS */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {category} services in detail
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Each service covers a specific part of your digital journey, and they connect
              together into one cohesive solution.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {categoryServices.map((service, index) => {
              const IconComponent = (Icons as any)[service.icon] || Icons.Box;
              const colors = colorClasses[index % colorClasses.length];

              return (
                <motion.div
                  key={service.id}
                  className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col h-full"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="p-7 flex-1 flex flex-col">
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className={`${colors.bg} ${colors.text} p-3 rounded-xl flex-shrink-0 inline-flex items-center justify-center`}
                      >
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          {service.title}
                        </h3>
                        <p className="text-sm font-medium text-slate-500">
                          Part of the {category} suite
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm md:text-base mb-4 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="mt-auto">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">
                        What&apos;s included
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <CheckCircle
                              className={`w-4 h-4 ${colors.text} flex-shrink-0 mt-0.5`}
                            />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="px-7 py-4 border-t bg-slate-50/80">
                    <button
                      onClick={() => onNavigate('contact')}
                      className="text-sm font-semibold text-blue-700 hover:text-blue-900 hover:underline"
                    >
                      Get started with {service.title} →
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW WE DELIVER – NEW VERTICAL TIMELINE STYLE */}
      <section className="py-16 bg-slate-900 text-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div>
              <p className="text-xs font-semibold tracking-[0.25em] text-blue-300 uppercase mb-3">
                Delivery model
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                How we deliver {category.toLowerCase()} projects
              </h2>
              <p className="text-sm md:text-base text-slate-300 max-w-xl">
                A clear, collaborative process that keeps you involved at every step—from first
                workshop to post-launch optimization.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-700 bg-slate-900/60 px-5 py-4 text-xs md:text-sm text-slate-300 max-w-sm">
              <p className="font-semibold text-slate-100 mb-1">
                What working with us feels like
              </p>
              <p className="mb-2">
                Small, senior squads, frequent demos, and decisions made on data—not gut feeling.
              </p>
              <p className="text-slate-400">
                We aim for first value in 4–10 weeks, then iterate with you as your roadmap grows.
              </p>
            </div>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-[minmax(0,1.7fr)_minmax(0,1.1fr)]">
            {/* Timeline */}
            <motion.ol
              className="relative border-l border-slate-700 space-y-6 pl-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {deliverySteps.map((step, index) => (
                <li key={step.step} className="relative pl-4">
                  <span className="absolute -left-[11px] top-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-[10px] font-semibold text-white">
                    {index + 1}
                  </span>
                  <motion.div
                    className="rounded-xl bg-slate-900/60 border border-slate-700 p-4 shadow-sm"
                    whileHover={{ y: -3, borderColor: '#38bdf8' }}
                    transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                  >
                    <h3 className="text-sm md:text-base font-semibold text-slate-50 mb-1">
                      {step.title}
                    </h3>
                    <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                      {step.desc}
                    </p>
                  </motion.div>
                </li>
              ))}
            </motion.ol>

            {/* Small checklist / reassurance card */}
            <motion.div
              className="rounded-2xl bg-slate-900/70 border border-slate-700 p-6 space-y-4 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <p className="text-sm font-semibold text-slate-100">
                Throughout the engagement you can expect:
              </p>
              <ul className="space-y-3 text-xs md:text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5" />
                  <span>Weekly or bi-weekly check-ins with project leads.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5" />
                  <span>Shared dashboards for progress, risks, and decisions.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5" />
                  <span>Production-grade security, performance and monitoring baked in.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5" />
                  <span>Post-launch support and a clear roadmap for future phases.</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* USE CASES + CTA */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Where {category.toLowerCase()} makes the biggest impact
              </h2>
              <p className="text-lg text-slate-700 mb-4">
                Our clients use these services across many teams and departments. Here are some of
                the most common scenarios where {category.toLowerCase()} delivers fast ROI:
              </p>
              <ul className="space-y-2 text-slate-700">
                {useCases.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="rounded-3xl border border-blue-100 bg-white shadow-xl px-6 py-8 md:px-8 md:py-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="inline-flex items-center rounded-full bg-blue-50 border border-blue-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-700 mb-4">
                Next step
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Ready to explore {category.toLowerCase()} for your business?
              </h3>
              <p className="text-sm md:text-base text-slate-600 mb-6 leading-relaxed">
                Share your current challenges and goals with us. We&apos;ll map out a practical,
                step-by-step approach to implementing the right solution—no jargon, just clear
                options and timelines.
              </p>
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-3 text-sm md:text-base font-semibold text-white shadow-md transition-all hover:bg-blue-700 hover:shadow-lg"
              >
                Talk to our team
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
