import React from "react";
import {
  Box,
  Text,
  Button,
  Image,
  Menu,
  MenuButton,
  Icon,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { FiShoppingCart } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch } from "react-redux";
import { setHandleClick } from "../Redux/Reducers/cartSlice";

const Cart = ({ items }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCheckoutClick = () => {
    dispatch(setHandleClick(true));
    navigate("/checkout");
  };

  return (
    <Menu>
      <MenuButton
          aria-label="Open shopping cart"
          as={Button}
          mr={1}
          variant="ghost"
          colorScheme="orange"
          size="sm"
          className=" border "
        >
           <Icon mr={2} as={FiShoppingCart}/>
        ({items.length})
      </MenuButton>

      <MenuList>
        <AnimatePresence>
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.3 }}
            >
              <MenuItem>
                <Image
                  src={item.default_image.image}
                  alt={item.title}
                  boxSize="2rem"
                  mr={2}
                />
                <Box>
                  <Text fontWeight="bold">{item.title}</Text>
                  <Text color="gray.500">${item.price}</Text>
                </Box>
              </MenuItem>
            </motion.div>
          ))}
        </AnimatePresence>
        <MenuItem onClick={handleCheckoutClick} isDisabled={!items.length}>
          Checkout
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default Cart;
