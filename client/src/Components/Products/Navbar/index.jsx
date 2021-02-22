import { ShoppingCart, Typography } from "@material-ui/core";
import { Container, AppBar, Toolbar, IconButton, Badge, Typography, } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./style.css";
import Orange from "./orange.svg"

const Navbar = ({ basketItems, totalCost }) => {
  return (
    <>
      <AppBar position="fixed" className="custom-navbar">
        <Container>
          <Toolbar>
            <Typography
              component={Link}
              to="/"
              variant="h6"
              className="custom-title"
              color="inherit">
              
              <img src={Orange}
                alt="logo"
                height="25px"
                className="logo" />
              </Typography>
            <div className="basket-wrapper">
              <IconButton component={Link} to="/basket" aria-label="show basket contents" color="inherit">
                <Badge badgeContent={basketItems} color="secondary">
                  <ShoppingCart className="custom-basket"/>
              </Badge>
              </IconButton>
        </div>





        </Toolbar>






        </Container>





    </AppBar>
    
    
    
    
    
    </>
  )
}


export default Navbar;