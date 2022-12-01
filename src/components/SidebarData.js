import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
    {
        title:'Home',
        path:'/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title:'Students',
        path:'/students',
        icon: <IoIcons.IoIosPaper/>,
        cName: 'nav-text'
    },
    {
        title:'Professors',
        path:'/professors',
        icon: <IoIcons.IoIosBook/>,
        cName: 'nav-text'
    },
    {
        title:'Activity',
        path:'/activity',
        icon: <IoIcons.IoIosAmericanFootball/>,
        cName: 'nav-text'
    }
]