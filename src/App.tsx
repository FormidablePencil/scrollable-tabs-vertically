import React, { useRef, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import NavTabsWrapper from './components/NavTabsWrapper';

function App() {
  const [tabFixed, setTabFixed] = useState({
    firstSection: false,
    secondSection: false,
    thirdSection: false,
    fourthSection: false,
  })
  const trackOnChangeTabFixed = useRef({
    firstSection: false,
    secondSection: false,
    thirdSection: false,
    fourthSection: false,
  })

  const tabFixedTopOffset = 42
  const firstSection = useRef(null)
  const secondSection = useRef(null)
  const thirdSection = useRef(null)
  const fourthSection = useRef(null)
  const anchor = ['first', 'second', 'third', 'fourth']

  useEffect(() => {
    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('scroll', onScroll)
    // eslint-disable-next-line 
  }, [])

  const onScroll = () => {
    toggleTabPositionOnScroll(firstSection, 'firstSection')
    toggleTabPositionOnScroll(secondSection, 'secondSection')
    toggleTabPositionOnScroll(thirdSection, 'thirdSection')
    // toggleTabPositionOnScroll(fourthSection, 'fourthSection')
  }

  const toggleTabPositionOnScroll = (ref, variable) => {
    if (ref.current.getBoundingClientRect().top < tabFixedTopOffset) {
      if (trackOnChangeTabFixed.current[variable] !== true) {// since changes done to useState doesn't seem to reflect in this funciton and just return the same value as before I implemented a little hack with ref to track when useState was changed by changing ref along with it. I didn't want setState to fire everytime and destroy the proformance of the app.
        trackOnChangeTabFixed.current = ({ ...trackOnChangeTabFixed.current, [variable]: true })
        setTabFixed(prev => ({ ...prev, [variable]: true }))
      }
    } else {
      if (trackOnChangeTabFixed.current[variable] !== false) {
        trackOnChangeTabFixed.current = ({ ...trackOnChangeTabFixed.current, [variable]: false })
        setTabFixed(prev => ({ ...prev, [variable]: false }))
      }
    }
  }

  const getNavTabPosition = (index) => {
    if (index === 0) return 44
    else return 50 * index * 3 + 44
  }

  console.log(tabFixed.firstSection);
  
  return (
    <div>
      <NavTabsWrapper
        sectionOrder={1}
        tabOffset={getNavTabPosition(0)}
        tabColor='rgba(53,9,121,1)'
        anchor={anchor[0]}
        sectionRef={firstSection}
        contentFixed={false}
        tabFixed={false}>
        <div style={{
          height: '100%',
          width: '100%',
          background: 'linear-gradient(180deg, rgba(2,0,36,.1) 0%, rgba(53,9,121,.1) 0%, rgba(0,255,181,1.) 100%)'
        }}>
          @#@#!
        </div>
      </NavTabsWrapper>
      <NavTabsWrapper
        sectionOrder={2}
        tabOffset={getNavTabPosition(1)}
        tabColor='rgba(9,9,121,1)'
        anchor={anchor[1]}
        sectionRef={secondSection}
        contentFixed={tabFixed.secondSection}
        tabFixed={tabFixed.secondSection}>
        <div style={{
          height: '100vh',
          width: '100vw',
          background: 'linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 100%)'
        }}>
          213123
        </div>
      </NavTabsWrapper>
      <NavTabsWrapper
        sectionOrder={3}
        tabColor='rgba(53,9,121,1)'
        tabOffset={getNavTabPosition(2)}
        anchor={anchor[2]}
        sectionRef={thirdSection}
        contentFixed={tabFixed.thirdSection}
        tabFixed={tabFixed.thirdSection}>
        <div style={{
          height: '100%',
          width: '100%',
          background: 'linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(53,9,121,1) 0%, rgba(0,255,181,1) 100%)'
        }}>
          sgfdz
        </div>
      </NavTabsWrapper>
    </div>
  );
}

export default App;
