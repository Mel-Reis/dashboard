using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using BCrypt.Net;
using repos.Data;

namespace repos.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly AppDbContext _context;
    private readonly IConfiguration _configuration;

    // Construtor atualizado para receber o DbContext
    public AuthController(AppDbContext context, IConfiguration configuration)
    {
        _context = context;
        _configuration = configuration;
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] LoginModel model)
    {
        if (string.IsNullOrEmpty(model.Usuario) || string.IsNullOrEmpty(model.Senha))
            return BadRequest(new { mensagem = "Usuário e senha são obrigatórios" });

        // Busca por Nome ou Email
        var usuario = await _context.Usuarios
            .FirstOrDefaultAsync(u => 
                (u.Email == model.Usuario || u.Nome == model.Usuario) && 
                u.Ativo);

if (usuario == null || !BCrypt.Net.BCrypt.Verify(model.Senha, usuario.SenhaHash))            return Unauthorized(new { mensagem = "Usuário ou senha inválidos" });

        var token = GerarTokenJwt(usuario.Nome, usuario.Perfil);

        return Ok(new 
        { 
            token,
            usuario = new 
            { 
                usuario.Id,
                usuario.Nome,
                usuario.Email,
                usuario.Cargo,
                usuario.Perfil 
            }
        });
    }

    private string GerarTokenJwt(string nome, string perfil)
    {
        var tokenHandler = new JwtSecurityTokenHandler();
        
        var chaveSecreta = _configuration["Jwt:ChaveSecreta"];
        if (string.IsNullOrEmpty(chaveSecreta) || chaveSecreta.Length < 32)
        {
            throw new Exception("A chave secreta do JWT não foi configurada corretamente!");
        }

        var key = Encoding.ASCII.GetBytes(chaveSecreta);

        var tokenDescriptor = new SecurityTokenDescriptor
        {
            Subject = new ClaimsIdentity(new[]
            {
                new Claim(ClaimTypes.Name, nome),
                new Claim(ClaimTypes.Role, perfil)
            }),
            Expires = DateTime.UtcNow.AddHours(8), // aumentei para 8h
            SigningCredentials = new SigningCredentials(
                new SymmetricSecurityKey(key), 
                SecurityAlgorithms.HmacSha256Signature)
        };

        var token = tokenHandler.CreateToken(tokenDescriptor);
        return tokenHandler.WriteToken(token);
    }
}

public class LoginModel
{
    public string Usuario { get; set; } = string.Empty;
    public string Senha { get; set; } = string.Empty;
}