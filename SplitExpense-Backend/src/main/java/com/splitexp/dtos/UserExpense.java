package com.splitexp.dtos;

public class UserExpense
{
	private int uid;
	private int amount;
	private String fname;
	private String lname;
	
	public String getFname() {
		return fname;
	}
	public void setFname(String fname) {
		this.fname = fname;
	}
	public String getLname() {
		return lname;
	}
	public void setLname(String lname) {
		this.lname = lname;
	}
	public int getUid() {
		return uid;
	}
	public void setUid(int uid) {
		this.uid = uid;
	}
	public int getAmount() {
		return amount;
	}
	public void setAmount(int amount) {
		this.amount = amount;
	}
	@Override
	public String toString() {
		return "UserExpense [uid=" + uid + ", amount=" + amount + ", fname=" + fname + ", lname=" + lname + "]";
	}
	
	
}
