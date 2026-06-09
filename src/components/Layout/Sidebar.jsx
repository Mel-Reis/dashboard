/* eslint-disable no-unused-vars */
import React from 'react';
import logo from "../../assets/logo.jpg";
import {
  LayoutDashboard,
  Users,
  Settings,
  FileText
} from 'lucide-react';

const menuItems = [
  {id: "dasboard",
   icon: LayoutDashboard,
   label: "Dashboard",
   active: true,
   badge:"New"
  },
  {
    id: "users",
    icon: Users,
    label: "Users",
    active: false
  },
  {
    id: "settings",
    icon: Settings,
    label: "Settings",
    active: false
  },
  {
    id: "documents",
    icon: FileText,
    label: "Documents",
    active: false
  }
];


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
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
  {menuItems.map((item) => {
    const Icon = item.icon;

    return (
      <div key={item.id}>
        <button className="flex items-center w-full p-2 rounded-xl transition-all duration-200 justify-between">
          <div className="flex items-center space-x-3">
            <Icon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            <span className="text-gray-700 dark:text-gray-300">{item.label}</span>
          </div>
        </button>
      </div>
    );
  })}
</nav>

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