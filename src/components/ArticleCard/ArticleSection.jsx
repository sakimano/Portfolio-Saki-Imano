import ArticleCard from './ArticleCard'; // Adjust the path based on your structure

function ArticlesSection() {
  const articles = [
    {
      date: 'December 26, 2023',
      title: 'Lorem ipsum dolor sit amet.',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque neque animi, velit aut voluptatibus non est labore unde ad maxime incidunt in ut saepe dicta temporibus perferendis dolores illo nisi!',
      link: '#',
    },
    {
      date: 'December 26, 2023',
      title: 'Lorem ipsum dolor sit amet.',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque neque animi, velit aut voluptatibus non est labore unde ad maxime incidunt in ut saepe dicta temporibus perferendis dolores illo nisi!',
      link: '#',
    },
    {
      date: 'December 26, 2023',
      title: 'Lorem ipsum dolor sit amet.',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque neque animi, velit aut voluptatibus non est labore unde ad maxime incidunt in ut saepe dicta temporibus perferendis dolores illo nisi!',
      link: '#',
    },
  ];

  return (
    <section>
      <ul>
        {articles.map((article, index) => (
          <li key={index} className="flex flex-col space-y-2 py-6">
            <ArticleCard
              date={article.date}
              title={article.title}
              content={article.content}
              link={article.link}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ArticlesSection;
