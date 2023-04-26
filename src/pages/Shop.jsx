import React, { useState } from "react";
import { ShopMain, ShopSide } from "../containers";
import { Box, IconButton } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

const Shop = () => {
  const [toggle, setToggle] = useState(false);
  const lgLeft = !toggle ? 2 : 200

  return (
    <Box className=" relative" display="flex" gap={6}>
      {/* <IconButton
      zIndex={100}
        aria-label="Open menu"
        icon={toggle ? <FiMenu /> : <AiOutlineClose />}
        variant="ghost"
        display={"flex"}
        onClick={() => {
          setToggle(!toggle);
        }}
        position="absolute"
        left={{base: 2,lg:lgLeft}}
      />
      <ShopSide toggle={toggle} /> */}
      <ShopMain toggle={toggle}/>
    </Box>
  );
};

export default Shop;
