import { useEffect } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
// função dashboard
function Dashboard({ entries = [] }) {
  const today = new Date();

  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - today.getDay());

  const startOfMonth = new Date(
    today.getFullYear(),
    today.getMonth(),
    1
  );

  const parseDate = (dateStr) => new Date(dateStr);

  const weeklyEntries = entries.filter(
    (e) => parseDate(e.data) >= startOfWeek
  );

  const monthlyEntries = entries.filter(
    (e) => parseDate(e.data) >= startOfMonth
  );

  const sum = (arr) =>
    arr.reduce((acc, item) => acc + Number(item.valor), 0);

  const metaSemanal = sum(weeklyEntries);
  const metaMensal = sum(monthlyEntries);

  // VALORES TEMPORÁRIOS
  // Depois virão da API ou da página Metas
  const metaSemanalObjetivo = 30000;
  const metaMensalObjetivo = 120000;

  const progressoSemanal = Math.min(
    (metaSemanal / metaSemanalObjetivo) * 100,
    100
  );

  const progressoMensal = Math.min(
    (metaMensal / metaMensalObjetivo) * 100,
    100
  );
// Alerta se atingir a meta
  useEffect(() => {
    if (progressoSemanal >= 100) {
      alert("Meta semanal atingida!");
    }

    if (progressoMensal >= 100) {
      alert("Meta mensal atingida!");
    }
  }, [progressoSemanal, progressoMensal]);
// Meta semanal e mensal - declarando
  const chartData = [
    {
      name: "Semana",
      valor: metaSemanal,
      meta: metaSemanalObjetivo,
    },
    {
      name: "Mês",
      valor: metaMensal,
      meta: metaMensalObjetivo,
    },
  ];
// Top cobradores
  const topCobradores = Object.values(
    entries.reduce((acc, item) => {
      if (!acc[item.nome]) {
        acc[item.nome] = {
          nome: item.nome,
          total: 0,
        };
      }

      acc[item.nome].total += Number(item.valor);

      return acc;
    }, {})
  )
    .sort((a, b) => b.total - a.total)
    .slice(0, 2);

  return (
    <div className="space-y-6">

      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow">
          <p className="text-gray-500">Meta Semanal</p>

          <h2 className="text-2xl font-bold text-green-500">
            R$ {metaSemanalObjetivo.toFixed(2)}
          </h2>
        </div>

        <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow">
          <p className="text-gray-500">Meta Mensal</p>

          <h2 className="text-2xl font-bold text-blue-500">
            R$ {metaMensalObjetivo.toFixed(2)}
          </h2>
        </div>

        <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow">
          <p className="text-gray-500">Top Cobradores</p>

          {topCobradores.map((c, i) => (
            <div
              key={i}
              className="flex justify-between text-gray-700 dark:text-gray-300 mt-2"
            >
              <span>{c.nome}</span>

              <span className="font-bold">
                R$ {c.total.toFixed(2)}
              </span>
            </div>
          ))}
        </div>

      </div>

      {/* Progresso */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow">
          <p className="text-gray-500 mb-2">
            Progresso Semanal
          </p>

          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4">
            <div
              className="bg-green-500 h-4 rounded-full transition-all"
              style={{ width: `${progressoSemanal}%` }}
            />
          </div>

          <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">
            {progressoSemanal.toFixed(1)}%
          </p>
        </div>

        <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow">
          <p className="text-gray-500 mb-2">
            Progresso Mensal
          </p>

          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4">
            <div
              className="bg-blue-500 h-4 rounded-full transition-all"
              style={{ width: `${progressoMensal}%` }}
            />
          </div>

          <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">
            {progressoMensal.toFixed(1)}%
          </p>
        </div>

      </div>

      {/* Gráfico */}
      <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow">
        <p className="text-gray-500 mb-4">
          Comparativo de Metas
        </p>

        <div style={{ width: "100%", height: 250 }}>
          <ResponsiveContainer>
            <LineChart data={chartData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />

              <Line
                type="monotone"
                dataKey="valor"
                stroke="#22c55e"
                strokeWidth={3}
              />

              <Line
                type="monotone"
                dataKey="meta"
                stroke="#3b82f6"
                strokeWidth={2}
                strokeDasharray="5 5"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  );
}

export default Dashboard;