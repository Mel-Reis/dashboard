import { useState } from "react";

function Login({ onLogin }) {
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
// Provisório
  const pessoas = [
    { id: 1, nome: "João" },
    { id: 2, nome: "Maria" },
    { id: 3, nome: "Pedro" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const usuario = pessoas.find((p) => p.nome === nome);

    if (usuario && senha === "123456") {
      onLogin({
        nome: usuario.nome,
        cargo: "Financeiro",
        email: `${usuario.nome.toLowerCase()}@teste.com`,
      });
    } else {
      alert("Login inválido");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <select
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        className="p-3  border rounded border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white ml-4"
      >
        <option value="">Selecione uma pessoa</option>

        {pessoas.map((pessoa) => (
          <option key={pessoa.id} value={pessoa.nome}>
            {pessoa.nome}
          </option>
        ))}
      </select>

      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        className="p-3  border rounded border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white ml-4"
      />

      <button type="submit"className="  rounded-lg bg-blue-500 text-white hover:bg-blue-600 ml-4 px-4 py-2">
        Entrar
      </button>
    </form>
  );
}

export default Login;