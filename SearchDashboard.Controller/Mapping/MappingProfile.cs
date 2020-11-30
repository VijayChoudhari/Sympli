using AutoMapper;
using SearchDashboard.Controller.Model;
using SearchDashboard.Controller.Resources;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SearchDashboard.Controller
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<SearchTokenMask, SearchToken>();
            CreateMap<SearchToken, SearchTokenMask>();
            CreateMap<SearchUrlMask, SearchUrl>();
            CreateMap<SearchUrl, SearchUrlMask>();
        }
    }
}
