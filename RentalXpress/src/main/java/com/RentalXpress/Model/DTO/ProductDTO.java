package com.RentalXpress.Model.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class ProductDTO {
	    
	    private String name;
	    private String image;
	    private Double cost_per_hour;
	    
}
