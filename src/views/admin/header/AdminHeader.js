import React from 'react';

const AdminHeader = () => {
  return <header role="banner">
  <nav class="navbar navbar-expand-lg navbar-dark ">
  <div class="container-fluid">
  <a class="navbar-brand " href="index.html">Quality Knowledge</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample05" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
  </button>
  <div class="navbar-collapse collapse" id="navbarsExample05" >
  <ul class="navbar-nav pl-md-5 ml-auto">
  <li class="nav-item">
  <a class="nav-link" href="/create-post">AddPost</a>
  </li>
  <li class="nav-item">
  <a class="nav-link" href="/view-posts">View Posts</a>
  </li>
  
  {/* {/* <li class="nav-item">
  <a class="nav-link" href="blog.html">Blog</a>
  </li> */}
  <li class="nav-item">
  <a class="nav-link" href="/categories">Categories</a>
  </li> 
  <li class="nav-item">
  <a class="nav-link" href="/sub-categories">Sub-Categories</a>
  </li> 
  </ul>
  <div class="navbar-nav ml-auto">
  <form method="post" class="search-form">
  <i class="fa fa-search icon"></i>
  <input type="text" class="form-control" placeholder="Search..."/>
  </form>
  </div>
  </div>
  </div>
  </nav>
  </header>;
};

export default AdminHeader;
