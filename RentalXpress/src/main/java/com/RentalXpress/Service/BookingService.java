package com.RentalXpress.Service;

import com.RentalXpress.Model.Booking;
import com.RentalXpress.Model.DTO.BookingDTO;
import com.RentalXpress.exceptions.BookingException;

public interface BookingService {

	public Booking bookProduct(BookingDTO booking) throws BookingException;
}
