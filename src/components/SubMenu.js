import { Item } from '@syncfusion/ej2/splitbuttons';
import React from'react';
import { Link } from'react-router-dom';
import styled from 'styled-components'

const SidebarLabel = styled.span'';


const SubMenu = () => {
  return (
    <>
      <SidebarLink to={item.path}>
        <div>
            {item.icon}
            <SidebarLabel>{item.title}</SidebarLabel>
        </div>
      </SidebarLink>
    </>
  );
};

export default SubMenu;
