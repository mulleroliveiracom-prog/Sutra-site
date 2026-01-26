
import React, { useState, useCallback, useEffect } from 'react';
import { AppState, Position } from './types';
import { POSITIONS } from './constants';
import Header from './components/Header';
import Roulette from './components/Roulette';
import BottomNav from './components/BottomNav';
import ResultCard from './components/ResultCard';
import IntroModal from './components/IntroModal';

const App: React.FC = () => {
  const [state, setState] = useState<AppState>('INTRO');
  const [hasSpun, setHasSpun] = useState(false);
  const [currentPosition, setCurrentPosition] = useState<Position | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const handleConfirmIntro = useCallback(() => {
    setState('HOME');
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
    window.location.href = 'https://pay.cakto.com.br/3fkn28t_741608';
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
      {state === 'INTRO' && <IntroModal onConfirm={handleConfirmIntro} />}

      {state !== 'RESULT' && (
        <>
          <div className="w-full flex-1 overflow-y-auto scroll-container pb-36">
            <Header />
            <div className="w-full flex flex-col items-center">
              <div className="relative py-8 w-full flex flex-col items-center">
                 <Roulette 
                  isSpinning={state === 'SPINNING'} 
                  onFinish={handleSpinFinish} 
                />
                <div className="w-full px-6 mt-12 mb-8">
                  <button 
                    onClick={handleSpin}
                    disabled={state === 'SPINNING' || hasSpun}
                    className={`w-full h-20 rounded-[40px] flex items-center justify-center gap-4 transition-all transform active:scale-95 ${
                      hasSpun 
                        ? 'bg-gray-800 opacity-50 cursor-not-allowed' 
                        : 'bg-[#e91e63] shadow-[0_12px_0px_#c2185b]'
                    }`}
                  >
                    <span className="text-white text-3xl font-black tracking-widest uppercase">
                      {hasSpun ? 'USADO' : 'GIRAR'}
                    </span>
                    <span className="text-3xl">🎰</span>
                  </button>
                </div>
              </div>

              <div className="w-full px-6 space-y-6 mb-10">
                 <h2 className="text-[#ffb11a] text-3xl font-black italic text-center tracking-tighter uppercase">
                   SURPRESA 3D
                 </h2>
                 <div className="bg-[#141625] rounded-[35px] p-8 border border-gray-800/50 card-shadow">
                    <p className="text-white/80 text-xl font-bold italic leading-tight text-center">
                      Descubra o que o destino preparou para vocês hoje.
                    </p>
                 </div>
              </div>

              <div className="w-full px-6 opacity-40 grayscale relative pb-10">
                 <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
                    <div className="bg-black/60 p-4 rounded-full border border-gray-700">
                      <span className="text-3xl">🔒</span>
                    </div>
                 </div>
                 <div className="bg-[#141625] rounded-[35px] p-6 border border-gray-800/50 flex flex-col items-center gap-4">
                    <h3 className="text-white text-lg font-black italic tracking-tighter uppercase">JOGOS EXCLUSIVOS</h3>
                    <div className="flex gap-4">
                      <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-3xl">🎲</div>
                      <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-3xl">🎴</div>
                    </div>
                    <p className="text-[10px] text-gray-500 font-bold tracking-widest uppercase text-center">DISPONÍVEL NO PLANO PREMIUM</p>
                 </div>
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
