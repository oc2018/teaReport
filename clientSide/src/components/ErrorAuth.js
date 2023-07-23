import React, {useState, useEffect } from 'react'
import  { Alert } from '@mui/material';

const ErrorAuth = ({ errorHandler, setErrorHandler }) => {
    const [show, setShow] = useState(false);
    useEffect(()=>{
        setShow(false)
        if (errorHandler.hasError) {
            setShow(true)
        }
    },[errorHandler])
  return (
    <div>
        {
            show ? <>
                <div className='flex justify-between min-h-[50px] w-[80%] ml-4 md:ml-7 mt-[30px] mb-[20px]'>
                    <Alert className='w-full' onClose={()=>{setShow(false) && setErrorHandler({ hasError: false, message:""})}} severity='error' >{errorHandler.message}</Alert>
                </div>
            </>
        : ""}
    </div>
  )
}

export default ErrorAuth