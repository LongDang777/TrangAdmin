import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Route } from 'react-router-dom'
import Sidebar from '../components/sidebar/Sidebar';
import Topnav from '../components/topnav/Topnav';
import { setColor, setMode } from '../redux/actions/ThemeAction';
import './LayoutTempalte.css'

export const LayoutTempalte = (props) => {

  
  const  dispatch = useDispatch()
  
  useEffect(()=>{
    const themeClass = localStorage.getItem('themeMode', 'theme-mode-light')
    
    const colorClass = localStorage.getItem('colorMode', 'theme-mode-light')
    
    dispatch(setMode(themeClass))
    
    dispatch(setColor(colorClass))
  },[dispatch])
  
  const {themeReducer} = useSelector(state => state.ThemeReducer)


  return (
    <Route exact path={props.path} render={propsRoute => {
      return (
        <Fragment>
          <div className={`layout ${themeReducer}`}>
            <Sidebar {...props} />
            <div className="layout__content">
              <Topnav/>
              <div className="layout__content-main">
                <props.component {...propsRoute} />
              </div>
            </div>
          </div>
        </Fragment>
      );
    }}
    />
  )
}
