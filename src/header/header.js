import React from 'react'
import './header.css'
const Header =()=>{
    return(
        <>
        <nav class="navbar navbar-expand-lg"  style={{backgroundColor:'#fff', }}>
  <div class="container-fluid">
    <a class="navbar-brand Brand" href="/" >Navbar</a>
    <button class="navbar-toggler toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <form class="d-flex" role="search">
        <input class="form-control me-6" type="search" placeholder="Search" aria-label="Search"/>
      </form>
    </div>
</nav>
        </>
    )
}
export default Header;