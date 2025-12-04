import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, CalendarDays } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      type: 'email' as const,
      lines: ['info@softwareinfotech.com', 'support@softwareinfotech.com'],
      color: 'bg-blue-50 text-blue-600',
    },
    {
      icon: Phone,
      title: 'Phone',
      type: 'phone' as const,
      lines: ['+91 7338131749', '+91 9945943353'],
      color: 'bg-orange-50 text-orange-600',
    },
  ];

  const officeLocations = [
    {
      label: 'Registered Office',
      lines: [
        '131, 1st Floor, Opposite to Amarjyothi English School, Vinayaka Layout,',
        'Devasandra Main Road, 3rd Cross Road, Vinayaka Nagar, KR Puram,',
        'Bengaluru, Karnataka 560036',
      ],
    },
    {
      label: 'Branch Office – Bengaluru',
      lines: [
        'No. 2932/A, New Corporation No. 8, Second Floor, 14th Main Road,',
        'R.P.C Layout, Attiguppe, Vijayanagar,',
        'Bengaluru, Karnataka 560104',
      ],
    },
    {
      label: 'Branch Office – Mysuru',
      lines: [
        'No. 4, CNM Prime City, Nirmala School Road, Kandaya Nagara Main Road,',
        'Srirampura 2nd Stage,',
        'Mysuru – 570023',
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20 bg-slate-50 text-slate-900">
      {/* HERO */}
      <motion.section
        className="bg-gradient-to-br from-blue-50 via-sky-50 to-orange-50 text-slate-900 py-16 md:py-20 border-b border-blue-100/60"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 py-1 text-xs md:text-sm mb-4 shadow-sm"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <span className="h-2 w-2 rounded-full bg-green-500" />
            <span className="text-slate-700">Typically responds within 24 hours</span>
          </motion.div>

          <motion.h1
            className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            Let&apos;s build something
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-400 to-blue-600">
              smart for your business
            </span>
          </motion.h1>

          <motion.p
            className="text-base md:text-lg text-slate-700 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            Tell us a bit about your goals, and our team will reach out with the best way to
            move forward with AI, custom apps, or billing solutions.
          </motion.p>
        </div>
      </motion.section>

      {/* MAIN CONTENT: CONTACT CARDS + FORM */}
      <section className="py-14 md:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)] items-start">
            {/* LEFT: Contact cards + small CTA */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* email/phone cards */}
              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((info) => (
                  <div
                    key={info.title}
                    className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all"
                  >
                    <div
                      className={`${info.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4`}
                    >
                      <info.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-sm font-semibold text-slate-900 mb-1">
                      {info.title}
                    </h3>
                    <div className="text-sm text-slate-600 space-y-1">
                      {info.lines.map((line) => {
                        if (info.type === 'email') {
                          return (
                            <div key={line}>
                              <a
                                href={`mailto:${line}`}
                                className="hover:text-blue-600 hover:underline"
                              >
                                {line}
                              </a>
                            </div>
                          );
                        }
                        if (info.type === 'phone') {
                          return (
                            <div key={line}>
                              <a
                                href={`tel:${line.replace(/\s+/g, '')}`}
                                className="hover:text-orange-600 hover:underline"
                              >
                                {line}
                              </a>
                            </div>
                          );
                        }
                        return <p key={line}>{line}</p>;
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {/* small CTA card */}
              <div className="rounded-2xl border border-dashed border-slate-300 bg-white/80 p-5 flex flex-col gap-3">
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                  <CalendarDays className="w-4 h-4" />
                  <span>Prefer talking directly?</span>
                </div>
                <p className="text-sm text-slate-700">
                  You can also reach us via{' '}
                  <span className="font-semibold text-slate-900">phone</span> or use the
                  floating WhatsApp button to start a quick conversation with our team.
                </p>
                <p className="text-xs text-slate-500">
                  Business hours: Monday – Saturday, 9:30 AM – 6:30 PM IST
                </p>
              </div>

              {/* Offices summary (compact, full list below) */}
              <div className="hidden lg:block rounded-2xl bg-white border border-slate-200 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="h-8 w-8 rounded-full bg-blue-50 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-600">
                    Offices
                  </span>
                </div>
                <p className="text-sm text-slate-700 mb-2">
                  We&apos;re currently operating from:
                </p>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Bengaluru (Registered Office)</li>
                  <li>• Bengaluru (Branch Office)</li>
                  <li>• Mysuru (Branch Office)</li>
                </ul>
              </div>
            </motion.div>

            {/* RIGHT: Form */}
            <motion.div
              className="bg-white rounded-3xl shadow-xl border border-slate-100 p-6 md:p-8 lg:p-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                Tell us about your project
              </h2>
              <p className="text-sm md:text-base text-slate-600 mb-8">
                Fill out the form and we&apos;ll get back to you with next steps and
                timelines within one business day.
              </p>

              {isSubmitted ? (
                <div className="text-center py-10 md:py-12">
                  <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-12 h-12 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Thank you!
                  </h3>
                  <p className="text-base text-gray-600">
                    We&apos;ve received your message and will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-gray-700 mb-1.5"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none focus:ring-0 text-sm transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-gray-700 mb-1.5"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none focus:ring-0 text-sm transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-gray-700 mb-1.5"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none focus:ring-0 text-sm transition-colors"
                        placeholder="+91 7338131749"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-semibold text-gray-700 mb-1.5"
                      >
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none focus:ring-0 text-sm transition-colors"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-semibold text-gray-700 mb-1.5"
                    >
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none focus:ring-0 text-sm transition-colors bg-white"
                    >
                      <option value="">Select a service</option>
                      <option value="ai-services">Core AI Services</option>
                      <option value="retail">Retail & E-Commerce Solutions</option>
                      <option value="healthcare">Healthcare Solutions</option>
                      <option value="education">Education & Training</option>
                      <option value="finance">Finance & Insurance</option>
                      <option value="real-estate">Real Estate Solutions</option>
                      <option value="manufacturing">
                        Manufacturing & Logistics
                      </option>
                      <option value="app-development">App Building Services</option>
                      <option value="billing">Billing & ERP</option>
                      <option value="data">Data & Insights</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-gray-700 mb-1.5"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none focus:ring-0 text-sm transition-colors resize-none"
                      placeholder="Tell us about your project and requirements..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-xl font-semibold text-sm md:text-base flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    By submitting this form, you agree to be contacted by Software
                    Infotech regarding your inquiry.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* OFFICES GRID */}
      <section className="py-14 md:py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div>
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-blue-600 mb-2">
                Locations
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                Our offices in Karnataka
              </h2>
              <p className="text-sm md:text-base text-slate-600 mt-2 max-w-xl">
                Visit us or send documents to any of our offices in Bengaluru and Mysuru.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="grid gap-6 md:grid-cols-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {officeLocations.map((office) => (
              <div
                key={office.label}
                className="relative rounded-2xl border border-slate-200 bg-slate-50/60 hover:bg-white shadow-sm hover:shadow-md transition-all p-5 flex flex-col"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-blue-700" />
                  </div>
                  <h3 className="font-semibold text-slate-900 text-sm">
                    {office.label}
                  </h3>
                </div>
                <div className="text-xs md:text-sm text-slate-700 leading-relaxed">
                  {office.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-14 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="rounded-3xl border border-slate-200 bg-white/80 backdrop-blur shadow-xl px-6 py-10 md:px-10 md:py-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900">
              Prefer to schedule a call?
            </h2>
            <p className="text-sm md:text-base mb-7 text-slate-600 max-w-2xl mx-auto">
              Book a consultation with our experts to discuss your specific needs and
              explore tailored solutions for your business. You can also reach us via the
              floating WhatsApp button anytime.
            </p>
            <button className="inline-flex items-center gap-2 rounded-full border border-blue-600 bg-blue-600 px-8 py-3 text-sm md:text-base font-semibold text-white hover:bg-white hover:text-blue-700 transition-all shadow-lg hover:shadow-xl">
              <CalendarDays className="w-4 h-4" />
              <span>Schedule a consultation</span>
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
