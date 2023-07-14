import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {

  static defaultProps =
    {
      country: 'in',
      pageSize: 20,
      category: 'general'
    }

  static propTypes =
    {
      country: PropTypes.string,
      pageSize: PropTypes.number,
      category: PropTypes.string
    }

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  constructor(props) {
    super(props);
    // console.log("I am constructor from news component.");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0
    };

    document.title = `${this.capitalizeFirstLetter(this.props.category)} - ताजाखबर `;
  }

  async updatedNews() {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    this.props.setProgress(30);
    let data = await fetch(url);
    let parsedData = await data.json();
    this.props.setProgress(70);
    // console.log(parsedData);
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false });
    this.props.setProgress(100);
  }
  async componentDidMount() {
    this.updatedNews();
  }
  handlePreviouClick = async () => {
    console.log("previous");
   
    this.setState({ page: this.state.page - 1 });
    this.updatedNews();
  }

  handleNextClick = async () => {
    console.log("Next");
    console.log(this.state);
    this.setState({ page: this.state.page + 1 });
    console.log(this.state);
    this.updatedNews();

  }
    fetchMoreData = async () => {
      this.setState({ page: this.state.page + 1 });
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({ articles:this.state.articles.concat(parsedData.articles), totalResults: parsedData.totalResults});
          
    };
  render() {

    return (
      <div className='container my-3'>
        <h2 className='my-10 text-center' style={{
          marginTop: '70px',
          marginBottom: '2.5rem'
        }}>{this.capitalizeFirstLetter(this.props.category)} Top Headlines - ताजाखबर </h2>
        {this.state.loading && <Spinner/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
                <div className="row">
                {this.state.articles.map((el,ind) => (
                  <div className="col-md-4" key={el.url+ind}>

                    <NewsItem title={el.title} description={el.description} imageUrl={el.urlToImage} newsurl={el.url} author={el.author} date={el.publishedAt} source={el.source.name} />
                  </div>
                ))}
            </div>
          </div>
        
        </InfiniteScroll>
      </div>
    );
  }
}

export default News;
