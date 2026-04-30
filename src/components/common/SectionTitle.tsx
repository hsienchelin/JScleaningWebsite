interface Props {
  tag?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionTitle({ tag, title, highlight, subtitle, center = true }: Props) {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      {tag && (
        <span className="inline-block text-xs font-semibold tracking-widest text-[#6B8FC8] uppercase mb-3">
          {tag}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-slate-800 leading-tight">
        {title}
        {highlight && <span className="gradient-text"> {highlight}</span>}
      </h2>
      {subtitle && (
        <p className="mt-4 text-slate-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
