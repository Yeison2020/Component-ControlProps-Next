import { useState, useEffect, useRef } from "react";
import { Product, onChangeArgs } from "../interfaces/interfaces";

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
}
export const useProduct = ({
  onChange,
  product,
  value = 0,
}: useProductArgs) => {
  const [counter, setCounter] = useState(value);
  const isControlled = useRef(!!onChange);

  const increaseBy = (value: number) => {
    console.log("IsControlled", isControlled.current);
    const newValue = Math.max(counter + value, 0);
    setCounter(newValue);

    // Check this syntax Great way to handle some conditions
    onChange && onChange({ count: newValue, product });
  };
  useEffect(() => {
    setCounter(value);
  }, [value]);
  return {
    counter,
    increaseBy,
  };
};
