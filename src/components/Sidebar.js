import { Button, IconButton } from '@material-ui/core'
import React from 'react'
import './Sidebar.css'
import AddIcon from '@material-ui/icons/Add';
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import NearMeIcon from '@material-ui/icons/NearMe';
import NoteIcon from '@material-ui/icons/Note';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SidebarOption from './SidebarOption';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import PhoneIcon from '@material-ui/icons/Phone';
import { useDispatch } from 'react-redux';
import {TYPES} from '../redux/constants/types'
import { useSelector } from 'react-redux';

const Sidebar = () => {
   const dispatch=useDispatch()
   const modal=useSelector(state=>state.modal)

    
    return (
        <div className="sidebar">
           <Button onClick={()=>dispatch({type:TYPES.MODAL,payload:!modal.modal})} className="sidebar-compose" startIcon={<AddIcon fontSize="large"/>}>Compose</Button>

           <SidebarOption Icon={InboxIcon} title="Inbox" number={54} selected={true}/>
           <SidebarOption Icon={StarIcon} title="Starred" number={54} />
           <SidebarOption Icon={LabelImportantIcon} title="Snoozed" number={54} />


           <SidebarOption Icon={LabelImportantIcon} title="Important" number={54} />
           <SidebarOption Icon={NearMeIcon} title="Sent" number={54} />
           <SidebarOption Icon={NoteIcon} title="Drafts" number={54} />
           <SidebarOption Icon={ExpandMoreIcon} title="More" number={54} />
         
         <div className="sidebar-footer">
         <div className="sidebar-footerIcons">
              <IconButton>
                  <PersonIcon/>
              </IconButton>
              <IconButton>
                  <DuoIcon/>
              </IconButton>
              <IconButton>
                  <PhoneIcon/>
              </IconButton>
         </div>
         </div>
           
        </div>
    )
}

export default Sidebar
