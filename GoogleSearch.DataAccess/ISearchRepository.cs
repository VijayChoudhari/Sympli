namespace GoogleSearch.Repository
{
    public interface ISearchRepository
    {
        string FetchSearchResults(string searchUrl);
    }
}
