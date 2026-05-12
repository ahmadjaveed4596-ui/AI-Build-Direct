import { motion } from "framer-motion";
import { Mail, Phone, Globe, Clock, MessageSquare } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const contactInfo = [
  {
    icon: <Mail size={22} className="text-blue-400" />,
    label: "Email",
    value: "contact@ahmedjaved.com",
    desc: "Send an email anytime — usually replied within 24 hours",
  },
  {
    icon: <Phone size={22} className="text-green-400" />,
    label: "WhatsApp",
    value: "Available on WhatsApp",
    desc: "Message for quick questions or project discussions",
  },
  {
    icon: <Globe size={22} className="text-purple-400" />,
    label: "Location",
    value: "Available Worldwide",
    desc: "Working with clients across all time zones remotely",
  },
  {
    icon: <Clock size={22} className="text-yellow-400" />,
    label: "Response Time",
    value: "Within 24 Hours",
    desc: "All messages are acknowledged within one business day",
  },
];

const faq = [
  {
    q: "How quickly can Ahmed start my project?",
    a: "After our consultation call and agreed scope, most projects start within 2–3 business days. Urgent projects can often be accommodated.",
  },
  {
    q: "Do you work with clients outside your time zone?",
    a: "Absolutely. Ahmed works with clients worldwide. Communication is handled asynchronously via email and WhatsApp, which works great across time zones.",
  },
  {
    q: "What information should I have ready before contacting you?",
    a: "The more context the better — your current site URL (if any), what you want to achieve, your target audience, and any deadline you're working toward.",
  },
  {
    q: "Do you offer ongoing maintenance after a project is completed?",
    a: "Yes. Ahmed offers ongoing maintenance packages for security updates, speed checks, backups, and content updates after your site launches.",
  },
  {
    q: "Can you work with my existing WordPress theme or plugin setup?",
    a: "Yes. Ahmed is experienced with virtually every major WordPress theme and plugin ecosystem. He will assess your setup and work within or improve it.",
  },
];

export default function Contact() {
  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4 block">Get In Touch</span>
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">
              Let's Start a <span className="gradient-text">Conversation</span>
            </h1>
            <p className="text-gray-400 text-xl leading-relaxed max-w-2xl mx-auto">
              Have a project in mind, a question about services, or just want to say hello? Ahmed is always open to hearing from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card p-6 rounded-2xl"
                data-testid={`contact-info-${info.label.toLowerCase()}`}
              >
                <div className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center mb-4">
                  {info.icon}
                </div>
                <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-1">{info.label}</p>
                <p className="text-white font-semibold text-sm mb-2">{info.value}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{info.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + FAQ */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <ContactForm
                heading="Send a Message"
                subheading="Select a service, pick a preferred date, and describe what you need."
              />
            </motion.div>

            {/* FAQ */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
                <MessageSquare size={20} className="text-blue-400" />
                Frequently Asked Questions
              </h3>
              <div className="space-y-4">
                {faq.map((item, i) => (
                  <div
                    key={i}
                    className="glass-card p-5 rounded-xl"
                    data-testid={`faq-${i}`}
                  >
                    <h4 className="text-white font-semibold text-sm mb-2">{item.q}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom note */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="w-14 h-14 rounded-2xl gradient-btn flex items-center justify-center mx-auto mb-5">
              <Mail size={24} className="text-white" />
            </div>
            <h3 className="text-white font-bold text-2xl mb-3">Prefer to Email Directly?</h3>
            <p className="text-gray-400 mb-4">
              If you prefer not to use the form, send Ahmed a direct email anytime. He reads every message personally.
            </p>
            <a
              href="mailto:contact@ahmedjaved.com"
              className="gradient-text font-semibold text-lg hover:opacity-80 transition-opacity duration-200"
              data-testid="link-email-direct"
            >
              contact@ahmedjaved.com
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
