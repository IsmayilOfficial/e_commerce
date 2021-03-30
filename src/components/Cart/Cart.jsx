import React from 'react';
import {Container,Typography,Button,Grid} from '@material-ui/core';
import useStyles from './styles'
import CartItem from './CartItem/CartItem';
import {Link} from 'react-router-dom';

const Cart = ({cart,handleUpdateQty,handleRemoveFromCart, handleEmptyCart}) => {
    
    const classes = useStyles();
    const isEmpty = !cart.line_items.length ;


    const EmptyCart = () => (

        <Typography variant = "subtitle1"> You have no items in your cart,
        <Link to="/" className={classes.link}> start adding some!</Link>
         </Typography>
    ); 

    const FilledCart = () => (
        <>
        <Grid container spacing={3}>

         {cart.line_items.map((item)=>(
             <Grid item xs={12} sm= {4} key = {item.id}>
               <CartItem item = {item}  onUpdateCartQty = {handleUpdateQty} onRemoveFromCart ={handleRemoveFromCart}/>

              </Grid>   
           
         ))}
        </Grid>
        <div className = {classes.cardDetails}>
            <Typography variant= "h4">
                Subtotal: {cart.subtotal.formatted_with_symbol}
                </Typography>
                <div>


         <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Empty cart</Button>
          <Button className={classes.checkoutButton}  size="large" type="button" variant="contained" color="primary">Checkout</Button>

                </div>
                  
        </div>
    
        </>

    );
    return (
     <Container>
         <div className = {classes.toolbar}/>
         <Typography className={classes.title}  varian = "h3 ">Your Shopping Cart</Typography>
         {isEmpty ?  <EmptyCart /> : <FilledCart/>}
     </Container>
    )
}

export default Cart;
