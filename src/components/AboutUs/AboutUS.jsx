/* eslint-disable react/no-unknown-property */
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import images from '../../../public/assets/images/About-us-group-img.jpg'

const AboutUS = () => {
  return (
    <>
        <Container maxWidth="xl"  sx={{py: {xs:"0.5rem",md:"1rem", lg:"1.5rem"}}}>
            <Grid container rowGap={3}>
                <Grid sx={{display : "flex", flexDirection : "column" , alignItems : "start"}} rowGap={{ xs : "10px", md : "20px", lg : "30px"}} item md={7} >
                    <Typography variant='h4' textAlign={"start"} color="primary" >About Us</Typography>
                    <Typography variant='body1' color="text.secondary">Lorem ipsum dolor sit amet consectetur adipiscing elit volutpat
                    gravida malesuada quam commodo id integer nam. <br/> Lorem ipsum dolor sit amet consectetur adipiscing elit volutpat 
                    gravida malesuada quam commodo id integer nam.
                    </Typography>
                    <Button variant="outlined" color="primary" icon >Get started</Button>
                </Grid>
                <Grid item md={5}>
                  <Box sx={{width:"100%", height:'100%'}} >
                  <img src={images} style={{borderRadius : "2rem",width:"100%", height:'100%', objectFit:'cover'}}  alt='about-img'/>
                  </Box>
                </Grid>
            </Grid>
        </Container>
    </>
  )
}

export default AboutUS