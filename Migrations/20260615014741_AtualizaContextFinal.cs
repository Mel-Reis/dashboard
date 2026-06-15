using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace repos.Migrations
{
    /// <inheritdoc />
    public partial class AtualizaContextFinal : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "ColaboradoresMetas",
                keyColumn: "Id",
                keyValue: 4,
                column: "NomeColaborador",
                value: "ANA LUISA");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "ColaboradoresMetas",
                keyColumn: "Id",
                keyValue: 4,
                column: "NomeColaborador",
                value: "Ana Luisa");
        }
    }
}
