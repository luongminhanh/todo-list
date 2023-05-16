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
    onSubmit: async () => {
      try {
        const response = await axios.post("https://test-react.agiletech.vn/auth/login", formik.values)
        if (response.data.code == 401) {
          alert("Wrong username!");
        } 
        else {
          const accessToken = response.data.accessToken;
          console.log(accessToken);
          localStorage.setItem('accessToken', accessToken);
          alert("Login successfully!");
          navigate("/");
        }
      }
      catch (error) {
        console.log(error);
      }
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
          <label htmlFor="usename" className='text-xl'>Username</label>
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
          <button type="submit" className='w-full p-3 bg-purple-600 my-5 text-white text-xl rounded-full'>Submit</button>
        </div>
      </form>
    </>

  )
}

export default SignIn