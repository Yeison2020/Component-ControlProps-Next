import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "../components";
import "../styles/custom-styles.css";
import { Product } from "../interfaces/interfaces";
import { useState } from "react";

const product1 = {
  id: "1",
  title: "Coffee Mug - Card",
  img: "./coffee-mug.png",
};
const product2 = {
  id: "2",
  title: "Coffee Mug - Meme",
  img: "./coffee-mug2.png",
};
const products: Product[] = [product1, product2];

// Im using my Product Interface and extending It's  values from Products and adding another new Value Counter
interface ProductInCart extends Product {
  count: number;
}
// Main Component
export const ShoppingPage = () => {
  const [shoppingCart, setshoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});
  // console.log(shoppingCart, "Printing my current Cart");

  const onProductCountChange = ({
    count,
    product,
  }: {
    count: number;
    product: Product;
  }) => {
    console.log({ count });
    setshoppingCart((oldShoppingCart) => {
      if (count === 0) {
        // Renaming here
        const { [product.id]: toDelete, ...rest } = oldShoppingCart;
        return { ...rest };
      }
      return {
        ...oldShoppingCart,
        [product.id]: {
          ...product,
          count,
        },
      };
    });
    console.log("On Product Count", count, product);
  };
  console.log(shoppingCart);
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {products.map((product) => {
          console.log(product);
          return (
            <ProductCard
              product={product}
              className="bg-dark text-white"
              key={product.id}
              onChange={onProductCountChange}
              value={shoppingCart[product.id]?.count || 0}
            >
              <ProductImage
                className="custom-image"
                style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
              />
              <ProductTitle className="text-bold" />
              <ProductButtons className="custom-buttons" />
            </ProductCard>
          );
        })}
      </div>
      <div className="shopping-cart">
        {Object.entries(shoppingCart).map(([key, product]) => {
          return (
            <ProductCard
              key={key}
              product={product}
              className="bg-dark text-white"
              style={{ width: "100px" }}
              onChange={() => onProductCountChange}
              value={product.count}
            >
              <ProductImage
                className="custom-image"
                style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
              />
              <ProductTitle className="text-bold" />
              {/* <ProductTitle className="text-bold" /> */}
              <ProductButtons
                className="custom-buttons"
                style={{ display: "flex", justifyContent: "center" }}
              />
            </ProductCard>
          );
        })}
      </div>
    </div>
  );
};
