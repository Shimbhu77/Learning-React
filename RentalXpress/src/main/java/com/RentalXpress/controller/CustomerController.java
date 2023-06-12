package com.RentalXpress.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.RentalXpress.Model.Customer;
import com.RentalXpress.Model.DTO.CustomerDTO;
import com.RentalXpress.Service.CustomerService;
import com.RentalXpress.exceptions.CustomerException;

@RestController
public class CustomerController {

	@Autowired
	private CustomerService customerService;
	
	@PostMapping("/customers")
	public ResponseEntity<Customer> addCustomer(@Validated @RequestBody CustomerDTO cutomerDTO) throws CustomerException
	{
		Customer customer = customerService.addCustomer(cutomerDTO);
		
		return new ResponseEntity<Customer>(customer,HttpStatus.CREATED);
	}
}
