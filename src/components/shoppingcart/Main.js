import React from "react";
import Product from "./Product";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

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
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function Main(props) {
  const classes = useStyles();
  const { products, onAdd } = props;
  return (
    <main className="block col-2">
      <h2>Products</h2>
      <Container>
        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid item key={product} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <Product
                  key={product.id}
                  product={product}
                  onAdd={onAdd}
                ></Product>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  );
}
