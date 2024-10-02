import { useEffect, useRef, useState } from 'react';
import { select, Selection} from 'd3-selection';
import './App.css';
import Svg2 from './svg2';
import Svg3 from './svg3';



const App: React.FC = () => {
  
  return (
    <div>
      <Svg2 />
      <Svg3 />
    </div>
  );
}

export default App;
