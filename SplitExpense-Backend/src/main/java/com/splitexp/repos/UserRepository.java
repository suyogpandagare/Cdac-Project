package com.splitexp.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.splitexp.models.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
	User findByUserid(String userid);
	@Query(value = "select * from user where fname like %?1% or lname like %?1%",nativeQuery = true)
	List<User> searchUsers(String search);
}
