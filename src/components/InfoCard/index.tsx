import { ReactNode } from "react";

type InfoCardProps = {
  id?: string;
  icon: ReactNode;
  title: string;
  paragraphs: ReactNode[];
};

export function InfoCard({ id, icon, title, paragraphs }: InfoCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm" data-test={`${id}-card-content`}>
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h3
          className="text-lg sm:text-xl font-semibold text-gray-900"
          data-test={`${id}-card-title`}
        >
          {title}
        </h3>
      </div>
      <div className="text-gray-700" data-test={`${id}-card-text`}>
        {paragraphs.map((text, index) => (
          <p key={index} className={index > 0 ? "mt-4" : ""}>
            {text}
          </p>
        ))}
      </div>
    </div>
  );
}
