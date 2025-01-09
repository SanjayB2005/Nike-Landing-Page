import Button from "../Buttons/Button"
import { arrowRight } from "../assets/icons"
import { statistics } from "../Constants/index"


const Hero = () => {
  return (
    <section className='flex w-full xl:flex-row flex-col min-h-screen gap-10 max-container  justify-center '>
      <div className=" relative flex flex-col justify-center items-start xl:w-2/5 w-full max-xl:padding-x pt-28">
          <p>Our Summer Collections</p>
          <h1>
            <span>The New Arrival</span>
            <span>Nike</span>
            Shoes
          </h1>
          <p>Discover stylish Nike arrivals, 
            quality comfort, and innovation 
            for your active life.</p>
            <Button name='Shop Now' iconUrl={arrowRight} />
            <div className="flex justify-start items-start flex-wrap mt-20 gap-16">
                {statistics.map((stat, index) => 
                  <div key={index}>
                    <p>{stat.value}</p>
                    <p>{stat.label}</p>
                  </div>
                )}
            </div>
      </div>

    </section>
  )
}

export default Hero