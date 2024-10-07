import { Button } from "@/components/ui/button";
import { AuthContext } from "@/provider/AuthProvider";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";


const CourseDetails = () => {

    const course = useLoaderData()

    const {img_url, title, author, category, ratings, lession, price, duration} = course;

    return <>
   <div className="grid grid-cols-1 md:grid-cols-2 py-10 gap-6">
    <img
        src={img_url} // img_url from the JSON data
        alt={title} // title of the course used as alt text
        className="h-96 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-96"
    />
    <div className="grid grid-cols-1 items-center">
        <div>
            {/* Title and Author */}
            <span className="text-lg font-medium text-gray-900 block">{title}</span> {/* Course title */}
            <span className="text-sm text-gray-700">by {author}</span> {/* Course author */}

            {/* Category placeholder (assuming you add categories to the JSON later) */}
            <div className="mt-3 text-sm text-gray-700">
                <span className="font-semibold">Category:</span>
                <span className="ml-1 px-3 bg-orange-200 font-bold text-gray-500">{category || "General"}</span> {/* Category */}
            </div>


            {/* Ratings */}
            <div className="mt-6 flex">
                <span className="font-semibold">Ratings:</span>
                <span className="ml-1 text-yellow-500">{ratings}</span> {/* Course rating */}
            </div>

            {/* Lesson Count */}
            <div className="mt-3 text-sm text-gray-700">
                <span className="font-semibold">Lessons:</span>
                <span className="ml-1">{lession}</span> {/* Number of lessons */}
            </div>

            {/* Price and Duration */}
            <div className="mt-3 text-sm text-gray-700">
                <span className="font-semibold">Price:</span>
                <span className="ml-1">{price} USD</span> {/* Course price */}
            </div>
            <div className="mt-3 text-sm text-gray-700">
                <span className="font-semibold">Duration:</span>
                <span className="ml-1">{duration}</span> {/* Duration of the course */}
            </div>
        </div>

        {/* Buttons for Wishlist and Cart */}
        <div className="grid grid-cols-1 md:grid-cols-2 mt-3 gap-4">
            <button
                className="block w-full rounded bg-green-400 p-4 text-sm font-medium transition hover:scale-105"
                // onClick={() => triggerAlert('Added to Wishlist', `${title} - (id:${course_id}) has been successfully added to the Wishlist.`)}
                >
                Wish to Read
            </button>
            <button
                className="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105"
                // onClick={() => triggerAlert('Added to Cart', `${title} - (id:${course_id}) has been successfully added to the Cart.`)}
                >
                Add to Cart
            </button>
        </div>
    </div>
</div>
    </>
}

export const courseDetailsLoader = async ({params}) => {
    const response = await fetch(`http://localhost:5000/courses/${params.id}`);

    if (!response.ok) {
        throw Error("Could not fetch courses.")
    }

    return response.json();
}

export default CourseDetails;