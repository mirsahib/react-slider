import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const App = () => {
    return (
        <Carousel
            //autoPlay={true}
            //infiniteLoop={true}
            showThumbs={false}
            showIndicators={true}
            showStatus={false}
        >
            <div className="w-full h-[500px] flex items-center justify-center">
                <img
                    className="h-full max-w-full object-cover"
                    src="https://picsum.photos/600"
                />
                <div className="absolute left-20 top-20 p-4 text-left w-1/3 text-white">
                    <h4 className="mb-4 px-4 py-2 rounded-full bg-blue-500 text-white inline-block max-w-max">
                        Perfomatech
                    </h4>
                    <p className="mb-2 text-3xl font-normal">
                        Research and Innovation
                    </p>
                    <p className="mb-8 text-lg lg:text-2xl">
                        Company culture oriented towards research and innovation
                    </p>
                    <button className="px-2 py-2 lg:w-7/12 rounded-sm bg-blue-500">About</button>
                </div>
            </div>
            <div className="w-full h-[500px] flex items-center justify-center">
                <img
                    className="h-full max-w-full object-cover"
                    src="https://picsum.photos/601"
                />
                {/* <p className="legend">Legend 1</p> */}
            </div>
            <div className="w-full h-[500px] flex items-center justify-center">
                <img
                    className="h-full max-w-full object-cover"
                    src="https://picsum.photos/602"
                />
                {/* <p className="legend">Legend 1</p> */}
            </div>
        </Carousel>
    );
};

export default App;
