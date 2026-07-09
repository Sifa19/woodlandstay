package com.naikprachita.thewoodnest;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.TimeZone;

@SpringBootApplication
public class ThewoodnestApplication {

	public static void main(String[] args) {

		TimeZone.setDefault(TimeZone.getTimeZone("Asia/Kolkata"));

		System.out.println("Timezone after change = "
				+ TimeZone.getDefault().getID());

		SpringApplication.run(ThewoodnestApplication.class, args);
	}
}