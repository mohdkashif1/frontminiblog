
import './App.css';

import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom'
import Home from './views/Home';
import PostPage from './views/PostPage';
import SignIn from './views/admin/adminViews/SignIn';
import Layout from './views/admin/components/Layout';
import AddPost from './views/admin/adminViews/AddPost';
import AdminLayout from './views/admin/adminLayout/AdminLayout';
import AllPosts from './views/admin/adminViews/AllPosts';
import Category from './views/homepage/Category';
import Categories from './views/admin/adminViews/Categories';
import SubCategories from './views/admin/adminViews/SubCategory';
import SignUp from './views/SignUp';
import Login from './views/SignIn';

function App() {
  return (
    <Router> 
    
    <Routes>
  
   <Route path='/' element={<Layout child={<Home/>} />} />
   <Route path='/:id' element={<Layout child={<PostPage/>}/>}/>
   <Route path='/signup' element={<Layout child={<SignUp/>} />}/>
   <Route path='/signin' element={<Layout child={<Login/>} />}/>

   
   <Route path='/admin/signin' element={<SignIn/>}/>
   <Route path='/create-post' element={<AdminLayout child={<AddPost/>} />}/>
   <Route path='/view-posts' element={<AdminLayout child={<AllPosts/>} />}/>
   <Route path='/edit-post/:id' element={<AdminLayout child={<AddPost/>} />}/>
   <Route path='/categories' element={<AdminLayout child={<Categories/>} />}/>
   <Route path='/sub-categories' element={<AdminLayout child={<SubCategories/>} />}/>
  
   </Routes>
   

   <Routes>
   
   </Routes>
   </Router>
  );
}

export default App;
