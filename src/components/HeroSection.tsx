import type { FC } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

interface HeroSectionProps {
  children?: React.ReactNode;
  category?: string;
  title?: string;
  description?: string;
  linkUrl?: string;
  linkText?: string;
  imgUrl?: string;
  imgAlt?: string;
  imgWidth?: number;
  imgHeight?: number;
  imgPriority?: boolean;
}

const HeroSection: FC<HeroSectionProps> = ({
  children,
  category,
  title,
  description,
  linkUrl,
  linkText = "Learn More",
  imgUrl,
  imgAlt,
  imgWidth = 400,
  imgHeight = 400,
  imgPriority = false,
}) => {
  return (
    <section className="relative bg-foreground overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {children ? (
            children
          ) : (
            <>
              <div className="space-y-4 md:space-y-6 py-16 text-white text-center md:text-left">
                {category && <Badge className="bg-ring">{category}</Badge>}
                {title && <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">{title}</h1>}
                {description && <p className="text-base sm:text-lg">{description}</p>}
                {linkUrl && (
                  <Button size="lg" className="w-full sm:w-auto">
                    <Link href={linkUrl} className="w-full">
                      {linkText}
                    </Link>
                  </Button>
                )}
              </div>
              {imgUrl && (
                <div className="relative hidden md:flex w-full justify-center items-center">
                  <Image
                    src={imgUrl}
                    alt={imgAlt || title || "Hero image"}
                    width={imgWidth}
                    height={imgHeight}
                    className="object-cover rounded-lg shadow-md"
                    priority={imgPriority}
                  />
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
