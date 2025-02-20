import React, { useEffect, useState } from 'react'
import moment from 'moment'
import axios from 'axios'
import { Table } from 'antd'
import toast from 'react-hot-toast'

function ApprovedSingersList() {

  const [singers, setSingers] = useState([])

  const getSingersData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/admin/get-all-Approved-singers', {
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

  useEffect(() => {
    getSingersData();
  }, [])

  const blockSingerAccount=async(record,status)=>{
    try {
      const response=await axios.post('http://localhost:5000/api/admin/block-singer-account',{singerId:record._id,status:status},{
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

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      render: (text, record) => <span>{record.name}</span>
    },
    {
      title: "Phone",
      dataIndex: "phoneNumber"
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      render: (record, text) => moment(record.createAt).format("DD-MM-YYYY")

    },
    {
      title: "Status",
      dataIndex: "status"
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (text, record) => (
        <div className=''>
          {record.status === 'approved' && <h1 className='cursor-pointer' onClick={() => blockSingerAccount(record, "pending")}>Block</h1>}
        </div>
      )
    }
  ]

  return (

    <>
      <h1 className='page-title'>Approved Singers List</h1>

      <Table columns={columns} dataSource={singers} />
    </>
  )
}

export default ApprovedSingersList