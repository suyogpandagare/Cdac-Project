package com.splitexp.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.splitexp.dtos.LoginDTO;
import com.splitexp.models.User;
import com.splitexp.repos.UserRepository;
import com.splitexp.utils.StorageService;

@Service
public class UserService {

	@Autowired private UserRepository repo;
	@Autowired private StorageService storage;
	
	public void register(User user,MultipartFile pic) {
		String filename=storage.store(pic);
		user.setPhoto(filename);
		repo.save(user);
	}
	
	public List<User> listall(){
		return repo.findAll();
	}
	
	public List<User> searchall(String search){
		return repo.searchUsers(search);
	}
	
	public User findByUserId(String userid) {
		return repo.findByUserid(userid);
	}
	
	public User findById(int id) {
		return repo.findById(id).orElse(null);
	}
	
	public User validate(LoginDTO dto) {
		User user=findByUserId(dto.getUserid());
		if(user!=null && user.getPassword().equals(dto.getPwd())) {
			return user;
		}
		return null;
	}
}
