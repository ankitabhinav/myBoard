import React, { useState } from 'react';
import Draggable from 'react-draggable';
import Resizable from './index'
import ControlCameraIcon from '@material-ui/icons/ControlCamera';
import CancelIcon from '@material-ui/icons/Cancel';
import { TextField, Tooltip } from '@material-ui/core';

const Drag = (props) => {

    const [width, setWidth] = useState(350);
    const [height, setHeight] = useState(350);
    const [display, setDisplay] =useState('unset')
    const [title, setTitle] = useState('Add Title...')
    let InitialState = {
        activeDrags: 0,
        deltaPosition: {
          x: 0, y: 0
        },
        controlledPosition: {
          x: -400, y: 200
        }
      };
    
      const [state, setState] = useState(InitialState);



    const onStart = () => {
        setState({ activeDrags: ++state.activeDrags });
      };
    
      const onStop = () => {
        setState({ activeDrags: --state.activeDrags });
      };

    const handleStart = () => {

    }

    const handleDrag = () => {

    }
    const dragHandlers = { onStart: onStart, onStop: onStop };

    const handleStop = () => {

    }

    const handleChange = (data) => {
        setWidth(data.width);
        setHeight(data.height);
        console.log(data)
      }

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleClose = () => {
       // setDisplay('hidden')
        props.onClose(props.serial)
    }


    return (

        <Draggable bounds="parent" handle=".handle" {...dragHandlers}>
        <div className="box" style={{width:width, height:height}}>
          <div className="handle" style={{
            width:width+'px',
            backgroundColor: '#546e7a',
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px',   
            height: '40px',
            display: 'flex',
          }}>

            <div className="flexRow">
              <Tooltip title="Drag">
                <ControlCameraIcon style={{ cursor: 'all-scroll' }} />
              </Tooltip>
              <input type="text" name="title" value={props.serial} /* onChange={handleTitleChange} */ style={{ backgroundColor: 'transparent', borderStyle: 'none' }} />
            </div>

            {/*  <span style={{ cursor: 'all-scroll', flex: 1 }}>Drag from here</span> */}
            <Tooltip title="Delete">
              <CancelIcon style={{ cursor: 'pointer' }} onClick={handleClose} />
            </Tooltip>

          </div>
          <Resizable onChange={handleChange} />
        </div>
      </Draggable>

    );

}
export default Drag;