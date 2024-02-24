package com.akash.backery.modal;

import java.sql.Blob;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;

@Entity
@Table(name = "item")
public class Item
{
	@Id
	@GeneratedValue(strategy = jakarta.persistence.GenerationType.AUTO)
	@Column(name = "item_id") 
	private Integer item_id;
	
	@Lob 
    private Blob img;
	
	private int price;
	
	private String description;

	public Integer getItem_id() {
		return item_id;
	}

	public void setItem_id(Integer item_id) {
		this.item_id = item_id;
	}

	public Blob getImg() {
		return img;
	}

	public void setImg(Blob img) {
		this.img = img;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Item(Blob img, int price, String description) {
		super();
		this.img = img;
		this.price = price;
		this.description = description;
	}

	public Item() {}
	
}
