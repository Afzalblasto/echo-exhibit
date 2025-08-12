import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="min-h-screen py-20 px-4 lg:px-8 bg-gradient-dark">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold font-poppins mb-6">
            Let's
            <span className="block text-transparent bg-gradient-neon bg-clip-text">
              Talk
            </span>
          </h2>
          <p className="text-xl text-muted-foreground font-poppins max-w-2xl mx-auto">
            Ready to bring your vision to life? Let's create something extraordinary together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                whileHover={{ scale: 1.05, x: 10 }}
                className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-neon-cyan transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-gradient-neon rounded-lg flex items-center justify-center">
                  <Mail className="text-black" size={20} />
                </div>
                <div>
                  <p className="font-poppins font-semibold">Email</p>
                  <p className="text-muted-foreground">hello@afzalblasto.dev</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, x: 10 }}
                className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-neon-magenta transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-gradient-purple rounded-lg flex items-center justify-center">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <p className="font-poppins font-semibold">Phone</p>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, x: 10 }}
                className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-neon-purple transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-neon-purple rounded-lg flex items-center justify-center">
                  <MapPin className="text-black" size={20} />
                </div>
                <div>
                  <p className="font-poppins font-semibold">Location</p>
                  <p className="text-muted-foreground">San Francisco, CA</p>
                </div>
              </motion.div>
            </div>

            <motion.div
              animate={{
                rotate: [0, 360]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="w-64 h-64 mx-auto relative"
            >
              <div className="absolute inset-0 border-2 border-neon-cyan rounded-full opacity-20" />
              <div className="absolute inset-8 border-2 border-neon-magenta rounded-full opacity-30" />
              <div className="absolute inset-16 border-2 border-neon-purple rounded-full opacity-40" />
              <div className="absolute inset-24 bg-gradient-neon rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-black font-poppins">Contact</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full h-14 text-lg bg-card border-border focus:border-neon-cyan focus:ring-neon-cyan font-poppins"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full h-14 text-lg bg-card border-border focus:border-neon-cyan focus:ring-neon-cyan font-poppins"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full text-lg bg-card border-border focus:border-neon-cyan focus:ring-neon-cyan font-poppins resize-none"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Button
                  type="submit"
                  className="w-full h-14 text-lg font-bold bg-gradient-neon text-black hover:shadow-glow-cyan transition-all duration-300 font-poppins group"
                >
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center justify-center gap-3"
                  >
                    Let's Talk
                    <Send size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                  </motion.div>
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;