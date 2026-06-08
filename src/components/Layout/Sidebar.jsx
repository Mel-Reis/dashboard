/* eslint-disable no-unused-vars */
import React from 'react';
import logo from "../../assets/logo.jpg";


function Sidebar() {
  return (
    /* Aqui você pode adicionar os itens do seu sidebar */

    <div className="w-50 h-screen bg-white dark:bg-gray-800 shadow-md flex flex-col">

    <div className="p-4 border-b border-slate-200/50 dark:border-slate-600/40">
    <div className="flex items-center space-x-3">
      
      <img
        src={logo}
        alt="Logo"
        className="w-8 h-8 rounded-xl"/>

    <div>
      <h1 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
        Cobrança
      </h1>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        Painel
      </p>
    </div>
  </div>
</div>


      {/* itens do sidebar - Navigation*/}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto"></nav>

     <div className="p-4 border-t border-slate-200/50 dark:border-slate-600/40">
        <div className="flex items-center justify-center">
        <p className="text-xs text-gray-700 dark:text-gray-300">
          Time de Cobrança
        </p>
      </div>
    </div>
    </div>

  
    
  );
}

export default Sidebar;