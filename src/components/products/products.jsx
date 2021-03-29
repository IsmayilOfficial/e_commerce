import react from 'react';
import Grid from '@material-ui/core/Grid';
import Product from './Product/Product';

const products = [
{id:1, name:'Shoes',description:'Running shoes',price: '$5',image: 'https://www.kupujemprodajem.com//photos/oglasi/5/42/75007425/75007425_5d0901d3427ba3-739698581560871065182.jpg'},
{id:2, name:'Macbook',description:'Apple macbook', price: '1400',image: 'https://cdn.pocket-lint.com/r/s/1200x/assets/images/151520-laptops-review-hands-on-apple-macbook-air-2020-initial-review-keyboard-dreams-become-a-reality-image1-dwyvdpnsl7.jpg'},
];
const Products = () =>{
return (
<main>
    <Grid container justify = "center" spacing = {4}>
         {products.map((product) => (
             <Grid item key={products.id} xs={12} sm={6} md={4} lg={3}>

             <Product product={product}/>
             </Grid>

         ))}
    </Grid>
</main>
);
};
export default Products;