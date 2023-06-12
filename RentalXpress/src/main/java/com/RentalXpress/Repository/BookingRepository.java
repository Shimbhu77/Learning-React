package com.RentalXpress.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.RentalXpress.Model.Booking;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Integer> {

}
