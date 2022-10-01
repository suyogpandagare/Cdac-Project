package com.splitexp.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.splitexp.dtos.UserGroupResponse;
import com.splitexp.models.UserGroupMap;
import com.splitexp.models.UsersGroup;
import com.splitexp.repos.UserGroupMapRepository;
import com.splitexp.repos.UserGroupRepository;

@Service
public class UserGroupService {

	@Autowired private UserGroupRepository grouprepo;
	@Autowired private UserGroupMapRepository maprepo;
	
	public void saveGroup(UsersGroup group) {
		UsersGroup grp=grouprepo.save(group);
		UserGroupMap map=new UserGroupMap();
		map.setGroup(grp);
		map.setUser(grp.getCreatedBy());
		maprepo.save(map);
	}
	
	public UserGroupResponse findbyId(int id) {
		UsersGroup ug=grouprepo.findById(id).get();
		UserGroupResponse resp=new UserGroupResponse();
		BeanUtils.copyProperties(ug, resp);
		List<UserGroupMap> mps= maprepo.findByGroupId(id);
		resp.setGroupUsers(mps);
		return resp;
	}
	
	public List<UsersGroup> listall(){
		return grouprepo.findAll();
	}
	
	public List<UsersGroup> userGroups(int id){
		return grouprepo.findByCreatedByUid(id);
	}
	
	public boolean checkUserInGroup(UserGroupMap map) {
		return maprepo.findByGroupIdAndUserUid(map.getGroup().getId(), map.getUser().getUid()).isPresent();
	}
	
	public void addUserToGroup(UserGroupMap map) {
		maprepo.save(map);
	}
	
	public void removeUserFromGroup(int id) {
		maprepo.deleteById(id);
	}
	
	public List<UsersGroup> userGroup(int id){
		return maprepo.findByUserUid(id).stream().map(x->x.getGroup()).collect(Collectors.toList()); 
	}	
}
