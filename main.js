import './style.css';

import products from "./api/products.json";
import { showProductContainer } from './homeProductsCards';

// Define a function named `showProductContainer` that takes an array of products as input.
showProductContainer(products);