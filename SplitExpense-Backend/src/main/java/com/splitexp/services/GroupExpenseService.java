package com.splitexp.services;

import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.splitexp.dtos.AddExpenseDTO;
import com.splitexp.dtos.GroupExpenseByUserResponse;
import com.splitexp.dtos.UserExpense;
import com.splitexp.dtos.UserSettlementDTO;
import com.splitexp.models.GroupExpense;
import com.splitexp.models.Settlement;
import com.splitexp.repos.GroupExpenseRepository;
import com.splitexp.repos.SettlementRepository;
import com.splitexp.utils.StorageService;

@Service
public class GroupExpenseService {

	@Autowired private GroupExpenseRepository exprepo;
	@Autowired private SettlementRepository setrepo;
	@Autowired private StorageService storage;
	@Autowired private UserService uservice;
	@Autowired private UserGroupService ugservice;
	
	public void saveExpense(AddExpenseDTO dto,MultipartFile pic) {
		String filename=storage.store(pic);
		
		for(UserExpense ue:dto.getExpenses()) {
			GroupExpense exp=new GroupExpense();
			BeanUtils.copyProperties(dto, exp);
			exp.setBillImage(filename);
			exp.setPaidBy(uservice.findById(ue.getUid()));
			exp.setAmount(ue.getAmount());
			exprepo.save(exp);
		}				
	}
	
	public void saveSettlementTran(Settlement set) {
		setrepo.save(set);
	}
	
	public List<Settlement> findUserSettlement(UserSettlementDTO dto){
		return setrepo.findByGroupIdAndPaidToUidOrPaidByUid(dto.getGroupid(), dto.getUserid(), dto.getUserid());
	}
	
	public List<Settlement> findallUserSettlement(UserSettlementDTO dto){
		return setrepo.findByPaidToUidOrPaidByUid(dto.getUserid(), dto.getUserid());
	}
	
	public List<GroupExpense> getGroupExpense(int groupid){
		return exprepo.findByGroupId(groupid);
	}
	
	public List<GroupExpenseByUserResponse> getGroupExpenseReport(int groupid){
		return exprepo.getGroupExpense(ugservice.findbyId(groupid));
	}
}
