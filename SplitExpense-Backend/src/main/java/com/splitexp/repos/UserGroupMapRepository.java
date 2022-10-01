package com.splitexp.repos;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.splitexp.models.UserGroupMap;

@Repository
public interface UserGroupMapRepository extends JpaRepository<UserGroupMap, Integer> {
	
	List<UserGroupMap> findByUserUid(int id);
	List<UserGroupMap> findByGroupId(int id);
	Optional<UserGroupMap> findByGroupIdAndUserUid(int gid,int uid);
}
