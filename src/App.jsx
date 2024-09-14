import React from 'react';
import {useState} from 'react';
import './style/App.css';
import Popup from './components/popup_dialog/popup.jsx';
// import Delete from './components/delete.jsx';
import { IonIcon } from '@ionic/react';
import { addOutline, trashOutline , createOutline } from 'ionicons/icons';

const App = () => {
  const [openPopup, setOpenPopup] = useState(false);
  // const [openeDelete, setOpenDelete] = useState(false);

  return (
    <div>
      {openPopup && <Popup closePopup={setOpenPopup} />}
      {/* {openDelete && <Delete closeDelete={setOpenDelete} />} */}
      <h2>To-Do List</h2>

      <div>
      <div className="card">
        <button>
          <IonIcon icon={ createOutline } style={{  fontSize: '16px' }} />
        </button>
        <button onClick={() => {setOpenPopup(true);}}>
          <IonIcon icon={ trashOutline } style={{  fontSize: '16px' }} />
          </button>
        <h4>Title</h4>
        <p>Description</p>
      </div>

      <div className="card">
      <button>
          <IonIcon icon={ createOutline } style={{  fontSize: '16px' }} />
        </button>
        <button>
          <IonIcon icon={ trashOutline } style={{ fontSize: '16px' }} />
          </button>
        <h4>Title</h4>
        <p>Description</p>
      </div>

      <div className="card">
      <button>
          <IonIcon icon={ createOutline } style={{  fontSize: '16px' }} />
        </button>
        <button>
          <IonIcon icon={ trashOutline } style={{  fontSize: '16px' }} />
          </button>
        <h4>Title</h4>
        <p>Description</p>
      </div>

      <button onClick={() => {setOpenPopup(true);}}
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '8px 12px',
          border: 'none',
          backgroundColor: '#007bff',
          color: 'white',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        <IonIcon icon={addOutline} style={{ fontSize: '20px' }} />

      </button>
      </div>
      
    </div>
  );
};

export default App;