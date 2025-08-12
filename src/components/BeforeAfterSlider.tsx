import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

// Interface para definir a estrutura das imagens de Antes e Depois
interface BeforeAfterImage {
  before: string;
  after: string;
  alt: string;
}

// Array com os dados das imagens. Substitua os placeholders pelas suas imagens reais.
const images: BeforeAfterImage[] = [
  {
    before: '/images/Before-After/Paciente 4.jpg',
    after: '/images/Before-After/Paciente 4a.jpg',
    alt: 'Resultado do tratamento de otomodelação em paciente 1',
  },
  {
    before: '/images/Before-After/Paciente 7e.jpg',
    after: '/images/Before-After/Paciente 7c.jpg',
    alt: 'Resultado do tratamento de otomodelação em paciente 2',
  },
  {
    before: '/images/Before-After/Paciente 8.jpg',
    after: '/images/Before-After/Paciente 8a.jpg',
    alt: 'Resultado do tratamento de otomodelação em paciente 3',
  },
  {
    before: '/images/Before-After/Paciente 12.jpg',
    after: '/images/Before-After/Paciente 12a.jpg',
    alt: 'Resultado do tratamento de otomodelação em paciente 4',
  },
  {
    before: '/images/Before-After/Paciente 13.jpg',
    after: '/images/Before-After/Paciente 13a.jpg',
    alt: 'Resultado do tratamento de otomodelação em paciente 5',
  },
  {
    before: '/images/Before-After/Paciente 14.jpg',
    after: '/images/Before-After/Paciente 14a.jpg',
    alt: 'Resultado do tratamento de otomodelação em paciente 6',
  },
  {
    before: '/images/Before-After/Paciente 15.jpg',
    after: '/images/Before-After/Paciente 15a.jpg',
    alt: 'Resultado do tratamento de otomodelação em paciente 7',
  },
  {
    before: '/images/Before-After/Paciente 16.jpg',
    after: '/images/Before-After/Paciente 16e.jpg',
    alt: 'Resultado do tratamento de otomodelação em paciente 8',
  },
  {
    before: '/images/Before-After/Paciente 18.jpg',
    after: '/images/Before-After/Paciente 18a.jpg',
    alt: 'Resultado do tratamento de otomodelação em paciente 9',
  },

];

/**
 * Componente de Carrossel para exibir imagens de Antes e Depois.
 * Utiliza o componente Carousel do shadcn/ui.
 */
export function BeforeAfterSlider() {
  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true,
      }}
      className="w-full max-w-4xl mx-auto"
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/1">
            <div className="p-1">
              <Card className="overflow-hidden">
                <CardContent className="flex flex-col md:flex-row items-stretch justify-center p-4 md:p-6 gap-2 md:gap-4">
                  {/* Coluna "Antes" */}
                  <div className="w-full md:w-1/2 flex flex-col items-center">
                    <h3 className="text-center text-lg font-semibold mb-2 text-gray-600">
                      Antes   -   Depois
                    </h3>
                    <img
                      src={image.before}
                      alt={`Antes - ${image.alt}`}
                      className="rounded-lg shadow-md w-full h-auto object-cover aspect-square"
                    />
                  </div>
                  {/* Coluna "Depois" */}
                  <div className="w-full md:w-1/2 flex flex-col items-center">
                    <h3 className="text-center text-lg font-semibold mb-2 text-primary">
                      Antes   -   Depois
                    </h3>
                    <img
                      src={image.after}
                      alt={`Depois - ${image.alt}`}
                      className="rounded-lg shadow-md w-full h-auto object-cover aspect-square"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:flex" />
      <CarouselNext className="hidden sm:flex" />
    </Carousel>
  );
}
export default BeforeAfterSlider;
// Exportando o componente para ser utilizado em outras partes do aplicativo