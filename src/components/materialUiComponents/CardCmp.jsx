import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSelector,useDispatch } from 'react-redux';
import NavbarCmp from './NavbarCmp';

import {add} from "../../store/features/cartSlice"

import { Grid } from '@mui/material';

import { useEffect } from 'react';
import {fetchProducts} from "../../store/features/productsSlice"



function CardCmp() {

const productsListing = useSelector(state=>state.products.products)

const dispatch = useDispatch()



useEffect(()=>{
  dispatch(fetchProducts())
},[])

console.log(productsListing)



const handleAdd = (product)=>{
  dispatch(add(product))
}

  return (

<>
<NavbarCmp/>

<Grid container >

  {productsListing.map((product)=>{
  return( 
  
  <Grid item key={product.id} lg="3" md="4" sm="6" sx={{mt:5}}>
  <Card sx={{ maxWidth: 345 }} >
        <CardMedia
          component="img"
          height="140"
          image={product.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.category}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.price}
          </Typography>
        </CardContent>
        <CardActions>
        <Button variant="contained" color='success' onClick={()=>handleAdd(product)}>Add To Cart</Button>    
          </CardActions>
      </Card>
      </Grid>
      
      )
  })}
     

</Grid>
    
    </>
  );
}

export default CardCmp