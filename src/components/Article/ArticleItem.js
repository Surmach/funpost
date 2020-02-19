import React from 'react'
import styled from 'styled-components'
import { Row, Col, Avatar, Icon, Typography } from 'antd'

const ArticleItem = () =>{
    return(
        <MyArticle>
            <ArticleWraper>
            <Row>
                <Col span={2}><Avatar size="large" icon="user" /></Col>
                <Row>
                    <Col><span><b>Wiktor61</b></span></Col>
                    <Col>2 дня назад</Col>
                </Row>
            </Row>

            <Row>
                <Col><Typography.Title level={3}>Заголовок 1</Typography.Title></Col>
                
            </Row>

            <Row>
                <Col><Typography.Text>Тіло поста. Головний контент.</Typography.Text></Col>
            </Row>

            <Row>
                <Col><a href='#'>Показати текст повністю</a></Col>
            </Row>
            <Row type='flex' align='middle' justify='center'>
                <Col span={1}><Icon style={{fontSize: '22px'}} type="arrow-up" /></Col>
                <Col span={2}><Typography.Title level={4}>123</Typography.Title></Col>
                <Col span={1}><Icon style={{fontSize: '22px'}} type="arrow-down" /></Col>
                <Col span={1} offset={16}><Icon style={{fontSize: '22px'}} type="message" /></Col>
                <Col span={1}><Icon style={{fontSize: '22px'}} type="save" /></Col>
                <Col span={1}><Icon style={{fontSize: '22px'}} type="share-alt" /></Col>
            </Row>
            </ArticleWraper>
            
        </MyArticle>
    )
}

export default ArticleItem

const MyArticle = styled.article`
    width: 100%;
    height: 100%;
    margin: 2% 2% 2% 0;
    background-color: white;
    padding: 10px;
` 

const ArticleWraper = styled.div`
    margin: 0 2%;
`