import { Link } from 'react-router-dom';
import { ArrowDown, ArrowRight, MapPin } from 'lucide-react';
import { appointmentMessage, createWhatsAppUrl } from '@/lib/constants';
import { useAnalytics } from '@/hooks/useAnalytics';
import './home.css';

const procedures = [
  {
    title: 'Otomodelação',
    description: 'Avaliação para correção de orelhas proeminentes sem cirurgia.',
    path: '/otomodelacao',
  },
  {
    title: 'Harmonização facial',
    description: 'Cuidados estéticos para valorizar os traços do rosto.',
    path: '/harmonizacao-facial',
  },
  {
    title: 'Harmonização corporal',
    description: 'Tratamentos para o contorno corporal, de acordo com sua avaliação.',
    path: '/harmonizacao-corporal',
  },
];

export default function Index() {
  const { trackWhatsAppClick } = useAnalytics();
  const appointmentUrl = createWhatsAppUrl(appointmentMessage());

  return (
    <div className="kedem-home">
      <section className="kedem-hero" aria-labelledby="home-title">
        <div className="kedem-wrap kedem-hero-grid">
          <div>
            <p className="kedem-label">Estética avançada · Vila Mariana</p>
            <h1 id="home-title">
              Seu momento <em>de cuidado</em> começa aqui.
            </h1>
            <p className="kedem-intro">
              Estética facial e corporal com atendimento individualizado pela Dra. Kátia Amaral,
              enfermeira esteta.
            </p>
            <div className="kedem-actions">
              <a
                className="kedem-button"
                href={appointmentUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('index')}
              >
                Agende sua avaliação <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a className="kedem-text-link" href="#procedimentos">
                Ver procedimentos <ArrowDown size={15} aria-hidden="true" />
              </a>
            </div>
          </div>
          <figure className="kedem-hero-photo">
            <img
              src="/images/kedem-recepcao.webp"
              srcSet="/images/kedem-recepcao-480.webp 480w, /images/kedem-recepcao.webp 864w"
              sizes="(min-width: 1200px) 590px, (min-width: 800px) 51vw, calc(100vw - 40px)"
              width={864}
              height={379}
              fetchPriority="high"
              alt="Recepção da Kedem Beauty & Care, com poltronas claras e iluminação aconchegante"
            />
            <figcaption>
              <MapPin size={15} aria-hidden="true" /> Vila Mariana, São Paulo
            </figcaption>
          </figure>
        </div>
      </section>

      <section
        id="procedimentos"
        className="kedem-section kedem-wrap"
        aria-labelledby="procedures-title"
      >
        <p className="kedem-label">Tratamentos</p>
        <h2 id="procedures-title">Procedimentos em destaque</h2>
        <div className="kedem-procedures">
          {procedures.map(({ title, description, path }) => (
            <article key={path}>
              <h3>{title}</h3>
              <p>{description}</p>
              <Link className="kedem-text-link" to={path} aria-label={`Saiba mais sobre ${title}`}>
                Saiba mais <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="kedem-studio" aria-labelledby="studio-title">
        <div className="kedem-wrap kedem-studio-grid">
          <img
            src="/images/kedem-sala.webp"
            width={444}
            height={274}
            loading="lazy"
            decoding="async"
            alt="Sala de atendimento da Kedem com cadeira de procedimentos e luz natural"
          />
          <div>
            <p className="kedem-label">O consultório</p>
            <h2 id="studio-title">Conheça nosso espaço na Vila Mariana</h2>
            <p className="kedem-intro">
              Na avaliação, a Dra. Kátia Amaral conversa com você sobre seus objetivos e as opções
              de cuidado.
            </p>
            <p className="kedem-registration">
              Dra. Kátia Amaral · Enfermeira esteta
              <br />
              COREN-SP 310.193
            </p>
            <Link className="kedem-text-link" to="/sobre">
              Conheça a Dra. Kátia <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="kedem-section kedem-wrap" aria-labelledby="contact-title">
        <div>
          <p className="kedem-label">Agendamento</p>
          <h2 id="contact-title">Vamos conversar?</h2>
          <p className="kedem-intro">
            Agende sua avaliação pelo WhatsApp ou consulte os canais de atendimento.
          </p>
          <div className="kedem-actions">
            <a
              className="kedem-button"
              href={appointmentUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('index')}
            >
              Conversar no WhatsApp <ArrowRight size={18} aria-hidden="true" />
            </a>
            <Link className="kedem-button-outline" to="/contato">
              Ver opções de contato
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
