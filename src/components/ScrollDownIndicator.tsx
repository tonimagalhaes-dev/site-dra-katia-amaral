import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

interface ScrollDownIndicatorProps {
  className?: string;
  targetId: string; // The ID of the section to scroll to
  label?: string;
}

/**
 * Componente de indicador de scroll animado (seta).
 * Inclui um botão para realizar o scroll suave para a seção alvo.
 */
const ScrollDownIndicator = ({
  className,
  targetId,
  label = 'Role para baixo para ver resultados reais',
}: ScrollDownIndicatorProps) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className={cn('flex flex-col items-center', className)}>
      <Button
        onClick={handleClick}
        variant="ghost"
        /* size="icon" */
        className="h-12 w-12 bg-transparent hover:bg-transparent animate-scroll-bounce p-0 text-white hover:text-white"
        aria-label={label}
      >
        <ChevronDown className="h-12 w-12" />
      </Button>
      <span className="text-lg text-white/80 font-medium ">
        {label}
      </span>
    </div>
  );
};

export default ScrollDownIndicator;