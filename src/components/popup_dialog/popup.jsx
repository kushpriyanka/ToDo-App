import React from 'react'
import { IonIcon } from '@ionic/react';
import { closeOutline } from 'ionicons/icons';
import './popup.css';


function popup({closePopup}) {
  
  return (
    <div className='popupbg'>
        <div className='popupcontents'>
                <div className='header'>
                <div className='title'>
                    <span>New Task</span>
                  </div>
                  <div className='close'>
                    <button onClick={()=>closePopup(false)}><IonIcon icon={ closeOutline } /></button>
                </div>
                </div>

                <div className='body'>
                    <input type='text' placeholder='Enter task'></input>
                    <textarea placeholder='Enter description'></textarea>
                </div>
                <div className='save'>
                    <button className='save'>Save</button>
                </div>
        </div>
    </div>
  )
}

export default popup