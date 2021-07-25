import React, { useState } from "react";
import { equals } from "ramda";

import { testData } from "./testData";
import ColumnItem from "../../components/ColumnItem";
import ListItem from "../../components/ListItem";
import { ColumnView, ListView } from "./styles";
import { VIEWSTATES } from "./utils";

const Shop = () => {
  const { LIST, COLUMN, CAROUSAL } = VIEWSTATES;
  const [viewState, setViewState] = useState(COLUMN);

  return (
    <>
      {equals(COLUMN, viewState) && (
        <ColumnView>
          {testData.map(({ name, price, image }) => {
            console.log(image);
            return <ColumnItem image={image} title={name} price={price} />;
          })}
        </ColumnView>
      )}
      {equals(LIST, viewState) && (
        <ListView>
          {testData.map(({ name, short, price, image }) => {
            console.log(image);
            return (
              <ListItem
                image={image}
                title={name}
                price={price}
                short={short}
              />
            );
          })}
        </ListView>
      )}
      {equals(CAROUSAL, viewState) && (
        <ColumnView>
          {testData.map(({ name, short, image }) => {
            console.log(image);
            return <ColumnItem image={image} title={name} short={short} />;
          })}
        </ColumnView>
      )}
    </>
  );
};

export default Shop;
