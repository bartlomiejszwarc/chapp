'use client';
import {useReducer, useState} from 'react';
import FormSubmitButton from './form-submit-button';
import Link from 'next/link';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import InputWithIconTemplate from './input-with-icon-template';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockIcon from '@mui/icons-material/Lock';
import BadgeIcon from '@mui/icons-material/Badge';

interface SignUpFields {
  email: string;
  name: string;
  password: string;
  repeatPassword: string;
}
interface Action {
  type: string;
  payload: string;
}
export default function SignUpForm() {
  const initialFormState: SignUpFields = {email: '', name: '', password: '', repeatPassword: ''};
  const reducer = (state: SignUpFields, action: Action) => {
    switch (action.type) {
      case 'SET_EMAIL':
        return {...state, email: action.payload};
      case 'SET_NAME':
        return {...state, name: action.payload};
      case 'SET_PASSWORD':
        return {...state, password: action.payload};
      case 'SET_REPEAT_PASSWORD':
        return {...state, repeatPassword: action.payload};
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialFormState);
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const handleSignUp = () => {
    console.log(state);
  };
  return (
    <div className='w-full'>
      <div className='bg-transparent rounded-lg flex flex-col px-3'>
        <span className='text-zinc-800 dark:text-zinc-100 font-semibold text-3xl'>Join our community!</span>
        <span className='text-zinc-500 text-lg'>Create an account to get started.</span>
        <div className='flex flex-col space-y-6 py-8'>
          <InputWithIconTemplate icon={<MailOutlineIcon className='text-zinc-50 dark:text-zinc-400' />}>
            <input
              className='w-full h-full outline-none bg-transparent text-zinc-800 dark:text-zinc-300 dark:placeholder:text-zinc-500'
              placeholder='E-mail'
              type='email'
              onChange={(e) => {
                dispatch({type: 'SET_EMAIL', payload: e.target.value});
              }}
            />{' '}
          </InputWithIconTemplate>
          <InputWithIconTemplate icon={<BadgeIcon className='text-zinc-50 dark:text-zinc-400' />}>
            <input
              className='w-full h-full outline-none bg-transparent text-zinc-800 dark:text-zinc-300 dark:placeholder:text-zinc-500'
              placeholder='Your name'
              type='text'
              onChange={(e) => {
                dispatch({type: 'SET_NAME', payload: e.target.value});
              }}
            />{' '}
          </InputWithIconTemplate>
          <InputWithIconTemplate icon={<LockIcon className='text-zinc-50 dark:text-zinc-400' />}>
            <input
              className='w-full h-full outline-none bg-transparent text-zinc-800 dark:text-zinc-300 dark:placeholder:text-zinc-500'
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
          <InputWithIconTemplate icon={<LockIcon className='text-zinc-50 dark:text-zinc-400' />}>
            <input
              className='w-full h-full outline-none bg-transparent text-zinc-800 dark:text-zinc-300 dark:placeholder:text-zinc-500'
              placeholder='Repeat password'
              type={`${passwordVisible ? 'text' : 'password'}`}
              onChange={(e) => {
                dispatch({type: 'SET_REPEAT_PASSWORD', payload: e.target.value});
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
        <FormSubmitButton text={'Sign in'} onClick={handleSignUp} />
      </div>
      <div className='px-3'>
        <span className='dark:font-thin text-zinc-700 dark:text-zinc-300'>
          Already have an account?{' '}
          <Link href='/login' className='text-sky-500 font-semibold dark:font-medium'>
            Sign in
          </Link>
        </span>
      </div>
    </div>
  );
}
