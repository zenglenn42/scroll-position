import React, { useState, useMemo } from 'react'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import { Navbar } from './styled-components'
import NavLinks from './nav-links'

export default () => {
  const [hideOnScroll, setHideOnScroll] = useState(true)

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y
      if (isShow !== hideOnScroll) setHideOnScroll(isShow)
    },
    [hideOnScroll],
    null,
    false,
    300
  )

  return useMemo(
    () => (
      <>
        <Navbar show={hideOnScroll}>
          <NavLinks />
        </Navbar>
      </>
    ),
    [hideOnScroll]
  )
}
