import React, { useState, useEffect } from "react";
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
  Typography,
} from "@material-ui/core";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel'; 
import FormControl from '@material-ui/core/FormControl';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Edit, Delete } from "@material-ui/icons";
import { createStyles, withStyles, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import DehazeIcon from "@material-ui/icons/Dehaze";
import Navbar from "../Navbar";
import Skeleton from "react-loading-skeleton";

//CSS styles
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    table: {
      // minWidth: 700,
      margin: "auto auto",
    },
    navbar: {
      marginTop: "64px",
    },
    box: {
      margin: "auto auto",
      backgroundColor: "#ccc",
      paddingTop: "64px",
      maxWidth: "1000px",
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
    formControl: {
      //margin: theme.spacing(1),
      width: "100%"
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    }
  })
);

const baseUrl = "https://node-ex-mysql.herokuapp.com/posts";
//const baseUrl = "http://localhost:3060/posts";

const Nodeexmysqlapi = () => {
  const classes = useStyles();
  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 12,
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

  //Feeds with useEffect and is used by map
  const [data, setData] = useState([]);

  //Holds data for new post and for post to edit
  const [selectedPost, setSelectedPost] = useState({
    category_id: "",
    title: "",
    body: "",
    author: "",
    created_at: "",
  });

  const [modalInsert, setModalInsert] = useState(false);
  const [modalUpdate, setModalUpdate] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [loading, setLoading] = useState(true);

  const toggleModalInsert = () => {
    setModalInsert(!modalInsert);
  };

  const toggleModalUpdate = () => {
    setModalUpdate(!modalUpdate);
  };

  const toggleModalDelete = () => {
    setModalDelete(!modalDelete);
  };

  const selectPost = (post, caseof) => {
    setSelectedPost(post);
    caseof === "Edit" ? toggleModalUpdate() : toggleModalDelete();
  };

  //skeleton loader

  const loader = () => {
    const dataload = [1, 2, 3, 4, 5];
    return (
      <div>
        <Navbar />
        <AppBar position="fixed" className={classes.navbar}>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <DehazeIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Posts
            </Typography>
            <Button onClick={() => toggleModalInsert()} color="inherit">
              Add post
            </Button>
          </Toolbar>
        </AppBar>
        <Box component="div" className={classes.box}>
          <TableContainer component={Paper}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <StyledTableCell>
                    <Skeleton />
                  </StyledTableCell>
                  <StyledTableCell>
                    <Skeleton />
                  </StyledTableCell>
                  <StyledTableCell>
                    <Skeleton />
                  </StyledTableCell>
                  <StyledTableCell>
                    <Skeleton />
                  </StyledTableCell>
                  <StyledTableCell>
                    <Skeleton />
                  </StyledTableCell>
                  <StyledTableCell>
                    <Skeleton />
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {dataload.map((datal) => (
                  <StyledTableRow key={datal.index}>
                    <StyledTableCell style={{ width: "2%" }}>
                      <Skeleton />
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      <Skeleton />
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "55%" }}>
                      <Skeleton />
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "13%" }}>
                      <Skeleton />
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      <Skeleton />
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      <Skeleton />
                      &nbsp;&nbsp;&nbsp;
                      <Skeleton />
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </div>
    );
  };

  useEffect(() => {
    const getPosts = () => {
      fetch(baseUrl)
        .then((res) => res.json())
        .then((res) => {
          setData(res);
          setLoading(false);
        });

      setLoading(false);
    };
    // setTimeout(() => {
      getPosts();
    // }, 8000);
  }, []);

  //! - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  const petitionPost = () => {
    const requestInit = {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(selectedPost),
    };

    fetch(baseUrl, requestInit)
      .then((res) => res.text())
      .then((res) => {
        setData(data.concat(selectedPost));
        //console.log(data);
      });

    toggleModalInsert();
  };

  //Feeds the body for the post request
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedPost((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  //! - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  const petitionDelete = (id) => {
    const requestInit = {
      method: "DELETE",
    };

    fetch(baseUrl + "/" + selectedPost.id, requestInit)
      .then((res) => res.text())
      .then((res) => {
        setData(data.filter((post) => post.id !== selectedPost.id));
        toggleModalDelete();
        //console.log(res);
      });
  };

  //! - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  const petitionPut = () => {
    const requestInit = {
      method: "PUT",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(selectedPost),
    };

    fetch(baseUrl + "/" + selectedPost.id, requestInit)
      .then((res) => res.text())
      .then((res) => {
        let newData = data;
        newData.forEach(postUpdate=>{
          if(selectedPost.id === postUpdate.id){
            postUpdate.category_id = selectedPost.category_id;
            postUpdate.title = selectedPost.title;
            postUpdate.body = selectedPost.body;
            postUpdate.author = selectedPost.author;
            postUpdate.created_at = selectedPost.created_at;
          }
        })
        //setData(newData);
        setData(newData.concat(res));
        toggleModalUpdate();
      });

    toggleModalUpdate();  
  };

  //ModalInsert ------------------------------------
  const modalBodyInsert = (
    <div className={classes.modal}>
      <h3>Add post</h3>
      <FormControl className={classes.formControl}>
      <InputLabel>Category</InputLabel>
        <Select
          name="category_id"
          className={classes.inputMaterial}
          label="Category"
          onChange={handleChange}
        >
          <MenuItem value={1}>Technical</MenuItem>
          <MenuItem value={2}>News</MenuItem>
          <MenuItem value={3}>Movie</MenuItem>
          <MenuItem value={4}>Book</MenuItem>
          <MenuItem value={5}>Todo</MenuItem>
        </Select>
        </FormControl>
      <br />
      <TextField
        name="title"
        className={classes.inputMaterial}
        label="Title"
        onChange={handleChange}
      />
      <br />
      <TextField
        name="body"
        className={classes.inputMaterial}
        label="Description"
        multiline
        rows={6}
        onChange={handleChange}
      />
      <br />
      <TextField
        name="author"
        className={classes.inputMaterial}
        label="Author"
        onChange={handleChange}
      />
      <br />
      <TextField
        name="created_at"
        className={classes.inputMaterial}
        label="Release date"
        onChange={handleChange}
      />
      <br />
      <br />
      <div align="right">
        <Button color="primary" onClick={() => petitionPost()}>
          Insert
        </Button>
        <Button onClick={() => toggleModalInsert()}>Cancel</Button>
      </div>
    </div>
  );

  //ModalUpdate ------------------------------------
  const modalBodyUpdate = (
    <div className={classes.modal}>
      <h3>Update post</h3>
      <FormControl className={classes.formControl}>
      <InputLabel>Category</InputLabel>
        <Select
          name="category_id"
          className={classes.inputMaterial}
          label="Category"
          onChange={handleChange}
          value={selectedPost && selectedPost.category_id}
        >
          <MenuItem value={1}>Technical</MenuItem>
          <MenuItem value={2}>News</MenuItem>
          <MenuItem value={3}>Movie</MenuItem>
          <MenuItem value={4}>Book</MenuItem>
          <MenuItem value={5}>Todo</MenuItem>
        </Select>
        </FormControl>
      <br />
      <TextField
        name="title"
        value={selectedPost && selectedPost.title}
        className={classes.inputMaterial}
        label="Title"
        onChange={handleChange}
      />
      <br />
      <TextField
        name="body"
        value={selectedPost && selectedPost.body}
        className={classes.inputMaterial}
        label="Description"
        multiline
        rows={6}
        onChange={handleChange}
      />
      <br />
      <TextField
        name="author"
        value={selectedPost && selectedPost.author}
        className={classes.inputMaterial}
        label="Author"
        onChange={handleChange}
      />
      <br />
      <TextField
        name="created_at"
        value={selectedPost && selectedPost.created_at}
        className={classes.inputMaterial}
        label="Release date"
        onChange={handleChange}
      />
      <br />
      <br />
      <div align="right">
        <Button color="primary" onClick={() => petitionPut()}>
          Update
        </Button>
        <Button onClick={() => toggleModalUpdate()}>Cancel</Button>
      </div>
    </div>
  );

  //ModalDelete ------------------------------------
  const bodyDelete = (
    <div className={classes.modal}>
      <p>
        Delete post <b>{selectedPost && selectedPost.title}</b> ?
      </p>
      <div align="right">
        <Button color="secondary" onClick={() => petitionDelete()}>
          Yes
        </Button>
        <Button onClick={() => toggleModalDelete()}>Cancel</Button>
      </div>
    </div>
  );

  if (loading) {
    return loader();
  } else {
    return (
      <div>
        <Navbar />
        <AppBar position="fixed" className={classes.navbar}>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <DehazeIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Posts
            </Typography>
            <Button onClick={() => toggleModalInsert()} color="inherit">
              Add post
            </Button>
          </Toolbar>
        </AppBar>
        <Box component="div" className={classes.box}>
          {/* <br />
        <Button>Add post</Button> */}
          <TableContainer component={Paper}>
            <Table className={classes.table}>
              {/* <div className={classes.root} align="center">
          <CircularProgress />
        </div> */}
              <TableHead>
                <TableRow>
                  <StyledTableCell>Category</StyledTableCell>
                  <StyledTableCell>Title</StyledTableCell>
                  <StyledTableCell>Description</StyledTableCell>
                  <StyledTableCell>Author</StyledTableCell>
                  <StyledTableCell>Release date</StyledTableCell>
                  <StyledTableCell>Actions</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((post) => (
                  <StyledTableRow key={post.id}>
                    <StyledTableCell style={{ width: "2%" }}>
                      {post.category_id}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      {post.title}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "55%" }}>
                      {post.body}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "13%" }}>
                      {post.author}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      {post.created_at}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      <Edit
                        className={classes.icons}
                        onClick={() => selectPost(post, "Edit")}
                      />
                      &nbsp;&nbsp;&nbsp;
                      <Delete
                        className={classes.icons}
                        onClick={() => selectPost(post, "Delete")}
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

          {/* ModalUpdate */}
          <Modal open={modalUpdate} onClose={() => toggleModalUpdate()}>
            {modalBodyUpdate}
          </Modal>

          <Modal open={modalDelete} onClose={toggleModalDelete}>
            {bodyDelete}
          </Modal>
        </Box>
      </div>
    );
  }
};

export default Nodeexmysqlapi;
