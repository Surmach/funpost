import React from 'react'
import styled from 'styled-components'
import { Row, Col, Avatar, Typography, Button } from 'antd'
const Widget = () =>{
    return(
        <MyAside>
            <WidgetHeader>
                <Row>
                    <Col span={4}><Avatar style={{margin: '0% 0 0% 0%'}} size="large" icon="user" /></Col>
                    <Col span={19}>
                       
                        <Row><h3 style={{margin: '0', fontWeight: 'bold'}}>User</h3></Row>
                        <Row>  
                            <Col span={4}><Typography.Text strong={true}>103k</Typography.Text></Col>
                            <Col span={5}><Typography.Text>рейтинг</Typography.Text></Col>
                            <Col span={3} offset={1}><Typography.Text strong={true}>64k</Typography.Text></Col>
                            <Col span={5}><Typography.Text>подпищиков</Typography.Text></Col>
                        </Row>
                        
                            
                        
                    </Col>
                </Row>
            </WidgetHeader>
            <WidgetBody>
                <Row> <Button style={{margin: '10px 0 2px 0'}} type="link">Мои пости</Button></Row>
                <Row> <Button style={{margin: '2px 0 10px 0'}} type="link">Коментарии</Button></Row>
               
               
            </WidgetBody>
        </MyAside>
    )
}
export default Widget

const MyAside = styled.aside`
    width: 94%;
    max-width: 94%;
    height: 100%;
    background-color: white;
    margin: 5.5% 0 6% 6%;
`
const WidgetHeader = styled.div`
    padding: 10px;
    background-color: #f7f7f7;
`
const WidgetBody = styled.div`

`




