import React from 'react';
import { Unity, useUnityContext } from 'react-unity-webgl';

const UnityComponent = () => {
  const { unityProvider, sendMessage, isLoaded, loadingProgression } = useUnityContext({
    loaderUrl: "/UnityBuild/build2.loader.js",
    dataUrl: "/UnityBuild/build2.data",
    frameworkUrl: "/UnityBuild/build2.framework.js",
    codeUrl: "/UnityBuild/build2.wasm",
  });

  const goLeft = () => sendMessage("Box", "GoLeft");
  const goRight = () => sendMessage("Box", "GoRight");

  return (
    <div style={{ textAlign: 'center' }}>
      {!isLoaded && (
        <p>Loading 3D scene... {Math.round(loadingProgression * 100)}%</p>
      )}
      <Unity unityProvider={unityProvider} style={{ width: '100vw', height: 500 }} />
      <br />
      <button onClick={goLeft}>Go Left</button>
      <button onClick={goRight}>Go Right</button>
    </div>
  );
};

export default UnityComponent;
