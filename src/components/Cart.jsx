import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { useSelector,useDispatch } from 'react-redux';
import {remove} from "../store/features/cartSlice"

function Cart() {

    const data = useSelector(state=>state.cart)

    console.log(data, "cart")
const dispatch = useDispatch()

  const removeCart=(oneProductId)=>{
dispatch(remove(oneProductId))
    }

  return (

    <>

    {data.map((oneProduct)=>{
        return(
            <Card sx={{ display: 'flex' }} key={oneProduct.id}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                  {oneProduct.category}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  {oneProduct.price}
                </Typography>
              </CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
      <Button color='error' onClick={()=>removeCart(oneProduct.id)}>Remove</Button>
      
              </Box>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image={oneProduct.image}
              alt="Live from space album cover"
            />
          </Card>
        )
    })}
    </>
 
  );
}

export default Cart;