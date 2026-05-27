import { FadeIn, TextReveal } from '@/animations';

interface SectionHeadingProps {
  number: string;
  title: string;
  subtitle: string;
  align?: 'left' | 'center';
}

export function SectionHeading({ number, title, subtitle, align = 'center' }: SectionHeadingProps) {
  return (
    <FadeIn direction="up" className={`mb-16 md:mb-24 ${align === 'center' ? 'text-center' : ''}`}>
      <div className={`flex items-center gap-4 mb-6 ${align === 'center' ? 'justify-center' : ''}`}>
        <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl glass-strong flex items-center justify-center">
          <span className="text-accent font-mono font-bold text-sm md:text-base">
            {number}
          </span>
        </div>
        <div className="h-px w-12 md:w-24 bg-gradient-to-r from-accent/50 to-transparent" />
      </div>
      
      <TextReveal 
        as="h2"
        text={title}
        className={`text-3xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 tracking-tight ${
          align === 'center' ? 'justify-center' : ''
        }`}
      />
      
      <p className={`text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed ${
        align === 'center' ? 'mx-auto' : ''
      }`}>
        {subtitle}
      </p>
    </FadeIn>
  );
}
