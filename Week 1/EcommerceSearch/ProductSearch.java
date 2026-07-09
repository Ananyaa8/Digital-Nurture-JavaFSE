package EcommerceSearch;

public class ProductSearch implements SearchStrategy {
    @Override
    public void search(String keyword) {
        System.out.println("Searching products for: " + keyword);
    }
}
