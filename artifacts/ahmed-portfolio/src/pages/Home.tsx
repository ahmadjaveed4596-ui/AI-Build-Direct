import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowRight, Star, Zap, Shield, Search, Globe, Code2, Wrench, Repeat2,
  Layout, Bot, CheckCircle2, Award, Clock, Users, HeartHandshake
} from "lucide-react";
import ContactForm from "@/components/ContactForm";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.1 } },
};

const services = [
  { icon: <Zap size={22} className="text-yellow-400" />, title: "Speed Optimization", desc: "Blazing-fast load times that boost UX and search rankings" },
  { icon: <Shield size={22} className="text-green-400" />, title: "Security Hardening", desc: "Enterprise-grade protection for your WordPress site" },
  { icon: <Search size={22} className="text-blue-400" />, title: "On-Page SEO", desc: "Technical and content SEO to rank higher on Google" },
  { icon: <Repeat2 size={22} className="text-purple-400" />, title: "WordPress Migration", desc: "Seamless, zero-downtime migrations to any host" },
  { icon: <Layout size={22} className="text-pink-400" />, title: "Elementor Design", desc: "Pixel-perfect pages built with Elementor Pro" },
  { icon: <Code2 size={22} className="text-cyan-400" />, title: "AI HTML to WordPress", desc: "Convert AI-generated code into WordPress-ready sites" },
  { icon: <Bot size={22} className="text-indigo-400" />, title: "AI Code Writing", desc: "Claude, Gemini, Replit & Lovable AI code crafted for you" },
  { icon: <Globe size={22} className="text-teal-400" />, title: "WordPress Websites", desc: "E-commerce, LMS, business, portfolio & booking sites" },
  { icon: <Wrench size={22} className="text-orange-400" />, title: "Theme Cloning", desc: "Replicate any design into a custom WordPress theme" },
];

