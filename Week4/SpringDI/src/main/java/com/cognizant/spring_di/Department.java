package com.cognizant.spring_di;

public class Department {

    private String departmentName;

    public String getDepartmentName() {
        return departmentName;
    }

    public void setDepartmentName(String departmentName) {
        this.departmentName = departmentName;
    }

    @Override
    public String toString() {
        return "Department [departmentName=" + departmentName + "]";
    }
}