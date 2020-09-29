import React, { useState, useRef, useMemo } from 'react'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import FakeData from './fake-data'

import { Content, Position, RedBox } from './styled-components'
import Navbar from './navbar'
import Sidebar from './sidebar'

const PositionStore = () => {
  const [renderCount, triggerReRender] = useState(0)
  const elementPosition = useRef({ x: 60, y: 150 })
  const viewportPosition = useRef({ x: 0, y: 0 })
  let throttleTimeout = null

  const getPos = (el, axis) => Math.round(el.current[axis])

  const setPos = (el, pos) => {
    el.current = pos
    if (throttleTimeout !== null) return
    // Only re-render the component every 0.3s
    throttleTimeout = setTimeout(() => triggerReRender(renderCount + 1), 300)
  }

  return {
    getElementX: () => getPos(elementPosition, 'x'),
    getElementY: () => getPos(elementPosition, 'y'),
    getViewportX: () => getPos(viewportPosition, 'x'),
    getViewportY: () => getPos(viewportPosition, 'y'),
    setElementPosition: (pos) => setPos(elementPosition, pos),
    setViewportPosition: (pos) => setPos(viewportPosition, pos),
    renderCount
  }
}

export default () => {
  const positionsStore = PositionStore()
  const viewportRef = useRef(null)
  const redBoxRef = useRef(null)

  // Viewport scroll position
  useScrollPosition(
    ({ currPos }) => {
      positionsStore.setViewportPosition(currPos)
      const { style } = viewportRef.current
      style.top = `${150 + currPos.y}px`
      style.left = `${60 + currPos.x}px`
    }, // effect
    [positionsStore], // deps
    null, // element, defaults to document.body
    true // useWindow
    // boundingEelement // defaults to returning element position
  )

  useScrollPosition(
    ({ currPos }) => positionsStore.setElementPosition(currPos),
    [],
    redBoxRef,
    false,
    300
  )

  const PositionContent = (props) => {
    const { positionsStore } = props
    return (
      <>
        <div>
          Deferred Rendering:
          <span>{positionsStore.renderCount}</span>
        </div>
        <div>
          Viewport Scroll:
          <span>
            X: {positionsStore.getViewportX()} Y:{' '}
            {positionsStore.getViewportY()}
          </span>
        </div>
        <div>
          Red Box Scroll:
          <span>
            X:{positionsStore.getElementX()} Y:{positionsStore.getElementY()}
          </span>
        </div>
      </>
    )
  }

  return useMemo(
    () => (
      <>
        <RedBox ref={redBoxRef}>RED BOX</RedBox>
        <Router>
          <Position ref={viewportRef}>
            <PositionContent positionsStore={positionsStore} />
          </Position>
          <Content mt="45" ml="45">
            <FakeData />
          </Content>
          <Switch>
            <Route exact from="/">
              <Navbar />
            </Route>
            <Route exact from="/navbar">
              <Navbar />
            </Route>
            <Route exact from="/sidebar">
              <Sidebar />
            </Route>
            <Redirect to="/" />
          </Switch>
        </Router>
      </>
    ),
    [positionsStore]
  )
}
