
import { Position } from './types';

export const POSITIONS: Position[] = [
  { 
    id: 1, 
    title: "Papai e Mamãe", 
    description: "A clássica e infalível. Um deita sobre o outro para máxima conexão física e olho no olho. Perfeita para fortalecer a intimidade e o carinho em cada movimento." 
  }
];

export interface PurchaseNotify {
  name: string;
  city: string;
  photo: string;
}

/**
 * Lista de 20 notificações exclusivas.
 * IDs do Pravatar selecionados para corresponder visualmente ao gênero do nome.
 */
export const NOTIFICATIONS: PurchaseNotify[] = [
  { name: "Renata Santos", city: "São Paulo", photo: "https://i.pravatar.cc/150?u=female1" },
  { name: "Sérgio Murilo", city: "Rio de Janeiro", photo: "https://i.pravatar.cc/150?u=male1" },
  { name: "Camila Vieira", city: "Curitiba", photo: "https://i.pravatar.cc/150?u=female2" },
  { name: "Ricardo Teles", city: "Belo Horizonte", photo: "https://i.pravatar.cc/150?u=male2" },
  { name: "Amanda Lima", city: "Salvador", photo: "https://i.pravatar.cc/150?u=female3" },
  { name: "Felipe Guedes", city: "Porto Alegre", photo: "https://i.pravatar.cc/150?u=male3" },
  { name: "Beatriz Farias", city: "Brasília", photo: "https://i.pravatar.cc/150?u=female4" },
  { name: "Gustavo Paiva", city: "Fortaleza", photo: "https://i.pravatar.cc/150?u=male4" },
  { name: "Juliana Klein", city: "Manaus", photo: "https://i.pravatar.cc/150?u=female5" },
  { name: "Marcos André", city: "Recife", photo: "https://i.pravatar.cc/150?u=male5" },
  { name: "Letícia Rossi", city: "Goiânia", photo: "https://i.pravatar.cc/150?u=female6" },
  { name: "Bruno Costa", city: "Belém", photo: "https://i.pravatar.cc/150?u=male6" },
  { name: "Carolina Heiss", city: "Florianópolis", photo: "https://i.pravatar.cc/150?u=female7" },
  { name: "Daniel Oliveira", city: "Vitória", photo: "https://i.pravatar.cc/150?u=male7" },
  { name: "Patrícia Melo", city: "Natal", photo: "https://i.pravatar.cc/150?u=female8" },
  { name: "Thiago Barbosa", city: "João Pessoa", photo: "https://i.pravatar.cc/150?u=male8" },
  { name: "Fernanda Zonta", city: "Cuiabá", photo: "https://i.pravatar.cc/150?u=female9" },
  { name: "Leonardo Wolf", city: "Maceió", photo: "https://i.pravatar.cc/150?u=male9" },
  { name: "Gabriela Xavier", city: "Teresina", photo: "https://i.pravatar.cc/150?u=female10" },
  { name: "Rodrigo Queiroz", city: "Campo Grande", photo: "https://i.pravatar.cc/150?u=male10" }
];
