import React from 'react'

import logo from './../../img/logo.svg'
import styled from 'styled-components'
import {Row, Col, Menu, Icon} from 'antd'


const Header = () =>{
    return(
        <MyHeader>
            
                <Row type='flex' justify='center' align='middle'>
                    <Col span={4} ><img className="qwer" src={logo} alt=''/></Col>
                    <Col span={12}>
                        <MyMenu mode="horizontal">
                            
                                <MyNavLink>Горячее</MyNavLink>
                           
                                <MyNavLink>В тренде</MyNavLink>
                            
                                <MyNavLink>Свежее</MyNavLink>
                            
                                <MyNavLink>Сообщества</MyNavLink>
                            
                        </MyMenu>
                    </Col>
                    <Col span={4} offset={4}>
                        <Icon type="search" style={{fontSize: '25px', color: 'orange', fontWeight: 'bold', margin: '5%'}} />
                        <Icon type="setting" theme="filled" style={{fontSize: '25px', color: 'orange', margin: '5%'}} />
                        <Icon type="bulb" theme="filled" style={{fontSize: '25px', color: 'orange', margin: '5%'}} />
                    </Col>
                </Row>
            
        </MyHeader>
        
    )
}

export default Header

const MyHeader = styled.div`
    width: 100%;
    margin: 0 auto;
    background-color: white;
    padding: 1% 2%;
    border-bottom: 8px solid blueviolet;
`
const MyMenu = styled(Menu)`
    border: none !important;
`
const MyNavLink=styled(Menu.Item)`
    font-weight: bold;
    color: orange; 
    border: none !important;
`
