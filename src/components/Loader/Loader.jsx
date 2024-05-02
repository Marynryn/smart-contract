import { ThreeCircles } from "react-loader-spinner"



const Loader = () => {
    return (
        <div className="block justify-center items-center m-auto ">
            <ThreeCircles
                height="100"
                width="100"
                color="#4fa94d"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="three-circles-rotating"
                outerCircleColor=""
                innerCircleColor=""
                middleCircleColor=""

            /></div>
    )
}
export default Loader