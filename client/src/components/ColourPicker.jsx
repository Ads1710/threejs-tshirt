import React from 'react'
import { SketchPicker } from 'react-color';
import { useSnapshot } from 'valtio';

import state from '../store';

const Colourpicker = () => {
  const snap = useSnapshot(state);

  return (
    <div
      className='absolute left-full ml-3'
    >
      <SketchPicker 
        color={snap.color}
        disableAlpha
        presetColors={[
          "#ccc",
          "#EFBD4E",
          "#80C670",
          "#726DE8",
          "#353934",
          "#2CCCe4",
          "#ff8a65",
          "#7098DA",
          "#FF96AD",
          "#512314",
          "#5F123D",
        ]}
        onChange={(color) => state.color = color.hex}
      />
    </div>
  )
}

export default Colourpicker