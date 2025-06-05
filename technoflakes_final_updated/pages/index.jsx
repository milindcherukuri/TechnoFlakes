import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">Technoflakes</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Innovating Tomorrow, Today — Technoflakes is a U.S.-based technology consulting and product development firm specializing in cutting-edge software engineering, artificial intelligence, and digital transformation solutions.
        </p>
        <div className="mt-6">
          <Link href="#contact">
            <Button className="text-lg">Get in Touch</Button>
          </Link>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Custom Software Development",
            "AI & Automation Solutions",
            "Salesforce & Cloud Consulting",
            "Web & Mobile App Development",
            "ETL & Data Engineering",
            "System Architecture & Integration"
          ].map(service => (
            <Card key={service} className="bg-gray-900">
              <CardContent className="p-6">
                <h3 className="text-xl font-medium mb-2">{service}</h3>
                <p className="text-gray-400">We offer industry-leading expertise to help your business scale and succeed in a digital-first world.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">About Us</h2>
        <p className="text-gray-300 max-w-3xl mx-auto text-center">
          Founded by a team of passionate engineers and researchers, Technoflakes blends deep technical expertise with a forward-thinking approach. From enterprise solutions to cutting-edge AI models, our mission is to build technology that matters.
        </p>
      </section>

      <section id="contact" className="text-center">
        <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
        <p className="text-gray-300 mb-4">Email: contact@technoflakes.com</p>
        <Link href="mailto:contact@technoflakes.com">
          <Button variant="secondary">Send Email</Button>
        </Link>
      </section>
    </main>
  );
}
