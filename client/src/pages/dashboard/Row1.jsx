import * as React from 'react';
import { Grid, Container, Typography, Card, CardActionArea, CardMedia, CardContent, Button, Link } from '@mui/material';
import Data from './Data.json'; // Assuming Data.json is in the same directory
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import CategoryFilter from './Category.filter'
// import Button from '@mui/material/Button';
// import Link from '@mui/material/Link';
import CoursesPreview from './CoursesPreview';
function Row1() {
  
    const variants = {
    initial: {
      color: '#000000',
    },
    animate: {
      color: '#ff0000',
      transition: {
        duration: 2,
        ease: 'easeInOut',
      },
    },
  };
  return (
    <>
      <Container maxWidth="lg">
      <motion.div
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 1 }}
    >
      <motion.div
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 1 }}
    >
  
    </motion.div>
    <CategoryFilter/>
    </motion.div>
        <Grid container spacing={5} style={{ marginTop: '50px' }}>
          {Data.map((res, index) => (
            <Grid item xs={12} sm={4} md={4} key={index}>
              <Card sx={{ maxWidth: 345 }} style = {{padding : "10px" , marginBottom :"30px"}}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={res.img} // Access image path from Data.json
                    alt={res.title || 'Course Image'}
                    style={{ borderRadius: "11px ", alignItems: "center " , justifyContent:"center" }}     />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {res.title || 'res Title'}  {/* Use title or fallback text */}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {res.description} {/* Access description from Data */}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <Button variant="outlined" size="medium" >
                <Link href="CoursesPreview">go to the courses</Link>
        </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default Row1;
