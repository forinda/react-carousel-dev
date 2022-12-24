import "../App.css";

function Carousel() {
  return (
    <div className="wrapper">
    <input checked type="radio" name="slider" id="slide1" />
    <input type="radio" name="slider" id="slide2" />
    <input type="radio" name="slider" id="slide3" />
    <input type="radio" name="slider" id="slide4" />
    <input type="radio" name="slider" id="slide5" />
  
    <div className="slider-wrapper">
      <div className="inner">
        <article>
          <div className="info top-left">
            <h3>Malacca</h3></div> 
          <img src="https://farm9.staticflickr.com/8059/28286750501_dcc27b1332_h_d.jpg" />
        </article>
  
        <article>
          <div className="info bottom-right">
            <h3>Cameron Highland</h3></div>
          <img src="https://farm6.staticflickr.com/5812/23394215774_b76cd33a87_h_d.jpg" />
        </article>
  
        <article>
          <div className="info bottom-left">
            <h3>New Delhi</h3></div>
          <img src="https://farm8.staticflickr.com/7455/27879053992_ef3f41c4a0_h_d.jpg" />
        </article>
  
        <article>
          <div className="info top-right">
            <h3>Ladakh</h3></div>
          <img src="https://farm8.staticflickr.com/7367/27980898905_72d106e501_h_d.jpg" />
        </article>
  
        <article>
          <div className="info bottom-left">
            <h3>Nubra Valley</h3></div>
          <img src="https://farm8.staticflickr.com/7356/27980899895_9b6c394fec_h_d.jpg" />
        </article>
      </div>
    </div>
  
    <div className="slider-prev-next-control">
      <label htmlFor="slide1"></label>
      <label htmlFor="slide2"></label>
      <label htmlFor="slide3"></label>
      <label htmlFor="slide4"></label>
      <label htmlFor="slide5"></label>
    </div>
  
    <div className="slider-dot-control">
      <label htmlFor="slide1"></label>
      <label htmlFor="slide2"></label>
      <label htmlFor="slide3"></label>
      <label htmlFor="slide4"></label>
      <label htmlFor="slide5"></label>
    </div>
</div>
  )
}

export default Carousel