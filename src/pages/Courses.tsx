// src/pages/Courses.tsx
import React, { useState } from 'react';
import { Search, SlidersHorizontal, Clock, Layers, X } from 'lucide-react';
import { coursesData } from '../data/coursesData';

type Course = {
  id: number;
  name: string;
  category: string;
  difficulty: string;
  duration: string;
  price: number;
  thumbnail: string;
  shortDescription: string;
  syllabus: string[];
};

const priceFormatter = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 0,
});

export default function Courses() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [categoryFilter, setCategoryFilter] = useState<string>('All');
  const [difficultyFilter, setDifficultyFilter] = useState<string>('All');

  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [studentName, setStudentName] = useState<string>('');
  const [mode, setMode] = useState<'Online' | 'Offline' | ''>('');
  const [error, setError] = useState<string>('');

  const categories: string[] = [
    'All',
    ...Array.from(new Set(coursesData.map((c: Course) => c.category))),
  ];

  const difficultyLevels: string[] = [
    'All',
    ...Array.from(new Set(coursesData.map((c: Course) => c.difficulty))),
  ];

  const filteredCourses: Course[] = coursesData.filter((course: Course) => {
    const term = searchTerm.trim().toLowerCase();

    const matchesSearch =
      term === '' ||
      course.name.toLowerCase().includes(term) ||
      course.shortDescription.toLowerCase().includes(term);

    const matchesCategory =
      categoryFilter === 'All' || course.category === categoryFilter;

    const matchesDifficulty =
      difficultyFilter === 'All' || course.difficulty === difficultyFilter;

    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  const handleEnrollClick = (course: Course) => {
    setSelectedCourse(course);
    setStudentName('');
    setMode('');
    setError('');
  };

  const handleWhatsappSubmit = () => {
    if (!selectedCourse) return;

    if (!studentName.trim() || !mode) {
      setError('Please enter your name and select a mode.');
      return;
    }

    const coursePrice = priceFormatter.format(selectedCourse.price);

    const message = `Hi, my name is ${studentName.trim()}.
I would like to enroll in the course: "${selectedCourse.name}".
Course fee: ${coursePrice}.
Preferred mode: ${mode}.`;

    const whatsappNumber = '919945943353'; // +91 9945943353
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp (web or app)
    window.open(url, '_blank');

    // Close modal
    setSelectedCourse(null);
  };

  const closeModal = () => {
    setSelectedCourse(null);
    setError('');
  };

  return (
    <div className="min-h-screen pt-20 bg-slate-50 text-slate-900">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 via-sky-50 to-orange-50 py-16 border-b border-blue-100/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-blue-600 mb-3">
            Courses &amp; Programs
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
            Learn IT, Data, Finance &amp; Business Tools
          </h1>
          <p className="text-lg md:text-xl text-slate-700 max-w-3xl">
            Curated, job-ready courses in IT, Computer Science, Data &amp; Analytics,
            Finance and modern business tools — with practical projects and
            industry-focused syllabi.
          </p>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search + filters */}
          <div className="bg-white rounded-2xl shadow-md p-4 md:p-6 mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex-1 relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search courses by name, topic or keyword..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-sm md:text-base"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 md:ml-4">
              <div className="flex items-center gap-2">
                <span className="hidden sm:inline-flex items-center justify-center rounded-full bg-blue-50 p-2">
                  <SlidersHorizontal className="w-4 h-4 text-blue-600" />
                </span>
                <select
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="w-full sm:w-44 px-3 py-2.5 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat === 'All' ? 'All Categories' : cat}
                    </option>
                  ))}
                </select>
              </div>

              <select
                value={difficultyFilter}
                onChange={(e) => setDifficultyFilter(e.target.value)}
                className="w-full sm:w-40 px-3 py-2.5 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
              >
                {difficultyLevels.map((level) => (
                  <option key={level} value={level}>
                    {level === 'All' ? 'All Levels' : level}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Meta info */}
          <div className="flex items-center justify-between mb-6 text-xs md:text-sm text-slate-600">
            <span>
              Showing{' '}
              <strong className="text-slate-900">
                {filteredCourses.length}
              </strong>{' '}
              of {coursesData.length} courses
            </span>
          </div>

          {/* Courses grid */}
          {filteredCourses.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-md p-10 text-center text-slate-600">
              No courses match your search and filter criteria. Try changing filters
              or clearing your search term.
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {filteredCourses.map((course) => (
                <div
                  key={course.id}
                  className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 flex flex-col"
                >
                  {/* Thumbnail */}
                  <div className="relative overflow-hidden rounded-t-2xl">
                    <img
                      src={course.thumbnail}
                      alt={course.name}
                      className="h-40 w-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="absolute bottom-3 left-3 inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-slate-800">
                      {course.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col p-5 md:p-6">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h2 className="text-lg md:text-xl font-semibold text-slate-900">
                        {course.name}
                      </h2>
                      <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-blue-700">
                        {course.difficulty}
                      </span>
                    </div>

                    <p className="text-sm text-slate-600 mb-4 line-clamp-3">
                      {course.shortDescription}
                    </p>

                    <div className="flex flex-wrap gap-3 mb-4 text-xs text-slate-700">
                      <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1">
                        <Clock className="w-3.5 h-3.5 text-blue-500" />
                        <span>{course.duration}</span>
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1">
                        <Layers className="w-3.5 h-3.5 text-orange-500" />
                        <span>{course.difficulty}</span>
                      </span>
                      <span className="ml-auto inline-flex items-center rounded-full bg-orange-50 px-3 py-1 font-semibold text-orange-700">
                        {priceFormatter.format(course.price)}
                      </span>
                    </div>

                    {/* Syllabus */}
                    <div className="mb-4">
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                        Syllabus Overview
                      </p>
                      <ul className="space-y-1.5 text-xs text-slate-700 max-h-28 overflow-y-auto pr-1">
                        {course.syllabus.map((item, idx) => (
                          <li key={idx} className="flex gap-2">
                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Enroll button -> opens WhatsApp flow modal */}
                    <button
                      onClick={() => handleEnrollClick(course)}
                      className="mt-auto inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md hover:shadow-lg hover:bg-blue-700 transition-all"
                    >
                      Enroll Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Enroll modal */}
      {selectedCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-slate-400 hover:text-slate-600"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-semibold text-slate-900 mb-1">
              Enroll in {selectedCourse.name}
            </h3>
            <p className="text-sm text-slate-500 mb-4">
              Course fee:{' '}
              <span className="font-semibold text-slate-800">
                {priceFormatter.format(selectedCourse.price)}
              </span>
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <span className="block text-sm font-medium text-slate-700 mb-1">
                  Mode
                </span>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setMode('Online')}
                    className={`flex-1 rounded-lg border px-3 py-2 text-sm font-medium ${
                      mode === 'Online'
                        ? 'border-blue-600 bg-blue-50 text-blue-700'
                        : 'border-slate-300 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    Online
                  </button>
                  <button
                    type="button"
                    onClick={() => setMode('Offline')}
                    className={`flex-1 rounded-lg border px-3 py-2 text-sm font-medium ${
                      mode === 'Offline'
                        ? 'border-blue-600 bg-blue-50 text-blue-700'
                        : 'border-slate-300 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    Offline
                  </button>
                </div>
              </div>

              {error && (
                <p className="text-xs text-red-600 bg-red-50 border border-red-100 rounded-md px-2 py-1">
                  {error}
                </p>
              )}
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={closeModal}
                className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                Cancel
              </button>
              <button
                onClick={handleWhatsappSubmit}
                className="rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-700 shadow-sm"
              >
                Continue to WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
