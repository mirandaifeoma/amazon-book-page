import React from 'react'

export const Navbar = ({ handleClick }) => {
  return (
    <div className='nav'>
      <nav class='navbar navbar-expand-lg navbar-light bg-dark myNav'>
        <div class='container-fluid'>
          <a class='navbar-brand' href='#'>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfZye70btpLWSaUWsd-V6kW8xi_NUKBTRpjWFQSYe-XYsPIDFxezrBY-MJo4kteUeGwe4&usqp=CAU'
              alt=''
              style={{ width: '5vw', height: '7vh', objectFit: 'cover' }}
            />
          </a>
          <h1 className='text-danger'>BOUTIQUE</h1>
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
