import React from 'react';
import './Gallery.scss'
import img1 from '../../assets/jonathan-borba-vk2Xwf23rOQ-unsplash.jpg'
import img2 from '../../assets/louis-hansel-uivcfHFZZcg-unsplash.jpg'
import img3 from '../../assets/mike-kenneally-tNALoIZhqVM-unsplash.jpg'
import img4 from '../../assets/milo-miloezger-rKYRJu0n06Y-unsplash.jpg'

function Gallery() {
  return (
    <div className="gallery">

      <div className="gallery-wrap">
      
      <div className="gallery__images">
      <img className="gallery-img1" src={img1} alt=''></img>
      <div className="gallery__text">LIVRARI</div>
      </div>
      
      <div className="gallery__images">
      <img className="gallery-img2" src={img2} alt=''></img>
      <div className="gallery__text">COFFEE BOX</div>
      </div>
      
      <div className="gallery__images">
      <img className="gallery-img3" src={img3} alt=''></img>
      <div className="gallery__text">DESCARCA RETETE</div>
      </div>
      
      <div className="gallery__images">
      <img className="gallery-img4" src={img4} alt=''></img>
      <div className="gallery__text">CAFEA PENTRU ACASA</div>
      </div>

      </div>
    
    </div>
  )
}

export default Gallery
