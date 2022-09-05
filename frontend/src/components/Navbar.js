import React, { useContext } from 'react'
import { Box, Button, Grid,TextField,Typography} from '@mui/material';
import axios from 'axios'
import { UserContext } from '../GlobalContext';

function Navbar() {
  const {setMapData, setValueThere} = useContext(UserContext)  

  const handleSubmit=(e)=>{
    let holder=[]
    e.preventDefault();
    let value = e.currentTarget.search.value
    axios.post('http://127.0.0.1:8000/api/search/',{
      search:value
    })
    .then(res=>{
      console.log(res.data)
      res.data.forEach((d)=>{

        if(d.values.collection_event.coordinates !== undefined){
          holder.push(d)
          }
      })
    })
    .catch(err=>console.log("error",err))
    setMapData(holder);
    setValueThere(1);
    
  }

  return (
    <Grid component='form' position={'sticky'} onSubmit={handleSubmit} container sx={{backgroundColor:'white',boxShadow:2, display:'flex',p:2, alignItems:'center', top:0}}>

        <Grid item md={3}>
            <Typography variant='h5' color='primary'>BOLDSystem-NDP</Typography>
            <Typography  sx={{pl:7, color:'gray'}} >Nepal's Data Portal</Typography>
          </Grid>
        <Grid item md={6} >
          <Box sx={{display:"flex",gap:2}}>
            <TextField fullWidth
            label='Search by taxa...'
            size='small'
            name='search'
            />
            <Button variant="contained" color='success' type='submit' >Search</Button>
            </Box>
        </Grid>
    </Grid>
  )
}

export default Navbar