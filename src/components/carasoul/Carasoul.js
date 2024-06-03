import React from 'react'
import Carousel from 'react-grid-carousel'

const Carasoul = ({data}) => {
    // const images = allImages.map((number) => ({
    //     src: number.url
    //   }));
    
    return (
        <Carousel  cols={3} rows={1}   gap={20} loop>
        {data&&data.map((i,idx)=>{
            return  <Carousel.Item>
            
              <img  style={{objectFit:'cover'}} alt='' width="100%" height='100%' src={i.image}/>
              <div  className='center-text'>
              <h5 style={{color:'white'}}>{i.title}</h5>
              </div>
          
          
                    </Carousel.Item>
        })}
       
        
       
      </Carousel>
    )
}

export default Carasoul
