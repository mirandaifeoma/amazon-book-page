import React, {useState, useEffect} from 'react';

export const Login = ({handleClick}) => {
    const [user, setUser] = useState({email: '', password: '', });
    const [userError, setUserError] = useState({});
    const [submit, setSubmit] = useState(false);
  const [validatedItems, setValidatedItems] = useState([])


    const submitAll = () => {
      console.log(user)
    }

    const handleChange = (e) => {
      const { name, value } = e.target
      setUser({ ...user, [name]: value })
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        setUserError(validate(user))
        setSubmit(true);
        
    // validatedItems.length = 2 ? '' : handleClick('dashboard')

    if (validatedItems.length !== 2) {
     return handleClick('dashboard')
    } else {
      return ''
    }
    }

    const validate = (values) =>{
        const error = {}
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i

        if (!values.email) {
          error.email = 'Input Email'
          setValidatedItems(validatedItems.push(1))

        } else if (!regex.test(values.email)) {
          error.email = 'Invalid email format'
        }else if (values.email) {
        }

        if (!values.password) {
          error.password = 'Input password'
          setValidatedItems(validatedItems.push(2))
        } else if (values.password.length < 8) {
          error.password = 'Password must be up to eight characters!'
        }else if (values.email) {
          
        }

        return error
    }

    useEffect(() => {
      if (Object.keys(userError).length === 0 && submit) {
        submitAll()
      }
    }, [userError])

  return (
    <div>
      <section className='relative flex flex-wrap lg:h-screen lg:items-center bg-black login'>
        <div className='w-full px-4 py-12 lg:w-1/2 sm:px-6 lg:px-8 sm:py-16 lg:py-24 loginForm'>
          <div className='max-w-lg mx-auto text-center'>
            <h1 className='text-2xl font-bold sm:text-3xl'>
              Get started today with Boutique!
            </h1>

            <p className='mt-4 text-gray-500'>
              Boutique symbol represents those who are paying a monthly fee to
              get free shipping and fast delivery.
            </p>
          </div>

          <form
            action=''
            className='max-w-md mx-auto mt-8 mb-0 space-y-4'
            onSubmit={handleSubmit}
          >
            <div>
              <label htmlFor='email' className='sr-only'>
                Email
              </label>

              <div className='relative'>
                <input
                  type='email'
                  name='email'
                  id='email'
                  value={user.email}
                  className='w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm'
                  placeholder='Enter email'
                  onChange={handleChange}
                />

                <span className='absolute inset-y-0 inline-flex items-center right-4'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-5 h-5 text-gray-400'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207'
                    />
                  </svg>
                </span>
              </div>
              {userError.email && <span>{userError.email}</span>}
            </div>
            <div>
              <label htmlFor='password' className='sr-only'>
                Password
              </label>
              <div className='relative'>
                <input
                  type='password'
                  name='password'
                  id='password'
                  value={user.password}
                  className='w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm'
                  placeholder='Enter password'
                  onChange={handleChange}
                />

                <span className='absolute inset-y-0 inline-flex items-center right-4'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-5 h-5 text-gray-400'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                    />
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                    />
                  </svg>
                </span>
              </div>
              {userError.password && <span>{userError.password}</span>}
            </div>

            <div className='flex items-center justify-between'>
              <p className='text-sm text-gray-500'>
                No account?
                <button
                  className='underline text-red-900'
                  type='submit'
                  onClick={() => handleClick('form')}
                >
                  Sign up
                </button>
              </p>

              <button
                type='submit'
                className='inline-block px-5 py-3 ml-3 text-sm font-medium text-white bg-blue-500 rounded-lg'
                // onClick={handleClick('dashboard')}
              >
                Sign in
              </button>
            </div>
          </form>
        </div>

        <div className='relative w-full h-64 sm:h-96 lg:w-1/2 lg:h-full'>
          <img
            className='absolute inset-0 object-cover w-full h-full'
            src='https://thumbs.dreamstime.com/b/b-letter-boutique-logo-design-159417325.jpg'
            alt=''
          />
        </div>
      </section>
    </div>
  )
}

