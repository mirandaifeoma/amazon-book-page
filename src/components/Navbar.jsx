import React from 'react'

export const Navbar = ({ handleClick }) => {
  return (
    <div className='nav'>
      {/* <header className='bg-black'>
        <div className='flex items-center h-16 px-4 mx-auto max-w-screen-xl gap-8 sm:px-6 lg:px-8'>
          <a className='block text-teal-600' href='/'>
            <span className='sr-only'>Home</span>
            <img
              src='data:image/png;base64,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'
              alt=''
              style={{ width: '5vw' }}
            />
          </a>

          <div className='flex items-center justify-end flex-1 md:justify-between'>
            <nav
              className='hidden md:block'
              aria-labelledby='header-navigation'
            >
              <h2 className='sr-only' id='header-navigation'>
                Header navigation
              </h2>

              <ul className='flex items-center text-sm gap-6'>
                <li>
                  <a
                    className='text-rose-300 transition hover:text-violet-700'
                    href='/'
                  >
                    About
                  </a>
                </li>

                <li>
                  <a
                    className='text-rose-300 transition hover:text-violet-700'
                    href='/'
                  >
                    Careers
                  </a>
                </li>

                <li>
                  <a
                    className='text-rose-300 transition hover:text-violet-700'
                    href='/'
                  >
                    History
                  </a>
                </li>

                <li>
                  <a
                    className='text-rose-300 transition hover:text-violet-700'
                    href='/'
                  >
                    Services
                  </a>
                </li>

                <li>
                  <a
                    className='text-rose-300 transition hover:text-violet-700'
                    href='/'
                  >
                    Projects
                  </a>
                </li>

                <li>
                  <a
                    className='text-rose-300 transition hover:text-violet-700'
                    href='/'
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </nav>

            <div className='flex items-center gap-4'>
              <div className='sm:gap-4 sm:flex'>
                <form action=''>
                  <button
                    className='block px-5 py-2.5 text-sm font-medium text-white bg-teal-600 hover:bg-rose-700 hover:text-black transition rounded-md'
                    type='submit'
                    onClick={(e) => {e.preventDefault();handleClick('login')}}
                  >
                    Logout
                  </button>
                </form>

                <a
                  className='hidden sm:block px-5 py-2.5 text-sm font-medium text-teal-600 bg-gray-100 rounded-md hover:text-teal-600/75 transition'
                  href='#'
                >
                  Register
                </a>
              </div>

              <button className='block p-2.5 text-gray-600 transition bg-gray-100 rounded md:hidden hover:text-gray-600/75'>
                <span className='sr-only'>Toggle menu</span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-5 h-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth='2'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
       */}

      <nav class='navbar navbar-expand-lg navbar-light bg-dark myNav'>
        <div class='container-fluid'>
          <a class='navbar-brand' href='#'>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoxmWAjOobKltFNwHRlcEoixdr7M3DKOAf6w&usqp=CAU'
              alt=''
              style={{ width: '5vw', height: '7vh', objectFit: 'cover' }}
            />
          </a>
          <h1 className='text-danger'>AMAZON</h1>
          <button
            class='navbar-toggler bg-danger border-0'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span class='navbar-toggler-icon'></span>
          </button>
          <div class='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul class='navbar-nav me-auto mb-2 mb-lg-0'>
              <li class='nav-item'>
                <a
                  class='nav-link active text-success'
                  aria-current='page'
                  href='#'
                >
                  Home
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link text-success' href='#'>
                  Link
                </a>
              </li>
              <li class='nav-item dropdown '>
                <a
                  class='nav-link dropdown-toggle text-success'
                  href='#'
                  id='navbarDropdown'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  Dropdown
                </a>
                <ul
                  class='dropdown-menu bg-dark'
                  aria-labelledby='navbarDropdown'
                >
                  <li>
                    <a class='dropdown-item text-primary' href='#'>
                      Register
                    </a>
                  </li>
                  <li>
                    <a class='dropdown-item text-primary' href='#'>
                      Contact
                    </a>
                  </li>
                  <li>
                    <hr class='dropdown-divider' />
                  </li>
                  <li>
                    <a class='dropdown-item text-primary' href='#'>
                      Help
                    </a>
                  </li>
                </ul>
              </li>
              <li class='nav-item'>
                
                <a class='nav-link text-dark'>
                  <button
                    className='bg-danger p-1 rounded'
                    type='submit'
                    onClick={(e) => {
                      e.preventDefault()
                      handleClick('login')
                    }}
                  >
                    Logout
                  </button>
                </a>
              </li>
            </ul>
            <form class='d-flex'>
              <input
                class='form-control me-2'
                type='search'
                placeholder='Search'
                aria-label='Search'
              />
              <button class='btn btn-outline-success' type='submit'>
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}
