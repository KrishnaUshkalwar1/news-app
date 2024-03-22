import "./article.css";

const ArticleCard = (props) => {
  const { newsDetails } = props;
  const { url, urlToImage, title, content, author, publishedAt } = newsDetails;

  return (
    <li className="article-card-container">
      <img src={urlToImage} className="article-image" alt="news photo" />
      <div className="article-card-text-container">
        <a href={url} target="_blank" className="article-card-title">
          {title}
        </a>
        <p className="article-card-description">{content}</p>
        <p className="article-card-author">Author - {author}</p>
        <p className="article-card-published-time">{publishedAt}</p>
      </div>
    </li>
  );
};

export default ArticleCard;
