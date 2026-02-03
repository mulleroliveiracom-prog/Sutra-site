
import React, { useState, useCallback, useEffect } from 'react';
import { AppState, Position } from './types';
import { POSITIONS } from './constants';
import Header from './components/Header';
import Roulette from './components/Roulette';
import BottomNav from './components/BottomNav';
import ResultCard from './components/ResultCard';
import PurchaseNotification from './components/PurchaseNotification';

const App: React.FC = () => {
  // Inicia direto em HOME conforme solicitado para remover o "Bem-vindo"
  const [state, setState] = useState<AppState>('HOME');
  const [hasSpun, setHasSpun] = useState(false);
  const [currentPosition, setCurrentPosition] = useState<Position | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Carregamento rápido para UX
    const timer = setTimeout(() => setIsLoading(false), 400);
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
    // Link atualizado para o checkout solicitado: TriboPay
    window.location.href = 'https://go.tribopay.com.br/xj1wn1boik';
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
      {/* Notificações em tempo real */}
      <PurchaseNotification />

      {state !== 'RESULT' && (
        <>
          {/* O container principal permite rolagem, mas o conteúdo é distribuído para caber na tela */}
          <div className="w-full flex-1 flex flex-col overflow-y-auto scroll-container pb-28 pt-12">
            <Header />
            
            <div className="flex-1 flex flex-col items-center justify-center px-6 py-4 space-y-6">
              {/* Roleta compacta para garantir visibilidade do botão abaixo */}
              <div className="relative w-full flex items-center justify-center flex-shrink-0 py-2">
                 <Roulette 
                  isSpinning={state === 'SPINNING'} 
                  onFinish={handleSpinFinish} 
                />
              </div>

              {/* Botão de Girar - ajustado para ser o ponto focal sem rolagem */}
              <div className="w-full flex-shrink-0">
                <button 
                  onClick={handleSpin}
                  disabled={state === 'SPINNING' || hasSpun}
                  className={`w-full h-16 xs:h-20 rounded-[40px] flex items-center justify-center gap-4 transition-all transform active:scale-95 ${
                    hasSpun 
                      ? 'bg-gray-800 opacity-50 cursor-not-allowed' 
                      : 'bg-[#e91e63] shadow-[0_8px_0px_#c2185b] hover:brightness-110'
                  }`}
                >
                  <span className="text-white text-2xl font-black tracking-widest uppercase">
                    {hasSpun ? 'USADO' : 'GIRAR'}
                  </span>
                  <span className="text-2xl animate-pulse">🎰</span>
                </button>
              </div>

              {/* Conteúdo adicional que pode ser acessado via scroll */}
              <div className="w-full space-y-4 opacity-80">
                 <div className="bg-[#141625] rounded-[25px] p-6 border border-gray-800/50">
                    <p className="text-white/60 text-xs font-bold italic text-center uppercase tracking-widest">
                      Desbloqueie o seu destino hoje
                    </p>
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
