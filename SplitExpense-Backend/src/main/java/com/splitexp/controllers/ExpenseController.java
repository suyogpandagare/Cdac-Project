package com.splitexp.controllers;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.splitexp.dtos.AddExpenseDTO;
import com.splitexp.dtos.Response;
import com.splitexp.dtos.UserExpense;
import com.splitexp.services.GroupExpenseService;

@CrossOrigin
@RestController
@RequestMapping("api/expenses")
public class ExpenseController {
	
	
	@Autowired private GroupExpenseService geservice;
	
	@PostMapping
	public ResponseEntity<?> addGroupExpense(AddExpenseDTO dto,MultipartFile pic){
		System.out.println(dto.getExps());
		try {
			JSONArray arr=new JSONArray(dto.getExps());
			for(int i=0;i<arr.length();i++)
			{
				JSONObject obj=arr.getJSONObject(i);
				if(obj.getInt("amount")>0) {
					UserExpense exp=new UserExpense();				
					exp.setUid(obj.getInt("uid"));
					exp.setAmount(obj.getInt("amount"));
					dto.getExpenses().add(exp);
				}
			}
		} catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		geservice.saveExpense(dto, pic);		
		return ResponseEntity.ok(new Response("Expense saved successfully","success"));
	}
	
	@GetMapping("{id}")
	public ResponseEntity<?> groupExpenses(@PathVariable("id") int id){
		return ResponseEntity.ok(geservice.getGroupExpense(id));
	}
	
	@GetMapping("report/{id}")
	public ResponseEntity<?> groupExpensesReport(@PathVariable("id") int id){
		return ResponseEntity.ok(geservice.getGroupExpenseReport(id));
	}

}
