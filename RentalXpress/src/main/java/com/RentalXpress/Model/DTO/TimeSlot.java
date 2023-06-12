package com.RentalXpress.Model.DTO;

import java.time.LocalDateTime;

import jakarta.validation.constraints.FutureOrPresent;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class TimeSlot {
	
	@FutureOrPresent(message = "start date and time should be in Future or present is required")
	private LocalDateTime startDateTime;
	
	@FutureOrPresent(message = "end date and time should be in Future is required")
    private LocalDateTime endDateTime; 

}
