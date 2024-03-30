import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Home() {
  return (
    <div>
    <div className="bg-gray-100">
        <div className="flex flex-wrap justify-center">

            <div className="bg-gray-300 mb-5 mr-2 rounded-lg w-1/4 mt-2">
                <h2 className="text-center text-green-600 font-bold">524,890+</h2>
                <p className="text-center">ZERO PLASTIC PRODUCTS SOLD</p>
            </div>

            <div className="bg-gray-300 mb-5 mr-2 rounded-lg w-1/4 mt-2">
                <h2 className="text-center text-green-500">131,223 kgs</h2>
                <p className="text-center">PLASTIC POLLUTION PREVENTED</p>
            </div>

            <div className="bg-gray-300 mb-5 rounded-lg w-1/4 mt-2">
                <h2 className="text-center text-green-500">34,993 tons</h2>
                <p className="text-center">CARBON EMISSIONS PREVENTED</p>
            </div>

        </div>
    </div>

    <div className="bg-gray-200">
        <div className="flex flex-wrap justify-center">
            <div className="mr-2 mt-3 mb-5 rounded-lg">
                <a href=''>
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


        </div>
    </div>
    <br />
</div>

  )
}
