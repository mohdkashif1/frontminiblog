import React from 'react'
import Post from '../../components/post/Post'

const RelatedPost = () => {
    const data=[
        {
            id:1,
            date:"22 jan 2022",
            title:'Bok Choy, Golden Beet, Mushroom Pork Dumplings',
            description:'A vegetable forward dumpling filled with bok choy, shiitake mushrooms, roasted golden beets and all tied together with classic ground pork. ',
            image:'https://images.unsplash.com/photo-1620766165457-a8025baa82e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJlJTIwb2YlMjBpbmRpYXxlbnwwfHwwfHw%3D&w=1000&q=80'
        },
        {
            id:2,
            date:"21 jan 2022",
            title:'How to make chicken butter naam is less than a hour?',
            description:'A vegetable forward dumpling filled with bok choy, shiitake mushrooms, roasted golden beets and all tied together with classic ground pork. ',
            image:'https://i.pinimg.com/originals/9c/b0/70/9cb070d62dc738a0c3a1a408d68e4af5.jpg'
        },
        {
            id:3,
            date:"21 jan 2022",
            title:'How to make chicken butter naam is less than a hour?',
            description:'A vegetable forward dumpling filled with bok choy, shiitake mushrooms, roasted golden beets and all tied together with classic ground pork. ',
            image:'https://image.shutterstock.com/image-photo/3d-wallpaper-design-waterfall-sea-260nw-1380925703.jpg'
        }
    ]
    return (
        <div className='top-post-wrapper '>

        <h1 className='popular-posts-heading text-center'>Related Posts</h1>
        <p className='popular-posts-para'>Posts you might wanna see!</p>
        <div className='row'>
        {data.map((d)=>{
        return <Post
         id={d.id}   
         title={d.title}
         description={d.description}  
         image={d.image}  
         />
        })}
        </div>
    </div>
    )
}

export default RelatedPost
