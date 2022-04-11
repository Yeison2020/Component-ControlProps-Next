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
  counter: number;
}
// Main Component
export const ShoppingPage = () => {
  const [shoppingCart, setshoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({
    "1": { ...product1, counter: 10 },
    "2": { ...product2, counter: 10 },
  });

  const onProductCountChange = ({
    count,
    product,
  }: {
    count: number;
    product: Product;
  }) => {
    console.log("On Product Count Change", count, product);
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
          return (
            <ProductCard
              product={product}
              className="bg-dark text-white"
              key={product.id}
              onChange={(e) => onProductCountChange(e)}
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
        <ProductCard
          product={product2}
          className="bg-dark text-white"
          style={{ width: "100px" }}
        >
          <ProductImage
            className="custom-image"
            style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
          />
          {/* <ProductTitle className="text-bold" /> */}
          <ProductButtons className="custom-buttons" />
        </ProductCard>
        <ProductCard
          product={product1}
          className="bg-dark text-white"
          style={{ width: "100px" }}
        >
          <ProductImage
            className="custom-image"
            style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
          />
          {/* <ProductTitle className="text-bold" /> */}
          <ProductButtons className="custom-buttons" />
        </ProductCard>
      </div>
    </div>
  );
};
