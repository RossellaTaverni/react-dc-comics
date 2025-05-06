import React from 'react'

const Header = () => {
  return (
    <header>
       <div className='container'>
          <div className="row justify-between align-center">
            <div className="col-50">
                <img src="/dc-logo.png" alt="DC comics" />
            </div>
            <div className="col-50">Menu</div>
          </div>
       </div>
    </header>
  )
}

export default Header