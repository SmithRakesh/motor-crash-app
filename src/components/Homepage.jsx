import React, { useState , useEffect} from 'react';
import { useSelector,useDispatch, shallowEqual } from 'react-redux';
import styled from "styled-components";
import {BsList} from "react-icons/bs";
import {BsFillGrid3X3GapFill} from "react-icons/bs";
import { getCrashDetails } from '../redux/actions';
import Card from './Card';
import List from './List';

const Homepage = () => {

    const [carName,setCarName] = useState("");
    const [crashDate,setCrashDate] = useState("");
    const [crashTime,setCrashTime] = useState("");
    const [search,setSearch] = useState(false);
    const [view,setView] = useState("grid");
    const [page,setPage] = useState(1);

    let date = crashDate && `crash_date=${crashDate}&`
    let time = crashTime && `crash_time=${crashTime}&`
    let name = carName && `vehicle_type_code1=${carName}&`
    const params = `?${date}${time}${name}$offset=${page-1}&$limit=20`

    const {data,isError,isLoading} = useSelector(state => state.crash,shallowEqual);

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCrashDetails(params))
    },[search,page])

    return isLoading ? <div>...loading</div>: 
    isError ? <div>Something Went Wrong</div> :(
        <div>
            <h1>Motor Crash Details</h1>
            <Nav>
                <div>
                    <Input type="text" placeholder="enter car name" value={carName} onChange={e => setCarName(e.target.value)} />
                    <Input type="text" placeholder="enter crash date" value={crashDate} onChange={e => setCrashDate(e.target.value)} />
                    <Input type="text" placeholder="enter crash time" value={crashTime} onChange={e => setCrashTime(e.target.value)} />
                    <Btn onClick={() => setSearch(!search)}>search</Btn>
                </div>
                <div>
                    <ListView onClick={() => setView("list")}><BsList /></ListView>
                    <GridView onClick={() => setView("grid")}><BsFillGrid3X3GapFill/></GridView>
                </div>
            </Nav>
            <div>
                {
                    view === "grid" ? (
                        <ReportContainerGrid displayType="grid">
                            {
                               data?.length === 0 ? <h1>no match found</h1> : data?.map(report => <Card key={report.collision_id} {...report}/> )
                            }
                        </ReportContainerGrid>
                    )
                    :
                    (
                        <ReportContainerList>
                            { data?.length === 0 ? <h1>no match found</h1> :
                                <Table>
                                <TableHeading>
                                    <tr>
                                        <th>Sl no </th>
                                        <th>First car</th>
                                        <th>Second car</th>
                                        <th>Crash date</th>
                                        <th>Crash time</th>
                                    </tr>
                                </TableHeading>
                                <TableBody>
                                    {
                                    data?.map((report,i) => <List key={report.collision_id} i={i} {...report}/> )
                                    }
                                </TableBody>
                            </Table>
                            }
                        </ReportContainerList>
                    )
                }
                <div>
                    <Btn disabled={page === 1} onClick={() => setPage(page-1)}>prev</Btn>
                    <PageNo>{page}</PageNo>
                    <Btn disabled={page === Math.ceil(data.length / 5)} onClick={() => setPage(page+1)}>next</Btn>
                </div>
            </div>
        </div>
    )
}

export default Homepage

const ReportContainerGrid = styled.div`
    width: 90%;
    margin: 50px auto;
    margin-bottom: 15px;
    padding: 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
    grid-gap: 1rem;
`
const ReportContainerList = styled.div`
    width: 90%;
    margin: 50px auto;
    margin-bottom: 0;
    padding: 1rem;
`

const Table = styled.table`
    background-color: aliceblue;
    border: 1px solid white;
    padding: 1rem;
    width: 100%;
    margin: 0 auto;
`

const TableHeading = styled.thead`
    border: 1px solid black;
    border-collapse: collapse;
    th{
        border: 1px solid black;
        border-collapse: collapse;
        padding: 1rem;
    }
    tr{
        border: 1px solid black;
        border-collapse: collapse;
    }
`

const TableBody = styled.tbody`
        border: 1px solid black;
`

const Input = styled.input`
    padding: 8px;
    outline: none;
    border: none;
    margin-right: 10px;
    border-radius: 15px;
    background-color: aliceblue;
`

const Btn = styled.button`
    padding: 15px;
    border-radius: 15px;
    border:1px solid lightgrey;
    cursor: pointer;
`

const PageNo = styled.span`
    padding: 0.5rem;
    font-weight: 600;
    font-size: 22px;
`

const ListView = styled(BsList)`
    font-size: 50px;
    background: aliceblue;
    padding: .65rem;
    margin-right: 10px;
    cursor: pointer;
    margin-top: 15px;
`

const GridView = styled(BsFillGrid3X3GapFill)`
    font-size: 50px;
    background: aliceblue;
    padding: .65rem;
    cursor: pointer;
    margin-top: 15px;
`

const Nav = styled.div`
    width: 100%;
    margin:25px auto;

`