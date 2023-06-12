package com.RentalXpress.Service;

import java.util.List;

import com.RentalXpress.Model.Product;
import com.RentalXpress.Model.DTO.TimeSlot;
import com.RentalXpress.exceptions.ProductException;

public interface ProductService {

	public List<Product> getProductsInTimeDuration(TimeSlot timeSlot) throws ProductException;
}
