import { TextField } from "@material-ui/core";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ResizeProvider, ResizeConsumer } from "react-resize-context";

import "./styles.css";

const Resizable = (props) => {

    const [size, setSize] = useState({})

    const getDatasetBySize = size => ({
        widthRange: size.width > 200 ? "large" : "small",
        heightRange: size.height > 200 ? "large" : "small"
    });

    const handleSizeChanged = size => {
        setSize(size);
        props.onChange(size);
    };


    return (
        <ResizeProvider>
            <ResizeConsumer
                className="container"
                onSizeChanged={handleSizeChanged}
                updateDatasetBySize={getDatasetBySize}
            >
                {/* <span>width: {size.width}</span> */}
                {/* <span>height: {size.height}</span> */}
                <textarea id="w3review" name="w3review" rows="10" placeholder="start typing here"
                    style={{
                        width: '95%',
                        height: '95%',
                        resize: 'none',
                        borderRadius: '5px',
                        borderBottomLeftRadius: '20px',
                        borderBottomRightRadius: '20px', fontSize:'15px'
                    }}>
                </textarea>
            </ResizeConsumer>
        </ResizeProvider>
    );

}

export default Resizable;