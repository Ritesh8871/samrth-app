
import { Container, Typography, Box } from "@mui/material"
import { Pagination,Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';



const AssociatedWith = () => {

   let sliderImg = [
    {
        id : "1",
        img : "../../../assets/images/fb-logo.png"
    },
    {
        id : "2",
        img : "../../../assets/images/insta-logo.png"
    },
    {
        id : "3",
        img : "../../../assets/images/google-logo.png"
    },
    {
        id : "4",
        img : "../../../assets/images/webflow-logo.png"
    },
    {
        id : "5",
        img : "../../../assets/images/youtube-logo.png"
    },
    {
        id : "2",
        img : "../../../assets/images/insta-logo.png"
    },
    {
        id : "3",
        img : "../../../assets/images/google-logo.png"
    },
    {
        id : "4",
        img : "../../../assets/images/webflow-logo.png"
    },
]


  return (
    <Container maxWidth="xl"  sx={{py: {xs:"0.5rem",md:"1rem", lg:"1.5rem"}}}>
    <Box>
        <Typography variant='h4' textAlign={"center"} color="primary" >Associated With </Typography>
        <Typography variant='body1' textAlign={"center"} color="text.secondary" >Lorem ipsum dolor sit amet consectetur adipiscing elit volutpat
                        gravida malesuada quam commodo id integer nam.
        </Typography>
    </Box>
    <Box sx={{paddingY: "2rem"}} >
    <Swiper slidesPerView={1}  spaceBetween={10} pagination={{clickable: true,}}
    breakpoints={{
          '@0.00': {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          '@1.50': {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper">
     
        {sliderImg.map((slider)=>(
            <SwiperSlide key={slider.id}>
                <img src={slider.img} />
            </SwiperSlide>
        ))}

      </Swiper>
    </Box>
   
    </Container>
  )
}

export default AssociatedWith