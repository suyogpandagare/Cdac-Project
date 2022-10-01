package com.splitexp.models;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Settlement {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@ManyToOne
	@JoinColumn(name = "paidby_id")
	private User paidBy;
	@ManyToOne
	@JoinColumn(name = "paidto_id")
	private User paidTo;
	private int amount;
	@ManyToOne
	@JoinColumn(name = "group_id")
	private UsersGroup group;
	private LocalDate date;
	private String paymethod;//cash/UPI
	private String remarks;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public User getPaidBy() {
		return paidBy;
	}
	public void setPaidBy(User paidBy) {
		this.paidBy = paidBy;
	}
	public User getPaidTo() {
		return paidTo;
	}
	public void setPaidTo(User paidTo) {
		this.paidTo = paidTo;
	}
	public int getAmount() {
		return amount;
	}
	public void setAmount(int amount) {
		this.amount = amount;
	}
	public UsersGroup getGroup() {
		return group;
	}
	public void setGroup(UsersGroup group) {
		this.group = group;
	}
	public LocalDate getDate() {
		return date;
	}
	public void setDate(LocalDate date) {
		this.date = date;
	}
	public String getPaymethod() {
		return paymethod;
	}
	public void setPaymethod(String paymethod) {
		this.paymethod = paymethod;
	}
	public String getRemarks() {
		return remarks;
	}
	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}
	@Override
	public String toString() {
		return "Settlement [id=" + id + ", paidBy=" + paidBy + ", paidTo=" + paidTo + ", amount=" + amount + ", group="
				+ group + ", date=" + date + ", paymethod=" + paymethod + ", remarks=" + remarks + "]";
	}
	
	
}
