import { useRef, useEffect } from 'react'
import * as d3 from 'd3'
import Rellax from 'rellax'

const renderStars = (delayedRender, svgContainer) => () => {
  const container = d3.select(svgContainer.current)
  const svg = container.select('svg')
  const w = parseInt(container.style('width'))
  const h = parseInt(container.style('height'))
  svg.attr('viewBox', `0 0 ${w} ${h}`)
  const area = w * h
  const numStars = Math.floor(area / 8000)

  const generateY = d3.randomNormal(h / 2, h * 0.2)
  const generateX = () => {
    const n = d3.randomNormal(w / 2, w * 0.15)() - w / 2
    return n < 0 ? n + w : n
  }
  const values = d3.range(numStars).map((x) => {
    return {
      x: generateX(),
      y: generateY(),
      delay: delayedRender ? Math.floor(Math.random() * 4000) : 0,
      size: (Math.random() * 4) + 1,
      upSpeed: (Math.random() / 2) + 0.5,
      parallaxSpeed: Math.floor(Math.random() * 3)
    }
  })

  svg.selectAll('circle')
    .data(values)
    .join('circle')
    .attr('cx', d => d.x)
    .attr('cy', d => d.y)
    .attr('r', d => d.size)
    .attr('fill', 'white')
    .attr('fill-opacity', '0')
    .attr('class', 'rellax')
    .attr('data-rellax-speed', d => d.parallaxSpeed)
    .transition()
    .delay(d => d.delay)
    .attr('fill-opacity', '1')
}

export default function RandomStars () {
  const svgContainer = useRef(null)
  useEffect(() => {
    renderStars(true, svgContainer)()
    Rellax('.rellax')
  })
  return (
    <div id='svgContainer' ref={svgContainer} className='absolute w-full h-full inset-0'>
      <svg />
    </div>
  )
}
