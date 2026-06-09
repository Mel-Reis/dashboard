import { UserPlus } from "lucide-react";

function Usuarios() {
  return (
    <div className="space-y-6">
      {/* Cabeçalho */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800 dark:text-white">
          Usuários
        </h1>
        <p className="text-slate-500 dark:text-slate-400">
          Gerencie os usuários do sistema.
        </p>
      </div>

      {/* Card do formulário */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
            <UserPlus className="h-5 w-5 text-blue-600" />
          </div>

          <h2 className="text-lg font-semibold text-slate-800 dark:text-white">
            Novo Usuário
          </h2>
        </div>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">
              Nome
            </label>

            <input
              type="text"
              placeholder="Digite o nome"
              className="w-full px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">
              E-mail
            </label>

            <input
              type="email"
              placeholder="usuario@email.com"
              className="w-full px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">
              Cargo
            </label>

            <input
              type="text"
              placeholder="Ex: Supervisor"
              className="w-full px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">
              Perfil
            </label>

            <select
              className="w-full px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700"
            >
              <option>Administrador</option>
              <option>Supervisor</option>
              <option>Operador</option>
            </select>
          </div>

          <div className="md:col-span-2 flex justify-end mt-4">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition"
            >
              Salvar Usuário
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Usuarios;