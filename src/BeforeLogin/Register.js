import React,{useState} from 'react'
import TextField from '@mui/material/TextField';
import axios from 'axios';

export const Register = (props) => {
  const [data,setData]=useState({uid:'',pwd:'',email:''})
  const fnChange=(eve)=>{
    const {id,value}=eve.target;
    setData({
      ...data,
      [id]:value
    })
  }
  const fnRegiser=async()=>{
    const res=await axios.get(`http://localhost:2000/users/check-uid/${data.uid}`)

    if(res.data.length===0){
        axios.post('http://localhost:2000/users/register',data)
      .then((res)=>{
        if(res.data.acknowledged && res.data.insertedId){
          alert('Registration Successfull');
          setData({uid:'',pwd:'',email:''})
        }else{
          alert('Failed to Register')
        }
      })
      .catch((res)=>{
        alert('Something Went Wrong')
      })
    }else{
      alert('User Id already existed')
    }
  }
  return (
    <div className='container-fluid'>
      <h1 className='text-center mb-3 mt-3'>Register</h1>
      <div className='row mb-3'>
        <div className='col-sm-5 text-end'>
          <b className='lbl-txt'>User Id:</b>
        </div>
        <div className='col-sm-3'>
          <TextField onChange={fnChange} value={data.uid} id="uid" label="User Id" variant="standard" />
        </div>
      </div>
      <div className='row mb-3'>
        <div className='col-sm-5 text-end'>
          <b className='lbl-txt'>Password:</b>
        </div>
        <div className='col-sm-3'>
          <TextField onChange={fnChange} value={data.pwd} id="pwd" type='password' label="Password" variant="standard" />
        </div>
      </div>
      <div className='row mb-3'>
        <div className='col-sm-5 text-end'>
          <b className='lbl-txt'>Email:</b>
        </div>
        <div className='col-sm-3'>
          <TextField onChange={fnChange} value={data.email} id="email" label="Email" variant="standard" />
        </div>
      </div>
      <div className='row mb-3'>
        <div className='offset-sm-5 col-sm-7'>
          <button onClick={fnRegiser} className='btn btn-primary'>Register</button>
          <b onClick={()=>props.toggle(true)} className='ms-3 goto text-danger'>Login</b>
        </div>
      </div>
    </div>
  )
}
