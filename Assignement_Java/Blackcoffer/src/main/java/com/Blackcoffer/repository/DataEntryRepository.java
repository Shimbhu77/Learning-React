package com.Blackcoffer.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.Blackcoffer.exceptions.DataEntryException;
import com.Blackcoffer.model.Data;

@Repository
public interface DataEntryRepository extends JpaRepository<Data, String> {

	@Query("SELECT d FROM Data d WHERE d.endYear = :endYear")
	public List<Data> findByEndYear(Integer endYear);
	
	@Query("SELECT d FROM Data d WHERE d.topic LIKE %:keyword%")
    List<Data> findByTopicContaining(String keyword);
	
	@Query("SELECT d FROM Data d WHERE d.sector LIKE %:keyword%")
	List<Data> findBySector(String keyword);
	
	@Query("SELECT d FROM Data d WHERE d.region LIKE %:keyword%")
	List<Data> findByRegion(String keyword);
	
	@Query("SELECT d FROM Data d WHERE d.swot LIKE %:keyword%")
	List<Data> findBySwot(String keyword);
	
	@Query("SELECT d FROM Data d WHERE d.source LIKE %:keyword%")
	List<Data> findBySource(String keyword);
	
	@Query("SELECT d FROM Data d WHERE d.pestle LIKE %:keyword%")
	List<Data> findByPestle(String keyword);
	
	@Query("SELECT d FROM Data d WHERE d.country LIKE %:keyword%")
	List<Data> findByCountry(String keyword);
	
	@Query("SELECT d FROM Data d WHERE d.city LIKE %:keyword%")
	List<Data> findByCity(String keyword);
	
}
