package com.Blackcoffer.service;

import java.util.List;

import org.springframework.data.jpa.repository.Query;

import com.Blackcoffer.exceptions.DataEntryException;
import com.Blackcoffer.model.Data;

public interface DataEntryService {

	public List<Data> getResultsByend_year(Integer end_year) throws DataEntryException;
	List<Data> findByTopicContaining(String keyword) throws DataEntryException;
	List<Data> findBySector(String sector) throws DataEntryException;
	List<Data> findByRegion(String region) throws DataEntryException;
	List<Data> findByCity(String city) throws DataEntryException;
	List<Data> findByCountry(String country) throws DataEntryException;
	List<Data> findBySwot(String swot) throws DataEntryException;
	List<Data> findByPestle(String pestle) throws DataEntryException;
	List<Data> findBySource(String source) throws DataEntryException;
	List<Data> getAllData() throws DataEntryException;
	
}
