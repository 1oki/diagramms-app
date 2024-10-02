import { useEffect, useRef, useState } from 'react';
import { select, Selection} from 'd3-selection';

const data = [
  // {
  //   width: 300, 
  //   height: 200, 
  //   color: 'green' 
  // }
  {
    units: 150,
    color: 'purple'
  },
  {
    units: 100,
    color: 'green'
  },
  {
    units: 50,
    color: 'orange'
  },
  {
    units: 70,
    color: 'teal'
  },
  {
    units: 30,
    color: 'blue'
  },

]

const Svg1: React.FC = () => {
  const ref = useRef(null)
  const [selection, setSelection] = useState<null | Selection<null, unknown, null, undefined>>(null)

  useEffect(() => {
    if(!selection) {
      setSelection(select(ref.current))
    }
    else {
      const rects = selection
        .selectAll('rect')
        .data(data)
        .attr('width', 100)
        .attr('height', d => d.units)
        .attr('fill', d => d.color)
        .attr('x',(_,i) => i*100)


    rects
        .enter()
        .append('rect')
        .attr('width', 100)
        .attr('height', d => d.units)
        .attr('fill', d => d.color)
        .attr('x',(_,i) => i*100)
      
        // .data(data)
        // .append('rect')
        // .attr('width', d=>d.width)
        // .attr('height', d=>d.height)
        // .attr('fill', d=>d.color)
      console.log(rects)
     
    }

  }, [selection])
  return (
    <div>
      <svg ref={ref} width={700} >
        <rect/>
        <rect/>
        <rect/>
      </svg>
    </div>
  );
}

export default Svg1;
