import React from 'react';
import logo from "../../assets/logo.jpg";import { Zap } from 'lucide-react';
;

function Sidebar() {
  return (
    /* Aqui você pode adicionar os itens do seu sidebar */

    <div className="transition duration-300 ease-in-out bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border-r border-slate-200/50 dark:border-slate-600/40 flex flex-col relative z-10">

      {/* logo */}
      <div className="p-4 border-b border-slate-200/50 dark:border-slate-600/40">
          <div className="flex items-center space-x-3">
             <div>
               <img src={logo} alt="Logo" className="w-8 h-8 rounded-xl"/>
             </div>
            
          </div>

          {/* depois ajeito o espaçamento dos itens com logo*/}
          <div>
            <h1 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Dashboard</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">Painel
            </p>
          </div>
      </div>


      {/* itens do sidebar - Navigation*/}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto"></nav>

      {/* item 1 - Time*/}
      <div className="p-4 border-t border-slate-200/50 dark:border-slate-600/40">
        <div className="flex items-center">
          <p className="text-xs text-gray-700 dark:text-gray-300 truncate">Time de Cobrança</p>
        </div>
      </div>
    </div>

  
    
  );
}

export default Sidebar;