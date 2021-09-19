import React, { useEffect } from 'react'
import {useSelector,useDispatch} from "react-redux"
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { getSingleCrashDetails } from '../redux/actions'

const DetailsPage = () => {
    const {id} = useParams()
    const singleData = useSelector(state => state.crash.singleData)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getSingleCrashDetails(id))
    },[])
    let data = singleData[0]
    
    return (
        <Detail>
            <Heading>Crash Report</Heading>
            <InfoContainer>
                <Info><span>first car : </span>{data?.vehicle_type_code1}</Info>
                <Info><span>second car : </span>{data?.vehicle_type_code2}</Info>
                <Info><span>contributing factor vehicle 1 : </span>{data?.contributing_factor_vehicle_1 }</Info>
                <Info><span>contributing factor vehicle 2 : </span>{data?.contributing_factor_vehicle_2}</Info>
                <Info><span>crash date:</span>{data?.crash_date}</Info>
                <Info><span>crash time:</span>{data?.crash_time}</Info>
                <Info><span>number_of_cyclist_injured: </span>{data?.number_of_cyclist_injured}</Info>
                <Info><span>number_of_cyclist_killed: </span>{data?.number_of_cyclist_killed}</Info>
                <Info><span>number_of_motorist_injured: </span>{data?.number_of_motorist_injured}</Info>
                <Info><span>number_of_motorist_killed: </span>{data?.number_of_motorist_killed}</Info>
                <Info><span>number_of_pedestrians_injured: </span>{data?.number_of_pedestrians_injured}</Info>
                <Info><span>number_of_pedestrians_killed: </span>{data?.number_of_pedestrians_killed}</Info>
                <Info><span>number_of_persons_injured: </span>{data?.number_of_persons_injured}</Info>
                <Info><span>number_of_persons_killed: </span>{data?.number_of_persons_killed}</Info>
                <Info><span>on_street_name : </span>{data?.on_street_name}</Info>
            </InfoContainer>
        </Detail>
    )
}

export default DetailsPage

const Detail = styled.div`
    background-image: url("https://www.askadamskutner.com/wp-content/uploads/2016/01/car-and-motorcycle-accident.jpg");
    width: 100%;
    height: 100%;
    padding: 25px;
    @media (min-width: 90vw) {
        background: bisque;
        width: 100%;
        height: 100%;
    }
`
const Heading = styled.h1`
    color:white;
`

const InfoContainer = styled.div`
    width: 90%;
    margin: 50px auto;
    margin-bottom: 0;
    padding: 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(400px,1fr));
    grid-gap: 1rem;
    background: lightgrey;

    span {
        font-weight: 600;
        font-size: 22px;
    }
`

const Info = styled.div`
    background: aliceblue;
    border-radius: 15px;
    border:2px solid #718ba1;
    padding: 1rem;
    font-weight: 500;
    font-size: 20px;
`
