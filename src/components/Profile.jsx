import cow from '../images/cow.jpg';
import Lineage from './Lineage';
import './Profile.css';
const Profile = (props) => {
  return (
    <div className='profile'>
        <h3>{props.name}</h3>
        <img src={cow} alt="A cow"></img>
        <li>Tag: {props.tag}</li>
        <li>Age: {props.age}</li>
        <li>Weight: {props.weight}lbs</li>
            <Lineage></Lineage>
    </div>
  )
}
export default Profile