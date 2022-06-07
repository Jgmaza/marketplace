import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import StarIcon from '@mui/icons-material/Star';
import {Add} from "@mui/icons-material";
import { addProductToCart } from '../../utils/userService';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const CardProduct = (props) => {
  const [expanded, setExpanded] = React.useState(false);
  const image = props.image;
  const title = props.title;
  const rating = props.rating

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ margin: '4px', padding: '15px', margin: '10px' }}>

      
      <CardMedia 
        component="img"
        max-width="100%"
        height="200"
        object-fit="contain"
        image={image}
        alt="product item"
      />

      

      <CardContent style={{margin:'20px -5px -5px'}}>
        <Typography fontSize={14} sx={{fontWeight:'medium'}}>{title}</Typography>

        <Typography fontSize={14} sx={{fontWeight:'medium'}} color="text.secondary">
          <StarIcon style={{margin: '10px 0px -5px -5px', color:'Gold'}} fontSize='small' color='text.secondary' /> {rating}
        </Typography>

        <Typography sx={{color:'#e94560', fontWeight:'bold', margin:'5px auto'}} fontSize={14} variant="subtitle1" color="text.secondary">
          $ {props.price}
        </Typography>

      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Add onClick={()=>addProductToCart(props)} />
        </IconButton>

        <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography fontSize={12} variant="body2" color="text.secondary" paragraph>
            {props.description}
          </Typography>
        </CardContent>
      </Collapse>

    </Card>
  );
}
export default CardProduct