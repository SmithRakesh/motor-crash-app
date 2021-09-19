import React from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'

const CardContainer = styled.div`
    padding: 10px;
    background-color: aliceblue;
    border-radius: 10px;
    line-height: 4vh;
    border:2px solid #8ab1d3;
    margin-bottom: 5px;
    cursor: pointer;
    :hover{
        background: #dce4ec;
    }
`

const Card = ({vehicle_type_code1,vehicle_type_code2,crash_date,crash_time,collision_id}) => {
    const history = useHistory()
    const gotToDetailPage = () => {
        history.push(`/${collision_id}`)
    }
        
    return (
        <CardContainer onClick={() => gotToDetailPage(collision_id)}>
            <div>First car:- {vehicle_type_code1 ? vehicle_type_code1 : "NA"}</div>
            <div>Second car:- {vehicle_type_code2 ? vehicle_type_code2 : "NA"}</div>
            <div>Crash date:-{crash_date ? crash_date : "NA"}</div>
            <div>Crash_Time:- {crash_time ? crash_time : "NA"}</div>
        </CardContainer>
    )
}

export default Card
