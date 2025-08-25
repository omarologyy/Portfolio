import Link from "next/link";
import { Mail } from "lucide-react";
import { BsLinkedin, BsTwitterX } from "react-icons/bs";
import { ImGithub } from "react-icons/im";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t py-8 md:py-12">
      <div className="container flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <Link href="/" className="font-bold text-xl">
            <span className="text-primary">CodeBy</span>Umar
          </Link>
          <p className="text-sm text-muted-foreground mt-2">
            © {currentYear} Umar Sulaiman. All rights reserved.
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            href="https://github.com/omarologyy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <ImGithub className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/umar-sulaiman-a91a43175"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <BsLinkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/umar-sulaiman-a91a43175"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
          >
            <BsTwitterX className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
          </Link>
          <Link href="mailto:akoredeumar8@gmail.com" aria-label="Email">
            <Mail className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
