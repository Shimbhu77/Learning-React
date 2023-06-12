package com.RentalXpress.ServiceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.RentalXpress.Model.Product;
import com.RentalXpress.Model.DTO.TimeSlot;
import com.RentalXpress.Repository.ProductRepository;
import com.RentalXpress.Service.ProductService;
import com.RentalXpress.exceptions.ProductException;

@Service
public class ProductServiceImpl implements ProductService {
   
	@Autowired
	private ProductRepository productRepo;
	
	@Override
	public List<Product> getProductsInTimeDuration(TimeSlot timeSlot) throws ProductException {
		
		return productRepo.findAvailableProductsInTimeDuration(timeSlot.getStartDateTime(),timeSlot.getEndDateTime());
	}

}
