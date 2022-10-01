package com.splitexp.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.splitexp.dtos.Response;
import com.splitexp.dtos.UserSettlementDTO;
import com.splitexp.models.Settlement;
import com.splitexp.services.GroupExpenseService;

@CrossOrigin
@RestController
@RequestMapping("api/settlements")
public class SettlementController {
	
	@Autowired private GroupExpenseService expService;
	
	@PostMapping
	public ResponseEntity<?> addGroup(@RequestBody Settlement set){
		expService.saveSettlementTran(set);
		return ResponseEntity.ok(new Response("Settlement saved successfully","success"));
	}
	
	@GetMapping
	public ResponseEntity<?> settlementTrans(UserSettlementDTO dto){
		return ResponseEntity.ok(expService.findUserSettlement(dto));
	}
	
	@GetMapping("dashboard")
	public ResponseEntity<?> settlementTransDashboard(UserSettlementDTO dto){
		return ResponseEntity.ok(expService.findallUserSettlement(dto));
	}

}
