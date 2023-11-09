// NeoVisGraph.js
import React, { useRef, useEffect } from 'react';
import NeoVis from 'neovis.js';
/* import NEO4J_CONNECTION from '../config.js'; */

const NEO4J_CONNECTION = {
  uri: import.meta.env.VITE_NEO4J_URI,
  user: import.meta.env.VITE_NEO4J_USER,
  password: import.meta.env.VITE_NEO4J_PASSWORD
};

const NeoVisGraph = () => {
  const visRef = useRef();

  useEffect(() => {
    const config = {
      container_id: visRef.current.id,
      server_url: NEO4J_CONNECTION.uri,
      server_user: NEO4J_CONNECTION.user,
      server_password: NEO4J_CONNECTION.password,
      initial_cypher: "MATCH (n)-[r]->(m) RETURN n,r,m LIMIT 100",
      // ...additional configuration options
    };

    const vis = new NeoVis(config);
    vis.render();
    
    // Cleanup function to prevent memory leaks
    return () => vis && vis.clear();
  }, []);

  return <div id="neo4j-graph" ref={visRef} style={{ height: "500px", width: "100%" }} />;
};

export default NeoVisGraph;
