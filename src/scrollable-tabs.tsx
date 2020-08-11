import React, { cloneElement, Children, useState, useEffect } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import PropTypes from 'prop-types';



interface scrollableTabsChildrenT {
  heightOfTabs, tabLeftOffset, whereChild?: string, extraTopSpace: number, index,
  overrideTabsStyle: {}, saveTitlesToSourceOfTrue: Function,
}
const ScrollableTabsWrapper = (props) => {
  const { children, navbarColor, heightOfTabs, tabLeftOfsetBy, extraTopSpace, overrideTabsStyle } = props
  const [arrUniqueTabTitles, setArrUniqueTabTitles] = useState<any>([])

  const saveTitlesToSourceOfTrue = async (index, title) => {
    console.log(index, title);
    console.log(arrUniqueTabTitles);
    setArrUniqueTabTitles([...arrUniqueTabTitles, {index, title}]) //! Problem is that setState is called too fast multiple times and it only registers the last call.
  }

  const getNavTabPositioningHelper = ({
    index, tabStartingValue = defaultTabStartingValue, tabsSpaceApart = defaultTabsSpaceApart,
  }: getNavTabPositioningHelperT) => {
    if (index === 0) return tabStartingValue
    else return tabsSpaceApart * index + tabStartingValue
  }

  const childrenWithAdditionalProps = Children.map(children, (child, index) => {
    let whereChild = ''
    if (0 === index) {
      whereChild = 'first'
    } else if (children.length - 1 === index) {
      whereChild = 'last'
    }
    return cloneElement<scrollableTabsChildrenT>(child, { //was working on seting t
      index,
      extraTopSpace,
      whereChild,
      tabLeftOffset: getNavTabPositioningHelper({ index: tabLeftOfsetBy ?? index }),
      heightOfTabs,
      overrideTabsStyle,
      saveTitlesToSourceOfTrue,
    });
  });

  return (
    <div>
      <Navbar
        extraTopSpace={extraTopSpace}
        heightOfTabs={heightOfTabs}
        navbarColor={navbarColor} />
      <div>
        {childrenWithAdditionalProps}
      </div>
    </div>
  )
}



const Navbar = (props) => {
  const { navbarColor, heightOfTabs, extraTopSpace } = props
  return (
    <div style={{
      zIndex: 19,
      position: 'fixed',
      height: heightOfTabs + extraTopSpace,
      width: '100%',
      backgroundColor: navbarColor,
    }}>
      hey from navbar
    </div>
  )
}



interface navTabsWrapperT extends scrollableTabsChildrenT {
  index: number,
  anchor, stickyBackgroundBgColor, tabColor, extraTopSpace: number,
  overrideTabsStyle, uniqueTabTitle: string, arrUniqueTabTitles: {},
  saveTitlesToSourceOfTrue: Function
}
const NavTabsWrapper = (props) => {
  const {
    extraTopSpace,
    heightOfTabs,
    tabColor,
    anchor,
    stickyBackgroundBgColor,
    tabLeftOffset,
    whereChild,
    overrideTabsStyle,
    uniqueTabTitle,
    index,
    saveTitlesToSourceOfTrue,
  }: navTabsWrapperT = props
  const [temporarilyHolding] = useState({ index: index, title: uniqueTabTitle })
   //~ If no solution found then directly pass data into sourceOfTruth and later I might stumble on a solution.

   useEffect(() => {
    saveTitlesToSourceOfTrue(temporarilyHolding.index, temporarilyHolding.title)
   }, [temporarilyHolding])

  const widthOfContent = '100%'
  const marginTopContent = whereChild === 'first' ? `calc(-100vh + ${heightOfTabs * 2 + extraTopSpace}px` : `calc(-100vh + ${heightOfTabs}px)`
  const heightOfStickyAbsoluteBackground = `calc(100vh - ${heightOfTabs}px)`

  return (
    <>
      <div
        style={{
          position: 'sticky',
          top: heightOfTabs + extraTopSpace,
          zIndex: 20,
        }}>
        <AnchorLink
          style={{ //Tab
            zIndex: 30,
            left: tabLeftOffset,
            height: heightOfTabs,
            width: 130,
            backgroundColor: tabColor,
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',
            top: -heightOfTabs,
            position: 'absolute',
            borderRadius: '15px 15px 0px 0px',
            ...overrideTabsStyle,
          }}
          href={`#${anchor}`}>
          {anchor}
        </AnchorLink>
      </div>
      <div style={{ //sticky background
        zIndex: -1,
        width: widthOfContent,
        marginBottom: -20,
        height: heightOfStickyAbsoluteBackground,
        position: 'sticky',
        top: heightOfTabs + extraTopSpace,
        background: stickyBackgroundBgColor,
      }}>
      </div>
      <div id={anchor} style={{
        zIndex: 10,
        marginTop: marginTopContent,
        position: 'relative',
        width: widthOfContent,
        marginBottom: whereChild !== 'last' ? heightOfTabs : 0
      }}>
        {props.children}
      </div>
    </>
  )
}



export { NavTabsWrapper }
export default ScrollableTabsWrapper

interface NavbarT {
  bgColor?: string
}
interface ScrollableTabsWrapperT {
  children: any
  navBarColor?: string
}
interface getNavTabPositioningHelperT {
  index: number, tabStartingValue?: number, tabsSpaceApart?: number
}

const defaultTabStartingValue = 44
const defaultTabsSpaceApart = 150
const defaultHeightOfTabs = 35
const defaultExtraTopSpace = 10

ScrollableTabsWrapper.propTypes = {
  heightOfTabs: PropTypes.number,
  overrideTabsStyle: PropTypes.string,
  navbarColor: PropTypes.string,
  extraTopSpace: PropTypes.number,
}
ScrollableTabsWrapper.defaultProps = {
  heightOfTabs: defaultHeightOfTabs,
  navbarColor: '#E6E6E6',
  extraTopSpace: defaultExtraTopSpace,
}
Navbar.propTypes = {
  navbarColor: PropTypes.string,
  heightOfTabs: PropTypes.number,
  extraTopSpace: PropTypes.number.isRequired
}
Navbar.defaultProps = {
  navbarColor: PropTypes.string.isRequired,
  heightOfTabs: PropTypes.number,
}
NavTabsWrapper.propTypes = {
  children: PropTypes.any.isRequired,
  tabColor: PropTypes.string,
  anchor: PropTypes.string.isRequired,
  heightOfTabs: PropTypes.string,
  uniqueTabTitle: PropTypes.string.isRequired,
}
NavTabsWrapper.defaultProps = {
  stickyBackgroundBgColor: 'linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(53,9,121,1) 0%, rgba(0,255,181,1) 100%)',
  tabColor: 'rgba(53,9,121,1)'
}