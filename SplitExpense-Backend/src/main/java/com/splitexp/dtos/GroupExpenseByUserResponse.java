package com.splitexp.dtos;

import com.splitexp.models.User;
import com.splitexp.models.UsersGroup;

public class GroupExpenseByUserResponse {

	private User paidBy;
	private UsersGroup group;
	private Long total;

	
	
	public GroupExpenseByUserResponse(User paidBy, UsersGroup group, Long total) {
		this.paidBy = paidBy;
		this.group = group;
		this.total = total;
	}
	public User getPaidBy() {
		return paidBy;
	}
	public void setPaidBy(User paidBy) {
		this.paidBy = paidBy;
	}
	public UsersGroup getGroup() {
		return group;
	}
	public void setGroup(UsersGroup group) {
		this.group = group;
	}
	public Long getTotal() {
		return total;
	}
	public void setTotal(Long total) {
		this.total = total;
	}
	
	
}
