using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Threading.Tasks;

namespace SearchDashboard.Controller.Resources
{
    public class SearchUrlMask
    {
        public int id { get; set; }
        public string Name { get; set; }
        public ICollection<SearchTokenMask> SearchTokenMasks { get; set; }

        public SearchUrlMask()
        {
            SearchTokenMasks = new Collection<SearchTokenMask>();
        }
    }
}
