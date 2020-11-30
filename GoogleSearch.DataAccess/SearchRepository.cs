using System;
using System.IO;
using System.Net;

namespace GoogleSearch.Repository
{
    public class SearchRepository : ISearchRepository
    {
        public string FetchSearchResults(string searchUrl)
        {
            var retVal = string.Empty;

            HttpWebRequest request = (HttpWebRequest)WebRequest.Create(searchUrl);
            request.CookieContainer = new CookieContainer();
            var cookie = new Cookie();
            cookie.Domain = ".google.com";
            cookie.Name = "NID";
            cookie.Expires = DateTime.MaxValue;
            cookie.Value = "";//To be done - To fetch first 100 results from Google search engine [Need research]
            request.CookieContainer.Add(cookie);

            using (var response = request.GetResponse())
            using (var receiveStream = response.GetResponseStream())
            using (var readStream = new StreamReader(receiveStream))
            {
                retVal = readStream.ReadToEnd();
            }
            
            return retVal;
        }
    }
}
