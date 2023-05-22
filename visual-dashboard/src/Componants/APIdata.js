import React, { useEffect, useState } from 'react';
import Card from './Card';

export default function APIdata() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('home');
  const [endPoint, setEndPoint] = useState('home');
  const [keyWord, setKeyWord] = useState('home');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8888/app/${endPoint}?${filter}=${keyWord}`);
        const jsonData = await response.json();
        setData(jsonData);
        console.log(jsonData);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, [filter, endPoint, keyWord]);

  const handleOnFilter = (filterType,name) => {
    console.log("value is changing "+" filter type is : "+filterType+" "+name);
    
     if(filterType==="country")
     {
      setEndPoint("countries");
      setFilter(filterType);
      setKeyWord(name);
     }
     else if(filterType==="city")
     {
      setEndPoint("cities");
      setFilter(filterType);
      setKeyWord(name);
     }
     else if(filterType==="region")
     {
      setEndPoint("regions");
      setFilter(filterType);
      setKeyWord(name);
     }
     else if(filterType==="sector")
     {
      setEndPoint("sectors");
      setFilter(filterType);
      setKeyWord(name);
     }
     else if(filterType==="source")
     {
      setEndPoint("sources");
      setFilter(filterType);
      setKeyWord(name);
     }
     else if(filterType==="pestle")
     {
      setEndPoint("pestles");
      setFilter(filterType);
      setKeyWord(name);
     }
     else if(filterType==="swot")
     {
      setEndPoint("swots");
      setFilter(filterType);
      setKeyWord(name);
     }
     else if(filterType==="end_year")
     {
      setEndPoint("years");
      setFilter(filterType);
      setKeyWord(name);
     }
     else if(filterType==="topic")
     {
      setEndPoint("topics");
      setFilter(filterType);
      setKeyWord(name);
     }
  };

  return (
    <>
       <div className="dropdown mx-3 my-3 d-inline-block">
        <button className="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Country
        </button>
        <ul className="dropdown-menu">
                <li>
                    <div className="input-group">
                      <input type="text" id="country" className="form-control" placeholder="Enter Year" />
                      <button className="btn btn-primary" onClick={() => handleOnFilter('country', document.getElementById('country').value)}>
                        Apply
                      </button>
                    </div>
                  </li>
                 <li><a className="dropdown-item" onClick={() => handleOnFilter('country', 'India')}>India</a></li>
                 <li><a className="dropdown-item" onClick={() => handleOnFilter('country', 'United States of America')}>United States of America</a></li>
                 <li><a className="dropdown-item" onClick={() => handleOnFilter('country', 'Guyana')}>Guyana</a></li>
                 <li><a className="dropdown-item" onClick={() => handleOnFilter('country', 'Iran')}>Iran</a></li>
                 <li><a className="dropdown-item" onClick={() => handleOnFilter('country', 'Poland')}>Poland</a></li>
                 <li><a className="dropdown-item" onClick={() => handleOnFilter('country', 'Australia')}>Australia</a></li>
                 <li><a className="dropdown-item" onClick={() => handleOnFilter('country', 'Mongolia')}>Mongolia</a></li>
                 <li><a className="dropdown-item" onClick={() => handleOnFilter('country', 'Bahrain')}>Bahrain</a></li>
                 <li><a className="dropdown-item" onClick={() => handleOnFilter('country', 'Estonia')}>Estonia</a></li>
                 
                 <li><a className="dropdown-item" onClick={() => handleOnFilter('country', 'Saudi Arabia')}>Saudi Arabia</a></li>
                 <li><a className="dropdown-item" onClick={() => handleOnFilter('country', 'Sweden')}>Sweden</a></li>
                 <li><a className="dropdown-item" onClick={() => handleOnFilter('country', 'China')}>China</a></li>
                 <li><a className="dropdown-item" onClick={() => handleOnFilter('country', 'New Zealand')}>New Zealand</a></li>
                 <li><a className="dropdown-item" onClick={() => handleOnFilter('country', 'Latvia')}>Latvia</a></li>
                 <li><a className="dropdown-item" onClick={() => handleOnFilter('country', 'Turkey')}>Turkey</a></li>
                 <li><a className="dropdown-item" onClick={() => handleOnFilter('country', 'Pakistan')}>Pakistan</a></li>
                 <li><a className="dropdown-item" onClick={() => handleOnFilter('country', 'Libya')}>Libya</a></li>
                 <li><a className="dropdown-item" onClick={() => handleOnFilter('country', 'South Sudan')}>South Sudan</a></li>
                 <li><a className="dropdown-item" onClick={() => handleOnFilter('country', 'Canada')}>Canada</a></li>
                 <li><a className="dropdown-item" onClick={() => handleOnFilter('country', 'Nigeria')}>Nigeria</a></li>
                 <li><a className="dropdown-item" onClick={() => handleOnFilter('country', 'Venezuela')}>Venezuela</a></li>
                 <li><a className="dropdown-item" onClick={() => handleOnFilter('country', 'Germany')}>Germany</a></li>
                 <li><a className="dropdown-item" onClick={() => handleOnFilter('country', 'Panama')}>Panama</a></li>
                 <li><a className="dropdown-item" onClick={() => handleOnFilter('country', 'Singapore')}>Singapore</a></li>
                 <li><a className="dropdown-item" onClick={() => handleOnFilter('country', 'Cyprus')}>Cyprus</a></li>
                 <li><a className="dropdown-item" onClick={() => handleOnFilter('country', 'Greece')}>Greece</a></li>
                 <li><a className="dropdown-item" onClick={() => handleOnFilter('country', 'United Kingdom')}>United Kingdom</a></li>
                 <li><a className="dropdown-item" onClick={() => handleOnFilter('country', 'Botswana')}>Botswana</a></li>        
        </ul>
      </div>

      <div className="dropdown mx-3 d-inline-block">
        <button className="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          City
        </button>
        <ul className="dropdown-menu">
                 <li>
                    <div className="input-group">
                      <input type="text" id="city" className="form-control" placeholder="Enter City " />
                      <button className="btn btn-primary" onClick={() => handleOnFilter('city', document.getElementById('city').value)}>
                        Apply
                      </button>
                    </div>
                  </li>
              <li><a className="dropdown-item" onClick={() => handleOnFilter('city', 'Boston')}>Boston</a></li>
              <li><a className="dropdown-item" onClick={() => handleOnFilter('city', 'Houston')}>Houston</a></li>
              <li><a className="dropdown-item" onClick={() => handleOnFilter('city', 'Chengdu')}>Chengdu</a></li>
              <li><a className="dropdown-item" onClick={() => handleOnFilter('city', 'Singapore')}>Singapore</a></li>
              <li><a className="dropdown-item" onClick={() => handleOnFilter('city', 'Moscow')}>Moscow</a></li>
              <li><a className="dropdown-item" onClick={() => handleOnFilter('city', 'Miami')}>Miami</a></li>
              <li><a className="dropdown-item" onClick={() => handleOnFilter('city', 'Santiago')}>Santiago</a></li>
              <li><a className="dropdown-item" onClick={() => handleOnFilter('city', 'Hong Kong')}>Hong Kong</a></li>
              <li><a className="dropdown-item" onClick={() => handleOnFilter('city', 'London')}>London</a></li>
              <li><a className="dropdown-item" onClick={() => handleOnFilter('city', 'Atlanta')}>Atlanta</a></li>

        </ul>
      </div>
      <div className="dropdown mx-3 d-inline-block">
        <button className="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Region
        </button>
        <ul className="dropdown-menu">
                 <li>
                    <div className="input-group">
                      <input type="text" id="region" className="form-control" placeholder="Enter Year" />
                      <button className="btn btn-primary" onClick={() => handleOnFilter('region', document.getElementById('region').value)}>
                        Apply
                      </button>
                    </div>
                  </li>
               <li><a className="dropdown-item" onClick={() => handleOnFilter('region', 'Northern America')}>Northern America</a></li>
               <li><a className="dropdown-item" onClick={() => handleOnFilter('region', 'Western Asia')}>Western Asia</a></li>
               <li><a className="dropdown-item" onClick={() => handleOnFilter('region', 'Antarctica')}>Antarctica</a></li>
               <li><a className="dropdown-item" onClick={() => handleOnFilter('region', 'South-Eastern Asia')}>South-Eastern Asia</a></li>
               <li><a className="dropdown-item" onClick={() => handleOnFilter('region', 'Africa')}>Africa</a></li>
               <li><a className="dropdown-item" onClick={() => handleOnFilter('region', 'Eastern Europe')}>Eastern Europe</a></li>
               <li><a className="dropdown-item" onClick={() => handleOnFilter('region', 'Central America')}>Central America</a></li>
               <li><a className="dropdown-item" onClick={() => handleOnFilter('region', 'Southern Europe')}>Southern Europe</a></li>
               <li><a className="dropdown-item" onClick={() => handleOnFilter('region', 'Oceania')}>Oceania</a></li>
               <li><a className="dropdown-item" onClick={() => handleOnFilter('region', 'World')}>World</a></li>
               <li><a className="dropdown-item" onClick={() => handleOnFilter('region', 'Northern Europe')}>Northern Europe</a></li>
               <li><a className="dropdown-item" onClick={() => handleOnFilter('region', 'Eastern Asia')}>Eastern Asia</a></li>
               <li><a className="dropdown-item" onClick={() => handleOnFilter('region', 'Weakness')}>Weakness</a></li>
               <li><a className="dropdown-item" onClick={() => handleOnFilter('region', 'Threat')}>Threat</a></li>
               <li><a className="dropdown-item" onClick={() => handleOnFilter('region', 'Asia')}>Asia</a></li>
               <li><a className="dropdown-item" onClick={() => handleOnFilter('region', 'Western Europe')}>Western Europe</a></li>
               <li><a className="dropdown-item" onClick={() => handleOnFilter('region', 'South America')}>South America</a></li>
               <li><a className="dropdown-item" onClick={() => handleOnFilter('region', 'Southern Asia')}>Southern Asia</a></li>
               <li><a className="dropdown-item" onClick={() => handleOnFilter('region', 'Central Asia')}>Central Asia</a></li>

        </ul>
      </div>
      <div className="dropdown mx-3 d-inline-block">
        <button className="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Sector
        </button>
        <ul className="dropdown-menu">
               {/* <li>
                    <div className="input-group">
                      <input type="text" id="yearInput" className="form-control" placeholder="Enter Year" />
                      <button className="btn btn-primary" onClick={() => handleOnFilter('sector', document.getElementById('yearInput').value)}>
                        Apply
                      </button>
                    </div>
                  </li> */}
              <li><a className="dropdown-item" onClick={() => handleOnFilter('sector', 'Information Technology')}>Information Technology</a></li>
              <li><a className="dropdown-item" onClick={() => handleOnFilter('sector', 'Pharmaceuticals')}>Pharmaceuticals</a></li>
              <li><a className="dropdown-item" onClick={() => handleOnFilter('sector', 'Healthcare')}>Healthcare</a></li>
              <li><a className="dropdown-item" onClick={() => handleOnFilter('sector', 'Automotive')}>Automotive</a></li>
              <li><a className="dropdown-item" onClick={() => handleOnFilter('sector', 'Energy')}>Energy</a></li>
              <li><a className="dropdown-item" onClick={() => handleOnFilter('sector', 'Manufacturing')}>Manufacturing</a></li>
              <li><a className="dropdown-item" onClick={() => handleOnFilter('sector', 'Media & entertainment')}>Media & entertainment</a></li>
              <li><a className="dropdown-item" onClick={() => handleOnFilter('sector', 'Environment')}>Environment</a></li>
              <li><a className="dropdown-item" onClick={() => handleOnFilter('sector', 'Government')}>Government</a></li>
              <li><a className="dropdown-item" onClick={() => handleOnFilter('sector', 'Tourism & hospitality')}>Tourism & hospitality</a></li>
              <li><a className="dropdown-item" onClick={() => handleOnFilter('sector', 'Financial services')}>Financial services</a></li>
              <li><a className="dropdown-item" onClick={() => handleOnFilter('sector', 'Education')}>Education</a></li>
              <li><a className="dropdown-item" onClick={() => handleOnFilter('sector', 'Retail')}>Retail</a></li>
              <li><a className="dropdown-item" onClick={() => handleOnFilter('sector', 'Aerospace & defence')}>Aerospace & defence</a></li>
              <li><a className="dropdown-item" onClick={() => handleOnFilter('sector', 'Support services')}>Support services</a></li>
              <li><a className="dropdown-item" onClick={() => handleOnFilter('sector', 'Construction')}>Construction</a></li>
              <li><a className="dropdown-item" onClick={() => handleOnFilter('sector', 'Food & agriculture')}>Food & agriculture</a></li>
              <li><a className="dropdown-item" onClick={() => handleOnFilter('sector', 'Transport')}>Transport</a></li>
              <li><a className="dropdown-item" onClick={() => handleOnFilter('sector', 'Water')}>Water</a></li>
              <li><a className="dropdown-item" onClick={() => handleOnFilter('sector', 'Science')}>Science</a></li>
              <li><a className="dropdown-item" onClick={() => handleOnFilter('sector', 'Telecoms')}>Telecoms</a></li>
              <li><a className="dropdown-item" onClick={() => handleOnFilter('sector', 'Mining')}>Mining</a></li>
              <li><a className="dropdown-item" onClick={() => handleOnFilter('sector', 'Security')}>Security</a></li>

        </ul>
      </div>
      <div className="dropdown mx-3 d-inline-block">
        <button className="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Source
        </button>
        <ul  className="dropdown-menu">
        <li>
            <div className="input-group">
              <input type="text" id="year" className="form-control" placeholder="Enter Source" />
              <button className="btn btn-primary" onClick={() => handleOnFilter('source', document.getElementById('year').value)}>
                Apply
              </button>
            </div>
          </li>
          <li><a className="dropdown-item" onClick={() => handleOnFilter('source', 'Climate Change: Vital Signs of the Planet')}>Climate Change: Vital Signs of the Planet</a></li>
            <li><a className="dropdown-item" onClick={() => handleOnFilter('source', 'Cybersecurity Trend')}>Cybersecurity Trend</a></li>
            <li><a className="dropdown-item" onClick={() => handleOnFilter('source', 'SecurityWorldMarket.com')}>SecurityWorldMarket.com</a></li>
            <li><a className="dropdown-item" onClick={() => handleOnFilter('source', 'Control Engineering')}>Control Engineering</a></li>
            <li><a className="dropdown-item" onClick={() => handleOnFilter('source', 'The National')}>The National</a></li>
            <li><a className="dropdown-item" onClick={() => handleOnFilter('source', 'Zacks')}>Zacks</a></li>
            <li><a className="dropdown-item" onClick={() => handleOnFilter('source', 'Bucharest-online.com')}>Bucharest-online.com</a></li>
            <li><a className="dropdown-item" onClick={() => handleOnFilter('source', 'AB Newswire')}>AB Newswire</a></li>
            <li><a className="dropdown-item" onClick={() => handleOnFilter('source', 'Facebook')}>Facebook</a></li>
            <li><a className="dropdown-item" onClick={() => handleOnFilter('source', 'American Association of State Highway and Transportation Officials')}>American Association of State Highway and Transportation Officials</a></li>
            <li><a className="dropdown-item" onClick={() => handleOnFilter('source', 'EurActiv | EU News & policy debates, across languages')}>EurActiv | EU News & policy debates, across languages</a></li>
            <li><a className="dropdown-item" onClick={() => handleOnFilter('source', 'Diabetes UK')}>Diabetes UK</a></li>
            <li><a className="dropdown-item" onClick={() => handleOnFilter('source', 'Computer Weekly')}>Computer Weekly</a></li>
            <li><a className="dropdown-item" onClick={() => handleOnFilter('source', "Canada's Natural Gas")}>Canada's Natural Gas</a></li>
            <li><a className="dropdown-item" onClick={() => handleOnFilter('source', 'Statista Infographics')}>Statista Infographics</a></li>
            <li><a className="dropdown-item" onClick={() => handleOnFilter('source', 'SBWire')}>SBWire</a></li>
            <li><a className="dropdown-item" onClick={() => handleOnFilter('source', 'finanzen.ch')}>finanzen.ch</a></li>
            <li><a className="dropdown-item" onClick={() => handleOnFilter('source', 'infosysblogs')}>infosysblogs</a></li>
            <li><a className="dropdown-item" onClick={() => handleOnFilter('source', 'Vietnam News')}>Vietnam News</a></li>
            <li><a className="dropdown-item" onClick={() => handleOnFilter('source', 'Economist')}>Economist</a></li>

        </ul>
      </div>
      <div className="dropdown mx-3 d-inline-block">
        <button className="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Swot
        </button>
        <ul className="dropdown-menu">
                  {/* <li>
                    <div className="input-group">
                      <input type="text" id="yearInput" className="form-control" placeholder="Enter Year" />
                      <button className="btn btn-primary" onClick={() => handleOnFilter('swot', document.getElementById('yearInput').value)}>
                        Apply
                      </button>
                    </div>
                  </li> */}
          <li><a className="dropdown-item" onClick={() => handleOnFilter('swot', 'Weakness')}>Weakness</a></li>
          <li><a className="dropdown-item" onClick={() => handleOnFilter('swot', 'Strength')}>Strength</a></li>
          <li><a className="dropdown-item" onClick={() => handleOnFilter('swot', 'Threat')}>Threat</a></li>
          <li><a className="dropdown-item" onClick={() => handleOnFilter('swot', 'Opportunity')}>Opportunity</a></li>
        </ul>
      </div>
      <div className="dropdown mx-3 d-inline-block">
        <button className="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          pestle
        </button>
        <ul className="dropdown-menu">
                  <li>
                    <div className="input-group">
                      <input type="text" id="pestle" className="form-control" placeholder="Enter Year" />
                      <button className="btn btn-primary" onClick={() => handleOnFilter('pestle', document.getElementById('pestle').value)}>
                        Apply
                      </button>
                    </div>
                  </li>
              <li><a className="dropdown-item" onClick={() => handleOnFilter('pestle', 'Environmental')}>Environmental</a></li>
              <li><a className="dropdown-item" onClick={() => handleOnFilter('pestle', 'Political')}>Political</a></li>
              <li><a className="dropdown-item" onClick={() => handleOnFilter('pestle', 'Industries')}>Industries</a></li>
              <li><a className="dropdown-item" onClick={() => handleOnFilter('pestle', 'Economic')}>Economic</a></li>
              <li><a className="dropdown-item" onClick={() => handleOnFilter('pestle', 'Social')}>Social</a></li>
              <li><a className="dropdown-item" onClick={() => handleOnFilter('pestle', 'Technological')}>Technological</a></li>
              <li><a className="dropdown-item" onClick={() => handleOnFilter('pestle', 'Lifestyles')}>Lifestyles</a></li>
              <li><a className="dropdown-item" onClick={() => handleOnFilter('pestle', 'Organization')}>Organization</a></li>
              <li><a className="dropdown-item" onClick={() => handleOnFilter('pestle', 'Healthcare')}>Healthcare</a></li>

        </ul>
      </div>
      <div className="dropdown mx-3 d-inline-block">
        <button className="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Topic
        </button>
        <ul className="dropdown-menu">
                <li>
              <div className="input-group">
                <input type="text" id="yearInput" className="form-control" placeholder="Enter Year" />
                <button className="btn btn-primary" onClick={() => handleOnFilter('topic', document.getElementById('yearInput').value)}>
                  Apply
                </button>
              </div>
            </li>
        </ul>
      </div>
      <div className="dropdown mx-3 d-inline-block">
        <button className="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Year
        </button>
        <ul className="dropdown-menu">
                  <li>
                    <div className="input-group">
                      <input type="text" id="years" className="form-control" placeholder="Enter Year" />
                      <button className="btn btn-primary" onClick={() => handleOnFilter('end_year', document.getElementById('years').value)}>
                        Apply
                      </button>
                    </div>
                  </li>
              <li><a className="dropdown-item" onClick={() => handleOnFilter('end_year', 2018)}>2018</a></li>
              <li><a className="dropdown-item" onClick={() => handleOnFilter('end_year', 2019)}>2019</a></li>
              <li><a className="dropdown-item" onClick={() => handleOnFilter('end_year', 2020)}>2020</a></li>
              <li><a className="dropdown-item" onClick={() => handleOnFilter('end_year', 2021)}>2021</a></li>
              <li><a className="dropdown-item" onClick={() => handleOnFilter('end_year', 2022)}>2022</a></li>
              <li><a className="dropdown-item" onClick={() => handleOnFilter('end_year', 2023)}>2023</a></li>
              <li><a className="dropdown-item" onClick={() => handleOnFilter('end_year', 2024)}>2024</a></li>
              <li><a className="dropdown-item" onClick={() => handleOnFilter('end_year', 2025)}>2025</a></li>
              <li><a className="dropdown-item" onClick={() => handleOnFilter('end_year', 2026)}>2026</a></li>
              <li><a className="dropdown-item" onClick={() => handleOnFilter('end_year', 2027)}>2027</a></li>
              <li><a className="dropdown-item" onClick={() => handleOnFilter('end_year', 2029)}>2029</a></li>
              <li><a className="dropdown-item" onClick={() => handleOnFilter('end_year', 2030)}>2030</a></li>
              <li><a className="dropdown-item" onClick={() => handleOnFilter('end_year', 2032)}>2032</a></li>
              <li><a className="dropdown-item" onClick={() => handleOnFilter('end_year', 2033)}>2033</a></li>
              <li><a className="dropdown-item" onClick={() => handleOnFilter('end_year', 2034)}>2034</a></li>
              <li><a className="dropdown-item" onClick={() => handleOnFilter('end_year', 2035)}>2035</a></li>
              <li><a className="dropdown-item" onClick={() => handleOnFilter('end_year', 2037)}>2037</a></li>
              <li><a className="dropdown-item" onClick={() => handleOnFilter('end_year', 2038)}>2038</a></li>
              <li><a className="dropdown-item" onClick={() => handleOnFilter('end_year', 2039)}>2039</a></li>
              <li><a className="dropdown-item" onClick={() => handleOnFilter('end_year', 2040)}>2040</a></li>
              <li><a className="dropdown-item" onClick={() => handleOnFilter('end_year', 2043)}>2043</a></li>
              <li><a className="dropdown-item" onClick={() => handleOnFilter('end_year', 2048)}>2048</a></li>
              <li><a className="dropdown-item" onClick={() => handleOnFilter('end_year', 2050)}>2050</a></li>
              <li><a className="dropdown-item" onClick={() => handleOnFilter('end_year', 2056)}>2056</a></li>
              <li><a className="dropdown-item" onClick={() => handleOnFilter('end_year', 2066)}>2066</a></li>
        </ul>
      </div>
       
      <div className='container my-3'>
        <div className="row">
          {data.map((el) => (
            <div className="col-md-4" key={el.title}>
              <Card title={el.title} insight={el.insight} source={el.source} url={el.url}/>
            </div>
          ))}
        </div>

        {/* <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1}  type="button" className="btn btn-dark" onClick={this.handlePreviouClick}>&larr; Previous</button>
            <button type="button" className="btn btn-dark" onClick={this.handleNextClick} >Next &rarr;</button>
        </div> */}
      </div>

      

    </>
  );
}
