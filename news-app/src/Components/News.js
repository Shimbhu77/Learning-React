import React, { Component } from 'react';
import Navbar from './Navbar';
import NewsItem from './NewsItem';

export class News extends Component {
  constructor() {
    super();
    console.log("I am constructor from news component.");
    this.state = {
      articles: [],
      loading: false,
      page:1
    };
  }

  async componentDidMount() {
    let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=b5d06ac7ee404d1794a83eb96e31f87b&page=1&pageSize=20";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles,totalResults: parsedData.totalResults });
  }
  handlePreviouClick= async ()=>{
          console.log("previous");
          let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=b5d06ac7ee404d1794a83eb96e31f87b&page=${this.state.page-1}&pageSize=20`;
          let data = await fetch(url);
          let parsedData = await data.json();
          console.log(parsedData);
          this.setState({ 
              articles: parsedData.articles,
              page: this.state.page-1
           });
  }

  handleNextClick= async ()=>{
        console.log("Next");
        if(this.state.page+1> Math.ceil(this.state.totalresults/20))
        {

        }
        else
        {
            let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=b5d06ac7ee404d1794a83eb96e31f87b&page=${this.state.page+1}&pageSize=20`;
            let data = await fetch(url);
            let parsedData = await data.json();
            console.log(parsedData);
            this.setState({ 
                articles: parsedData.articles,
                page: this.state.page+1
             });
        }
 
  }
  render() {
    // console.log("I am render.");
    // console.log("I am articles: ", this.state.articles);

    return (
      <div className='container my-3'>
        <h2 className='my-7'>Top Headlines By ताजाखबर</h2>
        <div className="row">
          {this.state.articles.map((el) => (
            <div className="col-md-4" key={el.url}>

              <NewsItem title={el.title} description={el.description} imageUrl={el.urlToImage} newsurl={el.url} />
            </div>
          ))}
        </div>
        <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1}  type="button" className="btn btn-dark" onClick={this.handlePreviouClick}>&larr; Previous</button>
            <button type="button" className="btn btn-dark" onClick={this.handleNextClick} >Next &rarr;</button>
        </div>
      </div>
    );
  }
}

export default News;
