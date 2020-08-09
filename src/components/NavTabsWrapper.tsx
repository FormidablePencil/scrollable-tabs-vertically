import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const NavTabsWrapper = ({
  children, tabFixed, sectionRef,
  anchor, tabOffset, contentFixed,
  sectionOrder, tabColor = '#282828',
}) => {
  const tabFixedTopOffset = 42

  const heightOfContent = '110vh'
  const widthOfContent = '100vw'

  return (
    <>
      <div
        style={{
          position: 'relative',
        }}
        ref={sectionRef}
        id={anchor}>
        <AnchorLink
          style={{
            marginTop: '0px',
            zIndex: 50,
            position: tabFixed ? 'fixed' : 'absolute',
            left: tabOffset,
            top: tabFixed ? 7 : -35,
            height: 35,
            width: 130,
            borderRadius: '15px 15px 0px 0px',
            backgroundColor: tabColor,
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',
          }}
          href={`#${anchor}`}>
          {anchor}
        </AnchorLink>
      </div>
      <div style={{
        height: heightOfContent,
        width: widthOfContent,
      }}>
        <div style={{
          marginTop: contentFixed ? tabFixedTopOffset : 0,
          position: contentFixed ? 'fixed' : 'relative',
          height: heightOfContent,
          width: widthOfContent,
        }}>
          {children}
        </div>
      </div>
    </>
  )
}

export default NavTabsWrapper
