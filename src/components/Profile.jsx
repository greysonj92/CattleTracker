import cow from '../images/cow.jpg';
import CowCRUD from './CowCRUD';
import Lineage from './Lineage';
import { List, ListItem, ListItemText } from '@mui/material';
import './Profile.css';
const Profile = (props) => {
  return (
    <div className='profile'>
        <h3>{props.name}</h3>
        <img src={cow} alt="A cow"></img>
        <CowCRUD />
        <List>
          <ListItem>
            <ListItemText primary={`Tag: ${props.tag}`}/>
          </ListItem>
          <ListItem>
            <ListItemText primary={`Age: ${props.age}`}/>
          </ListItem>
          <ListItem>
            <ListItemText primary={`Weight: ${props.weight} lbs`}/>
          </ListItem>
        </List>
            <Lineage></Lineage>
    </div>
  )
}
export default Profile