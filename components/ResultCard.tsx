
import React from 'react';
import { Position } from '../types';

interface ResultCardProps {
  position: Position;
  onStart: () => void;
}

const ResultCard: React.FC<ResultCardProps> = ({ position, onStart }) => {
  return (
    <div className="fixed inset-0 z-[100] bg-black flex flex-col items-center px-6 pt-10 h-screen-fix overflow-y-auto scroll-container animate-in fade-in duration-500">
      {/* Title */}
      <div className="text-center mb-8 shrink-0">
        <h2 className="text-3xl xs:text-4xl font-black italic tracking-tighter leading-tight uppercase w-[220px] mx-auto text-white">
          AQUECIMENTO CHALLENGE #20
        </h2>
        <div className="inline-block mt-4 px-6 py-1 bg-[#2e0b1f] border border-[#ff1a7d] rounded-full">
          <span className="text-[#ff1a7d] text-[10px] font-bold tracking-[0.2em] uppercase">AQUECIMENTO</span>
        </div>
      </div>

      {/* Card Content */}
      <div className="w-full bg-[#141625] rounded-[40px] p-8 flex flex-col items-center justify-center min-h-[280px] card-shadow border border-gray-800 text-center space-y-4 mb-10">
        <p className="text-[#9b9da3] text-[11px] font-bold tracking-[0.2em] uppercase">POSIÇÃO REVELADA:</p>
        <h3 className="text-2xl xs:text-3xl font-black italic tracking-tight text-white px-2 leading-snug">
          "{position.title}"
        </h3>
        <p className="text-gray-400 text-sm font-medium leading-relaxed px-2">
          {position.description}
        </p>
      </div>

      {/* Buttons and CTA Message */}
      <div className="w-full mt-auto mb-10 space-y-4 shrink-0 flex flex-col items-center">
        <p className="text-white/60 text-[11px] font-bold tracking-wider uppercase text-center max-w-[280px] leading-relaxed mb-2">
          Clique em <span className="text-[#ff1a7d]">iniciar agora</span> para conhecer mais posições e jogos sexuais
        </p>
        
        <button 
          onClick={onStart}
          className="w-full h-20 xs:h-24 pink-gradient rounded-3xl flex flex-col items-center justify-center gap-1 shadow-2xl active:scale-95 transition-transform"
        >
          <span className="text-white text-xl font-black tracking-wider uppercase">INICIAR AGORA</span>
          <span className="text-2xl">⌛</span>
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
