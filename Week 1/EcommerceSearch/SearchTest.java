package EcommerceSearch;

public class SearchTest {
    public static void main(String[] args) {

        SearchContext context = new SearchContext();

        context.setStrategy(new ProductSearch());
        context.performSearch("Laptop");

        context.setStrategy(new CategorySearch());
        context.performSearch("Electronics");

        context.setStrategy(new BrandSearch());
        context.performSearch("Samsung");
    }
}