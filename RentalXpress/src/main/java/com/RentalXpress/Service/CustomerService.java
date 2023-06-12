package com.RentalXpress.Service;

import com.RentalXpress.Model.Customer;
import com.RentalXpress.Model.DTO.CustomerDTO;
import com.RentalXpress.exceptions.CustomerException;

public interface CustomerService {
   public Customer addCustomer(CustomerDTO customer) throws CustomerException;
}
