import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

interface NavTabsWrapperT {
  children, tabFixed, sectionRef, anchor, tabOffset, contentFixed,
  sectionOrder,
  tabColor?: string,
  heightOfContent?: string
  overrideDimension?: any
}
const NavTabsWrapper = ({
  children, tabFixed, sectionRef,
  anchor, tabOffset, contentFixed,
  sectionOrder, tabColor = '#282828',
  overrideDimension,
}: NavTabsWrapperT) => {
  const tabFixedTopOffset = 42
  const heightOfContent = '96vh'
  const widthOfContent = '100%'
  const heightOfTab = 35

  //~ to fix problems occuring in both portfolios I'll have to find a way to set content height manually and scroll manually height

  return (
    <>
      <div
        style={{
          position: 'sticky',
          top: 0,
        }}

        ref={sectionRef}
        id={anchor}>
        <AnchorLink
          style={{
            // marginTop: '0px',
            zIndex: 50,
            // position: tabFixed ? 'fixed' : 'absolute',
            // position: 'sticky',
            left: tabOffset,
            // top: tabFixed ? 7 : -35,
            height: heightOfTab,
            width: 130,
            borderRadius: '15px 15px 0px 0px',
            backgroundColor: tabColor,
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',
            top: 0,
            position: 'sticky',
          }}
          href={`#${anchor}`}>
          {anchor}
        </AnchorLink>
      </div>
      <div style={{
        height: heightOfContent,
        width: widthOfContent,
        position: 'sticky',
        top: heightOfTab,
        ...overrideDimension,
      }}>
        <div style={{
          // marginTop: contentFixed ? tabFixedTopOffset : 0,
          // top: -20,
          // position: contentFixed ? 'fixed' : 'relative',
          background: 'linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(53,9,121,1) 0%, rgba(0,255,181,1) 100%)',
          height: heightOfContent,
          width: widthOfContent,
          ...overrideDimension,

        }}>
          {children}
        </div>
      </div>
    </>
  )
}

export default NavTabsWrapper
