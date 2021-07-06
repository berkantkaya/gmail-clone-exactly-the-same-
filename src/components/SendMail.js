import React from 'react'
import './SendMail.css'
import CloseIcon from '@material-ui/icons/Close'
import { Button } from '@material-ui/core'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {TYPES} from '../redux/constants/types'
import { db } from '../firebase'
import firebase from 'firebase'

const SendMail = () => {
    const {register,handleSubmit,watch,errors}=useForm()
    const modal=useSelector(state=>state.modal)
    console.log(modal.modal)
    const dispatch=useDispatch()
    const onSubmit=(formData)=>{
       console.log(formData)
       db.collection('emails').add({
           to:formData.to,
           subject:formData.subject,
           message:formData.message,
           timestamp:firebase.firestore.FieldValue.serverTimestamp()
       })
       dispatch({type:TYPES.MODAL,payload:false})
    }
 
    return (
        <>
        {
            modal.modal &&  <div className="sendMail">
            <div className="sendMail-header">
            <h3>New Message</h3>
            <CloseIcon onClick={()=>dispatch({type:TYPES.MODAL,payload:false})} className="sendMail-close"/>
           </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                  <input name="to" placeholder="To" type="email" {...register('to', { required: true })}/>

             

                  <input name="subject" placeholder="Subject" type="text" {...register('subject', { required: true })}/>
                  <input name="message" placeholder="Message..." type="text" className="sendMail-message" {...register('message', { required: true })}/>
                  

                  <div className="sendMail-options">
                      <Button className="sendMail-button"
                      variant="contained"
                      color="primary"
                      type="submit">Send</Button>
                  </div>
              </form>

       </div>
        }
        </>
       
    )
}

export default SendMail
