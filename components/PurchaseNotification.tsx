
import React, { useState, useEffect, useRef } from 'react';
import { NOTIFICATIONS } from '../constants';

const PurchaseNotification: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  // Using 'any' for the timer reference to avoid NodeJS namespace issues in browser environment
  const timerRef = useRef<any>(null);

  useEffect(() => {
    const cycleNotification = () => {
      // 1. Mostrar
      setIsVisible(true);
      
      // 2. Agendar desaparecimento (após 3 segundos)
      timerRef.current = setTimeout(() => {
        setIsVisible(false);
        
        // 3. Agendar próxima notificação (2 segundos após desaparecer = 5s total)
        timerRef.current = setTimeout(() => {
          setIndex((prev) => (prev + 1) % NOTIFICATIONS.length);
          cycleNotification();
        }, 2000);
      }, 3000);
    };

    // Delay inicial de 2 segundos antes da primeira notificação
    const startTimer = setTimeout(cycleNotification, 2000);
    
    return () => {
      clearTimeout(startTimer);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const current = NOTIFICATIONS[index];

  return (
    <div className={`fixed top-6 left-1/2 -translate-x-1/2 z-[300] w-auto min-w-[240px] max-w-[280px] transition-all duration-700 ease-in-out transform ${
      isVisible ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-12 opacity-0 scale-90 pointer-events-none'
    }`}>
      <div className="bg-[#141625]/90 backdrop-blur-xl border border-white/10 rounded-full px-5 py-2.5 flex items-center justify-center gap-3 shadow-[0_10px_40px_rgba(0,0,0,0.8)]">
        {/* Pequeno indicador de sucesso para preencher o espaço visual sem precisar de foto */}
        <div className="flex-shrink-0 w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_#22c55e]"></div>
        
        <div className="flex flex-col items-start overflow-hidden leading-tight">
          <p className="text-white text-[11px] font-black whitespace-nowrap">
            {current.name} 
            <span className="text-white/40 font-normal text-[9px] ml-1 uppercase">— {current.city}</span>
          </p>
          <p className="text-[#ff1a7d] text-[9px] font-black uppercase tracking-tighter whitespace-nowrap">
            GARANTIU O ACESSO COMPLETO 🚀
          </p>
        </div>
      </div>
    </div>
  );
};

export default PurchaseNotification;
