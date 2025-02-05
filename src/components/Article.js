const Article = ({ title, date, preview }) => {
  return (
    <article>
      <h3>{title}</h3>
      <small>{date}date</small>
      <p>{preview}</p>
    </article>
  );
};

export default Article;
