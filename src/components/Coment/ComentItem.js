import React from 'react'
import styled from 'styled-components'
import {Typography} from 'antd'

const ComentItem = () =>{
    return(
        <ItemWrapper>
            <Typography.Text>
                <span style={{fontWeight: 'bold'}}>User </span>Заголовок посту до якого зробили комент
            </Typography.Text>
        </ItemWrapper>
    )
}

export default ComentItem

const ItemWrapper = styled.div`
    padding: 15px 0;
    border-bottom: 1px solid lightgray
`