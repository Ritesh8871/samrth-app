import { Container, Grid, Typography } from "@mui/material"
import CompanyBanner from "../../public/assets/images/Agri/construction-back.png"
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import PublicIcon from '@mui/icons-material/Public';
import Diversity3Icon from '@mui/icons-material/Diversity3';

const Company = () => {

  let counter = [
    { icon : <WorkspacePremiumIcon/>,
      title : "some text here"
  },
    { icon : <PublicIcon/>,
      title : "some text here"
  },
    { icon : <Diversity3Icon/>,
      title : "some text here"
  },
    { icon : <Diversity3Icon/>,
      title : "some text here"
  },
  ]

  return (
    <>
      <img style={{width:"100%"}} src={CompanyBanner}/>
      <Container maxWidth="xl"  sx={{py: {xs:"1rem",md:"1.5rem", lg:"2rem"},px: {xs:"0.7rem", sm : "2rem", md:"5rem", lg:"6rem"}, backgroundColor : "red"}} >
        <Grid container sx={{backgroundColor:"green", borderRadius : "16px"}} spacing={2}>
         {counter.map((e)=>(
          <Grid key={e} item xs={6} md={3}>
            <img src={PublicIcon}/>
            <Typography variant="h5" color="primary.main"> {e.title} </Typography>
          </Grid>
         ))}
        </Grid>
      </Container>
    </>
  )
}

export default Company