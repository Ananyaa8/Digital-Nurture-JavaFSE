package EcommerceSearch;

public class BrandSearch implements SearchStrategy {
    @Override
    public void search(String keyword) {
        System.out.println("Searching brands for: " + keyword);
    }
}
