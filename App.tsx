
import React, { useState, useCallback, useEffect } from 'react';
import { AppState, Position } from './types';
import { POSITIONS } from './constants';
import Header from './components/Header';
import Roulette from './components/Roulette';
import BottomNav from './components/BottomNav';
import ResultCard from './components/ResultCard';

const App: React.FC = () => {
  // Alterado para HOME para remover o "Bem-vindo" inicial
  const [state, setState] = useState<AppState>('HOME');
  const [hasSpun, setHasSpun] = useState(false);
  const [currentPosition, setCurrentPosition] = useState<Position | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleSpin = useCallback(() => {
    if (hasSpun || state === 'SPINNING') return;
    setState('SPINNING');
    setHasSpun(true);
  }, [hasSpun, state]);

  const handleSpinFinish = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * POSITIONS.length);
    const selected = POSITIONS[randomIndex];
    setCurrentPosition(selected);
    setState('RESULT');
  }, []);

  const handleStart = useCallback(() => {
    window.location.href = 'https://lunasutra.vercel.app/';
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen-fix bg-black flex flex-col items-center justify-center space-y-4">
        <div className="w-12 h-12 border-4 border-[#ff1a7d] border-t-transparent rounded-full animate-spin"></div>
        <p className="text-[#ff1a7d] text-xs font-black tracking-widest uppercase">Luna Club</p>
      </div>
    );
  }

  return (
    <div className="h-screen-fix bg-[#000000] flex flex-col items-center max-w-md mx-auto relative overflow-hidden">
      {state !== 'RESULT' && (
        <>
          <div className="w-full flex-1 flex flex-col overflow-hidden">
            <Header />
            <div className="flex-1 flex flex-col items-center justify-between py-2 px-6">
              {/* Container da Roleta - ajustado para ocupar o espaço central disponível */}
              <div className="relative w-full flex-1 flex items-center justify-center min-h-0">
                 <Roulette 
                  isSpinning={state === 'SPINNING'} 
                  onFinish={handleSpinFinish} 
                />
              </div>

              {/* Container do Botão - posicionado para ser visível sem rolagem */}
              <div className="w-full mt-4 mb-24">
                <button 
                  onClick={handleSpin}
                  disabled={state === 'SPINNING' || hasSpun}
                  className={`w-full h-16 xs:h-20 rounded-[40px] flex items-center justify-center gap-4 transition-all transform active:scale-95 ${
                    hasSpun 
                      ? 'bg-gray-800 opacity-50 cursor-not-allowed' 
                      : 'bg-[#e91e63] shadow-[0_8px_0px_#c2185b]'
                  }`}
                >
                  <span className="text-white text-2xl font-black tracking-widest uppercase">
                    {hasSpun ? 'USADO' : 'GIRAR'}
                  </span>
                  <span className="text-2xl">🎰</span>
                </button>
              </div>
            </div>
          </div>
          <BottomNav />
        </>
      )}

      {state === 'RESULT' && currentPosition && (
        <ResultCard 
          position={currentPosition} 
          onStart={handleStart} 
        />
      )}
    </div>
  );
};

export default App;
