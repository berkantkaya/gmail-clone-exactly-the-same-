import { Checkbox, IconButton } from '@material-ui/core'
import React from 'react'
import './EmailRow.css'
import StarBorderOutlinedIcons from '@material-ui/icons/StarBorderOutlined'
import LabelImportantOutlinedIcons from '@material-ui/icons/LabelImportantOutlined'
import { useHistory } from 'react-router-dom'

const EmailRow = ({id,title,subject,description,time}) => {
    const history=useHistory()

    return (
        <div onClick={()=>history.push("/mail")} className="emailRow">
            <div className="emailRow-options">
              <Checkbox/>
              <IconButton>
                  <StarBorderOutlinedIcons/>
              </IconButton>
              <IconButton>
                  <LabelImportantOutlinedIcons/>
              </IconButton>
            </div>
            <h3 className="emailRow-title">
               {title}
            </h3>
            <div className="emailRow-message">
            <h4>{subject} {" "}
                 <span className="emailRow-description">
                   - {description}
                </span>
            </h4>
            </div>
            <div className="emailRow-time">
            {time}
             </div>
        </div>
    )
}

export default EmailRow
