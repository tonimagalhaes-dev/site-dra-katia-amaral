import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

type Procedure = {
  title: string;
  description: string;
  image: string;
  link: string;
};

interface ProceduresSectionProps {
  procedures: Procedure[];
}

const ProceduresSection = ({ procedures }: ProceduresSectionProps) => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
          Tratamentos
        </span>
        <h2 className="kedem-title text-4xl mb-6">Procedimentos em destaque</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Cada procedimento é personalizado para valorizar sua beleza natural com técnicas avançadas e produtos premium.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {procedures.map((procedure, index) => (
          <Card key={index} className="border border-[var(--kedem-sand)] border-t-2 border-t-[var(--kedem-gold)] bg-[var(--kedem-ivory)]">
            <CardContent className="p-8">
              <div className="text-center space-y-4">
                <div className="mb-6">
                  <img
                    src={procedure.image}
                    alt=""
                    width={80}
                    height={80}
                    className="w-20 h-20 object-contain mx-auto rounded-xl shadow"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <h3 className="kedem-title text-2xl duration-300">{procedure.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">{procedure.description}</p>
                <Button asChild variant="outline" className="w-full mt-6">
                  <Link to={procedure.link}>Saiba mais</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default ProceduresSection;