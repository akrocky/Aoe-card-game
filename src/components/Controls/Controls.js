import React from 'react';
import { useAllInfo } from '../../context/Context';
import classes from './Controls.module.css';

const Controls = () => {
    const {state,dispatch}=useAllInfo()

    const handleSubmit =()=>{
        state.cardDeatails?.realName ? alert(`${state.cardDeatails?.realName} card is sucessfully submited`): alert('Select a card then click submit')
     }
    return (
       
        <div className='p-3 ps-5'>
            <h5 className={classes.searchTitle}>Advance Search</h5> 
            
            <div className={classes.controlsContent}>
            <div  className='my-3 d-flex justify-content-between'>
           
                <button className={classes.btn}  onClick={e=>dispatch({ type: "ASC"})} >ASC</button>
               
                
                <button className={classes.btn} onClick={e=>dispatch({ type: "DSC", })} >DESC</button>
                
             
                

            </div>
          
          <button onClick={handleSubmit}>Submit</button>
          
               
            </div>
        </div>
    );
};

export default Controls;