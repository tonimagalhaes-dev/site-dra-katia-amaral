import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, ImageOff } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import { otomodelacaoResults } from '@/data/otomodelacaoResults';

function ResultImage({ src, alt, label, eager }: { src: string; alt: string; label: string; eager: boolean }) {
  const [failed, setFailed] = useState(false);
  return (
    <figure className="overflow-hidden rounded-xl border bg-slate-100">
      <figcaption className="px-3 py-2 text-center text-sm font-semibold text-slate-700">{label}</figcaption>
      <div className="aspect-square">
        {failed ? (
          <div className="flex h-full flex-col items-center justify-center gap-2 p-6 text-center text-slate-600">
            <ImageOff aria-hidden="true" />
            <span>Imagem indisponível</span>
          </div>
        ) : (
          <img
            src={src}
            alt={alt}
            width={800}
            height={800}
            loading={eager ? 'eager' : 'lazy'}
            onError={() => setFailed(true)}
            className="h-full w-full object-contain"
          />
        )}
      </div>
    </figure>
  );
}

export function ResultsCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [active, setActive] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(otomodelacaoResults.length > 1);

  useEffect(() => {
    if (!api) return;
    const update = () => {
      setActive(api.selectedScrollSnap());
      setCanPrev(api.canScrollPrev());
      setCanNext(api.canScrollNext());
    };
    update();
    api.on('select', update);
    api.on('reInit', update);
    return () => { api.off('select', update); api.off('reInit', update); };
  }, [api]);

  return (
    <div className="mx-auto max-w-4xl">
      <p className="mb-4 text-center font-semibold text-primary" aria-live="polite">
        Caso {active + 1} de {otomodelacaoResults.length}
      </p>
      <Carousel setApi={setApi} opts={{ loop: false }} aria-label="Resultados de otomodelação">
        <CarouselContent>
          {otomodelacaoResults.map((result, index) => (
            <CarouselItem key={result.id} aria-label={`${result.patientLabel} de ${otomodelacaoResults.length}`}>
              <div className="grid gap-3 sm:grid-cols-2">
                {result.views.map((view) => (
                  <ResultImage key={view.id} {...view} eager={index === 0} />
                ))}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="mt-5 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => api?.scrollPrev()}
          disabled={!canPrev}
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border bg-white disabled:opacity-40 focus-visible:ring-4"
          aria-label="Caso anterior"
        >
          <ChevronLeft aria-hidden="true" />
        </button>
        <div className="flex max-w-48 gap-1.5 overflow-hidden" aria-hidden="true">
          {otomodelacaoResults.map((result, index) => (
            <span key={result.id} className={`h-2 w-2 rounded-full ${index === active ? 'bg-primary' : 'bg-slate-300'}`} />
          ))}
        </div>
        <button
          type="button"
          onClick={() => api?.scrollNext()}
          disabled={!canNext}
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border bg-white disabled:opacity-40 focus-visible:ring-4"
          aria-label="Próximo caso"
        >
          <ChevronRight aria-hidden="true" />
        </button>
      </div>
      <p className="mt-5 text-center text-sm text-slate-600">
        Imagens de casos individuais. Os resultados podem variar de pessoa para pessoa.
      </p>
    </div>
  );
}
