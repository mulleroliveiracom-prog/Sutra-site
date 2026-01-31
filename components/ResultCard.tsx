
import React from 'react';
import { Position } from '../types';

interface ResultCardProps {
  position: Position;
  onStart: () => void;
}

const ResultCard: React.FC<ResultCardProps> = ({ position, onStart }) => {
  return (
    <div className="fixed inset-0 z-[100] bg-black flex flex-col items-center px-6 pt-10 h-screen-fix overflow-y-auto scroll-container animate-in fade-in duration-500">
      {/* Título Principal */}
      <div className="text-center mb-6 shrink-0">
        <h2 className="text-3xl xs:text-4xl font-black italic tracking-tighter leading-[0.85] uppercase max-w-[280px] mx-auto text-white">
          LUNA CLUB CHALLENGE #20
        </h2>
        <div className="inline-block mt-4 px-8 py-1.5 border border-[#ff1a7d] rounded-full bg-transparent">
          <span className="text-[#ff1a7d] text-[9px] font-black tracking-[0.2em] uppercase">POSIÇÃO REVELADA</span>
        </div>
      </div>

      {/* Card da Posição - Ajustado para letras pequenas e seguras */}
      <div className="w-full bg-[#141625] rounded-[40px] p-6 xs:p-8 flex flex-col items-center justify-center min-h-[280px] card-shadow border border-gray-800/30 text-center animate-in slide-in-from-bottom duration-700 mb-6">
        <h3 className="text-2xl xs:text-3xl font-black italic tracking-tight text-[#ffb11a] leading-tight uppercase mb-6 px-2">
          "{position.title}"
        </h3>
        <p className="text-white/80 text-sm xs:text-base font-medium leading-relaxed italic max-w-[260px]">
          {position.description}
        </p>
      </div>

      {/* Caixa de Desconto */}
      <div className="w-full bg-[#141625] border border-gray-800 p-5 rounded-[30px] text-center shadow-2xl mb-6 shrink-0">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="text-lg">🎁</span>
          <p className="text-[#ffb11a] text-[9px] font-black tracking-[0.15em] uppercase">DESCONTO EXCLUSIVO</p>
        </div>
        <p className="text-white text-xs xs:text-sm font-bold leading-tight mb-2">
          Você desbloqueou um desconto exclusivo: Leve o App Luna Sutra completo de <span className="line-through text-white/40">R$ 97</span> por apenas
        </p>
        <p className="text-[#ff1a7d] text-3xl font-black tracking-tighter">
          R$ 14,90.
        </p>
      </div>

      {/* Botão de Ação */}
      <div className="w-full mb-10 shrink-0">
        <button 
          onClick={onStart}
          className="w-full h-24 bg-gradient-to-r from-[#ff006e] to-[#9c27b0] rounded-[30px] flex items-center justify-center shadow-[0_15px_40px_rgba(255,26,125,0.4)] active:scale-95 transition-transform"
        >
          <span className="text-white text-xl xs:text-2xl font-black tracking-tighter uppercase leading-[0.9] text-center">
            QUERO MEU ACESSO<br/>AGORA
          </span>
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
