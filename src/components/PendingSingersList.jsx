import React, { useEffect, useState } from 'react'
import moment from 'moment'
import axios from 'axios'
import { Table } from 'antd'
import toast from 'react-hot-toast'

function PendingSingersList() {

    const [singers, setSingers] = useState([]) 

    const getSingersData = async () => {
        try {
          const response = await axios.get('http://localhost:5000/api/admin/get-all-pending-singers', {
            headers: {
              Authorization: `${localStorage.getItem("token")}`
            }
          })
    
          if (response.data.success) {
            setSingers(response.data.data)
          }
        } catch (error) {
          toast.error(error)
        }
      }


      const changeSingerStatus=async(record,status)=>{
        try {
          const response=await axios.post('http://localhost:5000/api/admin/change-singer-account-status',{singerId:record._id,status:status},{
            headers:{
              Authorization:`${localStorage.getItem("token")}`
            }
          })
    
          if(response.data.success){
            toast.success(response.data.message)
            getSingersData()
          }
        } catch (error) {
          toast.error("Error changing doctor account status")
        }
      }

      useEffect(()=>{
          getSingersData();
      },[])


      const columns=[
        {
          title:"Name",
          dataIndex:"name",
          render:(text,record)=><span>{record.firstName} {record.lastName}</span> 
        },
        {
          title:"Phone",
          dataIndex:"phoneNumber"
        },
        {
          title:"Created At",
          dataIndex:"createdAt",
          render:(record,text)=>moment(record.createAt).format("DD-MM-YYYY")
        
        },
        {
          title:"Status",
          dataIndex:"status"
        },
        {
          title:"Actions",
          dataIndex:"actions",
          render:(text,record)=>(
            <div className=''>
              {record.status==='pending' && <h1 className='cursor-pointer' onClick={()=>changeSingerStatus(record,"approved")}>Approve</h1>}
              {record.status==='approved' && <h1 className='cursor-pointer' onClick={()=>changeSingerStatus(record,"blocked")}>Block</h1>}
            </div>
          )
        }
      ]
       

  return (
    <>
        <h1 className='page-title'>Pending Singers List</h1>

        <Table columns={columns} dataSource={singers} />
    </>
  )
}

export default PendingSingersList