import React, { useState } from 'react';
import Draggable from 'react-draggable';

const Text = () => {
    const [editMode, setEditMode] = useState(false);
    const [val, setVal] = useState("Double Click to Edit");

    return (
        <Draggable>
            <div>
                {editMode ? (
                    <input 
                        onDoubleClick={() => setEditMode(false)} 
                        value={val} 
                        onChange={(e) => setVal(e.target.value)} 
                    />
                ) : (
                    <h2 onDoubleClick={() => setEditMode(true)}>{val}</h2>
                )}
            </div>
        </Draggable>
    );
};

export default Text;
