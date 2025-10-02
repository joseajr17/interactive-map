import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}

export default function Section({
  id,
  children,
  className = "",
  containerClassName = "",
}: SectionProps) {
  return (
    <section id={id} className={`pt-[115px] sm:pt-20 pb-11 ${className}`}>
      <div className={`container mx-auto px-4 ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
}
