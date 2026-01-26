
import React, { useState, useEffect } from 'react';

interface RouletteProps {
  isSpinning: boolean;
  onFinish: () => void;
}

const Roulette: React.FC<RouletteProps> = ({ isSpinning, onFinish }) => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    if (isSpinning) {
      // Logic for spin
      const extraDegrees = 1800 + Math.floor(Math.random() * 360);
      setRotation(prev => prev + extraDegrees);
      
      const timer = setTimeout(() => {
        onFinish();
      }, 3500);

      return () => clearTimeout(timer);
    }
  }, [isSpinning, onFinish]);

  return (
    <div className="relative w-[320px] h-[320px] xs:w-[350px] xs:h-[350px] sm:w-[420px] sm:h-[420px] mx-auto flex items-center justify-center">
      {/* Pink Glow Background */}
      <div className="absolute inset-0 bg-[#ff1a7d]/20 blur-[60px] rounded-full"></div>
      
      {/* Main Wheel */}
      <div 
        className="relative w-full h-full rounded-full border-[8px] border-[#0a0b14] overflow-hidden transition-transform duration-[3.5s] cubic-bezier(0.15, 0, 0.15, 1) shadow-[0_0_40px_rgba(255,26,125,0.3)]"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        {/* Pink Slices with "PLAY" */}
        {[...Array(12)].map((_, i) => (
          <div 
            key={i}
            className="absolute top-0 left-1/2 w-1/2 h-full origin-left flex items-center justify-center"
            style={{ 
              transform: `rotate(${i * 30}deg)`,
              backgroundColor: i % 2 === 0 ? '#e91e63' : '#d81b60',
              borderLeft: '1px solid rgba(0,0,0,0.1)'
            }}
          >
             <span className="absolute left-[40%] top-[12%] -translate-x-1/2 rotate-90 text-[10px] font-black tracking-widest text-[#ff1a7d] opacity-50 uppercase select-none">
               PLAY
             </span>
          </div>
        ))}

        {/* Center Black Hub */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[30%] h-[30%] rounded-full bg-[#111111] flex items-center justify-center border-4 border-[#1a1a1a] shadow-2xl">
            <span className="text-[#ffb11a] text-sm xs:text-base font-black italic tracking-widest -rotate-45 uppercase">LUNA</span>
            {/* Small pink dot in center */}
            <div className="absolute w-2 h-2 bg-[#ff1a7d]/40 rounded-full blur-[1px]"></div>
          </div>
        </div>
      </div>

      {/* Pointer (White with Pink Dot as per screenshot) */}
      <div className="absolute top-[-15px] left-1/2 -translate-x-1/2 z-30 flex flex-col items-center">
        <div className="w-12 h-14 bg-white rounded-2xl flex flex-col items-center justify-center shadow-lg relative overflow-hidden">
            {/* The Pink Dot */}
            <div className="w-4 h-4 bg-[#ff1a7d] rounded-full shadow-[0_0_10px_rgba(255,26,125,0.8)]"></div>
            {/* Pointy tip beneath */}
            <div className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[12px] border-t-white"></div>
        </div>
      </div>
    </div>
  );
};

export default Roulette;