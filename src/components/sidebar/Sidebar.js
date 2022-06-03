import React, { Fragment } from 'react'
import './sidebar.css'
import logo from '../../assets/images/LD.jpg'
import sidebarData from '../../assets/JsonData/sidebar_routes.json'
import { Link } from 'react-router-dom'


export default function Sidebar(props) {


  const SidebarItem = props => {
    const active = props.active ? 'active' : ''
    return (
      <div className='sidebar__item'>
        <div className={`sidebar__item-inner ${active}`}>
          <i className={props.icon}>
          </i>
            <span>
              {props.title}
            </span>
        </div>
      </div>
    )
  }
  

  const activeItem = sidebarData.findIndex(item => item.route === props.path)

  return (
    <div className='sidebar'>
      <div className="sidebar__logo">
        <img src={logo} alt="Long Dang" />
        <h2>Administrator</h2>
      </div>
      {sidebarData.map((item, index) => (
        <Link to={item.route} key={index}>
          <SidebarItem
            title={item.display_name}
            icon={item.icon}
            active={index === activeItem}
          />
        </Link>
      ))}
    </div>
  )
}
