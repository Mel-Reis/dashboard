/* eslint-disable no-unused-vars */
import React from 'react';
import { Menu } from 'lucide-react';

function Header() {
  return (
    <div className='bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-600/40 px-4 py-4'>
      
      {/* Aqui você pode adicionar os itens do seu header */}
      <div className=" p-1 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button className="p-2 text-gray-500 dark:text-gray-400 focus:outline-none hover:bg-gray-500 dark:hover:bg-gray-700 transition-colors ">
           <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

    </div>
  );
}

export default Header;      

