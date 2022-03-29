const BlogArticle = ({ post }) => {
  return (
    <article>
      <h3>{post.title}</h3>
      <h4>submitted by: {post.author}</h4>
      <p>{post.article}</p>
    </article>
  );
};

export default BlogArticle;
