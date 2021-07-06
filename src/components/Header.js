import React from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications'
import { IconButton,Avatar } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { useSelector } from 'react-redux';
import { auth } from '../firebase';
import { useDispatch } from 'react-redux';
import { TYPES } from '../redux/constants/types';

const Header = () => {
    const user=useSelector(state=>state.user)
    const dispatch=useDispatch()

    const signOut=()=>{
       auth.signOut().then(()=>{
         dispatch({type:TYPES.LOGOUT,payload:null})
       })
    }
    return (
        <div className="header">
            <div className="header-left">
                <IconButton>
                <MenuIcon/>
                </IconButton>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSiapbiaccKoAK9s-h8hlms2Jy6MJOz54UFs4WhmrhxpCeSktbHhWUNDlZCRQqDgAPSF8&usqp=CAU" alt=""/>
            </div>
            <div className="header-middle">
                 <SearchIcon/>
                 <input type="text" placeholder="Search mail"/>
                 <ArrowDropDownIcon className="header__inputCaret"/>
            </div>
            <div className="header-right">
               <IconButton>
                 <AppsIcon/>
                </IconButton>
                <IconButton>
                 <NotificationsIcon/>
                </IconButton>
                <IconButton>
                 <Avatar onClick={signOut} src={user?.photoURL}/>
                 </IconButton>
            </div>
        </div>
    )
}

export default Header
