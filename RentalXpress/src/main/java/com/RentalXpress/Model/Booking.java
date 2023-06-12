package com.RentalXpress.Model;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.FutureOrPresent;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Booking {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer bookingId;
    
    @ManyToOne
    private Customer customer;
    
    @ManyToOne
    private Product product;
    
    @FutureOrPresent(message = "start date and time should be in Future or present is required")
    private LocalDateTime startDate;
    
    @FutureOrPresent(message = "end date and time should be in Future is required")
    private LocalDateTime endDate;
    
    private LocalDateTime timeStamp;

}
