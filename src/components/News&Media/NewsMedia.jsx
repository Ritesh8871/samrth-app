import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography, IconButton, Stack } from "@mui/material"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ShareTwoToneIcon from '@mui/icons-material/ShareTwoTone';

const NewsMedia = () => {

    let cardData = [
        {
        id : "1",
        catogary : "Agriculture",
        URL : "../../../public/assets/images/Agri/a1.png",
        dayBefore : "3",
        discription : "erh erhga reufua iour aieroi ioaergu aoieur iogioaeur oiguaerg aiuriou iauerig iaeriug iau er uio"
        },
        {
        id : "2",
        catogary : "Construction",
        URL : "../../../public/assets/images/Agri/a2.png",
        dayBefore : "1",
        discription : "erh erhga reufua iour aieroi ioaergu aoieur iogioaeur oiguaerg aiuriou iauerig iaeriug iau er uio"
        },
        {
        id : "3",
        catogary : "Agriculture",
        URL : "../../../public/assets/images/Agri/a3.png",
        dayBefore : "3",
        discription : "erh erhga reufua iour aieroi ioaergu aoieur iogioaeur oiguaerg aiuriou iauerig iaeriug iau er uio"
        },
        {
        id : "1",
        catogary : "Agriculture",
        URL : "../../../public/assets/images/Agri/a1.png",
        dayBefore : "3",
        discription : "erh erhga reufua iour aieroi ioaergu aoieur iogioaeur oiguaerg aiuriou iauerig iaeriug iau er uio"
        },
        {
        id : "2",
        catogary : "Construction",
        URL : "../../../public/assets/images/Agri/a2.png",
        dayBefore : "1",
        discription : "erh erhga reufua iour aieroi ioaergu aoieur iogioaeur oiguaerg aiuriou iauerig iaeriug iau er uio"
        },
        {
        id : "3",
        catogary : "Agriculture",
        URL : "../../../public/assets/images/Agri/a3.png",
        dayBefore : "3",
        discription : "erh erhga reufua iour aieroi ioaergu aoieur iogioaeur oiguaerg aiuriou iauerig iaeriug iau er uio"
        },
        {
        id : "1",
        catogary : "Agriculture",
        URL : "../../../public/assets/images/Agri/a1.png",
        dayBefore : "3",
        discription : "erh erhga reufua iour aieroi ioaergu aoieur iogioaeur oiguaerg aiuriou iauerig iaeriug iau er uio"
        },
        {
        id : "2",
        catogary : "Construction",
        URL : "../../../public/assets/images/Agri/a2.png",
        dayBefore : "1",
        discription : "erh erhga reufua iour aieroi ioaergu aoieur iogioaeur oiguaerg aiuriou iauerig iaeriug iau er uio"
        },
        {
        id : "3",
        catogary : "Agriculture",
        URL : "../../../public/assets/images/Agri/a3.png",
        dayBefore : "3",
        discription : "erh erhga reufua iour aieroi ioaergu aoieur iogioaeur oiguaerg aiuriou iauerig iaeriug iau er uio"
        }
]

  return (

    <Container maxWidth="xl"  sx={{py: {xs:"0.5rem",md:"1rem", lg:"1.5rem"}}}>

    <Typography variant="h4" color="primary">
        News & Media
    </Typography>
    <Typography variant="body1" textAlign={"center"} color="text.secondary">
        lorem aggeru uhuiarri fuh rhhrghuea ruh aushruf eag
    </Typography>

    <Grid container paddingTop={{xs : "20px", sm : "40px"}} spacing={2}>
       
      { cardData.slice(0, 3).map((card)=>(
        <Grid item xs={12} sm={6} md={4} key={card.id}>
        <Card sx={{boxShadow : "none"}} >
            <CardMedia
                component="img"
                alt={card.catogary}
                sx={{borderRadius : "15px"}}
                image={card.URL}
            />
            <CardContent sx={{paddingY :"0px", paddingTop :"10px"}} >
                <Stack direction="row" alignItems={"center"}>
                    <Typography flexGrow={"1"} variant="body2" component="div">
                    Lizard * 3 days ago
                    </Typography>
                    <IconButton size="small" ><WhatsAppIcon/></IconButton>
                    <IconButton size="small" ><ShareTwoToneIcon/></IconButton>
                </Stack>

                <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" sx={{borderRadius : "4rem", paddingX : "1rem"}} endIcon={<ArrowForwardIcon/>} >Read more</Button>
            </CardActions>
    </Card>
        </Grid>
      ))
        }
    </Grid>

    </Container>
  )
}

export default NewsMedia