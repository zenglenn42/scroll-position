import React from 'react'

export const Position = React.memo((props) => {
  const { viewportRef, positionsStore } = props
  return (
    <>
      <Position ref={viewportRef}>
        <div>
          Deferred Rendering:
          <span>{positionsStore.renderCount}</span>
        </div>
        <div>
          Viewport Scroll:
          <span>
            X: {positionsStore.getViewportX()} Y: {positionsStore.getViewportY()}
          </span>
        </div>
        <div>
          Red Box Scroll:
          <span>
            X:{positionsStore.getElementX()} Y:{positionsStore.getElementY()}
          </span>
        </div>
      </Position>
    </>
  )
})