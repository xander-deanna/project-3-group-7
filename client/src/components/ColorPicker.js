import React, {useState} from "react";
import { SketchPicker } from "react-color"
import Draggable from "react-draggable";

export default () => {
    const [color, setColor] = useState('#ffffff')
    return (
        <Draggable>
            <div>
            <SketchPicker
                color={ color }
                onChangeComplete={ (color) => {setColor(color.hex)}}
            />
            <br/>
            <div style ={{
                backgroundColor: color,
                height: '300px',
                transition: 'ease all 500ms'
            }}>
            </div>
            </div>
        </Draggable>
    );
}

