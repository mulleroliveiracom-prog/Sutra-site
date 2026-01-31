
import React from 'react';
import { Position } from '../types';

interface ResultCardProps {
  position: Position;
  onStart: () => void;
}

const ResultCard: React.FC<ResultCardProps> = ({ position, onStart }) => {
  return (
    <div className="fixed inset-0 z-[100] bg-black flex flex-col items-center px-6 pt-12 h-screen-fix overflow-y-auto scroll-container animate-in fade-in duration-500">
      {/* Título Principal - Estilo LUNA CLUB */}
      <div className="text-center mb-6 shrink-0">
        <h2 className="text-4xl xs:text-5xl font-black italic tracking-tighter leading-[0.85] uppercase max-w-[300px] mx-auto text-white">
          LUNA CLUB CHALLENGE #20
        </h2>
        <div className="inline-block mt-6 px-10 py-2 border border-[#ff1a7d] rounded-full bg-transparent">
          <span className="text-[#ff1a7d] text-[10px] font-black tracking-[0.25em] uppercase">POSIÇÃO REVELADA</span>
        </div>
      </div>

      {/* Card da Posição - Ajustado para ser proporcional ao "Papai e Mamãe" */}
      <div className="w-full bg-[#141625] rounded-[45px] p-8 xs:p-10 flex flex-col items-center justify-center min-h-[300px] card-shadow border border-gray-800/30 text-center space-y-6 mb-6 animate-in slide-in-from-bottom duration-700">
        <h3 className="text-5xl font-black italic tracking-tighter text-[#ffb11a] leading-tight uppercase px-2">
          "{position.title}"
        </h3>
        <p className="text-white/90 text-[17px] font-medium leading-relaxed italic max-w-[280px]">
          {position.description}
        </p>
      </div>

      {/* Caixa de Desconto - Cores e layout da imagem */}
      <div className="w-full bg-[#141625] border border-gray-800 p-6 rounded-[35px] text-center shadow-2xl mb-8 shrink-0">
        <div className="flex items-center justify-center gap-2 mb-3">
          <span className="text-xl">🎁</span>
          <p className="text-[#ffb11a] text-[10px] font-black tracking-[0.2em] uppercase">DESCONTO EXCLUSIVO</p>
        </div>
        <p className="text-white text-base font-bold leading-tight mb-2">
          Você desbloqueou um desconto exclusivo: Leve o App Luna Sutra completo de <span className="line-through text-white/40">R$ 97</span> por apenas <span className="text-[#ff1a7d]">R$ 14,90</span>.
        </p>
      </div>

      {/* Botão de Ação - Duas linhas como na imagem e gradiente vibrante */}
      <div className="w-full mb-12 shrink-0">
        <button 
          onClick={onStart}
          className="w-full h-28 bg-gradient-to-r from-[#ff006e] to-[#9c27b0] rounded-[35px] flex items-center justify-center shadow-[0_15px_45px_rgba(255,26,125,0.5)] active:scale-95 transition-transform"
        >
          <span className="text-white text-3xl font-black tracking-tighter uppercase leading-[0.9] text-center">
            QUERO MEU ACESSO<br/>AGORA
          </span>
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
