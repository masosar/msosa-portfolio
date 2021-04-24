import React, { useState, useEffect } from "react";
import CircularProgress from '@material-ui/core/CircularProgress';
import Navbar from "../Navbar";
import axios from "axios";
import {
  Box,
  Table,
  TableContainer,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
  Modal,
  Button,
  TextField,
} from "@material-ui/core";
import { Edit, Delete } from "@material-ui/icons";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

//const baseUrl = "https://ghibliapi.herokuapp.com/films/";
//const baseUrl = "http://localhost:3001/movies/";
const baseUrl = "https://node-ex-mysql.herokuapp.com/";


//CSS styles
const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 700,
    margin: "10px",
  },
  box: {
    backgroundColor: "#fff",
    paddingTop: "60px",
  },
  modal: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  icons: {
    cursor: "pointer",
  },
  inputMaterial: {
    width: "100%",
  },
}));

function CrudRestApi() {
  const classes = useStyles();
  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.black,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
      // hide last border
      "&:last-child td, &:last-child th": {
        border: 0,
      },
    },
  }))(TableRow);

  const [data, setData] = useState([]);
  const [modalInsert, setModalInsert] = useState(false);
  const [modalUpdate, setModalUpdate] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState({
    title: "",
    original_title: "",
    original_title_romanised: "",
    description: "",
    director: "",
    release_date: "",
  });
  const [get, setGet] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedMovie((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  // Save data of the new record -----<
  
  const petitionGet = async () => {
    await axios.get(baseUrl+'movies/').then((response) => {
      //console.log(response.data);
      setData(response.data);
    });
  };

  const petitionPost = async () => {
    await axios.post(baseUrl+'add/', selectedMovie).then((response) => {
      setData(data.concat(response.data));
      toggleModalInsert();
    });
  };

  const petitionPut = async () => {
    await axios
      .put(baseUrl+'update/' + selectedMovie.id, selectedMovie)
      .then((response) => {
        var newData = data;
        //console.log(newData);
        newData.forEach(function(movie){
          if (selectedMovie.id === movie.id) {
            movie.title = selectedMovie.title;
            movie.original_title = selectedMovie.original_title;
            movie.original_title_romanised = selectedMovie.original_title_romanised;
            movie.description = selectedMovie.description;
            movie.director = selectedMovie.director;
            movie.release_date = selectedMovie.release_date;
          }
        });

        setData(newData);
        toggleModalUpdate();
      },
       (error) => {
         console.log(error);
       });
  };

  const petitionDelete = async () => {
    await axios.delete(baseUrl+'delete/' + selectedMovie.id).then((response) => {
      setData(data.filter((movie) => movie.id !== selectedMovie.id));
      toggleModalDelete();
    });
  };

  const toggleModalInsert = () => {
    setModalInsert(!modalInsert);
  };

  const toggleModalUpdate = () => {
    setModalUpdate(!modalUpdate);
  };

  const toggleModalDelete = () => {
    setModalDelete(!modalDelete);
  };

  const selectMovie = (movie, caso) => {
    setSelectedMovie(movie);
    caso === "Edit" ? toggleModalUpdate() : toggleModalDelete();
  };

  useEffect(() => {
    async function fetchData() {
      await petitionGet();
    }
    fetchData();
  }, []);

  const modalBodyInsert = (
    <div className={classes.modal}>
      <h3>Add record</h3>
      <TextField
        name="title"
        className={classes.inputMaterial}
        label="Title"
        onChange={handleChange}
      />
      <br />
      <TextField
        name="original_title"
        className={classes.inputMaterial}
        label="Original title"
        onChange={handleChange}
      />
      <br />
      <TextField
        name="original_title_romanised"
        className={classes.inputMaterial}
        label="Romanised title"
        onChange={handleChange}
      />
      <br />
      <TextField
        name="description"
        className={classes.inputMaterial}
        label="Description"
        multiline
        rows={6}
        onChange={handleChange}
      />
      <br />
      <TextField
        name="director"
        className={classes.inputMaterial}
        label="Director"
        onChange={handleChange}
      />
      <br />
      <TextField
        name="release_date"
        className={classes.inputMaterial}
        label="Release date"
        onChange={handleChange}
      />
      <br />
      <br />
      <div align="right">
        <Button color="primary" onClick={() => petitionPost()}>
          Insertar
        </Button>
        <Button onClick={() => toggleModalInsert()}>Cancelar</Button>
      </div>
    </div>
  );

  const modalBodyUpdate = (
    <div className={classes.modal}>
      <h3>Edit Movie</h3>
      <TextField
        name="title"
        className={classes.inputMaterial}
        label="Title"
        onChange={handleChange}
        value={selectedMovie && selectedMovie.title}
      />
      <br />
      <TextField
        name="original_title"
        className={classes.inputMaterial}
        label="Original title"
        onChange={handleChange}
        value={selectedMovie && selectedMovie.original_title}
      />
      <br />
      <TextField
        name="original_title_romanised"
        className={classes.inputMaterial}
        label="Romanised title"
        onChange={handleChange}
        value={selectedMovie && selectedMovie.original_title_romanised}
      />
      <br />
      <TextField
        name="description"
        className={classes.inputMaterial}
        label="Description"
        onChange={handleChange}
        multiline
        rows={6}
        value={selectedMovie && selectedMovie.description}
      />
      <br />
      <TextField
        name="director"
        className={classes.inputMaterial}
        label="Director"
        onChange={handleChange}
        value={selectedMovie && selectedMovie.director}
      />
      <br />
      <TextField
        name="release_date"
        className={classes.inputMaterial}
        label="Release date"
        onChange={handleChange}
        value={selectedMovie && selectedMovie.release_date}
      />
      <br />
      <br />
      <div align="right">
        <Button color="primary" onClick={() => petitionPut()}>
          Edit
        </Button>
        <Button onClick={() => toggleModalUpdate()}>Cancelar</Button>
      </div>
    </div>
  );

  const modalBodyDelete = (
    <div className={classes.modal}>
      <p>
        Are you sure to delete the movie{" "}
        <b>{selectedMovie && selectedMovie.title}</b> ?{" "}
      </p>
      <div align="right">
        <Button color="secondary" onClick={() => petitionDelete()}>
          Delete
        </Button>
        <Button onClick={() => toggleModalDelete()}>Cancel</Button>
      </div>
    </div>
  );

  return (
    <Box component="div" className={classes.box}>
      <Navbar />
      <br />
      <Button onClick={() => toggleModalInsert()}>Add movie</Button>
      <TableContainer component={Paper}>
        <Table className={classes.table}>
        {/* <div className={classes.root} align="center">
          <CircularProgress />
        </div> */}
          <TableHead>
            <TableRow>
              <StyledTableCell>Title</StyledTableCell>
              <StyledTableCell>Original title</StyledTableCell>
              <StyledTableCell>Description</StyledTableCell>
              <StyledTableCell>Director</StyledTableCell>
              <StyledTableCell>Release date</StyledTableCell>
              <StyledTableCell>Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((movie) => (
              <StyledTableRow key={movie.id}>
                <StyledTableCell style={{ width: "10%" }}>{movie.title}</StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  {movie.original_title_romanised} ({movie.original_title})
                </StyledTableCell>
                <StyledTableCell style={{ width: "45%" }}>{movie.description}</StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>{movie.director}</StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>{movie.release_date}</StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  <Edit
                    className={classes.icons}
                    onClick={() => selectMovie(movie, "Edit")}
                  />
                  &nbsp;&nbsp;&nbsp;
                  <Delete
                    className={classes.icons}
                    onClick={() => selectMovie(movie, "Delete")}
                  />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* ModalInsertar */}
      <Modal open={modalInsert} onClose={() => toggleModalInsert()}>
        {modalBodyInsert}
      </Modal>

      <Modal open={modalUpdate} onClose={() => toggleModalUpdate()}>
        {modalBodyUpdate}
      </Modal>

      <Modal open={modalDelete} onClose={() => toggleModalDelete()}>
        {modalBodyDelete}
      </Modal>
    </Box>
  );
}

export default CrudRestApi;
