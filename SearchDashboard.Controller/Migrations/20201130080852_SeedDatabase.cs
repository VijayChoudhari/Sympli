using Microsoft.EntityFrameworkCore.Migrations;

namespace SearchDashboard.Controller.Migrations
{
    public partial class SeedDatabase : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("INSERT INTO SearchUrls (Name) VALUES ('www.sympli.com')");
            migrationBuilder.Sql("INSERT INTO SearchUrls (Name) VALUES ('www.linkedin.com')");
            migrationBuilder.Sql("INSERT INTO SearchUrls (Name) VALUES ('www.abcnews.com')");


            migrationBuilder.Sql("INSERT INTO SearchTokens (Name, SearchUrlId) VALUES ('e-settlements', (SELECT ID FROM SearchUrls WHERE NAME = 'www.sympli.com'))");
            migrationBuilder.Sql("INSERT INTO SearchTokens (Name, SearchUrlId) VALUES ('sympli', (SELECT ID FROM SearchUrls WHERE NAME = 'www.linkedin.com'))");
            migrationBuilder.Sql("INSERT INTO SearchTokens (Name, SearchUrlId) VALUES ('ASX-200', (SELECT ID FROM SearchUrls WHERE NAME = 'www.abcnews.com'))");

            migrationBuilder.Sql("INSERT INTO SearchTokens (Name, SearchUrlId) VALUES ('abc', (SELECT ID FROM SearchUrls WHERE NAME = 'www.sympli.com'))");
            migrationBuilder.Sql("INSERT INTO SearchTokens (Name, SearchUrlId) VALUES ('xyz', (SELECT ID FROM SearchUrls WHERE NAME = 'www.linkedin.com'))");
            migrationBuilder.Sql("INSERT INTO SearchTokens (Name, SearchUrlId) VALUES ('test', (SELECT ID FROM SearchUrls WHERE NAME = 'www.abcnews.com'))");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("DELETE FROM SearchUrls");
        }
    }
}
