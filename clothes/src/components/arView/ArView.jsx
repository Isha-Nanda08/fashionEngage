// import Model from "./Model";
import React, { useState } from 'react';
// import {
//  ZapparCamera, InstantTracker, ZapparCanvas, BrowserCompatibility,
// } from '@zappar/zappar-react-three-fiber';
import './ar.css'

export default function ArView({ clothImg, stageColor = 'red', bgColor = 'transparent', walk}) {
    const [placementMode, setPlacementMode] = useState(true);
    return <div id="Ar-Container">
        {/* <BrowserCompatibility />
        <ZapparCanvas>
          <ZapparCamera />
          <InstantTracker placementMode={placementMode} placementCameraOffset={[0, 0, -5]}>
            <mesh>
              <boxGeometry />
              <meshStandardMaterial color="hotpink" />
            </mesh>
          </InstantTracker>
          <directionalLight position={[2.5, 8, 5]} intensity={1.5} />
  
        </ZapparCanvas>
        <div
          id="zappar-button"
          role="button"
        //   onKeyPress={() => { setPlacementMode(((currentPlacementMode) => !currentPlacementMode)); }}
          tabIndex={0}
          onClick={() => { setPlacementMode(((currentPlacementMode) => !currentPlacementMode)); }}
        >
          Tap here to
          {placementMode ? ' place ' : ' pick up '}
          the object
        </div> */}
      </div>
}