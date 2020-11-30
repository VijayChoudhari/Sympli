using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace SearchDashboard.Controller.Model
{
    [Table("SearchUrls")]
    public class SearchUrl
    {
        public int id { get; set; }
        [Required]
        [StringLength(250)]
        public string Name { get; set; }
        public ICollection<SearchToken> SearchTokens { get; set; }

        public SearchUrl()
        {
            SearchTokens = new Collection<SearchToken>();
        }
    }
}
