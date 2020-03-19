import React from 'react';
import './App.css';
import SwaggerUI from 'swagger-ui-react';
import "swagger-ui-react/swagger-ui.css";

const App: React.FC = () => {
  return (
    <SwaggerUI url="/swagger/isn.json" docExpansion="list" />
  );
}

export default App;
