/* eslint-disable no-unused-vars */
import React from 'react';
import { Filter, Menu, Search } from 'lucide-react';

function Header() {
  return (
    <div className='bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-600/40 px-4 py-4'>
      
      {/* Aqui você pode adicionar os itens do seu header */}
      <div className="  flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button className="p-2 text-gray-500 dark:text-gray-400 focus:outline-none hover:bg-gray-500 dark:hover:bg-gray-700 transition-colors ">
           <Menu className="h-6 w-6" />
          </button>

        <div className="hidden md:block">
          <h1 className="text-xl font-bold text-gray-800 dark:text-gray-200">
            Dashboard
          </h1>

          <p className="text-sm text-gray-500 dark:text-gray-400">
            Bem-vindo ao painel de controle
          </p>

        </div>
        </div>

        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-gray-300 dark:focus:bg-gray-600  focus:border-transparent transition-all"
            />
           {/* Depois ajeito o hover */}`
            <button className=" absolute right-2 top-1/2 transform -translate-y-1/2 py-1.5 bg-gray-700 dark:bg-gray-750 rounded-3xl hover:bg-gray-700 dark:hover:bg-gray-600">
              <Filter className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Header;      

