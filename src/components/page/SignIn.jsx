import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Required")
        .email("Invalid email"),
      password: Yup.string()
        .required('Required')
        .min(8, 'Password is too short - should be 8 characters minimum.')
        .matches(/[a-zA-Z]/, 'Password must contain Latin letters.')
    }),
    onSubmit: () => {
      axios.post('https://reqres.in/api/login', formik.values)
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
  console.log(formik.value);
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
                <label htmlFor="email">Email</label>
                <input
                    className='p-6 rounded-sm border border-gray-400'
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    {...formik.getFieldProps('email')}
                />
                {formik.touched.email && formik.errors.email ? <div className='text-red-500'>{formik.errors.email}</div> : null}
                <label htmlFor="email">Password</label>
                <input
                    className='p-6 rounded-sm border border-gray-400'
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    {...formik.getFieldProps('password')}
                />
                {formik.touched.password && formik.errors.password ? <div className='text-red-500'>{formik.errors.password}</div> : null}
            </div>
            <div>
                <button type="submit" className='w-full p-3 bg-blue-500 my-5 text-white rounded-lg'>Submit</button>
            </div>
        </form>
      </>

  )
}

export default SignIn