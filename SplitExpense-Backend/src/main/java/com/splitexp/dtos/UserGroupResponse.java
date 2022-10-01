package com.splitexp.dtos;

import java.util.ArrayList;
import java.util.List;

import com.splitexp.models.UserGroupMap;
import com.splitexp.models.UsersGroup;

public class UserGroupResponse extends UsersGroup {
	private List<UserGroupMap> groupUsers=new ArrayList<UserGroupMap>();
	
	
	public List<UserGroupMap> getGroupUsers() {
		return groupUsers;
	}

	public void setGroupUsers(List<UserGroupMap> groupUsers) {
		this.groupUsers = groupUsers;
	}
}
