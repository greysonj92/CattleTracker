import cow from '../images/cow.jpg';
import axios from 'axios';
import CowCRUD from './CowCRUD';
import Lineage from './Lineage';
import { List, ListItem, ListItemText, Box, Container } from '@mui/material';
import './Profile.css';
const Profile = (props) => {
  return (
    <Container>
      {console.log("Props: ",props)}
        <h3>{props.tag_number}</h3>
        <img src={cow} alt="A cow"></img>
        <CowCRUD />
        <List>
          <ListItem>
            <ListItemText primary={`Type: ${props.sheep_type}`}/>
          </ListItem>
          <ListItem>
            <ListItemText primary={`Status: ${props.active_status}`}/>
          </ListItem>
          {/*Only render pregnant status if sheep_type is Ewe*/}
          {props.sheep_type  === 'Ewe'?
          <ListItem>
            <ListItemText primary={`Pregnant: ${props.pregnant}`}/>
          </ListItem>
          : null}
          {/*Only render due date if sheep is pregnant */}
          {props.sheep_type === 'Ewe' && props.pregnant === 'Yes' && props.due_date != null ?
          <ListItem>
            <ListItemText primary={`Due Date: ${props.due_date}`}/>
          </ListItem>
          : null}
          {/*Only render lactating status if sheep_type is Ewe */}
          {props.sheep_type === 'Ewe' ?
          <ListItem>
            <ListItemText primary={`Lactating: ${props.lactating}`} />
          </ListItem>
          : null}
        </List>
            <Lineage></Lineage>
    </Container>
  )
}
export default Profile