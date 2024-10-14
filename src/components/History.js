import { Trash } from "feather-icons-react/build/IconComponents";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { deleteHistoryApi, getHistoryApi } from "../apiService/allApis";

function History() {

  const[history,setHistory]=useState([])

  const getHistories=async()=>{
  const result=await getHistoryApi()
  setHistory(result.data)
  }
  
  const deleteHistory=async(e,id)=>{
    e.preventDefault()
    await deleteHistoryApi(id)
    getHistories()

  }

  useEffect(()=>{
    getHistories()
  },[])
    return (
        <div>
        
                <Table className="container mb-5" striped hover variant="dark">
                <thead className="text-center">
                    <tr>
                        <th>#</th>
                        <th>title</th>
                        <th>time</th>
                        <th>video url</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className="text-center">
                {
              history.length>0?
              history.map((i,index)=>
                    <tr>
                        <td>{index}</td>
                        <td>{i.title}</td>
                        <td>{i.time}</td>
                        <td>@{i.videoUrl}</td>
                        <td onClick={(e)=>deleteHistory(e,i?.id)}><Trash size='45' className='btn text-danger'></Trash></td>
                    </tr>)
                    :""
                }
                </tbody>
            </Table>
        </div>
    )
}

export default History