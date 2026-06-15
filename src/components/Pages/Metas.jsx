function Metas() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-800 dark:text-white">
          Metas
        </h1>

        <p className="text-slate-500 dark:text-slate-400">
          Configuração das metas da equipe.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Meta Mensal */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
          <h2 className="font-semibold mb-4 text-slate-800 dark:text-white">
            Meta Mensal
          </h2>

          <input
            type="number"
            placeholder="R$ 0,00"
            className="
              w-full
              p-3
              rounded-xl
              border
              border-slate-300
              dark:border-slate-600
              bg-white
              dark:bg-slate-700
              text-slate-800
              dark:text-white
              placeholder:text-slate-400
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
            "
          />
        </div>

        {/* Meta Semanal */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
          <h2 className="font-semibold mb-4 text-slate-800 dark:text-white">
            Meta Semanal
          </h2>

          <input
            type="number"
            placeholder="R$ 0,00"
            className="
              w-full
              p-3
              rounded-xl
              border
              border-slate-300
              dark:border-slate-600
              bg-white
              dark:bg-slate-700
              text-slate-800
              dark:text-white
              placeholder:text-slate-400
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
            "
          />
        </div>
      </div>
    </div>
  );
}

export default Metas;