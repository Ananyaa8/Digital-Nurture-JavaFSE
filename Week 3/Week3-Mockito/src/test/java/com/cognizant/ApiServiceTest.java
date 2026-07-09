package com.cognizant;


import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.Test;

public class ApiServiceTest {

    @Test
    public void testFetchData() {

        ExternalApi api = mock(ExternalApi.class);

        when(api.getData()).thenReturn("Mockito Working");

        ApiService service = new ApiService(api);

        assertEquals("Mockito Working", service.fetchData());
    }
}
