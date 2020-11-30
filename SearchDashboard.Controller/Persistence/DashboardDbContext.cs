using Microsoft.EntityFrameworkCore;
using SearchDashboard.Controller.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SearchDashboard.Controller.Persistence
{
    public class DashboardDbContext: DbContext
    {
        public DashboardDbContext(DbContextOptions<DashboardDbContext> dbContextOptions) : base(dbContextOptions)
        {
          
        }
        public DbSet<SearchUrl> SearchUrls { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<SearchUrl>()
                .HasIndex(u => u.Name)
                .IsUnique();
        }

    }
}
