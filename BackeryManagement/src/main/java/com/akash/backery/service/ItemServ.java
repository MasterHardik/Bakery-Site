package com.akash.backery.service;

import java.nio.file.Paths;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.akash.backery.dao.ItemRepo;
import com.akash.backery.modal.Item;


@Service
public class ItemServ 
{
	@Autowired 
	private ItemRepo itemRepo;
	
	public String addItem(Item itemObj)
	{
		
		    itemRepo.save(itemObj);
		    return "Item added successfully";
	}
	
}
