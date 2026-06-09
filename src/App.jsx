
import React from 'react';
import Sidebar from './components/Layout/Sidebar';
import Header from './components/Layout/Header';

function App() {
  const [sideBarCollapsed, setSideBarCollapsed] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState("dashboard");
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
            <Header />
            <main className="flex-1 p-6 overflow-y-auto">
              {/* Conteúdo principal do dashboard */}
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                O conteúdo principal do dashboard vai aqui. 
              </h2>
            </main>
          </div>
        </div>


      </div>
    
  );
}

export default App;