import React from 'react';
import logo from "../../assets/logo.jpg";;

function Sidebar() {
  return (
    /* Aqui você pode adicionar os itens do seu sidebar */

    <div className="transition duration-300 ease-in-out bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border-r border-slate-200/50 dark:border-slate-600/40 flex flex-col relative z-10">
      {/* logo */}
      <div className="p-4 border-b border-slate-200/50 dark:border-slate-600/40">
          <div className="flex items-center space-x-3">
             <div>
               <img src={logo} alt="Logo" className="w-8 h-8 rounded-xl" />
             </div>
          </div>
       
      </div>
      
    </div>
  );
}

export default Sidebar;