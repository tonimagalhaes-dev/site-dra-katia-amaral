import { Helmet } from 'react-helmet-async';
import ProcedurePage from '@/components/ProcedurePage';

export default function Lobuloplastia() {
  return (
    <>
      <Helmet>
        <title>Lobuloplastia | Kedem Beauty &amp; Care</title>
        <meta
          name="description"
          content="Entenda o que é lobuloplastia e como buscar uma avaliação para alterações no lóbulo da orelha."
        />
      </Helmet>
      <ProcedurePage
        title="Lobuloplastia"
        procedureName="Lobuloplastia"
        description="Se o furo do brinco alargou ou o lóbulo sofreu um rasgo, uma avaliação ajuda a entender as opções de correção e os próximos passos."
        emoji="👂"
        heroImage="/images/kedem-sala.webp"
        whatIs={[
          'A lobuloplastia é uma cirurgia que repara ou remodela o lóbulo da orelha. A equipe pode orientar sobre a avaliação e o encaminhamento a um profissional habilitado quando indicado.',
        ]}
        indications={[
          'Furo de brinco alargado',
          'Lóbulo parcial ou totalmente rasgado',
          'Alterações no formato do lóbulo após o uso de alargadores',
        ]}
        benefits={[
          'Entender quais opções de correção são aplicáveis ao seu caso',
          'Esclarecer dúvidas sobre cicatriz, recuperação e cuidados',
        ]}
        differentials={[
          'Escuta das suas queixas e objetivos',
          'Orientação sobre avaliação e encaminhamento quando necessário',
        ]}
      />
    </>
  );
}
