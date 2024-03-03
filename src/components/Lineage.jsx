import { useState } from 'react';
const Lineage = (props) => {
    const [expanded, setExpanded] = useState(false);
    return (
        <div className='lineage'>
            <h4>Lineage:</h4>
            <button className='Expand' onClick={() => setExpanded(!expanded)}>{expanded ? "Collapse" : "Expand"}</button>
            {expanded ? (
                <div className='expandable'>
                    <li>Mom: Kelsey</li>
                    <li>Dad: Gregory</li>
                </div>
            ) : null}
        </div>
    )
}
export default Lineage