import  Display_limit from './Display_limit';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';

 const Home =() => {
  return (
    <div>
    <div className="bg-gray-100 py-8">
      <div className="flex flex-wrap justify-center">
        <div className="bg-gray-300 mb-5 mr-2 rounded-lg w-1/4 mt-2 p-4 text-center">
          <CountUp start={0} end={524890} duration={3} separator="," suffix="+" className="text-green-600 font-bold text-4xl" />
          <p>ZERO PLASTIC PRODUCTS SOLD</p>
        </div>

        <div className="bg-gray-300 mb-5 mr-2 rounded-lg w-1/4 mt-2 p-4 text-center">
          <CountUp start={0} end={131223} duration={3} separator="," suffix=" Kgs" className="text-green-600 font-bold text-4xl"/>
          <p>PLASTIC POLLUTION PREVENTED</p>
        </div>

        <div className="bg-gray-300 mb-5 rounded-lg w-1/4 mt-2 p-4 text-center">
          <CountUp start={0} end={34993} duration={3} separator="," suffix=" tons" className="text-green-600 font-bold text-4xl" />
          <p>CARBON EMISSIONS PREVENTED</p>
        </div>
      </div>
    </div>

    <div className="bg-gray-200">
        <div className="flex flex-wrap justify-center">
            <div className="mr-2 mt-3 mb-5 rounded-lg">
                <a to='/cart'>
                    <div className="mr-2 mb-5 rounded-lg">
                        <img src="src/assets/Images/terracotta-desktop 2.svg" className="w-60 h-100" alt="Display image" />
                    </div>
                </a>
                
                <a href="">
                    <div className="mr-2 mb-5 rounded-lg">
                        <img src="src/assets/Images/bamboo-desktop 2.svg" className="w-60 h-100" alt="Display image" />
                    </div>
                </a>
            </div>

            <div className="mr-2 mt-3 mb-5 rounded-lg">
                <a href="">
                    <div className="mr-2 mb-5 rounded-lg">
                        <img src="src/assets/Images/tyre-desktop 2.svg" className="w-60 h-100" alt="Display image" />
                    </div>
                </a>

                <a href="">
                    <div className="mr-2 mb-5 rounded-lg">
                        <img src="src/assets/Images/cork-desktop 2.svg" className="w-60 h-100" alt="Display image" />
                    </div>
                </a>
                
            </div>

            <div className="mr-2 mt-3 mb-5 rounded-lg">
                <a href="">
                    <div className="mr-2 mb-5 rounded-lg">
                        <img src="src/assets/Images/fabric-desktop 2.svg" className="w-60 h-100" alt="Display image" />
                    </div>
                </a>

                <a href="">
                    <div className="mr-2 mb-5 rounded-lg">
                        <img src="src/assets/Images/copper-desktop 2.svg" className="w-60 h-100" alt="Display image" />
                    </div>
                </a>
            </div>

            <div className="mr-2 mt-3 mb-5 rounded-lg">
                <a href="">
                    <div className="mr-2 mb-5 rounded-lg">
                        <img src="src/assets/Images/coconut-desktop 2.svg" className="w-60 h-100" alt="Display image" />
                    </div>
                </a>

                <a href="">
                    <div className="mr-2 mb-5 rounded-lg">
                        <img src="src/assets/Images/wood-desktop 2.svg" className="w-60 h-100" alt="Display image" />
                    </div>
                </a>
            </div>

        </div>
    </div>

    <div className="bg-gray-200">
        <div className="flex flex-wrap justify-center">
            <p className="font-bold">New on Earth Heaven</p>

            <Display_limit/>
        </div>
    </div>
    <br />
</div>

  )
}
export default Home;