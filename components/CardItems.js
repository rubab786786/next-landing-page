import React from 'react'

const CardItems = ({heading,img}) => {
    return (
        <>
         {/* <div className="industries_slide w-slide">
             <div className="lop"> */}
                <h1 className="heading-6" style={{ textAlign: "left" }}>{heading}</h1>
                <img loading="lazy" src={img} alt="" className="image-13" />
             {/* </div>
         </div> */}
        </>
    )
}

export default CardItems