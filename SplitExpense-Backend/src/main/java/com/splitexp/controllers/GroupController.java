package com.splitexp.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.splitexp.dtos.Response;
import com.splitexp.models.UserGroupMap;
import com.splitexp.models.UsersGroup;
import com.splitexp.services.UserGroupService;
import com.splitexp.services.UserService;

@CrossOrigin
@RestController
@RequestMapping("api/groups")
public class GroupController {
	
	@Autowired private UserService userService;
	@Autowired private UserGroupService groupService;
	
	@PostMapping
	public ResponseEntity<?> addGroup(@RequestBody UsersGroup group){
		groupService.saveGroup(group);		
		return ResponseEntity.ok(new Response("Group registered successfully","success"));
	}
	
	@GetMapping
	public ResponseEntity<?> allGroup(){
		return ResponseEntity.ok(groupService.listall());
	}
	
	@GetMapping("mygroups/{id}")
	public ResponseEntity<?> allUserGroups(@PathVariable("id") int id){
		return ResponseEntity.ok(groupService.userGroup(id));
	}
	
	@GetMapping("{id}")
	public ResponseEntity<?> findGroupDetails(@PathVariable("id") int id){
		return ResponseEntity.ok(groupService.findbyId(id));
	}
	
	@PostMapping("users")
	public ResponseEntity<?> addUsertoGroup(@RequestBody UserGroupMap map){
		if(groupService.checkUserInGroup(map)) {
			return ResponseEntity.badRequest().body(new Response("User already added to group","error"));	
		}
		groupService.addUserToGroup(map);		
		return ResponseEntity.ok(new Response("User added to group successfully","success"));
	}
	
	@GetMapping("users/{id}")
	public ResponseEntity<?> allUsersGroup(@PathVariable("id") int id){
		return ResponseEntity.ok(groupService.userGroup(id));
	}
	
	@DeleteMapping("users/{id}")
	public ResponseEntity<?> removeUserFromGroup(@PathVariable("id") int id){
		groupService.removeUserFromGroup(id);
		return ResponseEntity.ok(new Response("User delete from group successfully","success"));
	}

}
