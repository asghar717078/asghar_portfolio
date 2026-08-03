import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Tools } from "@/components/portfolio/Tools";
import { Projects } from "@/components/portfolio/Projects";
import { Education } from "@/components/portfolio/Education";
import { WhyHireMe } from "@/components/portfolio/WhyHireMe";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

const title = "Syed Asghar Ali — Backend Developer | Django, DRF & FastAPI";
const description =
  "Backend developer building scalable REST APIs with Python, Django REST Framework and FastAPI — PostgreSQL, Redis, Docker, JWT auth and performance optimization.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Syed Asghar Ali",
          jobTitle: "Backend Developer",
          description,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Bahawalpur",
            addressRegion: "Punjab",
            addressCountry: "PK",
          },
          email: "asgharialofficial20@gmail.com",
          telephone: "+92 303 7170785",
          knowsAbout: [
            "Python",
            "Django",
            "Django REST Framework",
            "FastAPI",
            "PostgreSQL",
            "Redis",
            "Docker",
            "Selenium",
            "REST API Development",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Tools />
        <Projects />
        <Education />
        <WhyHireMe />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
