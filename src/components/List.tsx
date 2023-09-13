import { useState, useEffect } from "react";
import { Data, Creator, Product } from "../types";

function List({ data }: { data: Data }) {
  const [list, setList] = useState<Data>({ creators: [], products: [] });

  useEffect(() => {
    const { creators: creatorsRaw, products } = data;

    // add properties productsAmount and mostRecentCreateTime to creators' items
    const creators = creatorsRaw.map((item: { id: string; email: string }) => ({
      ...item,
      productsAmount: 0,
      mostRecentCreateTime: "",
    }));

    // sort the products ascendingly by createTime
    products.sort((a: Product, b: Product) =>
      a.createTime.localeCompare(b.createTime)
    );

    for (const key in products) {
      const { creatorId, createTime } = products[key];

      const creatorIndex = creators.findIndex((item) => item.id === creatorId);
      // set the products amount per creator
      creators[creatorIndex].productsAmount =
        creators[creatorIndex].productsAmount + 1;

      // set the most recently create date per creator
      creators[creatorIndex].mostRecentCreateTime = createTime;
    }

    const creatorsResult = creators.sort(function (a: Creator, b: Creator) {
      return (
        b.productsAmount - a.productsAmount ||
        b.mostRecentCreateTime.localeCompare(a.mostRecentCreateTime)
      );
    });

    setList({ creators: creatorsResult, products });
  }, [data]);

  return (
    <div className="flex justify-center">
      <ol
        className="list-decimal list-inside text-main"
        data-testid="list-results"
      >
        {list.creators.slice(0, 3).map(({ id, email }) => (
          <li key={id}>{email}</li>
        ))}
      </ol>
    </div>
  );
}

export default List;
