declare global {
    namespace JSX {
        interface IntrinsicElements {
            "swiper-container": React.DetailedHTMLProps<
                React.HTMLAttributes<HTMLElement>,
                HTMLElement
            >;
            "swiper-slide": React.DetailedHTMLProps<
                React.HTMLAttributes<HTMLElement>,
                HTMLElement
            >;
        }
    }
}

import { useRef, useEffect } from "react";
import { register } from "swiper/element/bundle";
//import { Navigation, Pagination } from "swiper/modules";
register();

const App = () => {
    const swiperElRef = useRef(null);

    useEffect(() => {
        // listen for Swiper events using addEventListener
        //@ts-ignore
        swiperElRef.current.addEventListener("progress", (e) => {
            const [swiper, progress] = e.detail;
            console.log(progress);
        });
        //@ts-ignore
        swiperElRef.current.addEventListener("slidechange", (e) => {
            console.log("slide changed");
        });
    }, []);

    return (
        <swiper-container
            ref={swiperElRef}
            slides-per-view="3"
            //@ts-ignore
            navigation="true"
            pagination="true"
            spaceBetween={"50"}
            
        >
            <swiper-slide>
                <div className="w-full h-screen flex items-center justify-center">
                    <img
                        className="h-full w-max-full object-cover"
                        src="https://picsum.photos/900"
                    />
                </div>
            </swiper-slide>
            <swiper-slide>
                <div className="w-full h-screen flex items-center justify-center">
                    <img
                        className="h-full w-max-full object-cover"
                        src="https://picsum.photos/901"
                    />
                </div>
            </swiper-slide>
            <swiper-slide>
                <div className="w-full h-screen flex items-center justify-center">
                    <img
                        className="h-full w-max-full object-cover"
                        src="https://picsum.photos/902"
                    />
                </div>
            </swiper-slide>
        </swiper-container>
    );
};

export default App;

{
    /* <swiper-container
ref={swiperElRef}

slides-per-view="3"
//@ts-ignore
navigation="true"
pagination="true"
spaceBetween={50}
>
<swiper-slide>
    <div className="w-full h-screen flex items-center justify-center">
                <img
                    className="h-full w-max-full object-cover"
                    src="https://picsum.photos/900"
                />
            </div>
</swiper-slide>
<swiper-slide>
    <img className="h-full w-max-full object-cover" src="https://picsum.photos/601" />
</swiper-slide>
<swiper-slide>
    <img className="h-full w-max-full object-cover" src="https://picsum.photos/602" />
</swiper-slide>
</swiper-container> */
}
