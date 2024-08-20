import { useEffect } from "react";
import { useState } from "react";
import NewsItems from "./NewsItem";

const NewsBoard = ({category}) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=928a9f03ffaf4d1a9829f6895c795db5`;
    fetch(url).then(response => response.json()).then(data => setArticles(data.articles));
  },[category]);
  return (
    <div>
      <h2 className="text-center"> Latest <span className="badge bg-danger"> News </span></h2>
      {articles.map((news, index) => {
        return <NewsItems key={index} Title= {news.title} Description={news.description} src ={news.urlToImage} url ={news.url}/>

      })}
    </div>
  )
}

export default NewsBoard;
