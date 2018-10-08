import React from 'react';
import { Layout, Menu, Icon } from 'antd';

const Footer = (props) => {
    return (
        <Layout.Footer>
            <Menu mode="horizontal" style={{textAlign:'center'}}>
                <Menu.Item key="copyright"><Icon type="copyright" theme="twoTone" />Sailor Inc.</Menu.Item>
                <Menu.Item key="github"><Icon type="github" theme="filled" /></Menu.Item>
                <Menu.Item key="facebook"><Icon type="facebook" theme="filled" /></Menu.Item>
                <Menu.Item key="instagram"><Icon type="instagram" theme="filled" /></Menu.Item>
                <Menu.Item key="twitter"><Icon type="twitter" theme="outlined" /></Menu.Item>
                <Menu.Item key="google-plus"><Icon type="google-plus" theme="outlined" /></Menu.Item>
                <Menu.Item key="slack"><Icon type="slack" theme="outlined" /></Menu.Item>
                <Menu.Item key="youtube"><Icon type="youtube" theme="outlined" /></Menu.Item>
                <Menu.Item key="medium"><Icon type="medium" theme="outlined" /></Menu.Item>
                <Menu.Item key="linkedin"><Icon type="linkedin" theme="outlined" /></Menu.Item>
            </Menu>
        </Layout.Footer>
    )
}

export default Footer;