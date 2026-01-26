
import React from 'react';

interface IntroModalProps {
  onConfirm: () => void;
}

const IntroModal: React.FC<IntroModalProps> = ({ onConfirm }) => {
  return (
    <div className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-md flex items-center justify-center px-6">
      <div className="w-full bg-[#141625] rounded-[40px] p-10 border border-gray-800 flex flex-col items-center text-center space-y-8 card-shadow animate-in zoom-in duration-300">
        <div className="w-20 h-20 bg-[#ff1a7d]/10 rounded-full flex items-center justify-center text-4xl mb-2 shadow-[0_0_30px_rgba(255,26,125,0.2)]">
          ✨
        </div>
        
        <div className="space-y-4">
          <h2 className="text-[#ff1a7d] text-2xl font-black italic tracking-tighter uppercase drop-shadow-[0_0_10px_rgba(255,26,125,0.3)]">
            BEM-VINDO AO LUNA CLUB
          </h2>
          <p className="text-gray-400 text-lg font-medium leading-relaxed">
            Aperte em <span className="text-[#ff1a7d] font-bold">GIRAR</span> para escolher a posição do seu desafio.
          </p>
        </div>

        <button 
          onClick={onConfirm}
          className="w-full h-20 pink-gradient rounded-3xl text-white text-xl font-black tracking-widest uppercase shadow-[0_10px_30px_rgba(255,26,125,0.3)] active:scale-95 transition-all"
        >
          ENTENDIDO
        </button>
      </div>
    </div>
  );
};

export default IntroModal;
