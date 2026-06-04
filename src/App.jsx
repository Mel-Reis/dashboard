import React from 'react';
import Sidebar from './components/Layout/Sidebar';

function App() {
  return (
  
      /* Aqui você pode adicionar os componentes do seu dashboard */

      <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-700 transition-all duration-500">

        <div className="flex h-screen overflow-hidden">
          
          <Sidebar />
        </div>


      </div>
    
  );
}

export default App;