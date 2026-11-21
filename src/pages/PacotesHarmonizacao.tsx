import { Helmet } from 'react-helmet-async';
import ProcedurePage from '@/components/ProcedurePage';

export default function PacotesHarmonizacao() {
  return (
    <>
      <Helmet>
        <title>Pacotes de Harmonização Facial | Kedem Beauty &amp; Care</title>
        <meta
          name="description"
          content="Conheça as opções de harmonização facial com Botox, preenchimento, bioestimulador de colágeno e fios de sustentação."
        />
      </Helmet>
      <ProcedurePage
        title="Pacotes de Harmonização Facial"
        procedureName="Pacotes de Harmonização Facial"
        description="Conheça as técnicas que podem compor um plano de harmonização facial de acordo com seus objetivos e com a avaliação profissional."
        emoji="✦"
        heroImage="/images/facial3.webp"
        whatIs={[
          'A avaliação orienta a escolha das técnicas e a ordem das etapas. A composição e os valores do plano são definidos conforme a indicação individual.',
        ]}
        benefits={[
          'Planejamento de acordo com suas características e objetivos',
          'Clareza sobre as etapas, os cuidados e o investimento antes de decidir',
        ]}
        differentials={[
          'Escolha das técnicas conforme indicação',
          'Orientações sobre o acompanhamento e os cuidados',
        ]}
      >
        <section className="kedem-wrap py-12 sm:py-16">
          <h2 className="kedem-title text-4xl">Técnicas que podem compor o plano</h2>
          <div className="kedem-procedures">
            <article>
              <h3 className="kedem-title text-2xl">Botox (toxina botulínica)</h3>
              <p>Pode suavizar linhas de expressão associadas ao movimento muscular.</p>
            </article>
            <article>
              <h3 className="kedem-title text-2xl">Preenchimento</h3>
              <p>Pode ajustar volumes e contornos em áreas selecionadas na avaliação.</p>
            </article>
            <article>
              <h3 className="kedem-title text-2xl">Bioestimulador de colágeno</h3>
              <p>
                Estimula a produção de colágeno e pode ser indicado para melhorar a firmeza da pele.
              </p>
            </article>
            <article>
              <h3 className="kedem-title text-2xl">Fios de sustentação</h3>
              <p>
                Podem ser avaliados quando o objetivo é dar suporte a áreas específicas do rosto.
              </p>
            </article>
          </div>
        </section>
      </ProcedurePage>
    </>
  );
}
