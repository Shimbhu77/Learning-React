package com.Blackcoffer.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.Blackcoffer.exceptions.DataEntryException;
import com.Blackcoffer.model.Data;
import com.Blackcoffer.service.DataEntryService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class DataEntryController {
	
	@Autowired
	private DataEntryService dataService;
	
	@GetMapping("app/home")
	public ResponseEntity<List<Data>> getAllResults(@RequestParam("home") String home) throws DataEntryException
	{
		List<Data> data = dataService.getAllData();
		
		return new ResponseEntity<List<Data>>(data,HttpStatus.ACCEPTED);
	}
	
	@GetMapping("app/years")
	public ResponseEntity<List<Data>> getResultsByEndYear(@RequestParam("end_year") Integer end_year) throws DataEntryException
	{
		List<Data> data = dataService.getResultsByend_year(end_year);
		
		return new ResponseEntity<List<Data>>(data,HttpStatus.ACCEPTED);
	}
	
	@GetMapping("app/topics")
	public ResponseEntity<List<Data>> getResultsByTopic(@RequestParam("topic") String topic) throws DataEntryException
	{
		List<Data> data = dataService.findByTopicContaining(topic);
		
		return new ResponseEntity<List<Data>>(data,HttpStatus.ACCEPTED);
	}
	
	@GetMapping("app/regions")
	public ResponseEntity<List<Data>> getResultsByRegion(@RequestParam("region") String region) throws DataEntryException
	{
		List<Data> data = dataService.findByRegion(region);
		
		return new ResponseEntity<List<Data>>(data,HttpStatus.ACCEPTED);
	}
	
	@GetMapping("app/sectors")
	public ResponseEntity<List<Data>> getResultsBySector(@RequestParam("sector") String sector) throws DataEntryException
	{
		List<Data> data = dataService.findBySector(sector);
		
		return new ResponseEntity<List<Data>>(data,HttpStatus.ACCEPTED);
	}
	
	@GetMapping("app/cities")
	public ResponseEntity<List<Data>> getResultsByCity(@RequestParam("city") String city) throws DataEntryException
	{
		List<Data> data = dataService.findByCity(city);
		
		return new ResponseEntity<List<Data>>(data,HttpStatus.ACCEPTED);
	}
	
	@GetMapping("app/countries")
	public ResponseEntity<List<Data>> getResultsByCountry(@RequestParam("country") String country) throws DataEntryException
	{
		List<Data> data = dataService.findByCountry(country);
		
		return new ResponseEntity<List<Data>>(data,HttpStatus.ACCEPTED);
	}
	
	@GetMapping("app/sources")
	public ResponseEntity<List<Data>> getResultsBySource(@RequestParam("source") String source) throws DataEntryException
	{
		List<Data> data = dataService.findBySource(source);
		
		return new ResponseEntity<List<Data>>(data,HttpStatus.ACCEPTED);
	}
	
	@GetMapping("app/swots")
	public ResponseEntity<List<Data>> getResultsBySwot(@RequestParam("swot") String swot) throws DataEntryException
	{
		List<Data> data = dataService.findBySwot(swot);
		
		return new ResponseEntity<List<Data>>(data,HttpStatus.ACCEPTED);
	}
	
	@GetMapping("app/pestles")
	public ResponseEntity<List<Data>> getResultsByPestle(@RequestParam("pestle") String pestle) throws DataEntryException
	{
		List<Data> data = dataService.findByPestle(pestle);
		
		return new ResponseEntity<List<Data>>(data,HttpStatus.ACCEPTED);
	}
	
	
	
	
}
