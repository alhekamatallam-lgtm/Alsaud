
import React from 'react';

const UnderConstructionIcon: React.FC = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className="h-24 w-24 mb-6 text-yellow-400 animate-pulse" 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor"
    strokeWidth={2}
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
    />
  </svg>
);

const App: React.FC = () => {
  return (
    <main className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-4 font-sans text-center">
      <div className="max-w-2xl">
        <UnderConstructionIcon />
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          قيد الإنشاء
        </h1>
        <p className="text-lg md:text-xl text-gray-300">
          نحن نعمل بجد لإطلاق هذا التطبيق قريباً. شكراً لصبركم!
        </p>
      </div>
    </main>
  );
};

export default App;
