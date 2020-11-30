using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace SearchDashboard.Controller.Model
{
    [Table("SearchTokens")]
    public class SearchToken
    {
        public int id { get; set; }
        [Required]
        [StringLength(250)]
        public string Name { get; set; }
        public SearchUrl SearchUrl { get; set; }
        public int SearchUrlId { get; set; }
    }
}
