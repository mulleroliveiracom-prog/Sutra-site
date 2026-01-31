
import React, { useState, useEffect } from 'react';

interface RouletteProps {
  isSpinning: boolean;
  onFinish: () => void;
}

const Roulette: React.FC<RouletteProps> = ({ isSpinning, onFinish }) => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    if (isSpinning) {
      const extraDegrees = 1800 + Math.floor(Math.random() * 360);
      setRotation(prev => prev + extraDegrees);
      
      const timer = setTimeout(() => {
        onFinish();
      }, 3500);

      return () => clearTimeout(timer);
    }
  }, [isSpinning, onFinish]);

  return (
    <div className="relative w-[260px] h-[260px] xs:w-[300px] xs:h-[300px] mx-auto flex items-center justify-center">
      {/* Pink Glow Background */}
      <div className="absolute inset-0 bg-[#ff1a7d]/15 blur-[40px] rounded-full"></div>
      
      {/* Main Wheel */}
      <div 
        className="relative w-full h-full rounded-full border-[6px] border-[#0a0b14] overflow-hidden transition-transform duration-[3.5s] cubic-bezier(0.15, 0, 0.15, 1) shadow-[0_0_40px_rgba(255,26,125,0.25)]"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        {/* Pink Slices */}
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
             <span className="absolute left-[40%] top-[12%] -translate-x-1/2 rotate-90 text-[7px] font-black tracking-widest text-white/40 uppercase select-none">
               WIN
             </span>
          </div>
        ))}

        {/* Center Black Hub */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[28%] h-[28%] rounded-full bg-[#111111] flex items-center justify-center border-2 border-[#1a1a1a] shadow-2xl">
            <span className="text-[#ffb11a] text-[10px] font-black italic tracking-widest -rotate-45 uppercase">LUNA</span>
          </div>
        </div>
      </div>

      {/* Pointer */}
      <div className="absolute top-[-8px] left-1/2 -translate-x-1/2 z-30 flex flex-col items-center">
        <div className="w-8 h-10 bg-white rounded-lg flex flex-col items-center justify-center shadow-lg relative overflow-hidden">
            <div className="w-2.5 h-2.5 bg-[#ff1a7d] rounded-full"></div>
            <div className="absolute bottom-[-5px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-white"></div>
        </div>
      </div>
    </div>
  );
};

export default Roulette;
