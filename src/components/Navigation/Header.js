import React from 'react';
import { Layout, Menu, Icon } from 'antd';

const Header = (props) => {
    return (
        <Layout.Header>
            <div className="logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                style={{ lineHeight: '64px' }}
            >
                <Menu.Item key="home"><Icon type="home" theme="twoTone" />Home</Menu.Item>
                <Menu.Item key="about"><Icon type="read" theme="outlined" />About</Menu.Item>
                <Menu.Item key="mail"><Icon type="mail" theme="twoTone" />Contact</Menu.Item>
            </Menu>
        </Layout.Header>
    )
}

export default Header;