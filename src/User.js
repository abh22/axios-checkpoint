import { Card ,Typography,CardContent} from '@mui/material'
import React from 'react'
import './Card.css'
export default function User({user}) {
  return (
    
      
   <Card  variant="outlined" style={{width:450,backgroundColor:"#81c784"}}>
   <CardContent style={{display:"flex",flexDirection:"column",alignItems:'center'}}>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {user.name}
      </Typography>
      <Typography variant="h5" component="div">
       Username: {user.username}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Email: {user.email}
      </Typography>
      <Typography variant="body2">
       Address: <br/>
       street "{user.address.street}" in "{user.address.city}"
        <br />
        
      </Typography>
    </CardContent>
   </Card>
   
   
  )
}
