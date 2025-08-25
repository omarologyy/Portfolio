import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { ImGithub } from "react-icons/im";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured online store with product listings, cart functionality, and secure checkout.",
    image:
      "https://res.cloudinary.com/dsezfimzp/image/upload/v1743036396/online_hjkkhs.jpg",
    tags: ["React", "daisyUI", "Tailwind CSS", "Redux"],
    liveUrl: "https://e-commerce-opal-mu-92.vercel.app/",
    githubUrl: "https://github.com/omarologyy/E-commerce",
  },
  {
    title: "Invoice to Payment Made Easy",
    description:
      " This platform allows businesses to create, send, and track invoices, then easily receive payments from their clients, optimizing their cash flow and providing a smooth payment experience.",
    image:
      "https://res.cloudinary.com/dsezfimzp/image/upload/v1743036614/card_qsxs80.jpg",
    tags: [
      "React",
      "ChakraUI",
      "Nodejs",
      "Django",
      "API Integration",
      "Linear",
    ],
    liveUrl: "https://www.pedmonie.com.ng/",
    githubUrl: "https://github.com/omarologyy/pedmonie-frontend",
  },
  {
    title: "A Local Business Analytics Dashboard",
    description:
      "A business dashboard that aggregates sales, customer retention, and market trends.",
    image:
      "https://res.cloudinary.com/dcm7zyplb/image/upload/v1756122580/luke-chesser-JKUTrJ4vK00-unsplash_ibv6p7.jpg",
    tags: ["Typescript", "React", "Tailwind css"],
    liveUrl: "https://local-business-analytics-dashboard.vercel.app/",
    githubUrl:
      "https://github.com/omarologyy/Local-Business-Analytics-Dashboard",
  },
  {
    title: "Mini Cart Project",
    description:
      "The Mini Cart is a simple yet functional shopping cart component built using React and TypeScript. It allows users to add, remove, and update the quantity of products in their cart while displaying the total price dynamically.",
    image:
      "https://res.cloudinary.com/dsezfimzp/image/upload/v1743036392/cart_q9cava.jpg",
    tags: ["React", "Redux", "CSS"],
    liveUrl: "https://redux-toolkit-practice-ten.vercel.app/",
    githubUrl: "https://github.com/omarologyy/Redux-toolkit-practice",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-muted/50">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
          My Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button size="sm" asChild>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ImGithub className="mr-2 h-4 w-4" /> Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
