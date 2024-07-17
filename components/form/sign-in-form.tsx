'use client';
import {useReducer, useState} from 'react';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Link from 'next/link';
import InputWithIconTemplate from './input-with-icon-template';
import FormSubmitButton from './form-submit-button';
interface SignInFields {
  email: string;
  password: string;
}
interface Action {
  type: string;
  payload: string;
}

export default function SignInForm() {
  const initialFormState: SignInFields = {email: '', password: ''};
  const reducer = (state: SignInFields, action: Action) => {
    switch (action.type) {
      case 'SET_EMAIL':
        return {...state, email: action.payload};
      case 'SET_PASSWORD':
        return {...state, password: action.payload};
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialFormState);
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const handleSignIn = () => {
    console.log(state);
  };

  return (
    <div className='w-full'>
      <div className='bg-transparent rounded-lg flex flex-col px-3'>
        <span className='text-zinc-800 dark:text-zinc-100 font-semibold text-3xl'>Welcome back!</span>
        <span className='text-zinc-500 text-lg'>Please sign in to your account.</span>
        <div className='flex flex-col space-y-6 py-8'>
          <InputWithIconTemplate icon={<MailOutlineIcon className='text-zinc-50 dark:text-zinc-400' />}>
            <input
              className=' outline-none bg-transparent text-zinc-800 dark:text-zinc-300 dark:placeholder:text-zinc-500'
              placeholder='example@chapp.com'
              type='email'
              onChange={(e) => {
                dispatch({type: 'SET_EMAIL', payload: e.target.value});
              }}
            />{' '}
          </InputWithIconTemplate>
          <InputWithIconTemplate icon={<LockIcon className='text-zinc-50 dark:text-zinc-400' />}>
            <input
              className=' outline-none bg-transparent text-zinc-800 dark:text-zinc-300 dark:placeholder:text-zinc-500'
              placeholder='Password'
              type={`${passwordVisible ? 'text' : 'password'}`}
              onChange={(e) => {
                dispatch({type: 'SET_PASSWORD', payload: e.target.value});
              }}
            />
            <button className='pr-2 flex items-center' onClick={() => setPasswordVisible(!passwordVisible)}>
              {!passwordVisible ? (
                <VisibilityOffIcon className='text-zinc-400 text-xl' />
              ) : (
                <VisibilityIcon className='text-zinc-400 text-xl' />
              )}
            </button>
          </InputWithIconTemplate>
        </div>
      </div>
      <div className='flex justify-center space-y-2 px-3 pb-4'>
        <FormSubmitButton text={'Sign in'} onClick={handleSignIn} />
      </div>
      <div className='px-3'>
        <span className='dark:font-thin text-zinc-700 dark:text-zinc-300'>
          Don't have an account yet?{' '}
          <Link href='/signup' className='text-sky-500 font-semibold dark:font-medium'>
            Sign up here!
          </Link>
        </span>
      </div>
    </div>
  );
}
