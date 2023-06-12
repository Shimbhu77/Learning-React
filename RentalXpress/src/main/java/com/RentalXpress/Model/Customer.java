package com.RentalXpress.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Customer {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer customerId;
    
	@Size(min=3,max=20,message="your name should have at least 3 characters and max 20 characters.")
    private String name;
	
	@Email(message = "please provide a valid email id")
    private String email;
	
	@Size(min=6,max=20,message="your password should have at least 6 characters and max 20 characters.")
    private String password;
    
}
