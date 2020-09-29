import React, { useState, useMemo } from 'react'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import { Sidebar } from './styled-components'
import NavLinks from './nav-links'

export default () => {
  const [hideOnScroll, setHideOnScroll] = useState(true)

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y
      if (isShow !== hideOnScroll) setHideOnScroll(isShow)
    },
    [hideOnScroll]
  )

  return useMemo(
    () => (
      <>
        <Sidebar show={hideOnScroll}>
          <NavLinks />
        </Sidebar>
      </>
    ),
    [hideOnScroll]
  )
}
