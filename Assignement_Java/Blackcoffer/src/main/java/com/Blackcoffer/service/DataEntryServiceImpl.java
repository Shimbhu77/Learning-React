package com.Blackcoffer.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Blackcoffer.exceptions.DataEntryException;
import com.Blackcoffer.model.Data;
import com.Blackcoffer.repository.DataEntryRepository;

@Service
public class DataEntryServiceImpl implements DataEntryService {

	@Autowired
	private DataEntryRepository dataRepo;
	
	@Override
	public List<Data> getResultsByend_year(Integer end_year) throws DataEntryException {
		System.out.println("**********************         "+dataRepo.findByEndYear(end_year));
		return dataRepo.findByEndYear(end_year);
	}

	@Override
	public List<Data> findByTopicContaining(String keyword) throws DataEntryException {
		// TODO Auto-generated method stub
		return dataRepo.findByTopicContaining(keyword);
	}

	@Override
	public List<Data> findBySector(String sector) throws DataEntryException {
		// TODO Auto-generated method stub
		return dataRepo.findBySector(sector);
	}

	@Override
	public List<Data> findByRegion(String region) throws DataEntryException {
		// TODO Auto-generated method stub
		return dataRepo.findByRegion(region);
	}

	@Override
	public List<Data> findByCity(String city) throws DataEntryException {
		// TODO Auto-generated method stub
		return dataRepo.findByCity(city);
	}

	@Override
	public List<Data> findByCountry(String country) throws DataEntryException {
		// TODO Auto-generated method stub
		return dataRepo.findByCountry(country);
	}

	@Override
	public List<Data> findBySwot(String swot) throws DataEntryException {
		// TODO Auto-generated method stub
		return dataRepo.findBySwot(swot);
	}

	@Override
	public List<Data> findByPestle(String pestle) throws DataEntryException {
		// TODO Auto-generated method stub
		return dataRepo.findByPestle(pestle);
	}

	@Override
	public List<Data> findBySource(String source) throws DataEntryException {
		// TODO Auto-generated method stub
		return dataRepo.findBySource(source);
	}

	@Override
	public List<Data> getAllData() throws DataEntryException {
		
		return dataRepo.findAll();
	}

	 
	
}
