import {useInView} from "framer-motion";


export default function CarouselDots({ ref, totalSlides, currentSlide, setCurrentSlide }) {
    const isInView = useInView(ref, {once: true});

    return (
        <div className="absolute flex bottom-0 w-full items-center justify-center gap-x-4">
            {Array.from({ length: totalSlides }).map((_, index) => (
                <div
                    key={index}
                    style={{
                          transform: isInView ? "none" : "translateY(400px)",
                          opacity: isInView ? 1 : 0,
                          transition: "all 1s ease-in-out 0.2s",
                      }}
                >
                    <button
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 outline outline-2 outline-offset-4 rounded-full bg-foreground transition-colors ${index === currentSlide ? 'outline-green-500' : 'outline-transparent'}`}
                    >
                    </button>
                </div>
            ))}
        </div>
    )

}