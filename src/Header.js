import { AppBar, Toolbar, Typography, makeStyles, Grid } from "@material-ui/core";
import React from "react";

 // Define our styles 
 const styles = makeStyles(() => ({
    headerText: {
       backgroundColor: "#e6e6e6",
       textAlign: "center",
       padding: "10px",
    },
    titleText: {
      color: "#000000",
      fontSize: "1.9rem",
      textDecoration: "none",
    },
    buttonText: {
      background: "none",
      border: "none",
      cursor: "pointer",
      color: "#000000",
      textDecoration: "none",
      paddingRight: "23px",
      fontSize: "16px"
    },
    linkText1: {
      color: "#000000",
      textDecoration: "none",
    }
 }));

export default function Header() {
    const { headerText, titleText, buttonText} = styles();

    // This is from stackoverflow
    // https://stackoverflow.com/questions/43441856/how-to-scroll-to-an-element
    
    const scrollHome = () => {
      const section = document.querySelector( '#home' );
      section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
    };

    const scrollContactUs = () => {
      const section = document.querySelector( '#contact-us' );
      section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
    };

    const scrollShowcase = () => {
      const section = document.querySelector( '#showcase' );
      section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
    };
    //

    // Title
    const Title = (
        <Typography variant="a" href='#' component="a" className={titleText}>
          Flawless Floors
        </Typography>
    );   

     // SocialMedia
     const ToTopOfPage = (
       // extra text can go here
        <Typography variant="h7" component="h1">
          <button className={buttonText} onClick={scrollHome}>Home</button>

          <button className={buttonText} onClick={scrollContactUs}>Contact Us</button>

          <button className={buttonText} onClick={scrollShowcase}>Showcase</button>
        </Typography>
    );

    // we use grid from toolbar to be able to have multiple components on the same line but spaced apart
    const displayHeader = () => {
      return ( 
      <Toolbar >
        <Grid
        justify="space-between" 
        container 
        spacing={24}
        >
            <Grid item>
               {Title}
            </Grid>

            <Grid item>
                {ToTopOfPage}
            </Grid>
        </Grid>
      </Toolbar>      
      );
    };
    
    return (
      <header>
        <AppBar className={headerText} position="fixed">  
        {displayHeader()}
        </AppBar>
      </header>
    );
  }
