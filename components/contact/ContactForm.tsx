"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "motion/react";
import { PiPaperPlaneTilt, PiSpinnerGap, PiPhone, PiEnvelope, PiWhatsappLogo, PiMapPin, PiClock, PiCheckCircle } from "react-icons/pi";
import { Button } from "@/components/ui/Button";
import { services, employeesOptions, siteConfig } from "@/lib/constants";

type FormData = {
  fullName: string;
  companyName: string;
  jobTitle: string;
  email: string;
  phone: string;
  employees: string;
  services: string[];
  message: string;
};

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    defaultValues: {
      services: [],
      employees: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setSubmissionError(null);
    const payload = {
      ...data,
      access_key: "0476a45d-3245-4316-8c69-6019db72f8ba",
      redirect: "https://yourdomain.com/contact?success=true",
    };
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setSubmissionError("Something went wrong. Please try again or email us directly.");
      }
    } catch {
      setSubmissionError("Something went wrong. Please try again or email us directly.");
    }
  };

  const inputBase =
    "w-full px-4 py-3 min-h-[44px] bg-background border border-zinc-200 dark:border-zinc-700 rounded-xl text-base text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors duration-200";

  const labelBase = "block text-base font-medium text-text-primary mb-1.5";

  if (submitted) {
    return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-lg mx-auto text-center py-16"
          >
            <div className="w-16 h-16 rounded-full bg-accent-light dark:bg-primary/20 flex items-center justify-center mx-auto mb-6">
              <PiCheckCircle size={32} className="text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-display font-bold tracking-tight text-text-primary">
              Thank You!
            </h2>
            <p className="mt-3 text-text-muted leading-relaxed">
              We&apos;ve received your message and will be in touch within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelBase}>
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register("fullName", { required: "Name is required" })}
                    className={inputBase}
                    placeholder="Your name"
                  />
                  {errors.fullName && (
                    <motion.p
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-1 text-sm text-red-500"
                    >
                      {errors.fullName.message}
                    </motion.p>
                  )}
                </div>
                <div>
                  <label className={labelBase}>
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register("companyName", { required: "Company is required" })}
                    className={inputBase}
                    placeholder="Your company"
                  />
                  {errors.companyName && (
                    <motion.p
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-1 text-sm text-red-500"
                    >
                      {errors.companyName.message}
                    </motion.p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelBase}>Job Title</label>
                  <input
                    {...register("jobTitle")}
                    className={inputBase}
                    placeholder="Your role"
                  />
                </div>
                <div>
                  <label className={labelBase}>
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: "Email is required" })}
                    className={inputBase}
                    placeholder="you@company.co.za"
                  />
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-1 text-sm text-red-500"
                    >
                      {errors.email.message}
                    </motion.p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelBase}>
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    {...register("phone", { required: "Phone is required" })}
                    className={inputBase}
                    placeholder="+27 00 000 0000"
                  />
                  {errors.phone && (
                    <motion.p
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-1 text-sm text-red-500"
                    >
                      {errors.phone.message}
                    </motion.p>
                  )}
                </div>
                <div>
                  <label className={labelBase}>Number of Employees</label>
                  <select {...register("employees")} className={inputBase}>
                    <option value="">Select size</option>
                    {employeesOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className={labelBase}>Services of Interest</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-2">
                  {services.map((s) => (
                    <label
                      key={s.title}
                      className="flex items-center gap-2.5 p-3 rounded-xl border border-zinc-200 dark:border-zinc-700 cursor-pointer hover:border-accent/40 transition-colors duration-200 has-[:checked]:border-accent has-[:checked]:bg-accent-light/50 dark:has-[:checked]:bg-primary/10"
                    >
                      <input
                        type="checkbox"
                        value={s.title}
                        {...register("services")}
                        className="w-4 h-4 rounded border-zinc-300 text-accent focus:ring-accent/30"
                      />
                      <span className="text-base text-text-primary">{s.title}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className={labelBase}>Message / Additional Info</label>
                <textarea
                  {...register("message")}
                  rows={4}
                  className={inputBase + " resize-none"}
                  placeholder="Tell us about your company's wellness needs..."
                />
              </div>

              {submissionError && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-red-500"
                >
                  {submissionError}
                </motion.p>
              )}
              <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
                {isSubmitting ? (
                  <>
                    <PiSpinnerGap size={16} className="animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2"
          >
            <div className="bg-surface rounded-2xl p-5 sm:p-8 border border-zinc-100 dark:border-zinc-800 space-y-6">
              <h3 className="text-lg font-display font-semibold text-text-primary">
                Contact Information
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <PiPhone size={18} className="text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-base font-medium text-text-primary">Phone</p>
                    <p className="text-base text-text-muted">{siteConfig.phone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <PiEnvelope size={18} className="text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-base font-medium text-text-primary">Email</p>
                    <p className="text-base text-text-muted">{siteConfig.email}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <PiWhatsappLogo size={18} className="text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-base font-medium text-text-primary">WhatsApp</p>
                    <p className="text-base text-text-muted">{siteConfig.whatsapp}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <PiMapPin size={18} className="text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-base font-medium text-text-primary">Location</p>
                    <p className="text-base text-text-muted">{siteConfig.location}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <PiClock size={18} className="text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-base font-medium text-text-primary">Hours</p>
                    <p className="text-base text-text-muted">{siteConfig.hours}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
