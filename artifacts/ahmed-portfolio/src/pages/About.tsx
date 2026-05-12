import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Code2, Layers, Bot, Globe, Shield, Zap, Search, Layout } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const stagger = { animate: { transition: { staggerChildren: 0.1 } } };

const timeline = [
  {
    year: "2021",
    title: "Started with WordPress",
    desc: "Began building WordPress websites for small businesses, quickly specializing in speed optimization and security.",
  },
  {
    year: "2022",
    title: "Mastered Elementor & WooCommerce",
    desc: "Expanded into e-commerce with WooCommerce and pixel-perfect designs using Elementor Pro for clients across various industries.",
  },
  {
    year: "2023",
    title: "Embraced AI-Powered Development",
    desc: "Early adopter of AI coding tools — Claude, Google AI Studio, and Replit — integrating them into the WordPress workflow to deliver faster and smarter websites.",
  },
  {
    year: "2024",
    title: "Full-Stack AI + WordPress Expertise",
    desc: "Launched AI HTML-to-WordPress conversion service and began working with Lovable AI, mastering the complete no-code AI ecosystem.",
  },
  {
    year: "2025",
    title: "50+ Projects & Counting",
    desc: "Serving clients worldwide across e-commerce, LMS, business, portfolio, and booking websites — all powered by AI-enhanced WordPress development.",
  },
];

const skills = [
  { icon: <Globe size={20} />, label: "WordPress Development", level: 98 },
  { icon: <Layout size={20} />, label: "Elementor Page Builder", level: 95 },
  { icon: <Bot size={20} />, label: "Claude AI", level: 92 },
  { icon: <Bot size={20} />, label: "Google AI Studio", level: 90 },
  { icon: <Code2 size={20} />, label: "Replit AI", level: 88 },
  { icon: <Layers size={20} />, label: "Lovable AI", level: 87 },
  { icon: <Shield size={20} />, label: "WordPress Security", level: 93 },
  { icon: <Zap size={20} />, label: "Speed Optimization", level: 96 },
  { icon: <Search size={20} />, label: "On-Page SEO", level: 91 },
  { icon: <Code2 size={20} />, label: "WooCommerce", level: 94 },
];

const websiteTypes = [
  "E-Commerce Websites (WooCommerce)",
  "LMS Websites (LearnDash / Tutor LMS)",
  "Business Websites",
  "Portfolio Websites",
  "Service Booking Websites",
];

export default function About() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4 block">The Person Behind the Work</span>
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">
              Meet <span className="gradient-text">Ahmed Javed</span>
            </h1>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
              Professional website builder at the intersection of WordPress mastery and cutting-edge AI tools. Building websites that perform, convert, and last.
            </p>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={stagger}
            initial="initial"
            animate="animate"
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          >
            {[
              { value: "50+", label: "Projects Delivered" },
              { value: "5.0", label: "Client Rating" },
              { value: "3+", label: "Years of Experience" },
              { value: "100%", label: "Client Satisfaction" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                className="glass-card p-6 rounded-2xl text-center"
                data-testid={`stat-${stat.label.toLowerCase().replace(/\s/g, "-")}`}
              >
                <div className="text-4xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bio */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">My Story</h2>
              <div className="space-y-5 text-gray-400 leading-relaxed">
                <p>
                  I am Ahmed Javed — a professional website builder who has dedicated the past three-plus years to mastering the craft of building high-performance websites. My journey started with WordPress and never stopped evolving. Today, I sit at the convergence of two worlds: rock-solid WordPress development and the frontier of AI-powered coding tools.
                </p>
                <p>
                  What separates my work from the crowd is my ability to use AI tools like Claude, Google AI Studio, Replit, and Lovable AI to write, refine, and transform code — then adapt it seamlessly into WordPress environments. This means I can deliver in days what traditional developers take weeks to build, without sacrificing quality.
                </p>
                <p>
                  My WordPress services go deep: speed optimization that cuts load times by half, security hardening that stops attacks before they happen, on-page SEO that gets pages ranking, migrations that go live without a hitch, and Elementor designs that look custom-built because they are.
                </p>
                <p>
                  Whether you need an e-commerce store powered by WooCommerce, a learning management system, a polished portfolio, or a fully booked service site — I have built them all and I know what makes each one succeed.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="glass-card p-6 rounded-2xl">
                <h3 className="text-white font-semibold mb-5 text-lg">Website Types I Build</h3>
                <ul className="space-y-3">
                  {websiteTypes.map((type) => (
                    <li key={type} className="flex items-center gap-3 text-gray-300 text-sm">
                      <CheckCircle2 size={16} className="text-green-400 shrink-0" />
                      {type}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass-card p-6 rounded-2xl">
                <h3 className="text-white font-semibold mb-5 text-lg">AI Tools I Work With</h3>
                <div className="grid grid-cols-2 gap-3">
                  {["Claude AI", "Google AI Studio", "Replit AI", "Lovable AI"].map((tool) => (
                    <div key={tool} className="flex items-center gap-2 bg-white/5 rounded-xl px-4 py-3" data-testid={`badge-ai-tool-${tool.toLowerCase().replace(/\s/g, "-")}`}>
                      <Bot size={16} className="text-blue-400" />
                      <span className="text-gray-300 text-sm">{tool}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4 block">Expertise</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Skills & Proficiency</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="glass-card p-5 rounded-xl"
                data-testid={`skill-bar-${i}`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-blue-400">{skill.icon}</span>
                    <span className="text-gray-200 font-medium text-sm">{skill.label}</span>
                  </div>
                  <span className="text-blue-400 font-bold text-sm">{skill.level}%</span>
                </div>
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="h-full rounded-full"
                    style={{ background: "linear-gradient(90deg, #3b82f6, #8b5cf6)" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4 block">The Journey</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">How Ahmed Got Here</h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-transparent" />
            <div className="space-y-10">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-16"
                  data-testid={`timeline-item-${i}`}
                >
                  <div className="absolute left-0 w-12 h-12 rounded-xl gradient-btn flex items-center justify-center text-white text-xs font-bold">
                    {item.year}
                  </div>
                  <div className="glass-card p-5 rounded-xl">
                    <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/[0.02]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-5">Ready to Work <span className="gradient-text">Together?</span></h2>
            <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
              Whether you have a clear vision or just the beginning of an idea, Ahmed is here to make it real.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/service-booking" data-testid="link-about-cta-book">
                <button className="gradient-btn text-white font-semibold px-7 py-3.5 rounded-xl flex items-center gap-2">
                  Book a Consultation <ArrowRight size={18} />
                </button>
              </Link>
              <Link href="/services" data-testid="link-about-cta-services">
                <button className="bg-white/5 border border-white/10 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-200">
                  Browse Services
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
