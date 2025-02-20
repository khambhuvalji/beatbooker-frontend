import React, { useEffect, useState } from 'react'
import moment from 'moment'
import axios from 'axios'
import { Table } from 'antd'
import toast from 'react-hot-toast'

function RejectedSingersList() {

    const [singers, setSingers] = useState([])

    const getSingersData = async () => {
        try {
          const response = await axios.get('http://localhost:5000/api/admin/get-all-rejected-singers', {
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
         ]

  return (
    <>
        <h1 className='page-title'>Rejected Singers List</h1>

        
        <Table columns={columns} dataSource={singers} />
    </>
  )
}

export default RejectedSingersList