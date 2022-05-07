import { AppBar,  Button, Grid,    IconButton,    InputAdornment,    TextField,    Typography } from "@mui/material";
import React, { useState }  from "react";
import { makeStyles } from "@mui/styles";
import BlinkListLogo from "../../Atoms/Blinklistlogo/Blinklistlogo";
import MySearchIcon from "../../Atoms/Searchicon/MySearchicon";
import MyAvatar from "../../Atoms/Avatar/MyAvatar";
import {  StyledEngineProvider } from "@mui/system";

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {  Link } from "react-router-dom";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';






const useStyles=makeStyles({

   appbar:{

       backgroundColor:'#FFFFFF',
       height: '86px',
       width: '1440px',
       left: '0px',
       top: '0px',
       borderRadius: '0px',
       
       
       
   },

   blinklistlogo:{

    height: '26px',
    width: '124.09091186523438px',
    paddingLeft: '250px',
    paddingTop: '30px',
    borderRadius: '0px'
    
   },

   search:{

    height: '30.31399917602539px',
    width: '30.31399917602539px',
    borderRadius: '0px',
    marginLeft:'157px',
    paddingTop:'28px',
    
   },

   explore:{
       marginLeft:'58px',
       height: '20px',
       width: '57px',
       borderRadius: 'nullpx',
       fontFamily: 'Raleway',
       fontSize: '18px',
       fontStyle: 'normal',
       fontWeight: '500',
       lineHeight: '20px',
       letterSpacing: '0em',
       textAlign: 'left',
       color:'#03314B',
       paddingTop:'20px'
                  
       
   },
   expand:
   {
       
       paddingTop:'23.85px',
       height: '20.481667518615723px',
       width: '20.606668472290039px',
       left: '1.6966552734375px',
       borderRadius: '0px',
       color: '#042330'
       
       
   },
   library:
   {
    fontFamily: 'Raleway',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '18px',
    lineHeight: '20px',
    paddingTop:'36px',    
    color: '#03314B',
    paddingLeft:'40.7px'
   },

   account:
   {
    position: 'static',
    width: '63px',
    height: '20px',
    left: '0px',
    top: '0px',
    fontFamily: 'Raleway',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '20px',
    color: '#03314B',
    marginLeft:'433px',
    marginTop:'33px'
   },
   expand2:
   {
    height: '20.481667518615723px',
    width: '20.606668472290039px',
    borderRadius: '0px',
    color: '#042330',
    marginLeft:'448px',
    marginTop:'25.85px',
   },
   avatar:
   {
       marginLeft:'456px',
       marginTop:'23px',
       
   },
   searchField:
   {

    width:'308px',
    marginLeft:'58px',
    marginTop:'20px',
    fontFamily: 'Raleway',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '20px',
    letterSpacing: '0em',
    textAlign: 'left',
    color:'#03314B',
   

   }


});


interface Props{
    handleChange:any,
    handleSearchTerm?:any,
    closeSearch?:any
}


 const MyAppBar:React.FunctionComponent<Props>=(props)=>
{

    const classes=useStyles();
    const [search,setSearch]=useState(0);
    

    const handleSearch= ()=>
    {
       setSearch(1);   
    }

    const closeSearch:React.MouseEventHandler<HTMLButtonElement>= ()=>
    {
       setSearch(0);
       props.closeSearch();
    }

 


   

    return(

        <>
        <StyledEngineProvider injectFirst>
        
      
         <AppBar position="static" className={classes.appbar}  elevation={0}>
    
         

          <Grid container item >

           <Grid item  className={classes.blinklistlogo}>
           < BlinkListLogo />
           </Grid>

           <Grid item  className={classes.search}>
           <MySearchIcon handleSearch={handleSearch} />
           </Grid>
         
         {search===1 && <>

            <TextField id="search" label="Search by title" onChange={(event)=>props.handleSearchTerm(event,event.target.value) }
 className={classes.searchField} variant="standard" InputProps={{
  endAdornment: (
    <InputAdornment position="end">
      <Button startIcon={  <CloseOutlinedIcon  style={{color:'#3A4649'}}/>}
      onClick={closeSearch} />
    </InputAdornment> 
  ) }}
> </TextField>
            
         </>}

         { search===0 && 
           <><Grid item style={{ marginLeft: '30px' }}>
                            <Button variant="text" style={{ textTransform: 'initial' }}
                                endIcon={<IconButton>
                                    <KeyboardArrowDownIcon className={classes.expand}
                                    ></KeyboardArrowDownIcon>
                                </IconButton>}
                                onClick={(e) => props.handleChange(e, 1)}
                                sx={{ ':hover': { backgroundColor: '#FFFFFF' } }}
                            >

                                <Link to='' style={{ textDecoration: 'none' }}>
                                    <Typography variant="body1" sx={{ ':hover': { borderBottom: '2px solid #2CE080' } }}
                                        className={classes.explore}>
                                        Explore
                                    </Typography>
                                </Link>

                            </Button>

                        </Grid><Grid item>
                                <Link style={{ textDecoration: 'none' }} to='/'>
                                    <Typography variant="body1" className={classes.library}>
                                        My Library
                                    </Typography>
                                </Link>
                            </Grid></>
      }



           <Grid item >        
        <MyAvatar alphabet="A" />      
           </Grid>
           
             <Grid item >

             <Button startIcon= { <IconButton >
        <KeyboardArrowDownIcon className={classes.expand2}
         ></KeyboardArrowDownIcon>
        </IconButton>}
 variant='text'  >
      </Button>

          </Grid>

          </Grid>


       
      </AppBar>
  

      
        
     

        </StyledEngineProvider>
        </>

    );
}


export default MyAppBar;