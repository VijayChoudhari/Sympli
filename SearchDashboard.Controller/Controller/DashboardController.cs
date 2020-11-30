using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SearchDashboard.Controller.Model;
using SearchDashboard.Controller.Persistence;
using SearchDashboard.Controller.Resources;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SearchDashboard.Controller.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class DashboardController : ControllerBase
    {
        private readonly DashboardDbContext _context;
        private readonly IMapper _mapper;
        public DashboardController(DashboardDbContext dashboardDbContext, IMapper mapper)
        {
            _context = dashboardDbContext;
            _mapper = mapper;
        }

        // GET: api/<DashboardController>
        [HttpGet("api/GetSearchTokens")]
        public async Task<IActionResult> GetSearchTokens()
        {
            List<SearchUrl> searchUrls = null;
            try
            {
                searchUrls = await _context.SearchUrls.Include(url => url.SearchTokens).ToListAsync<SearchUrl>();
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
            return Ok(_mapper.Map<IEnumerable<SearchUrl>, IEnumerable<SearchUrlMask>>(searchUrls));
        }


        // POST api/<DashboardController>
        [HttpPost]
        public async Task<IActionResult> AddSearchUrl([FromBody] SearchUrlMask searchUrlMask)
        {
            SearchUrl searchUrl = null;
            try
            {
                searchUrl = _mapper.Map<SearchUrlMask, SearchUrl>(searchUrlMask);
                _context.SearchUrls.Add(searchUrl);
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
            return Ok(searchUrl);
        }

        // DELETE api/<DashboardController>/5
        [HttpDelete("{id}")]
        public IActionResult DeleteSearchUrl(int id)
        {
            try
            {
                Model.SearchUrl searchUrlToDelete = new Model.SearchUrl() { id = id };
                _context.SearchUrls.Attach(searchUrlToDelete);
                _context.SearchUrls.Remove(searchUrlToDelete);
                _context.SaveChanges();
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
            return Ok();
        }
    }
}
