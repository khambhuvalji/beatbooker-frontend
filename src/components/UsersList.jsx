import React, { useEffect, useState } from 'react'
import moment from 'moment'
import axios from 'axios'
import { Table } from 'antd'
import toast from 'react-hot-toast'

function UsersList() {

  const [users, setUsers] = useState([])

  const getUsersData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/admin/get-all-users', {
        headers: {
          Authorization: `${localStorage.getItem("token")}`
        }
      })

      if (response.data.success) {
        setUsers(response.data.data)
      }
    } catch (error) {
      toast.error(error)
    }
  }

  useEffect(() => {
    getUsersData()
  },)

  const columns = [
    {
      title: "Name",
      dataIndex: "name"
    },
    {
      title: "Email",
      dataIndex: "email"
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      render: (record, text) => moment(record.createAt).format("DD-MM-YYYY")
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (text, record) => (
        <div className=''>
          <h1 className='cursor-pointer'>Block</h1>
        </div>
      )
    }
  ]

  return (
    <>
      <h1 className='page-title'>Users List</h1>

      <Table columns={columns} dataSource={users} />
    </>
  )

}

export default UsersList