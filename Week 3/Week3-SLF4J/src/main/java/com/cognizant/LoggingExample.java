package com.cognizant;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class LoggingExample {

    private static final Logger LOGGER =
            LoggerFactory.getLogger(LoggingExample.class);

    public static void main(String[] args) {

        LOGGER.info("Application Started");

        LOGGER.warn("This is a warning message");

        LOGGER.error("This is an error message");

        LOGGER.info("Application Finished");
    }
}