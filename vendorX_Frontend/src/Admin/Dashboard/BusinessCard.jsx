import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToFavorites, deleteBusiness, updateBusiness, updateBusinessStatus } from "../../State/Customers/Business/business.action";

export default function BusinessCard({ item }) {
  const navigate = useNavigate();
  const dispatch=useDispatch()
const handleDeleteBusiness=()=>{
  dispatch(deleteBusiness(item.id))
}

const handleUpdateBusinessStatus=()=>{
  dispatch(updateBusinessStatus(item.id))
}

  return (
    <Card sx={{ maxWidth: 345, m: "1rem" }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: "#7700ff", color: "white" }}
            aria-label="recipe"
          >
            Z
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={item.name}
        subheader="September 14, 2016"
      />
      {/* <CardMedia
        component="img"
        height="194"
        image={item.imageUrl}
        alt="Paella dish"
      /> */}
      <img className="h-[17rem] w-full object-cover" src={item.imageUrl} alt="" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <div className="flex w-full items-center justify-between">
          <div>
            <IconButton onClick={handleDeleteBusiness}  aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </div>
          <div>
            <Button color={item.open?"warning":"success"} onClick={handleUpdateBusinessStatus}>
              {item.open?"Close":"Open"}
            </Button>
          </div>
          <div>
            <Button size="small" onClick={() => navigate(`/admin/businesses/${item.id}`)}>
              Dashboard
            </Button>
          </div>
        </div>
      </CardActions>
    </Card>
  );
}
