/* eslint-disable no-unused-vars */

import React from 'react';
import Sidebar from './components/Layout/Sidebar';
import Header from './components/Layout/Header';
import Dashboard from './components/Layout/Dashboard/Dashboard';
import Usuarios from './components/Pages/Usuarios';

function App() {
  const [sideBarCollapsed, setSideBarCollapsed] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState("dashboard");
  const [entries, setEntries] = React.useState([
  { nome: "João", valor: 100, data: "2026-06-01" },
  { nome: "Maria", valor: 200, data: "2026-06-02" },
  { nome: "João", valor: 150, data: "2026-06-03" },
]);
  return (
    
  
      /* Aqui você pode adicionar os componentes do seu dashboard */

      <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-700 transition-all duration-500">
        {/* Sidebar - estado*/}
        <div className="flex h-screen overflow-hidden">
          
          <Sidebar collapsed={sideBarCollapsed} onToggle={() => setSideBarCollapsed(!sideBarCollapsed)} 
            currentPage={currentPage} 
            onPageChange={setCurrentPage}
          />
          <div className="flex-1 flex flex-col overflow-hidden">

            {/* Header */}
            <Header onToggleSidebar={() =>
    setSideBarCollapsed(!sideBarCollapsed)
  }/>
            <main className="flex-1 p-6 overflow-y-auto">
              {/* Conteúdo principal do dashboard */}
              {/* <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                {currentPage === "dashboard" && <Dashboard/>}

              </div> */}
               {currentPage === "dashboard" && (
                  <Dashboard entries={entries} />
  )}
              {currentPage === "users" && <Usuarios />}  
            </main>
          </div>
        </div>


      </div>
    
  );
}

export default App;