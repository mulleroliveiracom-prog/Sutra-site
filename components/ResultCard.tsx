
import React from 'react';
import { Position } from '../types';

interface ResultCardProps {
  position: Position;
  onStart: () => void;
}

const ResultCard: React.FC<ResultCardProps> = ({ position, onStart }) => {
  return (
    <div className="fixed inset-0 z-[100] bg-black flex flex-col items-center px-6 pt-10 h-screen-fix overflow-y-auto scroll-container animate-in fade-in duration-500">
      <div className="text-center mb-6 shrink-0">
        <h2 className="text-3xl xs:text-4xl font-black italic tracking-tighter leading-tight uppercase w-[240px] mx-auto text-white">
          LUNA CLUB CHALLENGE #20
        </h2>
        <div className="inline-block mt-4 px-6 py-1 bg-[#2e0b1f] border border-[#ff1a7d] rounded-full">
          <span className="text-[#ff1a7d] text-[10px] font-bold tracking-[0.2em] uppercase">POSIÇÃO REVELADA</span>
        </div>
      </div>

      <div className="w-full bg-[#141625] rounded-[40px] p-8 flex flex-col items-center justify-center min-h-[220px] card-shadow border border-gray-800 text-center space-y-4 mb-8">
        <h3 className="text-3xl font-black italic tracking-tight text-[#ffb11a] px-2 leading-snug">
          "{position.title}"
        </h3>
        <p className="text-gray-300 text-sm font-medium leading-relaxed px-2 italic">
          {position.description}
        </p>
      </div>

      <div className="w-full mt-auto mb-10 space-y-6 shrink-0 flex flex-col items-center">
        <div className="bg-[#141625] border border-[#ffb11a]/20 p-5 rounded-3xl w-full text-center">
            <p className="text-[#ffb11a] text-xs font-black tracking-widest uppercase mb-2">🎁 DESCONTO EXCLUSIVO</p>
            <p className="text-white text-sm font-bold leading-tight">
              Você desbloqueou um desconto exclusivo: Leve o App Luna Sutra completo de <span className="line-through text-white/40">R$ 97</span> por apenas <span className="text-[#ff1a7d]">R$ 14,90</span>.
            </p>
        </div>
        
        <button 
          onClick={onStart}
          className="w-full h-20 pink-gradient rounded-3xl flex items-center justify-center shadow-[0_10px_30px_rgba(255,26,125,0.4)] active:scale-95 transition-transform"
        >
          <span className="text-white text-lg font-black tracking-widest uppercase">QUERO MEU ACESSO AGORA</span>
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
