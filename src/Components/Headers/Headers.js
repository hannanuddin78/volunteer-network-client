import React from "react";
import { Container } from "react-bootstrap";
import HeaderNavBer from "./HeaderNavBer/HeaderNavBer";
import HeaderSearch from "./HeaderSearch/HeaderSearch";

const Headers = () => {
  return (
    <div>
      <Container>
        <HeaderNavBer></HeaderNavBer>
        <HeaderSearch></HeaderSearch>
      </Container>
    </div>
  );
};

export default Headers;
