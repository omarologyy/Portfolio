import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { BsLinkedin, BsTwitterX } from "react-icons/bs";
import { ImGithub } from "react-icons/im";

export function HeroSection() {
  return (
    <div className="relative">
      <Navbar />
      <div className="container flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-12 text-center md:py-16 lg:py-20">
        <div className="space-y-4 md:space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Hi, I'm <span className="text-primary">Umar</span>
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Frontend Developer specializing in building exceptional digital
            experiences with modern web technologies.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" asChild>
              <a href="#projects">
                View My Work <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
          <div className="flex justify-center gap-4 pt-4">
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://github.com/omarologyy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <ImGithub className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://www.linkedin.com/in/umar-sulaiman-a91a43175"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <BsLinkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://www.linkedin.com/in/umar-sulaiman-a91a43175"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
              >
                <BsTwitterX className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
