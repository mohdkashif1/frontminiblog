import React from 'react'
import Footer from '../components/footer/Footer'
import Category from './homepage/Category'
import MainContent from './homepage/MainContent'
import TopPosts from './homepage/TopPosts'

const Home = () => {
    return (
        <div >
            <MainContent />
            <div className='middle'>
            <TopPosts />
            </div>
            <div className='category-container'> 
            <Category/>
            </div>


        </div>
    )
}

export default Home
