package com.splitexp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

import com.splitexp.utils.FileUploadProperties;

@SpringBootApplication
@EnableJpaAuditing
@EnableConfigurationProperties({
    FileUploadProperties.class
})
public class SplitExpenseBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(SplitExpenseBackendApplication.class, args);
	}

}
