
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
            
          </div>
        </div>


      </div>
    
  );
}

export default App;