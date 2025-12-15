'use client';

import Header from "@/components/Header";
import Footer from "@/components/landing/Footer";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí irá la lógica para enviar el email
    console.log("Formulario enviado:", formData);
    setFormData({ nombre: "", email: "", asunto: "", mensaje: "" });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      content: "aluna.ia.iot@gmail.com",
      href: "mailto:aluna.ia.iot@gmail.com",
    },
    {
      icon: Phone,
      title: "Teléfono",
      content: "+57 300 123 4567",
      href: "tel:+573001234567",
    },
    {
      icon: MapPin,
      title: "Ubicación",
      content: "Medellín, Colombia",
      href: "#",
    },
  ];

  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen">
        <section className="relative py-32 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-grid opacity-10" />
          <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/50 to-transparent" />

          <div className="container mx-auto px-6 relative z-10 max-w-6xl">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <motion.span
                className="inline-block font-inter text-sm tracking-[0.3em] uppercase text-primary mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Ponte en Contacto
              </motion.span>
              <h2 className="font-josefin text-3xl md:text-5xl font-light mb-6 tracking-wide">
                <span className="text-foreground">Hablemos de tu </span>
                <span className="gradient-text">Proyecto</span>
              </h2>
              <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto font-light">
                ¿Tienes preguntas? Nos encantaría escucharte y ayudarte a implementar Aluna en tu organización
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <motion.a
                    key={method.title}
                    href={method.href}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group relative"
                  >
                    {/* Card */}
                    <div className="relative h-full p-8 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm transition-all duration-500 hover:border-primary/50 hover:bg-card/80 hover:shadow-[0_0_30px_hsl(195_100%_50%/0.1)]">
                      {/* Gradient Background */}
                      <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                      {/* Icon Container */}
                      <div className="relative mb-6 flex justify-center">
                        <motion.div
                          className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <Icon className="w-7 h-7 text-primary" />
                        </motion.div>
                      </div>

                      {/* Content */}
                      <div className="relative text-center">
                        <h3 className="text-lg font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                          {method.title}
                        </h3>
                        <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 font-inter break-all">
                          {method.content}
                        </p>
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="max-w-2xl mx-auto"
            >
              <div className="relative p-8 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm hover:border-primary/50 hover:bg-card/80 transition-all duration-500">
                {/* Gradient Background */}
                <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-primary/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <form
                  onSubmit={handleSubmit}
                  className="space-y-6 relative"
                >
                  <h3 className="text-2xl font-bold mb-8 text-foreground">Envíanos un Mensaje</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-3 text-foreground">Nombre</label>
                      <input
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border/50 bg-background/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:bg-background transition-all duration-300"
                        placeholder="Tu nombre"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-3 text-foreground">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border/50 bg-background/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:bg-background transition-all duration-300"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-3 text-foreground">Asunto</label>
                    <input
                      type="text"
                      name="asunto"
                      value={formData.asunto}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border/50 bg-background/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:bg-background transition-all duration-300"
                      placeholder="¿Sobre qué es tu mensaje?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-3 text-foreground">Mensaje</label>
                    <textarea
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-border/50 bg-background/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:bg-background transition-all duration-300 resize-none"
                      placeholder="Tu mensaje..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-4 rounded-lg bg-linear-to-r from-primary to-primary/80 text-primary-foreground font-semibold hover:shadow-[0_0_20px_hsl(195_100%_50%/0.3)] transition-all duration-300"
                  >
                    Enviar Mensaje
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
