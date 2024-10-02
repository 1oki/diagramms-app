import { useEffect, useRef, useState } from 'react';
import { select, Selection } from 'd3-selection';
import { scaleLinear, scaleBand } from 'd3-scale';
import { max } from 'd3-array';

const data = [
    {
        name: 'foo',
        number: 999,
    },
    {
        name: 'bar',
        number: 345,
    },
    {
        name: 'baz',
        number: 456,
    },
    {
        name: 'baf',
        number: 567,
    },
    {
        name: 'bim',
        number: 234,
    },
    {
        name: 'bom',
        number: 789,
    },
]

const Svg3: React.FC = () => {
    const ref = useRef<SVGSVGElement | null>(null)
    const [selection, setSelection] = useState<null | Selection<SVGSVGElement | null, unknown, null, undefined>>(null)

    const maxValue = max(data, d => d.number)

    const y = scaleLinear()
        .domain([0, maxValue!])
        .range([0, 500])

    const x = scaleBand()
        .domain(data.map(d => d.name))
        .range([0, 800])
        .paddingInner(0.1)
        .paddingOuter(0.7)

    useEffect(() => {
        if(!selection) {
            setSelection(select(ref.current))
        }
        else {
            console.log('y(0)', y(0))
            console.log('y(234)', y(230))
            console.log('y(500)', y(500))

            selection
                .selectAll('rect')
                .data(data)
                .enter()
                .append('rect')
                .attr('width', x.bandwidth)
                .attr('height', d => y(d.number))
                .attr('fill', 'orange')
                .attr('x', d => x(d.name)!)
        }

    }, [selection])

    return (
        <div>
            <svg ref={ref} width={800} height={500}>
        </svg>
        </div>
    );
}

export default Svg3;
