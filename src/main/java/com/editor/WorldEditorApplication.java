package com.editor;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.context.web.SpringBootServletInitializer;

import org.h2.tools.Server;

@SpringBootApplication
public class WorldEditorApplication extends SpringBootServletInitializer {
	
	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(WorldEditorApplication.class);
	}
	
	public static void main(String[] args) {
		SpringApplication.run(WorldEditorApplication.class, args);
	}
}