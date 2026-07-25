export interface ResultView {
  id: string;
  label: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface ResultCase {
  id: string;
  patientLabel: string;
  views: ResultView[];
}

const pairs = [
  ['Paciente 8.webp', 'Paciente 8a.webp'],
  ['Paciente 7e.webp', 'Paciente 7c.webp'],
  ['Paciente 4.webp', 'Paciente 4a.webp'],
  ['Paciente 12.webp', 'Paciente 12a.webp'],
  ['Paciente 13.webp', 'Paciente 13a.webp'],
  ['Paciente 14.webp', 'Paciente 14a.webp'],
  ['Paciente 15.webp', 'Paciente 15a.webp'],
  ['Paciente 16.webp', 'Paciente 16e.webp'],
  ['Paciente 18.webp', 'Paciente 18a.webp'],
] as const;

// Os nomes definitivos das vistas e a autorização documental permanecem gates de release.
export const otomodelacaoResults: ResultCase[] = pairs.map((pair, index) => ({
  id: `caso-${index + 1}`,
  patientLabel: `Caso ${index + 1}`,
  views: pair.map((file, viewIndex) => ({
    id: `caso-${index + 1}-vista-${viewIndex + 1}`,
    label: `Vista ${viewIndex + 1}`,
    src: `/images/Before-After/${file}`,
    alt: `Comparativo de otomodelação do caso ${index + 1}, vista ${viewIndex + 1}`,
    width: 800,
    height: 800,
  })),
}));
