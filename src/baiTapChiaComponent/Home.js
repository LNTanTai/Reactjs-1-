import React, { Component } from "react";
import Header from "./Header";
import Slider from "./Slider";
import ProductList from "./ProductList";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Slider />
        <ProductList />
      </div>
    );
  }
}
