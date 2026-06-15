namespace repos.Data;

public class Usuario
{
    public int Id { get; set; }
    public string Nome { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string SenhaHash { get; set; } = string.Empty;   // Nunca guarde senha em texto puro!
    public string Cargo { get; set; } = string.Empty;
    public string Perfil { get; set; } = "Operador"; // Operador, Supervisor, Administrador
    public bool Ativo { get; set; } = true;
}