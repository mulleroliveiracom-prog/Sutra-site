
import React from 'react';
import { Position } from '../types';

interface ResultCardProps {
  position: Position;
  onStart: () => void;
}

const ResultCard: React.FC<ResultCardProps> = ({ position, onStart }) => {
  return (
    <div className="fixed inset-0 z-[100] bg-black flex flex-col items-center px-6 pt-12 h-screen-fix overflow-y-auto scroll-container animate-in fade-in duration-500">
      {/* Título Principal */}
      <div className="text-center mb-8 shrink-0">
        <h2 className="text-4xl xs:text-5xl font-black italic tracking-tighter leading-[0.9] uppercase max-w-[280px] mx-auto text-white">
          LUNA CLUB CHALLENGE #20
        </h2>
        <div className="inline-block mt-6 px-8 py-2 bg-[#2e0b1f] border border-[#ff1a7d] rounded-full">
          <span className="text-[#ff1a7d] text-[11px] font-black tracking-[0.2em] uppercase">POSIÇÃO REVELADA</span>
        </div>
      </div>

      {/* Card da Posição */}
      <div className="w-full bg-[#141625] rounded-[45px] p-10 flex flex-col items-center justify-center min-h-[280px] card-shadow border border-gray-800/50 text-center space-y-6 mb-8 animate-in slide-in-from-bottom duration-700">
        <h3 className="text-4xl font-black italic tracking-tighter text-[#ffb11a] leading-tight uppercase">
          "{position.title}"
        </h3>
        <p className="text-white/80 text-base font-medium leading-relaxed italic max-w-[240px]">
          {position.description}
        </p>
      </div>

      {/* Caixa de Desconto */}
      <div className="w-full bg-[#141625] border border-gray-800 p-6 rounded-[35px] text-center shadow-2xl mb-6">
        <div className="flex items-center justify-center gap-2 mb-3">
          <span className="text-xl">🎁</span>
          <p className="text-[#ffb11a] text-xs font-black tracking-[0.15em] uppercase">DESCONTO EXCLUSIVO</p>
        </div>
        <p className="text-white text-sm font-bold leading-snug mb-1">
          Você desbloqueou um desconto exclusivo: Leve o App Luna Sutra completo de <span className="line-through text-white/40">R$ 97</span> por apenas
        </p>
        <p className="text-[#ff1a7d] text-3xl font-black tracking-tight">
          R$ 14,90.
        </p>
      </div>

      {/* Botão de Ação */}
      <div className="w-full mb-10 shrink-0">
        <button 
          onClick={onStart}
          className="w-full h-24 pink-gradient rounded-[30px] flex items-center justify-center shadow-[0_15px_40px_rgba(255,26,125,0.4)] active:scale-95 transition-transform"
        >
          <span className="text-white text-2xl font-black tracking-tighter uppercase leading-none text-center px-4">
            QUERO MEU ACESSO AGORA
          </span>
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
