import React from 'react';

import styles from './Scam.module.css';
//import { makeStyles } from "@material-ui/core/styles";
//import Card from "@material-ui/core/Card";
//import CardMedia from "@material-ui/core/CardMedia";

//import fakeImg from "%PUBIC_URL%/fake1.png";

//const useStyles = makeStyles({
//  root: {
//    maxWidth: 345
//  },
//  media: {
//    height: "100px"
//  }

//});

function Scam() {
  return (
    <div className="image-container">
      <img src="/fake1.png" className={styles.imgfake} alt="" />
      <img src="/real1.png" className={styles.imgreal} alt="" />
    </div>
  );
}
// <img src="/fake1.png" className={styles.imgfake} alt="" />
// <Card className={classes.root}>
//  <Cardmedia
//  className={classes.media}
//  image={fakeImg}
//  />
//</Card>
export default Scam;
