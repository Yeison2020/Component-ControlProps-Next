import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "../components";
import "../styles/custom-styles.css";
import { Product } from "../interfaces/interfaces";

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
export const ShoppingPage = () => {
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
        <ProductCard product={product2} className="bg-dark text-white">
          <ProductImage
            className="custom-image"
            style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
          />
          <ProductTitle className="text-bold" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>
      </div>
    </div>
  );
};
