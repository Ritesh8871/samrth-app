
import { Box, Typography, Button, Container } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import homeBg from  "../../public/assets/images/home-bg.png"
import AboutUS from "../components/AboutUs/AboutUS"
import Category from './Category/Category';
import AssociatedWith from './AssociatedWith/AssociatedWith';
import NewsMedia from './News&Media/NewsMedia';

const Home = () => {
  return (
    <>

    <Container maxWidth="xl"  sx={{py: {xs:"1rem",md:"1.5rem", lg:"2rem"},px: {xs:"0.7rem", sm : "2rem", md:"5rem", lg:"6rem"}}} >
       
        {/* Top section Start */}
        <Box sx={{py: {xs:"1rem",md:"1.5rem", lg:"2rem"}}}>
        <Typography variant="h1" color="primary">
            Agricultural Construction <br/> Execution of modern agricultural facilities
        </Typography>
        <Typography variant="body1" color="text.secondary" textAlign={"center"}  >
        Lorem ipsum dolor sit amet consectetur adipiscing eli mattis <br/> sit phasellus mollis sit aliquam sit nullam neque ultrices.
        </Typography>
        <Box sx={{display : "flex", justifyContent : "center", paddingY : {xs :"0.5rem", md : "0.8rem", lg : "1.5rem"}, gap : {xs :"0.5rem", md : "0.8rem", lg : "1.5rem"}}} >
            <Button variant="contained"  color="primary" endIcon={<ArrowForwardIcon/>} >Get started</Button>
            <Button variant="outlined"  color="primary" >Talk to Buy</Button>
        </Box>
            <img src={homeBg} alt='home-bg' width={"100%"} />
        </Box>
        {/* Top section End */}

        {/* About up Section Start  */}
        <AboutUS/>
        {/* About up Section End  */}

        {/* Category Section Start  */}
        <Category/>
        {/* Category Section End  */}

        {/* Associated With Section Start  */}
        <AssociatedWith/>
        {/* Associated With Section End  */}
      
        {/* News and Media  With Section Start  */}
        <NewsMedia/>
        {/* News and Media  With Section End  */}

    </Container>
    </>
  )
}

export default Home