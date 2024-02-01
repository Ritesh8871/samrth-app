import { Box, Grid, Typography, Container, IconButton, } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import logo from '../../public/assets/images/logo.png'
import { NavLink } from 'react-router-dom';

// Replace these with your own social media URLs
const socialMediaLinks = {
  facebook: '#',
  twitter: '#',
  instagram: '#',
};

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        color: 'text.secondary',
        borderTop: '1px solid',
        borderColor: 'divider',
        py: {xs:"1rem",md:"1.5rem", lg:"2rem"},px: {xs:"0.7rem", sm : "2rem", md:"5rem", lg:"6rem"}
      }}
    >
      <Container >
        <Grid container spacing={0} gap={2} justifyContent={{xs: "start", lg : "center"}} >
         
          <Grid item xs={12} sm={3} md={4} lg={2}>
          <NavLink 
            style={{ '&:hover': {color: '#FAA831 !important',}, color: "#707B9E" }}
            to="/"
            >
            <img width={"100%"} src={logo} />
          </NavLink>
            <Typography variant="subtitle1" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam mauris sed ma
            </Typography>
          </Grid>

          <Grid item xs={6} sm={3} md={3} lg={2}>
            <Typography variant="subtitle1" fontWeight={"600"} color="text.primary" gutterBottom>
            Company
            </Typography>

            <ul style={{padding : "0px", gap: "10px"}} >
                <li style={{listStyle : "none", paddingBottom : "10px"}} >
                <NavLink 
                    style={{ '&:hover': {color: '#FAA831 !important',}, color: "#707B9E" }}
                    to="/contact"
                    >About us
                </NavLink>
                </li>

                <li style={{listStyle : "none", paddingBottom : "10px"}} >
                <NavLink 
                    style={{ '&:hover': {color: '#FAA831 !important',}, color: "#707B9E" }}
                    to="/contact"
                    >Contact
                </NavLink>
                </li>

                <li style={{listStyle : "none", paddingBottom : "10px"}} >
                <NavLink 
                    style={{ '&:hover': {color: '#FAA831 !important',}, color: "#707B9E" }}
                    to="/news&media"
                    >News & Media
                </NavLink>
                </li>

                <li style={{listStyle : "none", paddingBottom : "10px"}} >
                <NavLink 
                    style={{ '&:hover': {color: '#FAA831 !important',}, color: "#707B9E" }}
                    to="/contact"
                    >Term & Condition
                </NavLink>
                </li>

            </ul>

          </Grid>

          <Grid item xs={6} sm={3} md={3} lg={2}>
            <Typography variant="subtitle1" fontWeight={"600"} color="text.primary" gutterBottom>
            Agriculture
            </Typography>
            <ul style={{padding : "0px", gap: "10px"}} >
                <li style={{listStyle : "none", paddingBottom : "10px"}} >
                <NavLink 
                    style={{ '&:hover': {color: '#FAA831 !important',}, color: "#707B9E" }}
                    to="/contact"
                    >About us
                </NavLink>
                </li>

                <li style={{listStyle : "none", paddingBottom : "10px"}} >
                <NavLink 
                    style={{ '&:hover': {color: '#FAA831 !important',}, color: "#707B9E" }}
                    to="/contact"
                    >Contact
                </NavLink>
                </li>

                <li style={{listStyle : "none", paddingBottom : "10px"}} >
                <NavLink 
                    style={{ '&:hover': {color: '#FAA831 !important',}, color: "#707B9E" }}
                    to="/news&media"
                    >News & Media
                </NavLink>
                </li>

                <li style={{listStyle : "none", paddingBottom : "10px"}} >
                <NavLink 
                    style={{ '&:hover': {color: '#FAA831 !important',}, color: "#707B9E" }}
                    to="/contact"
                    >Term & Condition
                </NavLink>
                </li>

            </ul>

          </Grid>

          <Grid item xs={6} sm={3} md={2} lg={2}>
            <Typography variant="subtitle1" fontWeight={"600"} color="text.primary" gutterBottom>
            Construction
            </Typography>
            <ul style={{padding : "0px", gap: "10px"}} >
                <li style={{listStyle : "none", paddingBottom : "10px"}} >
                <NavLink 
                    style={{ '&:hover': {color: '#FAA831 !important',}, color: "#707B9E" }}
                    to="/contact"
                    >About us
                </NavLink>
                </li>

                <li style={{listStyle : "none", paddingBottom : "10px"}} >
                <NavLink 
                    style={{ '&:hover': {color: '#FAA831 !important',}, color: "#707B9E" }}
                    to="/contact"
                    >Contact
                </NavLink>
                </li>

                <li style={{listStyle : "none", paddingBottom : "10px"}} >
                <NavLink 
                    style={{ '&:hover': {color: '#FAA831 !important',}, color: "#707B9E" }}
                    to="/news&media"
                    >News & Media
                </NavLink>
                </li>

                <li style={{listStyle : "none", paddingBottom : "10px"}} >
                <NavLink 
                    style={{ '&:hover': {color: '#FAA831 !important',}, color: "#707B9E" }}
                    to="/contact"
                    >Term & Condition
                </NavLink>
                </li>

            </ul>

          </Grid>

          <Grid item xs={6} sm={3} md={2} lg={2}>
            <Typography variant="subtitle1" fontWeight={"600"} textAlign={"center"} color="text.primary" gutterBottom>
            Social Handle
            </Typography>

            <Grid width={{xs: "70%", md:"60%"}} marginX={"auto"} container spacing={1}>
            
            <Grid item xs={"6"} sx={{display: "flex", justifyContent : "center"}} >
            <IconButton  aria-label="Facebook" color="inherit"
            sx={{borderRadius : "7px",
             bgcolor :"primary.light",
             width : "auto",
              '&:hover': {backgroundColor: '#FAA831', color : "white"},
             }} 
             component="a" href={socialMediaLinks.facebook}>
              <FacebookIcon />
            </IconButton>
            </Grid>
            
            <Grid item xs={"6"} sx={{display: "flex", justifyContent : "center"}} >
            <IconButton  aria-label="Twitter" color="inherit"
            sx={{borderRadius : "7px",
             bgcolor :"primary.light",
             width : "auto",
              '&:hover': {backgroundColor: '#FAA831', color : "white"},
             }} 
             component="a" href={socialMediaLinks.twitter}>
              <TwitterIcon />
            </IconButton>
            </Grid>
            
            <Grid item xs={"6"} sx={{display: "flex", justifyContent : "center"}} >
            <IconButton  aria-label="Instagram" color="inherit"
            sx={{borderRadius : "7px",
             bgcolor :"primary.light",
             width : "auto",
              '&:hover': {backgroundColor: '#FAA831', color : "white"},
             }} 
             component="a" href={socialMediaLinks.instagram}>
              <InstagramIcon />
            </IconButton>
            </Grid>
            
            <Grid item xs={"6"} sx={{display: "flex", justifyContent : "center"}} >
            <IconButton  aria-label="LinkdIn" color="inherit"
            sx={{borderRadius : "7px",
             bgcolor :"primary.light",
             width : "auto",
              '&:hover': {backgroundColor: '#FAA831', color : "white"},
             }} 
             component="a" href={socialMediaLinks.instagram}>
              <LinkedInIcon />
            </IconButton>
            </Grid>
            
            <Grid item xs={"12"} sx={{display: "flex", justifyContent : "center"}} >
            <IconButton  aria-label="LinkdIn" color="inherit"
            sx={{borderRadius : "7px",
             bgcolor :"primary.light",
             width : "100%",
              '&:hover': {backgroundColor: '#FAA831', color : "white"},
             }} 
             component="a" href={socialMediaLinks.instagram}>
              <LinkedInIcon />
            </IconButton>
            </Grid>

            </Grid>
          </Grid>

        </Grid>
        <Box sx={{borderTop: '2px solid',
        borderColor: 'divider',}} >
        <Typography variant="body2" color="text.secondary" align="center" sx={{ pt: 2 }}>
        Copyright © 2024 pawan_design | All Rights Reserved | Terms and Conditions | Privacy Policy
        </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;