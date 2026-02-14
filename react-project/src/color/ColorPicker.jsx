import React, {useState} from 'react';


function ColorPicker() {


    const [color, setColor] = useState("#ffffff");
    return (
        <div>
            <h2>Color Picker Component</h2>
            <div className='color-display' style={{backgroundColor: color, width: '100px', height: '100px', border: '1px solid #000'}}></div>
            GAME<input 
                type="color" 
                value={color} 
                onChange={(e) => setColor(e.target.value)} 
            />
            <div>
                <p style={{color: color}}>Selected Color: {color}</p>
            </div>
        </div>
    );
}

export default ColorPicker;