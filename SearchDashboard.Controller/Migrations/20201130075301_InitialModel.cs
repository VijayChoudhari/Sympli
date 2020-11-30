using Microsoft.EntityFrameworkCore.Migrations;

namespace SearchDashboard.Controller.Migrations
{
    public partial class InitialModel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "SearchUrls",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SearchUrls", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "SearchToken",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SearchUrlId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SearchToken", x => x.id);
                    table.ForeignKey(
                        name: "FK_SearchToken_SearchUrls_SearchUrlId",
                        column: x => x.SearchUrlId,
                        principalTable: "SearchUrls",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_SearchToken_SearchUrlId",
                table: "SearchToken",
                column: "SearchUrlId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "SearchToken");

            migrationBuilder.DropTable(
                name: "SearchUrls");
        }
    }
}
