import React from 'react';
import { motion } from 'motion/react';
import { SectionHeader } from '../../components/common/SectionHeader';
import { STUDY_DATA, StudyItemData } from '../../data/study';

export const StudySection: React.FC = () => {
  return (
    <section className="relative bg-[#060913] text-white py-16 sm:py-24 my-16 sm:my-24">
      {/* Background glow effects matching footer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(242,81,45,0.12),rgba(255,255,255,0))]" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#f2512d]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[980px] mx-auto px-4 sm:px-6 relative z-10">

        {/* Section Header */}
        <SectionHeader
          title="EDUCATION"
          subtitle="Academic foundation, specialized certifications, and ongoing design research."
          dark={true}
          icon={
            <svg className="w-6 h-6 stroke-[2.2]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M12 14l9-5-9-5-9 5 9 5z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M22 10v6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          }
        />

        {/* Study Items List */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="space-y-12 sm:space-y-16"
        >
          {STUDY_DATA.map((study, index) => (
            <motion.div
              key={study.id}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.12 } },
              }}
              className={`grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-12 items-start ${index < STUDY_DATA.length - 1 ? 'pb-12 border-b border-dashed border-neutral-800/80' : ''
                }`}
            >
              {/* Left: Degree & Institution */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -24 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
                }}
                className="md:col-span-5"
              >
                <h3 className="font-sans font-bold text-lg sm:text-xl text-white">
                  {study.degree} — {study.institution}
                </h3>
                <span className="font-sans font-medium text-sm text-[#e74723] block mt-1">
                  {study.period}
                </span>
              </motion.div>

              {/* Right: Description Bullets & Image Cards Grid */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: 24 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
                }}
                className="md:col-span-7"
              >
                <motion.ul
                  variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.1 } },
                  }}
                  className="space-y-3 font-sans text-sm sm:text-base text-neutral-300 leading-relaxed"
                >
                  {study.bullets.map((bullet, idx) => (
                    <motion.li
                      key={idx}
                      variants={{
                        hidden: { opacity: 0, x: 20 },
                        visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
                      }}
                      className="flex items-start gap-2.5"
                    >
                      <span className="text-neutral-500 shrink-0">•</span>
                      <span>{bullet}</span>
                    </motion.li>
                  ))}
                </motion.ul>

                {/* Image side by side boxes */}
                <div className="mt-5 max-w-xl grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {study.images.map((img, i) => (
                    <div
                      key={i}
                      className="group relative rounded-xl overflow-hidden border border-neutral-800/90 bg-[#121812] aspect-[4/3] shadow-xs"
                    >
                      <img
                        src={img.url}
                        alt={img.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-2">
                        <span className="font-sans font-medium text-[11px] text-neutral-200 line-clamp-1 block text-center">
                          {img.title}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
