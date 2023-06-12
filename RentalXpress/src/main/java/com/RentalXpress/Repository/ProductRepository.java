package com.RentalXpress.Repository;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.RentalXpress.Model.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer>{

	 @Query("SELECT p FROM Product p WHERE NOT EXISTS (" +
	            "SELECT b FROM Booking b WHERE b.product = p " +
	            "AND b.startDate < :endDate " +
	            "AND b.endDate > :startDate)")
	 List<Product> findAvailableProductsInTimeDuration(@Param("startDate") LocalDateTime startDate, @Param("endDate") LocalDateTime endDate);
}
