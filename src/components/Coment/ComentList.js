import React from 'react'
import styled from 'styled-components'
import ComentItem from './ComentItem'


const ComentList = () =>{
    return(
        <ListWrapper>
            <ComentItem/> 
            <ComentItem/>
            <ComentItem/>
            <ComentItem/>
            <ComentItem/>
        </ListWrapper>
    )
}

export default ComentList

const ListWrapper = styled.div`
    
`
