import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Loader2, Calendar, ChevronDown } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const serviceOptions = [
  { value: "wp-speed", label: "WordPress Speed Optimization" },
  { value: "wp-security", label: "WordPress Security Optimization" },
  { value: "wp-migration", label: "WordPress Migration" },
  { value: "wp-seo", label: "On-Page SEO" },
  { value: "wp-theme-clone", label: "WordPress Theme Cloning" },
  { value: "wp-elementor", label: "Elementor Page Builder Design" },
  { value: "ai-html-to-wp", label: "AI HTML to WordPress Conversion" },
  { value: "ai-claude", label: "AI Code Writing — Claude AI" },
  { value: "ai-gemini", label: "AI Code Writing — Google AI Studio" },
  { value: "ai-replit", label: "AI Code Writing — Replit AI" },
  { value: "ai-lovable", label: "AI Code Writing — Lovable AI" },
  { value: "wp-ecommerce", label: "E-Commerce Website (WooCommerce)" },
  { value: "wp-lms", label: "LMS Website (LearnDash/Tutor LMS)" },
  { value: "wp-business", label: "Business Website" },
  { value: "wp-portfolio", label: "Portfolio Website" },
  { value: "wp-booking", label: "Service Booking Website" },
  { value: "wp-backup", label: "Website Backup Optimization" },
];

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  preferredDate: z.string().min(1, "Please select a preferred date"),
  message: z.string().min(20, "Please describe your project (min 20 characters)"),
});

type FormValues = z.infer<typeof formSchema>;

interface ContactFormProps {
  heading?: string;
  subheading?: string;
}

export default function ContactForm({
  heading = "Let's Work Together",
  subheading = "Fill out the form below and Ahmed will get back to you within 24 hours.",
}: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      preferredDate: "",
      message: "",
    },
  });

  const { isSubmitting } = form.formState;

  async function onSubmit(values: FormValues) {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form submitted:", values);
    setSubmitted(true);
    toast({
      title: "Message sent!",
      description: "Ahmed will get back to you within 24 hours.",
    });
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card rounded-2xl p-10 text-center"
        data-testid="form-success"
      >
        <div className="w-20 h-20 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={40} className="text-green-400" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">Message Received!</h3>
        <p className="text-gray-400 mb-6 max-w-md mx-auto">
          Thank you for reaching out. Ahmed will review your project details and get back to you within 24 hours.
        </p>
        <button
          onClick={() => { setSubmitted(false); form.reset(); }}
          className="gradient-btn text-white font-semibold px-6 py-3 rounded-xl"
          data-testid="button-send-another"
        >
          Send Another Message
        </button>
      </motion.div>
    );
  }

  return (
    <div className="glass-card rounded-2xl p-6 sm:p-8 lg:p-10">
      {(heading || subheading) && (
        <div className="mb-8">
          {heading && <h3 className="text-2xl font-bold text-white mb-2">{heading}</h3>}
          {subheading && <p className="text-gray-400">{subheading}</p>}
        </div>
      )}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5" data-testid="contact-form">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-300 text-sm">Full Name *</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Your full name"
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-blue-500/50 focus:ring-blue-500/20 rounded-xl h-11"
                      data-testid="input-name"
                    />
                  </FormControl>
                  <FormMessage className="text-red-400 text-xs" />
                </FormItem>
              )}
            />

            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-300 text-sm">Email Address *</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      placeholder="your@email.com"
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-blue-500/50 focus:ring-blue-500/20 rounded-xl h-11"
                      data-testid="input-email"
                    />
                  </FormControl>
                  <FormMessage className="text-red-400 text-xs" />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Phone */}
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-300 text-sm">Phone / WhatsApp <span className="text-gray-500">(Optional)</span></FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="tel"
                      placeholder="+1 234 567 8900"
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-blue-500/50 focus:ring-blue-500/20 rounded-xl h-11"
                      data-testid="input-phone"
                    />
                  </FormControl>
                  <FormMessage className="text-red-400 text-xs" />
                </FormItem>
              )}
            />

            {/* Preferred Date */}
            <FormField
              control={form.control}
              name="preferredDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-300 text-sm">Preferred Consultation Date *</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="date"
                      min={new Date().toISOString().split("T")[0]}
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-blue-500/50 focus:ring-blue-500/20 rounded-xl h-11 [color-scheme:dark]"
                      data-testid="input-date"
                    />
                  </FormControl>
                  <FormMessage className="text-red-400 text-xs" />
                </FormItem>
              )}
            />
          </div>

          {/* Service */}
          <FormField
            control={form.control}
            name="service"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-300 text-sm">Select a Service *</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger
                      className="bg-white/5 border-white/10 text-white focus:border-blue-500/50 focus:ring-blue-500/20 rounded-xl h-11 data-[placeholder]:text-gray-500"
                      data-testid="select-service"
                    >
                      <SelectValue placeholder="Choose the service you need" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-[hsl(222,47%,10%)] border-white/10 text-white max-h-64">
                    {serviceOptions.map((opt) => (
                      <SelectItem
                        key={opt.value}
                        value={opt.value}
                        className="focus:bg-blue-500/20 focus:text-white cursor-pointer"
                        data-testid={`option-service-${opt.value}`}
                      >
                        {opt.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage className="text-red-400 text-xs" />
              </FormItem>
            )}
          />

          {/* Message */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-300 text-sm">Project Description *</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    rows={5}
                    placeholder="Tell Ahmed about your project, goals, and any specific requirements..."
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-blue-500/50 focus:ring-blue-500/20 rounded-xl resize-none"
                    data-testid="textarea-message"
                  />
                </FormControl>
                <FormMessage className="text-red-400 text-xs" />
              </FormItem>
            )}
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full gradient-btn text-white font-semibold px-6 py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
            data-testid="button-submit"
          >
            {isSubmitting ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                Sending your message...
              </>
            ) : (
              <>
                <Send size={18} />
                Send Message
              </>
            )}
          </button>
        </form>
      </Form>
    </div>
  );
}
