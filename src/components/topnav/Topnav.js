import React from 'react'
import Dropdown from '../dropdown/Dropdown'
import './topnav.css'
import notifications from '../../assets/JsonData/notification.json'
import { Link } from 'react-router-dom'
import user_image from '../../assets/images/tuat.png';
import user_menu from '../../assets/JsonData/user_menus.json'
import ThemeMenu from '../thememenu/ThemeMenu'

export default function Topnav() {

  const curr_user = {
    display_name: 'Long Dang',
    image: user_image
  }


  const renderNotification = (item, index)=>{
    <div className="notification-item" key={index}>
      <i className={item.icon}></i>
      <span>{item.content}</span>
    </div>
  }

  const renderUserToggle = user=>(
    <div className="topnav__right-user">
      <div className="topnav__right-user__image">
        <img src={user.image} alt="" />
      </div>
      <div className="topnav__right-user__name">
        {user.display_name}
      </div>
    </div>
  )

  const renderMenu = (item,index)=>(
    <Link to='/' key={index}>
      <div className="notification-item">
        <i className={item.icon}></i>
        <span>{item.content}</span>
      </div>
    </Link>
  )

  return (
    <div className='topnav'>
      <div className="topnav__search">
        <input type="text" placeholder='Search here...' />
        <i className='bx bx-search'></i>
      </div>
      <div className="topnav__right">
        <div className="topnav__right-item">
        <Dropdown
          customToggle={()=> renderUserToggle(curr_user)}
          contentData={user_menu}
          renderItems={(item,index)=> renderMenu(item, index)}
        />
        </div>
        <div className="topnav__right-item">
          <Dropdown 
            icon='bx bx-bell'
            badge='12'
            contentData={notifications}
            renderItems={(item,index) => renderNotification(item,index)}
            renderFooter={()=><Link to='/'>View All</Link>}
          />
        </div>
        <div className="topnav__right-item">
            <ThemeMenu/>
        </div>
      </div>
    </div>
  )
}
