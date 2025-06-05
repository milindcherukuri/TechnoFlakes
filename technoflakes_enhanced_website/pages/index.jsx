import Image from "next/image";
import Link from "next/link";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import Navbar from "../components/ui/navbar";
import Footer from "../components/ui/footer";
import { motion } from "framer-motion";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const services = [
    "Custom Software Development",
    "AI & Automation Solutions",
    "Salesforce & Cloud Consulting",
    "Web & Mobile App Development",
    "ETL & Data Engineering",
    "System Architecture & Integration",
  ];

  return (
    <>
      <Navbar />

      <main className="relative pt-20 bg-black text-white">
        {/* Hero Section */}
        <section className="relative h-[60vh] w-full overflow-hidden">
          <div className="absolute inset-0 bg-black/70" />

          <Image
            src="/hero.jpg"
            alt="Technoflakes Hero"
            fill
            className="object-cover"
            priority
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <motion.h1
              className="text-5xl font-bold drop-shadow-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Technoflakes
            </motion.h1>
            <motion.p
              className="mt-4 max-w-2xl text-xl text-gray-200 drop-shadow-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Innovating Tomorrow, Today — Technoflakes is a U.S.-based technology consulting and product development firm specializing in cutting-edge software engineering, artificial intelligence, and digital transformation solutions.
            </motion.p>
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <Link href="#services">
                <Button className="text-lg hover:scale-105 transition-transform">
                  Explore Services
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 px-6">
          <motion.h2
            className="mb-12 text-center text-4xl font-semibold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Services
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {services.map((service) => (
              <motion.div key={service} variants={fadeInUp}>
                <Card className="bg-gray-900">
                  <CardContent className="p-6">
                    <h3 className="mb-2 text-2xl font-medium text-white">
                      {service}
                    </h3>
                    <p className="text-gray-400">
                      We offer industry-leading expertise to help your business scale and succeed in a digital-first world.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Why Choose Us Section */}
        <section id="why" className="bg-gray-800 py-16 px-6">
          <motion.h2
            className="mb-12 text-center text-4xl font-semibold text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why Choose Us
          </motion.h2>
          <motion.div
            className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {[
              { title: "Expert Team", desc: "Seasoned engineers and researchers" },
              { title: "Innovative Solutions", desc: "Cutting-edge AI & software" },
              { title: "Customer Focus", desc: "Tailored service for every client" },
            ].map((item) => (
              <motion.div key={item.title} variants={fadeInUp}>
                <Card className="bg-gray-900">
                  <CardContent className="p-6 text-center">
                    <h3 className="mb-2 text-2xl font-medium text-white">{item.title}</h3>
                    <p className="text-gray-400">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 px-6">
          <motion.h2
            className="mb-6 text-center text-4xl font-semibold text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            About Us
          </motion.h2>
          <motion.p
            className="mx-auto max-w-3xl text-center text-gray-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Founded by a team of passionate engineers and researchers, Technoflakes blends deep technical expertise with a forward‑thinking approach. From enterprise solutions to cutting‑edge AI models, our mission is to build technology that matters.
          </motion.p>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-gray-800 py-16 px-6 text-center">
          <motion.h2
            className="mb-4 text-4xl font-semibold text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Contact Us
          </motion.h2>
          <motion.p
            className="mb-6 text-gray-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Email:{" "}
            <a
              href="mailto:contact@technoflakes.com"
              className="text-blue-400 hover:underline"
            >
              contact@technoflakes.com
            </a>
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Button variant="secondary" className="hover:scale-105 transition-transform">
              Send Email
            </Button>
          </motion.div>
        </section>
      </main>

      <Footer />
    </>
  );
}