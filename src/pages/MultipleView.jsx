import { Grid, Stack } from "@mui/material";
import Profile from "../components/Profile"
import TopBar from "../components/TopBar"
import axios from 'axios'
import './MultipleView.css';
import { useEffect, useState } from "react";

const MultipleView = () => {
  const [animals, setAnimals] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8000/cattle/')
    .then(
      response => {
        setAnimals(response.data.data[0]);
      })
    .catch(error => setError(error))

  }, []);

  useEffect(() => {
    console.log(animals);
  }, [animals]);

  return (
    <div>
      <TopBar></TopBar>
      <Stack>
        {animals && animals.map((animal) => (
          <Profile {...animal} />
        ))}
      </Stack>
    </div>
  )
}
export default MultipleView