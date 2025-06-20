import CardContainer from "@/components/CardContainer";
import newsData from "@/data/newsData";
export async function generateMetasata({ params }) {
  const { categoryTypes } = await params;
  return {
    title: `${categoryTypes.toUpperCase()} | Digital News`,
    description: `Latest ${categoryTypes} news on Digital News platform.`,
  };
}
export default async function CategoryTypes({ params }) {
  const { categoryTypes } = await params;
  const filteredNews = newsData.filter(
    (item) => item.category === categoryTypes
  );
  return (
    <div>
      <h1 className="header-1">Category : {categoryTypes.toUpperCase()}</h1>
      <CardContainer data={filteredNews} />
    </div>
  );
}
