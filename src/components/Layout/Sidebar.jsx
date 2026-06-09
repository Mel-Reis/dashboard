/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import logo from "../../assets/logo.jpg";
import {
  LayoutDashboard,
  Users,
  Settings,
  FileText,
  ChevronDown
} from 'lucide-react';

const menuItems = [
  {
    id: "dashboard",
    icon: LayoutDashboard,
    label: "Dashboard",
    active: true,
    badge: "New"
  },
  {
    id: "users",
    icon: Users,
    label: "Users",
    active: false,
    submenu: [
      { id: "all-users", label: "Usuários" },
      { id: "admins", label: "Administradores" }
    ]
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
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (id) => {
    setOpenMenu(openMenu === id ? null : id);
  };

  return (
    <div className="w-64 h-screen bg-white dark:bg-gray-800 shadow-md flex flex-col">

      {/* Header */}
      <div className="p-4 border-b border-slate-200/50 dark:border-slate-600/40">
        <div className="flex items-center space-x-3">
          <img
            src={logo}
            alt="Logo"
            className="w-8 h-8 rounded-xl"
          />

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

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isOpen = openMenu === item.id;

          return (
            <div key={item.id}>
              <button
                onClick={() => item.submenu && toggleMenu(item.id)}
                className="flex items-center justify-between w-full p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-200"
              >
                <div className="flex items-center space-x-3">
                  <Icon className="w-5 h-5 text-gray-500 dark:text-gray-400" />

                  <span className="text-gray-700 dark:text-gray-300">
                    {item.label}
                  </span>

                  {item.badge && (
                    <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </div>

                {item.submenu && (
                  <ChevronDown
                    className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                )}
              </button>

              {item.submenu && isOpen && (
                <div className="ml-8 mt-2 space-y-1 border-l border-slate-200 dark:border-slate-600 pl-3">
                  {item.submenu.map((subItem) => (
                    <button
                      key={subItem.id}
                      className="block w-full text-left py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500"
                    >
                      {subItem.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* Footer */}
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