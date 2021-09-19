import React from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'

const List = ({crash_time,crash_date,vehicle_type_code1,vehicle_type_code2,collision_id,i}) => {
    const history = useHistory()
    const gotToDetailPage = () => {
        history.push(`/${collision_id}`)
    }

    return (
        <tr onClick={() => gotToDetailPage(collision_id)}>
            <TableTD>{i+1}</TableTD>
            <TableTD>{vehicle_type_code1 ? vehicle_type_code1 : "NA"}</TableTD>
            <TableTD>{vehicle_type_code2 ? vehicle_type_code2 : "NA"}</TableTD>
            <TableTD>{crash_date ? crash_date : "NA"}</TableTD>
            <TableTD>{crash_time ? crash_time : "NA"}</TableTD>
        </tr>
    )
}

export default List

const TableTD = styled.td`
    border: 1px solid black;
    padding: 0.5rem;
    text-align: left;
    cursor: pointer;
    :hover{
        background: #dce4ec;
    }
`

