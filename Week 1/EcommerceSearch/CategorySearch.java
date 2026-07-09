package EcommerceSearch;

public class CategorySearch implements SearchStrategy {
    @Override
    public void search(String keyword) {
        System.out.println("Searching categories for: " + keyword);
    }
}