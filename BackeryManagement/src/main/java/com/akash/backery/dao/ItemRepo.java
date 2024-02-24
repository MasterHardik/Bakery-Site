package com.akash.backery.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.akash.backery.modal.Item;

public interface ItemRepo extends JpaRepository<Item, Integer>
{
	
}
