package com.RentalXpress.ServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.RentalXpress.Model.Customer;
import com.RentalXpress.Model.DTO.CustomerDTO;
import com.RentalXpress.Repository.CustomerRepository;
import com.RentalXpress.Service.CustomerService;
import com.RentalXpress.exceptions.CustomerException;

@Service
public class CustomerServiceImpl implements CustomerService {

	@Autowired
	private CustomerRepository customerRepo;
	
	@Override
	public Customer addCustomer(CustomerDTO customer) throws CustomerException {
		
		Customer newCustomer = new Customer();
		newCustomer.setEmail(customer.getEmail());
		newCustomer.setName(customer.getName());
		newCustomer.setPassword(customer.getPassword());
		
		return customerRepo.save(newCustomer);
	}

}
