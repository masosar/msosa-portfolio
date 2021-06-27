import React from "react";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  price: {
    textAlign: "right",
    fontSize: "24px",
    fontWeight: "bold",
    padding: theme.spacing(2, 0, 2)
  }
}));

export default function Product(props) {
  const classes = useStyles();
  const { product, onAdd } = props;
  return (
    <div>
      {/* <img className="small" src={product.image} alt={product.name} /> */}
      <CardMedia
                    className={classes.cardMedia}
                    image={product.image}
                    alt={product.name}
                    title={product.name}
                  />
      <CardContent className={classes.cardContent}>
        <h3>{product.name}</h3>
        <div className={classes.price}>${product.price}</div>
        <div>${product.description}</div>
        <div>
          <button className="buttonshp" onClick={() => onAdd(product)}>Add To Cart</button>
        </div>
      </CardContent>
    </div>
  );
}
