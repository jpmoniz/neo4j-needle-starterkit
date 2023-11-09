import React, { useState, useEffect } from 'react';
import "./App.css";
import "@neo4j-ndl/base/lib/neo4j-ds-styles.css";
import ThemeWrapper from "./context/ThemeWrapper";
import QuickStarter from "./components/QuickStarter";
import NeoVisGraph from './components/NeoVisComp'; // Make sure the path is correct

function App() {
  return (
    <ThemeWrapper>
      <QuickStarter />
{/*       <NeoVisGraph /> */}
    </ThemeWrapper>
  );
}

export default App
