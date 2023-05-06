import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: ''
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required("Required")
    }),
    onSubmit: () => {
      fetch('https://test-react.agiletech.vn/Auth/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formik.values)
        }
      )
        .then(res => {
          console.log(res);
          navigate("/signin");
        }
        )
        .catch(error => {
          console.log(error);
          navigate("/");
        }
        )
    }
  })

  return (
    <>
      <div className='nav-bar'>
        <div className='nav-bar_logo'>
          <div className='nav-bar_logo-short'></div>
          <div className='nav-bar_logo-tall'></div>
        </div>
      </div>
      <form
        onSubmit={formik.handleSubmit}
        className='p-10 w-full max-w-[500px] mx-auto'
        autoComplete="off">
        <div className='flex flex-col gap-4'>
          <label htmlFor="usename">Username</label>
          <input
            className='p-6 rounded-sm border border-gray-400'
            type="text"
            id="username"
            placeholder=""
            {...formik.getFieldProps('username')}
          />
          {formik.touched.username && formik.errors.username ? <div className='text-red-500'>{formik.errors.username}</div> : null}
        </div>
        <div>
          <button type="submit" className='w-full p-3 bg-blue-500 my-5 text-white rounded-lg'>Submit</button>
        </div>
      </form>
    </>

  )
}

export default SignIn