import Typography  from '@mui/material/Typography';
import Box  from '@mui/material/Box';
import React from 'react';
import Image from 'next/image';
import CustomLink from './Link';

const links = [
  { linkTitle: "GitHub", link: "https://github.com/Boris23-ui"},
  { linkTitle: "Linkedin", link: "https://www.linkedin.com/in/basilkanyami/"},
  { linkTitle: "Twitter", link: "https://x.com/KBasil52420"},
]


const Card = () => {
  return (
    <Box
     className="CardBackground"
     sx={{ 
       padding: "2rem", 
       borderRadius: "0.75rem", 
       display:"flex",
       flexDirection: "column",
       justifyContent: "center",
       alignItems: "center"
      }}
     >

      <Image
       src="/assets/images/boris_resized.jpg"
       alt="profile image" 
       height= {113} 
       width={92} 
       style= {{borderRadius: "50%"}}
       margin-bottom= "1.5rem" 
       />

       <Typography 
         variant='h1' 
         sx={{ fontSize: "2.10rem", marginBottom: "0.5rem" }}>
           Basil Kanyamibwa
       </Typography>
       <Typography className='neon'
         variant='h2' 
         sx={{ fontSize: "1.3125rem", marginBottom: "1.5rem" }}
         fontWeight={600}>
           Nairobi, Kenya
       </Typography>
       <Typography 
         variant='h2' 
         sx={{ fontSize: "1.3125rem" }}
         fontWeight={600}>
           {'Front-end developer and avid reader.'}
       </Typography>
       {links.map((link) => {
          return <CustomLink key={link.link} linkData={link} />;
       })}
     </Box>
  );
};

export default Card;