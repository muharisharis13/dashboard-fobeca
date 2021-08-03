import React from 'react';

import { FaHome, FaCog, FaCaretDown, FaCaretUp, FaSignOutAlt } from 'react-icons/fa'



export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <FaHome />,
    cName: 'nav-text 1'
  },
  {
    title: 'Stock',
    path: '#',
    icon: '',
    iconClosed: <FaCaretDown />,
    iconOpened: <FaCaretUp />,
    subNav: [

      {
        title: 'In Stock',
        path: '/Stock/instock',
        icon: ''
      },
      {
        title: 'Current Stock',
        path: '/Stock/currentStock',
        icon: ''
      },
      {
        title: 'Out Stock',
        path: '/Stock/outstock',
        icon: ''
      },

    ]
  },
  {
    title: 'Courier',
    path: '/Courier',
    icon: '',
  },
  {
    title: 'Purchasing',
    path: '/Purchasing',
    icon: '',
  },
  {
    title: 'Cart',
    path: '#',
    icon: '',
    iconClosed: <FaCaretDown />,
    iconOpened: <FaCaretUp />,
    subNav: [

      {
        title: 'In Stock',
        path: '/Stock/outstocks/history',
        icon: ''
      },
      {
        title: 'List Cart',
        path: '/Cart',
        icon: ''
      },
      {
        title: 'Gap Stock',
        path: '/Stock/gapstock',
        icon: ''
      },

    ]
  },
  // {
  //   title: 'Cart',
  //   path: '/Cart',
  //   icon: '',
  // },
  // {
  //   title: 'LogOut',
  //   path: '/login',
  //   icon: <FaSignOutAlt />,
  // }

];
