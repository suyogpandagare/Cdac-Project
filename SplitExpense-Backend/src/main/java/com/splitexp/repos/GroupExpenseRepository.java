package com.splitexp.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.splitexp.dtos.GroupExpenseByUserResponse;
import com.splitexp.models.GroupExpense;
import com.splitexp.models.UsersGroup;

@Repository
public interface GroupExpenseRepository extends JpaRepository<GroupExpense, Integer> {
	
	List<GroupExpense> findByGroupId(int id);
	List<GroupExpense> findByPaidByUid(int id);
	@Query(value = "SELECT new com.splitexp.dtos.GroupExpenseByUserResponse(g.paidBy,g.group,sum(g.amount)) FROM GroupExpense g where g.group=:group GROUP BY group_id,paidBy_id")
	List<GroupExpenseByUserResponse> getGroupExpense(@Param("group") UsersGroup group);
	
}
