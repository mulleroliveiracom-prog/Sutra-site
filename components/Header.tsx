
import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="w-full px-6 pt-10 space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-[#ffb11a] text-[10px] font-black tracking-[0.3em] mb-1 opacity-80 uppercase">LUNA CLUB</p>
          <h1 className="text-4xl font-black tracking-tighter italic leading-none">
            A <span className="text-[#ffb11a]">&</span> C
          </h1>
        </div>
        <div className="bg-[#141625] px-6 py-3 rounded-2xl flex items-center gap-3 border border-gray-800 shadow-xl">
          <span className="text-2xl font-black text-white">0</span>
          <div className="w-7 h-7 bg-[#ffb11a] rounded-full flex items-center justify-center text-lg shadow-[0_0_15px_rgba(255,177,26,0.4)]">
            🪙
          </div>
        </div>
      </div>

      <div className="bg-[#141625] p-6 rounded-[35px] border border-gray-800/50 card-shadow">
        <div className="flex justify-between items-center mb-4">
          <p className="text-[#9b9da3] text-[10px] font-black tracking-[0.2em] uppercase">CONEXÃO</p>
          <p className="text-[#ffb11a] text-sm font-black italic">0 / 5</p>
        </div>
        <div className="w-full bg-[#0a0b14] h-3 rounded-full overflow-hidden p-[2px]">
          <div className="w-[8%] h-full pink-gradient rounded-full shadow-[0_0_10px_#ff1a7d]"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
