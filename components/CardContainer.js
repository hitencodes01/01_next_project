import Card from "./Card";

const CardContainer = ({ data = [] }) => {
  if (!data.length) return <p className="text-center text-gray-500">No news to display.</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map(({ id, title, body, category, country, date }) => (
        <Card
          key={id}
          title={title}
          body={body}
          category={category}
          country={country}
          date={date}
        />
      ))}
    </div>
  );
};

export default CardContainer;
