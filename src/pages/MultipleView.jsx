import { Grid } from "@mui/material";
import Profile from "../components/Profile"
import './MultipleView.css';
const MultipleView = () => {
  return (
    <Grid container spacing={2}>
        <Profile name="Bessie" age="4" weight="1000" tag="1234"/>
        <Profile name="Sarah" age="3" weight="1234" tag="1235"/>
        <Profile name="Cow" age="5" weight="1100" tag="1236"/>
        <Profile name="More Cow" age="6" weight="1150" tag="1237"/>
        <Profile name="Yet Another Cow" age="3" weight="975" tag="1238"/>
        <Profile name="One Final Cow" age="4" weight="5000" tag="1239"/>
    </Grid>
  )
}
export default MultipleView