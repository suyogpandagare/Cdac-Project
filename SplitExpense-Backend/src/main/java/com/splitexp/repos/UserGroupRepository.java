package com.splitexp.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.splitexp.models.UsersGroup;

@Repository
public interface UserGroupRepository extends JpaRepository<UsersGroup, Integer> {
	List<UsersGroup> findByCreatedByUid(int id);
}
