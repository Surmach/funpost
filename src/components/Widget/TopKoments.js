import React from 'react'
import styled from 'styled-components'
import { Typography } from 'antd'
import ComentList from '../Coment/ComentList'


const TopKomentWidget = () =>{
    return(
        <MyComentWidgetWrapper>
            <TopComentHeader>
                <Typography.Text strong={true} style={{borderLeft: '3px solid blue', paddingLeft: '10px'}}>ТОП КОМЕНТАРИЕВ ДНЯ</Typography.Text>
            </TopComentHeader>

            <TopComentBody>
                <ComentList/>
            </TopComentBody>   

        </MyComentWidgetWrapper>
    )
}

export default TopKomentWidget

const MyComentWidgetWrapper = styled.div`
    width: 94%;
    max-width: 94%;
    height: 100%;
    background-color: white;
    margin: 5.5% 0 6% 6%;
    padding: 10px;
`

const TopComentHeader = styled.div`
    padding: 10px;
    border-bottom: 1px solid lightgray
`

const TopComentBody = styled.div`

`