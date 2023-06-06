import { setProduct } from "../Redux/Reducers/cartSlice";

const addProductToCart = (item, dispatch, product, toast) => {

  if (!product.includes(item)) {
    dispatch(setProduct(item));
    toast({
      title: `Product: ${item.title} Added to cart`,
      description: "You can checkout product in your cart",
      status: "success",
      position: "top-left",
      duration: 3000,
    });
  } else {
    toast({
      title: "Product is already in your cart",
      description: "You can checkout product in your cart",
      status: "warning",
      position: "top-left",
      duration: 3000,
    });
  }
};

export default addProductToCart;
