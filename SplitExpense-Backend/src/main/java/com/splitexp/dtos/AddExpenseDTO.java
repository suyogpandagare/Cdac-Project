package com.splitexp.dtos;

import java.util.ArrayList;
import java.util.List;

import com.splitexp.models.GroupExpense;

public class AddExpenseDTO extends GroupExpense {
	
	private List<UserExpense> expenses=new ArrayList<UserExpense>();
	
	private String exps;

	public String getExps() {
		return exps;
	}

	public void setExps(String exps) {
		this.exps = exps;
	}

	public List<UserExpense> getExpenses() {
		return expenses;
	}

	public void setExpenses(List<UserExpense> expenses) {
		this.expenses = expenses;
	}


}

