import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import './CowCRUD.css'

const CowCRUD = () => {
  return (
    <div className='CowCRUD'>
        <Button variant="contained" size="small" startIcon={<EditIcon />}>Edit</Button>
        <Button variant="contained" size="small" startIcon={<DeleteIcon />}>Delete</Button>
    </div>
  )
}
export default CowCRUD