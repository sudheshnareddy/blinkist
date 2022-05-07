import AddIcon from '@mui/icons-material/Add';
import { makeStyles } from '@mui/styles';
import classNames from 'classnames';
import React from 'react';

const useStyles = makeStyles({

    addicon:{
        height: '14px',
        width: '14px',
        left: '5px',
        top: '5px',
        borderRadius: '0px',
     
        
    }

});

interface Props{
    color?:string,
    className?:string
}

const PlusIcon:React.FunctionComponent<Props>=(props)=>
{

    const classes=useStyles();
    return(


         <>
         <AddIcon className={classNames(classes.addicon,props.className?props.className:'')} sx={{color:props.color}}/>
         </>
    );
}

export default PlusIcon;