const whyChooseMe = [
  {
    icon: <Bot size={24} className="text-blue-400" />,
    title: "AI-Powered Workflow",
    desc: "I leverage the latest AI tools — Claude, Gemini, Replit, and Lovable — to deliver smarter, faster websites that would take traditional developers days longer.",
  },
  {
    icon: <Clock size={24} className="text-purple-400" />,
    title: "Fast Turnaround",
    desc: "Time is money. I deliver projects on schedule with clear milestones and regular updates so you are never left wondering.",
  },
  {
    icon: <Award size={24} className="text-yellow-400" />,
    title: "Proven Results",
    desc: "50+ completed projects across e-commerce, LMS, and business websites with a track record of 5-star client satisfaction.",
  },
  {
    icon: <Shield size={24} className="text-green-400" />,
    title: "Security-First Approach",
    desc: "Every website is built with security as a core principle — not an afterthought. Your data and your visitors are protected.",
  },
  {
    icon: <HeartHandshake size={24} className="text-pink-400" />,
    title: "End-to-End Service",
    desc: "From planning to launch to ongoing maintenance, I am your single point of contact for everything website related.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background gradients */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
          <div className="absolute top-1/3 -right-32 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-cyan-600/10 rounded-full blur-3xl" />
          {/* Grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          {/* Badge */}
          <motion.div {...fadeUp} className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-medium px-4 py-2 rounded-full mb-8" data-testid="badge-hero">
            <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            WordPress & AI Website Expert — Available for Projects
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            data-testid="heading-hero"
          >
            I Build Websites{" "}
            <span className="gradient-text block sm:inline">That Actually Work</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
            data-testid="text-hero-subtitle"
          >
            Professional WordPress developer & AI tools specialist. From speed optimization to full site builds — delivering polished, high-performance websites powered by the latest AI workflow.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link href="/services" data-testid="link-hero-services">
              <button className="gradient-btn text-white font-semibold px-7 py-3.5 rounded-xl flex items-center gap-2 text-base">
                View My Services <ArrowRight size={18} />
              </button>
            </Link>
            <Link href="/service-booking" data-testid="link-hero-booking">
              <button className="bg-white/5 border border-white/10 text-white font-semibold px-7 py-3.5 rounded-xl flex items-center gap-2 text-base hover:bg-white/10 hover:border-white/20 transition-all duration-200">
                Book a Consultation
              </button>
            </Link>
          </motion.div>

          {/* Stats badges */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {[
              { value: "50+", label: "Projects Completed", className: "float-1" },
              { value: "5.0", label: "Average Rating", icon: <Star size={14} className="text-yellow-400 fill-yellow-400" />, className: "float-2" },
              { value: "3+", label: "Years Experience", className: "float-3" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className={`glass-card px-5 py-3 rounded-2xl flex items-center gap-3 ${stat.className}`}
                data-testid={`badge-stat-${stat.label.toLowerCase().replace(/\s/g, "-")}`}
              >
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-white font-bold text-xl">{stat.value}</span>
                    {stat.icon}
                  </div>
                  <span className="text-gray-400 text-xs">{stat.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="section-divider mb-16" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4 block">About Me</span>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                Ahmed Javed — <span className="gradient-text">The Website Builder</span> Behind the Work
              </h2>
              <p className="text-gray-400 leading-relaxed mb-5 text-lg">
                I am Ahmed Javed, a professional website builder who has mastered the intersection of no-code AI tools and WordPress development. With expertise spanning Claude AI, Google AI Studio, Replit, and Lovable, I write and refine AI-generated code to create websites that are both beautiful and technically sound.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                My WordPress capabilities cover the full spectrum — from speed optimization and security hardening to custom Elementor designs, theme cloning, and WordPress migrations. I build e-commerce stores, LMS platforms, business sites, portfolios, and booking systems — all tailored to your exact needs.
              </p>
              <Link href="/about" data-testid="link-about-more">
                <button className="flex items-center gap-2 text-blue-400 font-semibold hover:text-blue-300 transition-colors duration-200">
                  Learn More About Ahmed <ArrowRight size={18} />
                </button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { label: "WordPress Expert", color: "blue" },
                { label: "Elementor Pro", color: "purple" },
                { label: "Claude AI", color: "cyan" },
                { label: "Google AI Studio", color: "green" },
                { label: "Replit AI", color: "pink" },
                { label: "Lovable AI", color: "yellow" },
                { label: "WooCommerce", color: "orange" },
                { label: "On-Page SEO", color: "teal" },
              ].map((skill, i) => (
                <div
                  key={skill.label}
                  className="glass-card p-4 rounded-xl flex items-center gap-3"
                  data-testid={`badge-skill-${i}`}
                >
                  <div className={`w-2 h-2 rounded-full bg-${skill.color}-400`} />
                  <span className="text-gray-300 text-sm font-medium">{skill.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4 block">What I Do</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5">Services That <span className="gradient-text">Deliver Results</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Every service is designed to move the needle — faster sites, higher rankings, more security, better conversions.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                variants={fadeUp}
                className="glass-card p-6 rounded-2xl group cursor-default"
                data-testid={`card-service-${i}`}
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Link href="/services" data-testid="link-all-services">
              <button className="gradient-btn text-white font-semibold px-7 py-3.5 rounded-xl flex items-center gap-2 mx-auto">
                See All Services <ArrowRight size={18} />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4 block">Why Ahmed</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5">
              Why Choose <span className="gradient-text">Ahmed Javed</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              There are many developers out there. Here is what makes working with Ahmed genuinely different.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {whyChooseMe.map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className={`glass-card p-7 rounded-2xl ${i === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}
                data-testid={`card-why-${i}`}
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h3 className="text-white font-semibold text-lg mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4 block">Start Today</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5">
              Ready to <span className="gradient-text">Get Started?</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-lg">
              Tell Ahmed about your project and book a free consultation — no commitment required.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ContactForm
              heading="Book Your Free Consultation"
              subheading="Select your service, pick a date, and describe your project. Ahmed will reach out within 24 hours."
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
