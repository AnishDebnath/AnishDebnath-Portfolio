import React, { useState } from 'react';
import { CheckCircle2, Mail } from 'lucide-react';
import { DarkButton } from '../../components/DarkButton';

export const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.email) return;
        setSubmitted(true);
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 mb-20 sm:mb-28 max-w-[980px] mx-auto">

            {/* Left Column: Dark Creative Banner with full background image */}
            <div className="md:col-span-5 bg-[#060913] text-white rounded-[28px] p-8 sm:p-10 flex flex-col justify-between overflow-hidden min-h-[460px] shadow-sm relative">
                {/* Background image covering whole div */}
                <img
                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80"
                    alt="Creative hand artwork"
                    className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale contrast-125"
                />

                {/* Background gradient & glow overlays matching footer theme */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#060913]/80 via-[#060913]/60 to-[#060913]/90 pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(242,81,45,0.2),rgba(255,255,255,0))] pointer-events-none" />
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#f2512d]/15 rounded-full blur-3xl pointer-events-none" />

                {/* Content without bold font effect */}
                <h2 className="font-display font-normal text-2xl sm:text-3xl uppercase tracking-tight text-[#f2512d] leading-tight relative z-10 mb-6">
                    SPARK CREATIVITY FOR YOUR UPCOMING PROJECT.
                </h2>
            </div>

            {/* Right Column: Contact Form */}
            <div className="md:col-span-7 bg-white rounded-[28px] p-8 sm:p-10 border border-neutral-200/80 shadow-sm flex flex-col justify-between">
                {submitted ? (
                    <div className="text-center py-12 space-y-4 my-auto">
                        <div className="w-14 h-14 rounded-full bg-[#f2512d]/10 text-[#f2512d] flex items-center justify-center mx-auto mb-3">
                            <CheckCircle2 className="w-7 h-7" />
                        </div>
                        <h3 className="font-display font-black text-2xl text-[#0d130d] uppercase">MESSAGE SENT!</h3>
                        <p className="text-neutral-600 font-sans text-sm max-w-xs mx-auto">
                            Thank you, {formData.name}. I will get back to you shortly at {formData.email}.
                        </p>
                        <DarkButton
                            onClick={() => setSubmitted(false)}
                            className="mt-4 px-5 py-2 text-xs uppercase font-semibold mx-auto"
                        >
                            Send another message
                        </DarkButton>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="font-sans font-semibold text-xs uppercase tracking-wider text-neutral-600 block mb-2">
                                NAME <span className="text-[#f2512d] ml-0.5">*</span>
                            </label>
                            <input
                                type="text"
                                required
                                placeholder="Your name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl bg-neutral-50/80 border border-neutral-200/80 font-sans text-sm text-[#0d130d] placeholder:text-neutral-400 focus:outline-none focus:bg-white focus:border-[#f2512d]/60 focus:ring-3 focus:ring-[#f2512d]/10 transition-all duration-200"
                            />
                        </div>

                        <div>
                            <label className="font-sans font-semibold text-xs uppercase tracking-wider text-neutral-600 block mb-2">
                                EMAIL ADDRESS <span className="text-[#f2512d] ml-0.5">*</span>
                            </label>
                            <input
                                type="email"
                                required
                                placeholder="antony@gmail.com"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl bg-neutral-50/80 border border-neutral-200/80 font-sans text-sm text-[#0d130d] placeholder:text-neutral-400 focus:outline-none focus:bg-white focus:border-[#f2512d]/60 focus:ring-3 focus:ring-[#f2512d]/10 transition-all duration-200"
                            />
                        </div>

                        <div>
                            <label className="font-sans font-semibold text-xs uppercase tracking-wider text-neutral-600 block mb-2">
                                WHATSAPP / PHONE NUMBER
                            </label>
                            <input
                                type="tel"
                                placeholder="+1 234 567 8900"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl bg-neutral-50/80 border border-neutral-200/80 font-sans text-sm text-[#0d130d] placeholder:text-neutral-400 focus:outline-none focus:bg-white focus:border-[#f2512d]/60 focus:ring-3 focus:ring-[#f2512d]/10 transition-all duration-200"
                            />
                        </div>

                        <div>
                            <label className="font-sans font-semibold text-xs uppercase tracking-wider text-neutral-600 block mb-2">
                                PROJECT TYPE / SUBJECT
                            </label>
                            <input
                                type="text"
                                placeholder="e.g. Web Design, Branding, Consultation"
                                value={formData.subject}
                                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl bg-neutral-50/80 border border-neutral-200/80 font-sans text-sm text-[#0d130d] placeholder:text-neutral-400 focus:outline-none focus:bg-white focus:border-[#f2512d]/60 focus:ring-3 focus:ring-[#f2512d]/10 transition-all duration-200"
                            />
                        </div>

                        <div>
                            <label className="font-sans font-semibold text-xs uppercase tracking-wider text-neutral-600 block mb-2">
                                YOUR MESSAGE <span className="text-[#f2512d] ml-0.5">*</span>
                            </label>
                            <textarea
                                rows={4}
                                required
                                placeholder="Tell me about your project goals, timeline, and budget..."
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl bg-neutral-50/80 border border-neutral-200/80 font-sans text-sm text-[#0d130d] placeholder:text-neutral-400 focus:outline-none focus:bg-white focus:border-[#f2512d]/60 focus:ring-3 focus:ring-[#f2512d]/10 transition-all duration-200 resize-none"
                            />
                        </div>

                        <div className="flex justify-end pt-2">
                            <button
                                type="submit"
                                className="px-6 py-3 rounded-xl bg-[#f2512d] hover:bg-[#d94220] text-white font-sans text-sm font-semibold flex items-center gap-2 transition-all duration-200 cursor-pointer shadow-md shadow-[#f2512d]/20 hover:shadow-lg hover:shadow-[#f2512d]/30 hover:-translate-y-0.5 active:translate-y-0"
                            >
                                <Mail className="w-4 h-4" />
                                <span>Send Message</span>
                            </button>
                        </div>
                    </form>
                )}
            </div>

        </div>
    );
};