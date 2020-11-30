using Microsoft.EntityFrameworkCore.Migrations;

namespace SearchDashboard.Controller.Migrations
{
    public partial class ApplyAnnotations : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_SearchToken_SearchUrls_SearchUrlId",
                table: "SearchToken");

            migrationBuilder.DropPrimaryKey(
                name: "PK_SearchToken",
                table: "SearchToken");

            migrationBuilder.RenameTable(
                name: "SearchToken",
                newName: "SearchTokens");

            migrationBuilder.RenameIndex(
                name: "IX_SearchToken_SearchUrlId",
                table: "SearchTokens",
                newName: "IX_SearchTokens_SearchUrlId");

            migrationBuilder.AlterColumn<string>(
                name: "Name",
                table: "SearchUrls",
                type: "nvarchar(250)",
                maxLength: 250,
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Name",
                table: "SearchTokens",
                type: "nvarchar(250)",
                maxLength: 250,
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_SearchTokens",
                table: "SearchTokens",
                column: "id");

            migrationBuilder.AddForeignKey(
                name: "FK_SearchTokens_SearchUrls_SearchUrlId",
                table: "SearchTokens",
                column: "SearchUrlId",
                principalTable: "SearchUrls",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_SearchTokens_SearchUrls_SearchUrlId",
                table: "SearchTokens");

            migrationBuilder.DropPrimaryKey(
                name: "PK_SearchTokens",
                table: "SearchTokens");

            migrationBuilder.RenameTable(
                name: "SearchTokens",
                newName: "SearchToken");

            migrationBuilder.RenameIndex(
                name: "IX_SearchTokens_SearchUrlId",
                table: "SearchToken",
                newName: "IX_SearchToken_SearchUrlId");

            migrationBuilder.AlterColumn<string>(
                name: "Name",
                table: "SearchUrls",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(250)",
                oldMaxLength: 250);

            migrationBuilder.AlterColumn<string>(
                name: "Name",
                table: "SearchToken",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(250)",
                oldMaxLength: 250);

            migrationBuilder.AddPrimaryKey(
                name: "PK_SearchToken",
                table: "SearchToken",
                column: "id");

            migrationBuilder.AddForeignKey(
                name: "FK_SearchToken_SearchUrls_SearchUrlId",
                table: "SearchToken",
                column: "SearchUrlId",
                principalTable: "SearchUrls",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
