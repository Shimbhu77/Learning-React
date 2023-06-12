package com.RentalXpress.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.RentalXpress.Model.Product;
import com.RentalXpress.Model.DTO.TimeSlot;
import com.RentalXpress.Service.ProductService;
import com.RentalXpress.exceptions.ProductException;

@RestController
public class ProductController {


	@Autowired
	private ProductService productService;
	
	
	@GetMapping("/api/time-duration-available-products")
	public ResponseEntity<List<Product>> findProductsInTimeDuration(@Validated @RequestBody TimeSlot timeSlot) throws ProductException
	{
		List<Product> list = productService.getProductsInTimeDuration(timeSlot);
		
		return new ResponseEntity<List<Product>>(list,HttpStatus.ACCEPTED);
	}
}
