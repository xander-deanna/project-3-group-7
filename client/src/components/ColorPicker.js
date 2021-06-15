import React, {useState} from "react";
import { SketchPicker } from "react-color"
import Draggable from "react-draggable";

export default (props) => {
    const [color, setColor] = useState('#ffffff')
    return (
        <Draggable>
            <div>
            <SketchPicker
                color={ color }
                onChangeComplete={ (color) => {
                    setColor(color.hex)
                    props.setBackground(color.hex)
                }}
            />
            <br/>
            </div>
        </Draggable>
    );
}

