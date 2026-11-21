import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <section className="kedem-hero grid min-h-[55vh] place-items-center px-5 py-16 text-center">
      <div className="space-y-5">
        <h1 className="kedem-title text-5xl">Página não encontrada</h1>
        <Button asChild>
          <Link to="/">Voltar ao início</Link>
        </Button>
      </div>
    </section>
  );
}
