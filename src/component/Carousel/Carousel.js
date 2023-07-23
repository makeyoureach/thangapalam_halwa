import store1 from "../../assests/sel1.jpg"
const Carousel = () => {
  return (
    <>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-ride="carousel"

        style={{margin:"10px"}}
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src={store1} alt="First slide"  width="400px" height="600px"/>
            <div class="carousel-caption d-none d-md-block">
              <h5>...</h5>
              <p>...</p>
            </div>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={store1} alt="Second slide"  width="400px" height="600px" />
            <div class="carousel-caption d-none d-md-block">
              <h5>...</h5>
              <p>...</p>
            </div>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={store1} alt="Third slide" width="400px" height="600px" />
            <div class="carousel-caption d-none d-md-block">
              <h5>...</h5>
              <p>...</p>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </>
  );
};

export default Carousel;
