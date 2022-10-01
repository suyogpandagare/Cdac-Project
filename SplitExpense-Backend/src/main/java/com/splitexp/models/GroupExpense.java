package com.splitexp.models;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class GroupExpense {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@ManyToOne
	@JoinColumn(name = "group_id")
	private UsersGroup group;
	private int totalExp;
	private LocalDate date;
	private String billImage;
	@ManyToOne
	@JoinColumn(name = "paidby_id")
	private User paidBy;
	private String criteria;
	private String descr;
	private int amount;
	
	public GroupExpense() {
		// TODO Auto-generated constructor stub
	}

	public GroupExpense(int id) {
		this.id=id;
	}
	
	public int getAmount() {
		return amount;
	}

	public void setAmount(int amount) {
		this.amount = amount;
	}

	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public UsersGroup getGroup() {
		return group;
	}
	public void setGroup(UsersGroup group) {
		this.group = group;
	}
	public int getTotalExp() {
		return totalExp;
	}
	public void setTotalExp(int totalExp) {
		this.totalExp = totalExp;
	}
	public LocalDate getDate() {
		return date;
	}
	public void setDate(LocalDate date) {
		this.date = date;
	}
	public String getBillImage() {
		return billImage;
	}
	public void setBillImage(String billImage) {
		this.billImage = billImage;
	}
	public User getPaidBy() {
		return paidBy;
	}
	public void setPaidBy(User paidBy) {
		this.paidBy = paidBy;
	}
	public String getCriteria() {
		return criteria;
	}
	public void setCriteria(String criteria) {
		this.criteria = criteria;
	}
	public String getDescr() {
		return descr;
	}
	public void setDescr(String descr) {
		this.descr = descr;
	}
	
	
	
}
