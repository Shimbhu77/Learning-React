package com.RentalXpress.ServiceImpl;

import java.time.LocalDateTime;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.RentalXpress.Model.Booking;
import com.RentalXpress.Model.Customer;
import com.RentalXpress.Model.Product;
import com.RentalXpress.Model.DTO.BookingDTO;
import com.RentalXpress.Repository.BookingRepository;
import com.RentalXpress.Repository.CustomerRepository;
import com.RentalXpress.Repository.ProductRepository;
import com.RentalXpress.Service.BookingService;
import com.RentalXpress.exceptions.BookingException;

@Service
public class BookingServiceImpl implements BookingService {

	@Autowired
	private BookingRepository bookingRepo;
	
	@Autowired
	private ProductRepository productRepo;
	
	@Autowired
	private CustomerRepository customerRepo;
	
	@Override
	public Booking bookProduct(BookingDTO booking) throws BookingException {
		
		Optional<Product> optProduct = productRepo.findById(booking.getProductId());
		
		if(optProduct.isPresent())
		{
			Product product = optProduct.get();
			
			Optional<Customer> customer = customerRepo.findById(booking.getCustomerId());
			
			Booking book = new Booking();
			book.setCustomer(customer.get());
			
			book.setEndDate(booking.getEndDate());
			book.setStartDate(booking.getStartDate());
			book.setTimeStamp(LocalDateTime.now());	
			book.setProduct(product);
			
			productRepo.save(product);
			
			bookingRepo.save(book);
			
//		    return customer.get().getName()+" booked the "+product.getName()+" successfully.";
			return book;
		    
		}
	
		throw new BookingException("unable to book product.");
		
	}

}
