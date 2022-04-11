import { useState } from "react";
import { Product, onChangeArgs } from "../interfaces/interfaces";

interface useProductArgs {
  product: Product;
  onChange: (args: onChangeArgs) => void;
}
export const useProduct = ({ onChange }: useProductArgs) => {
  const [counter, setCounter] = useState(0);

  const increaseBy = (value: number) => {
    setCounter((prev) => Math.max(prev + value, 0));

    // Check this syntax Great way to handle some conditions
    onChange && onChange();
  };

  return {
    counter,
    increaseBy,
  };
};
