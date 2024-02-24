package com.akash.backery.controller;

import java.io.IOException;
import java.sql.SQLException;

import javax.sql.rowset.serial.SerialException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.akash.backery.modal.Item;
import com.akash.backery.modal.User;
import com.akash.backery.service.ItemServ;

import jakarta.servlet.http.HttpSession;

@RestController
@RequestMapping("/onlineBackery")
public class ItemController 
{
	@Autowired
	private ItemServ itemServ;
	
	
	@PostMapping(value = "/addItem")
	public String addItem(HttpSession session , @RequestBody Item itemObj) throws SerialException, IOException, SQLException
	{
		User currentUser = (User) session.getAttribute("user");

        if (currentUser == null)
        {
        	return "please login";
        }
        else if(currentUser.getEmailId().equals("chouhanakash515@gmail.com"))
        {
        	
		    return itemServ.addItem(itemObj);
        }
        
        return "Sorry item cant be added";
	}
	
}
