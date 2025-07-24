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
        <h2 className="text-4xl font-bold font-playfair mb-6">Procedimentos em destaque</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Cada procedimento é personalizado para valorizar sua beleza natural com técnicas avançadas e produtos premium.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {procedures.map((procedure, index) => (
          <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-blue-50 overflow-hidden">
            <CardContent className="p-8">
              <div className="text-center space-y-4">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={procedure.image}
                    alt={procedure.title}
                    className="w-20 h-20 object-contain mx-auto rounded-xl shadow"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <h3 className="text-2xl font-bold font-playfair group-hover:text-primary transition-colors duration-300">{procedure.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">{procedure.description}</p>
                <Button asChild variant="outline" className="w-full mt-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
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