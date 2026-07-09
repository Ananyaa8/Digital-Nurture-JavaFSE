package com.cognizant;

public class ApiService {

    private ExternalApi api;

    public ApiService(ExternalApi api) {
        this.api = api;
    }

    public String fetchData() {
        return api.getData();
    }
}