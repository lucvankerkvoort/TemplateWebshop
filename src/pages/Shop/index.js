import React, { useState } from "react";
import { equals } from "ramda";

import { testData } from "./testData";
import ColumnItem from "../../components/ColumnItem";
import ListItem from "../../components/ListItem";
import { ColumnView, ListView, CarousalView } from "./styles";
import { VIEWSTATES } from "./utils";

const Shop = () => {
  const { LIST, COLUMN, CAROUSAL } = VIEWSTATES;
  const [viewState, setViewState] = useState(CAROUSAL);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(3);
  const carousalItems = (items) => items.slice(start, end);
  const scroll = (direction) => {
    if (end <= testData.length - 1 && direction === "right") {
      setEnd(end + 1);
      setStart(start + 1);
    }
    if (start > 0 && direction === "left") {
      setStart(start - 1);
      setEnd(end - 1);
    }

    return carousalItems(testData);
  };

  return (
    <>
      {equals(COLUMN, viewState) && (
        <ColumnView>
          {testData.map(({ name, price, image }) => (
            <ColumnItem image={image} title={name} price={price} />
          ))}
        </ColumnView>
      )}
      {equals(LIST, viewState) && (
        <ListView>
          {testData.map(({ name, short, price, image }) => (
            <ListItem image={image} title={name} price={price} short={short} />
          ))}
        </ListView>
      )}
      {equals(CAROUSAL, viewState) && (
        <CarousalView>
          <button onClick={() => scroll("left")}> left</button>
          {carousalItems(testData).map(({ name, short, image }, index) => (
            <ColumnItem
              key={index}
              image={image}
              select
              title={name}
              short={short}
            />
          ))}
          <button onClick={() => scroll("right")}>right</button>
        </CarousalView>
      )}
    </>
  );
};

export default Shop;
