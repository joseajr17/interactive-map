import Image from "next/image";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
  bgImage?: string;
  id?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  align = "center",
  className = "",
  bgImage,
  id,
}: SectionHeaderProps) {
  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <div className={`relative w-full ${className}`}>
      {/* Imagem de fundo */}
      {bgImage && (
        <Image
          src={bgImage}
          alt="Background Image"
          fill
          className="object-cover"
          priority
          data-test={`${id}-section-bg`}
        />
      )}

      {/* Conteúdo */}
      <div
        className={`relative max-w-3xl ${alignClasses[align]} mx-auto ${
          bgImage ? ` py-36` : ""
        }`}
      >
        <div className="flex items-center justify-center gap-3">
          <h2
            className={`text-3xl md:text-5xl font-bold text-gray-900 mb-4`}
            data-test={`${id}-section-title`}
          >
            {title}
          </h2>
        </div>
        {subtitle && (
          <p
            className={`text-gray-600 text-xl leading-relaxed`}
            data-test={`${id}-section-subtitle`}
          >
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
