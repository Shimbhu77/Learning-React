import React, { Component } from 'react';
import Navbar from './Navbar';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
export class News extends Component {

  static defaultProps =
  {
    country : 'in',
    pageSize: 20,
    category: 'general'
  }

  static propTypes =
  {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

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
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b5d06ac7ee404d1794a83eb96e31f87b&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles,totalResults: parsedData.totalResults,loading: false});
  }
  handlePreviouClick= async ()=>{
          console.log("previous");
          let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b5d06ac7ee404d1794a83eb96e31f87b&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
          this.setState({loading: true});
          let data = await fetch(url);
          let parsedData = await data.json();
          console.log(parsedData);
          this.setState({ 
              articles: parsedData.articles,
              page: this.state.page-1,
              loading: false,
           });
  }

  handleNextClick= async ()=>{
        console.log("Next");
        if(this.state.page+1> Math.ceil(this.state.totalResults/20))
        {

        }
        else
        {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b5d06ac7ee404d1794a83eb96e31f87b&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
            this.setState({loading: true});
            let data = await fetch(url);
            let parsedData = await data.json();
            console.log(parsedData);
            this.setState({ 
                articles: parsedData.articles,
                page: this.state.page+1,
                loading: false,
             });
        }
 
  }
  render() {
    // console.log("I am render.");
    // console.log("I am articles: ", this.state.articles);

    return (
      <div className='container my-3'>
        <h2 className='my-7 text-center'>Top Headlines By ताजाखबर</h2>
        {this.state.loading && <Spinner/>}
        <div className="row">
          {this.state.articles.map((el) => (
            <div className="col-md-4" key={el.url}>

              <NewsItem title={el.title} description={el.description} imageUrl={el.urlToImage} newsurl={el.url} />
            </div>
          ))}
        </div>
        <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1}  type="button" className="btn btn-dark" onClick={this.handlePreviouClick}>&larr; Previous</button>
            <button disabled={this.state.page+1> Math.ceil(this.state.totalResultsesults/20)} type="button" className="btn btn-dark" onClick={this.handleNextClick} >Next &rarr;</button>
        </div>
      </div>
    );
  }
}

export default News;
