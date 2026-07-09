package EcommerceSearch;

public class SearchContext {
    private SearchStrategy strategy;

    public void setStrategy(SearchStrategy strategy) {
        this.strategy = strategy;
    }

    public void performSearch(String keyword) {
        strategy.search(keyword);
    }
}