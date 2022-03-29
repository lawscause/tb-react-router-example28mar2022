import BlogArticle from "./BlogArticle";
const Blogs = () => {
  const blogArticles = [
    {
      id: 1,
      title: "Consectetur",
      author: "Wilma",
      article:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis leo faucibus, sodales est sed, vulputate lorem. Nunc eget tempor metus. Praesent dignissim leo enim, sit amet porttitor velit consequat ac. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    },
    {
      id: 2,
      title: "Vel iaculis",
      author: "Velma",
      article:
        "In auctor pretium arcu vel iaculis. Praesent fermentum cursus sagittis. Suspendisse pellentesque odio eget ex volutpat, ut pulvinar sapien consectetur. Praesent tempus, massa sed gravida aliquam, mi eros lacinia lacus, et tempor eros diam eget erat.",
    },
    {
      id: 3,
      title: "Phasellus vitae",
      author: "Betty",
      article:
        "Praesent tempor vel tortor a consectetur. Phasellus vitae pharetra ipsum. Etiam tempus neque in dolor semper elementum egestas ut felis.",
    },
    {
      id: 4,
      title: "Aliquam a urna",
      author: "Tela",
      article: "Aliquam a urna fermentum, luctus ante vitae, pulvinar risus.",
    },
  ];

  return (
    <>
      <h1>Blog Articles</h1>
      {blogArticles.map((article) => (
        <BlogArticle key={article.id} post={article} />
      ))}
    </>
  );
};

export default Blogs;
