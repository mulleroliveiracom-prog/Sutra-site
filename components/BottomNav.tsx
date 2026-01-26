
import React from 'react';

const BottomNav: React.FC = () => {
  const tabs = [
    { name: 'LUNA', icon: '🎰', active: true },
    { name: 'CARDS', icon: '🎴', active: false },
    { name: 'SLOT', icon: '⚡', active: false },
    { name: 'LOJA', icon: '🛍️', active: false },
    { name: 'VIP', icon: '🏆', active: false },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#000000]/95 backdrop-blur-xl px-4 py-5 flex justify-between items-center border-t border-gray-900 z-50">
      {tabs.map((tab) => (
        <div 
          key={tab.name} 
          className={`flex flex-col items-center gap-2 transition-all ${tab.active ? 'opacity-100' : 'opacity-25 grayscale'}`}
        >
          <div className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-xl transition-transform ${
            tab.active 
              ? 'bg-[#ffb11a] border-2 border-white/20 scale-110' 
              : 'bg-[#141625] border border-gray-800'
          }`}>
            {tab.icon}
          </div>
          <span className={`text-[10px] font-black tracking-widest ${tab.active ? 'text-[#ffb11a]' : 'text-gray-500'}`}>
            {tab.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default BottomNav;
