const categories = ["sports", "politics", "technology", "entertainment", "business"];
const countries = ["India", "USA", "UK", "Germany", "Canada"];

const newsData = Array.from({ length: 200 }, (_, i) => ({
  id: i + 1,
  title: `Breaking News ${i + 1}`,
  body: `This is the body of news article ${i + 1}.`,
  category: categories[Math.floor(Math.random() * categories.length)],
  date: new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toISOString().split("T")[0],
  country: countries[Math.floor(Math.random() * countries.length)]
}));

export default newsData;
