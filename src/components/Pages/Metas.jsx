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
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm">
          <h2 className="font-semibold mb-4 text-white">
            Meta Mensal
          </h2>

          <input
            type="number"
            placeholder="R$ 0,00"
            className="w-full border rounded-xl p-3 text-white focus:outline-none"
          />
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm">
          <h2 className="font-semibold mb-4 text-white ">
            Meta Semanal
          </h2>

          <input
            type="number"
            placeholder="R$ 0,00"
            className="w-full border rounded-xl p-3 text-white focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
}

export default Metas;