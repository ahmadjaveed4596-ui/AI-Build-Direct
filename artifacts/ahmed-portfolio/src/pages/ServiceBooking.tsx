import { motion } from "framer-motion";
import { CalendarCheck, Clock, MessageSquare, Star, CheckCircle2 } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const howItWorks = [
  {
    step: "01",
    icon: <CalendarCheck size={24} className="text-blue-400" />,
    title: "Pick a Date",
    desc: "Choose a preferred date for your free consultation call. Ahmed is flexible and works across time zones.",
  },
  {
    step: "02",
    icon: <MessageSquare size={24} className="text-purple-400" />,
    title: "Describe Your Project",
    desc: "Fill in the details — what you need, your goals, and any specific requirements. The more context, the better.",
  },
  {
    step: "03",
    icon: <Clock size={24} className="text-cyan-400" />,
    title: "Get a Response in 24h",
    desc: "Ahmed reviews your submission and responds within 24 hours with a tailored plan and pricing breakdown.",
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    role: "E-Commerce Business Owner",
    text: "Ahmed transformed our slow WooCommerce store into a speed-optimised, secure powerhouse. Sales improved noticeably after the work was done.",
    rating: 5,
  },
  {
    name: "James L.",
    role: "Online Course Creator",
    text: "He built my LearnDash LMS site from scratch — clean, fast, and exactly what I envisioned. Communication was excellent throughout.",
    rating: 5,
  },
  {
    name: "Priya K.",
    role: "Freelance Consultant",
    text: "I had AI-generated HTML that I needed converted to WordPress. Ahmed did it perfectly and even improved the design along the way.",
    rating: 5,
  },
];

export default function ServiceBooking() {
  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4 block">Let's Get Started</span>
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">
              Book a <span className="gradient-text">Free Consultation</span>
            </h1>
            <p className="text-gray-400 text-xl leading-relaxed max-w-2xl mx-auto">
              No commitment, no pressure. Just a straightforward conversation about your project and how Ahmed can help you achieve your goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-2">How It Works</h2>
            <p className="text-gray-400">Simple, transparent process — three steps to get your project moving.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {howItWorks.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-7 rounded-2xl text-center relative"
                data-testid={`card-how-it-works-${i}`}
              >
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold px-3 py-1 rounded-full">
                  {step.step}
                </div>
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-5 mt-3">
                  {step.icon}
                </div>
                <h3 className="text-white font-semibold text-lg mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-3">Complete Your <span className="gradient-text">Booking</span></h2>
            <p className="text-gray-400">Fill in the details below. Ahmed will confirm your consultation slot within 24 hours.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ContactForm
              heading="Service Booking Form"
              subheading="Choose your service, preferred date, and describe what you need — Ahmed handles the rest."
            />
          </motion.div>
        </div>
      </section>

      {/* What's included in consultation */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 rounded-2xl">
            <h3 className="text-white font-bold text-xl mb-6 text-center">What Your Free Consultation Includes</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "30-minute discovery call",
                "Project requirements discussion",
                "Honest assessment of your needs",
                "Recommended approach & tools",
                "Rough timeline estimate",
                "Transparent pricing overview",
                "No-obligation follow-up",
                "Answers to all your questions",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-gray-300 text-sm" data-testid={`consultation-item-${item.toLowerCase().replace(/\s/g, "-")}`}>
                  <CheckCircle2 size={16} className="text-green-400 shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl font-bold text-white mb-2">What Clients Say</h2>
            <p className="text-gray-400">Real feedback from real projects.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6 rounded-2xl"
                data-testid={`testimonial-${i}`}
              >
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={14} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
