
import Article from './Article';

const ArticleList = ({ posts }) => {
  return (
    <div>
      {posts.map((post, index) => (
        <Article
          key={index}
          title={post.title}
          date={post.date}
          preview={post.preview}
        />
      ))}
    </div>
  );
};

export default ArticleList;
