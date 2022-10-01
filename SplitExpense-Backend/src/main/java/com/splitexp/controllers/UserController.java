package com.splitexp.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.splitexp.dtos.LoginDTO;
import com.splitexp.dtos.Response;
import com.splitexp.models.User;
import com.splitexp.services.UserService;

@CrossOrigin
@RestController
@RequestMapping("api/users")
public class UserController {

	@Autowired private UserService service;
	
	@PostMapping
	public ResponseEntity<?> validate(User user,MultipartFile profilepic){
		service.register(user,profilepic);		
		return ResponseEntity.ok(new Response("User registered successfully","success"));
	}

	@PostMapping("validate")
	public ResponseEntity<?> validate(@RequestBody LoginDTO dto){
		User user=service.validate(dto);
		if(user==null)
			return ResponseEntity.badRequest().body(new Response("Invalid username or password","error"));
		else
			return ResponseEntity.ok(user);
	}
	
	@GetMapping
	public ResponseEntity<?> allUsers(){
		return ResponseEntity.ok(service.listall());
	}
	
	@GetMapping("search")
	public ResponseEntity<?> searchUsers(String search){
		return ResponseEntity.ok(service.searchall(search));
	}

	
	@GetMapping("{id}")
	public ResponseEntity<?> findUserDetails(@PathVariable("id") int id){
		return ResponseEntity.ok(service.findById(id));
	}
}
