
import {  Card, CardActions, CardMedia, Container, Typography, Grid, IconButton, Box, Button } from "@mui/material"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ShareTwoToneIcon from '@mui/icons-material/ShareTwoTone';
import { useState } from "react";


const Category = () => {

    const cardData1 = [
        {
        id : "1",
        title : "HeadingAg",
        img : "../../../public/assets/images/Agri/a2.png"
        },
        {
        id : "2",
        title : "HeadingAg",
        img : "../../../public/assets/images/Agri/a2.png"
        },
        {
        id : "3",
        title : "HeadingAg",
        img : "../../../public/assets/images/Agri/a2.png"
        },
        {
        id : "4",
        title : "HeadingAg",
        img : "../../../public/assets/images/Agri/a2.png"
        },
        {
        id : "5",
        title : "HeadingAg",
        img : "../../../public/assets/images/Agri/a2.png"
        },
        {
        id : "6",
        title : "HeadingAg",
        img : "../../../public/assets/images/Agri/a2.png"
        },
        {
        id : "7",
        title : "HeadingAg",
        img : "../../../public/assets/images/Agri/a2.png"
        },
        {
        id : "7",
        title : "HeadingAg",
        img : "../../../public/assets/images/Agri/a2.png"
        },
        {
        id : "7",
        title : "HeadingAg",
        img : "../../../public/assets/images/Agri/a2.png"
        },
    ]

    var cardData2 = [
        {
        id : "1",
        title : "HeadingCons",
        img : "../../../public/assets/images/Agri/a1.png"
        },
        {
        id : "2",
        title : "HeadingCons",
        img : "../../../public/assets/images/Agri/a1.png"
        },
        {
        id : "3",
        title : "HeadingCons",
        img : "../../../public/assets/images/Agri/a1.png"
        },
        {
        id : "4",
        title : "HeadingCons",
        img : "../../../public/assets/images/Agri/a1.png"
        },
        {
        id : "5",
        title : "HeadingCons",
        img : "../../../public/assets/images/Agri/a1.png"
        },
        {
        id : "6",
        title : "HeadingCons",
        img : "../../../public/assets/images/Agri/a1.png"
        },
        {
        id : "7",
        title : "HeadingCons",
        img : "../../../public/assets/images/Agri/a1.png"
        },
        {
        id : "7",
        title : "HeadingCons",
        img : "../../../public/assets/images/Agri/a1.png"
        },
        {
        id : "7",
        title : "HeadingCons",
        img : "../../../public/assets/images/Agri/a1.png"
        },
]

    const [Active, setActive] = useState(true);
    function hangeActive()
    {
        setActive((e)=> !e);
    }

  return (
    <>
    <Container maxWidth="xl"  sx={{py: {xs:"1rem",md:"1.5rem", lg:"2rem"}}}>
    <Box>
        <Typography variant='h4' textAlign={"center"} color="primary" >Category</Typography>
        <Typography variant='body1' textAlign={"center"} color="text.secondary" >Lorem ipsum dolor sit amet consectetur adipiscing elit volutpat
                        gravida malesuada quam commodo id integer nam.
        </Typography>
    </Box>
        <Box paddingTop={{xs : "10px", sm : "20px"}} sx={{display : "flex", justifyContent: "center", gap : "20px",alignItems : "start"}} >
            <Button variant={ Active ? "contained" : "outlined" } onClick={hangeActive} >Agriculture</Button>
            <Button variant={ Active ? "outlined" : "contained" } onClick={hangeActive} >Construction</Button>
        </Box>
    <Grid container paddingTop={{xs : "20px", sm : "40px"}} spacing={2}>
    {Active ? 
        cardData1.map((e) => (
        <Grid item xs={12} sm={6} md={4} key={e.id}>
            <Card>
            <CardMedia
                sx={{ aspectRatio: "3/2" }}
                image={e.img}
                alt={e.title}
            />
            <CardActions>
                <Typography sx={{flexGrow : "1"}} textAlign={"start"} gutterBottom variant="h5" component="div">
                {e.title}{e.id}
                </Typography>
                <IconButton size="" ><WhatsAppIcon/></IconButton>
                <IconButton size="" ><ShareTwoToneIcon/></IconButton>
            </CardActions>
            </Card>
        </Grid>
        )) 
        :
         cardData2.map((e) => (
        <Grid item xs={12} sm={6} md={4} key={e.id}>
            <Card>
            <CardMedia
                sx={{ aspectRatio: "3/2" }}
                image={e.img}
                alt={e.title}
            />
            <CardActions>
                <Typography sx={{flexGrow : "1"}} textAlign={"start"} gutterBottom variant="h5" component="div">
                {e.title}{e.id}
                </Typography>
                <IconButton size="" ><WhatsAppIcon/></IconButton>
                <IconButton size="" ><ShareTwoToneIcon/></IconButton>
            </CardActions>
            </Card>
        </Grid>
        ))}
        <Button sx={{marginX : "auto", marginTop : "2rem"}} variant="outlined">See All</Button>
    </Grid>
    </Container>
    </>
  )
}

export default Category