
import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="w-full px-6 pt-6 space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-[#ffb11a] text-[9px] font-black tracking-[0.3em] mb-0.5 opacity-80 uppercase">LUNA CLUB</p>
          <h1 className="text-3xl font-black tracking-tighter italic leading-none">
            A <span className="text-[#ffb11a]">&</span> C
          </h1>
        </div>
        <div className="bg-[#141625] px-4 py-2 rounded-2xl flex items-center gap-2 border border-gray-800 shadow-xl">
          <span className="text-xl font-black text-white">0</span>
          <div className="w-6 h-6 bg-[#ffb11a] rounded-full flex items-center justify-center text-base shadow-[0_0_15px_rgba(255,177,26,0.4)]">
            🪙
          </div>
        </div>
      </div>

      <div className="bg-[#141625] p-4 rounded-[25px] border border-gray-800/50 card-shadow">
        <div className="flex justify-between items-center mb-2">
          <p className="text-[#9b9da3] text-[9px] font-black tracking-[0.2em] uppercase">CONEXÃO</p>
          <p className="text-[#ffb11a] text-xs font-black italic">0 / 5</p>
        </div>
        <div className="w-full bg-[#0a0b14] h-2.5 rounded-full overflow-hidden p-[1px]">
          <div className="w-[8%] h-full pink-gradient rounded-full shadow-[0_0_10px_#ff1a7d]"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
