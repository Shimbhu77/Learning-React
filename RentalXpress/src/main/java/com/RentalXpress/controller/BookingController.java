package com.RentalXpress.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.RentalXpress.Model.Booking;
import com.RentalXpress.Model.DTO.BookingDTO;
import com.RentalXpress.Service.BookingService;
import com.RentalXpress.exceptions.BookingException;

@RestController
public class BookingController {

	@Autowired
	private BookingService bookingService;
	
	@PostMapping("/api/bookings")
	public ResponseEntity<Booking> bookProduct(@Validated @RequestBody BookingDTO booking) throws BookingException
	{
		Booking book = bookingService.bookProduct(booking);
		
		return new ResponseEntity<Booking>(book,HttpStatus.CREATED);
	}
	
}
