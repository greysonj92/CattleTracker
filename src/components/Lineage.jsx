import { useState } from 'react';
import Button from '@mui/material/Button'
import ExpandMore from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ListItem from '@mui/material/ListItem'
import { ListItemText } from '@mui/material';

const Lineage = (props) => {
    const [expanded, setExpanded] = useState(false);
    return (
        <div className='lineage'>
            <h4>Lineage:</h4>
            <Button className='Expand' variant='contained' 
                startIcon={expanded ? <ExpandLessIcon/> : <ExpandMore/>}
                onClick={() => setExpanded(!expanded)}>{expanded ? "Collapse" : "Expand"}</Button>
            {expanded ? (
                <div className='expandable'>
                    <ListItem>
                        <ListItemText primary="Mom: Kelsey"/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Dad: Gregory"/>
                    </ListItem>
                </div>
            ) : null}
        </div>
    )
}
export default Lineage