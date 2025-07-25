import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { useToast } from '@/hooks/use-toast';
import { event } from '@/lib/analytics';
import { createWhatsAppUrl } from '@/lib/constants';

const handleWhatsAppClick = () => {
  // Evento para Analytics
  event({
    action: 'click',
    category: 'Contato',
    label: 'WhatsApp'
  });

  // Abrir WhatsApp
  window.open(createWhatsAppUrl(''), '_blank');
};

interface ContactFormProps {
  defaultProcedure?: string;
  title?: string;
  description?: string;
}

const ContactForm = ({ defaultProcedure, title = "Agende sua avaliação", description }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    nome: '',
    celular: '',
    procedimento: defaultProcedure || ''
  });
  const { toast } = useToast();

  const procedures = [
    'Harmonização Facial',
    'Glúteos Up',
    'Otomodelação',
    'Bioestimulador de Colágeno',
    'Skinbooster',
    'Preenchimento Labial',
    'Outros'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.nome || !formData.celular) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha nome e celular.",
        variant: "destructive"
      });
      return;
    }

    // Enviar para WhatsApp
    const message = `Olá! Gostaria de agendar uma avaliação.
    
Nome: ${formData.nome}
Celular: ${formData.celular}
Procedimento de interesse: ${formData.procedimento}`;

    const whatsappUrl = createWhatsAppUrl(message);
     // GA4 event
      if (window.gtag) {
        window.gtag('event', 'whatsapp_click', {
          event_category: 'engagement',
          event_label: window.location.pathname,
          value: 1,
        });
      }
    window.open(whatsappUrl, '_blank');

    toast({
      title: "Redirecionando...",
      description: "Você será direcionado para o WhatsApp para continuar o atendimento.",
    });
  };

  return (
    <div className="bg-background border border-border rounded-lg p-6 shadow-sm">
      <div className="mb-6">
        <h3 className="text-xl font-semibold font-playfair mb-2">{title}</h3>
        {description && (
          <p className="text-muted-foreground">{description}</p>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="nome">Nome completo *</Label>
          <Input
            id="nome"
            type="text"
            value={formData.nome}
            onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
            placeholder="Digite seu nome completo"
            required
          />
        </div>

        <div>
          <Label htmlFor="celular">Celular *</Label>
          <Input
            id="celular"
            type="tel"
            value={formData.celular}
            onChange={(e) => setFormData({ ...formData, celular: e.target.value })}
            placeholder="(11) 99999-9999"
            required
          />
        </div>

        <div>
          <Label htmlFor="procedimento">Procedimento de interesse</Label>
          <Select
            value={formData.procedimento}
            onValueChange={(value) => setFormData({ ...formData, procedimento: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Selecione um procedimento" />
            </SelectTrigger>
            <SelectContent>
              {procedures.map((procedure) => (
                <SelectItem key={procedure} value={procedure}>
                  {procedure}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
          Enviar mensagem no WhatsApp
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
