import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { IconButton, Typography } from "@material-ui/core";
import { DeleteOutline } from "@material-ui/icons";

const Mui_NoteCard = ({ movie, handleDelete }) => {
  return (
    <div>
      <Card elevation={6}>
        <CardHeader
          action={
            <IconButton onClick={() => handleDelete(movie.id)}>
              <DeleteOutline />
            </IconButton>
          }
          title={movie.title}
          subheader={movie.original_title}
        />
        <CardContent>
            <Typography variant="body2" color="textSecondary">
                {movie.description}
            </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Mui_NoteCard;
