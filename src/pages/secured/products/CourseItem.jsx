import { Avatar } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Image } from "@radix-ui/react-avatar"
import { StampIcon, StarIcon } from "lucide-react"
import { Link } from "react-router-dom"
const CourseItem = ({course}) => {

    return (
  <div className="block rounded-lg p-4 shadow-sm shadow-indigo-400">
  <img
    src={course.img_url}
      alt={course.title}
    
    className="h-56 w-full rounded-md object-cover"
  />

  <div className="mt-2">
    <dl>
      <div>
        <dt className="sr-only">Price</dt>

        <dd className="text-sm text-gray-500">${course.price}</dd>
      </div>

      <div>
        <dt className="sr-only">Title</dt>

        <dd className="font-medium">{course.title}</dd>
      </div>
    </dl>

    <div className="mt-6 flex items-center gap-8 text-xs">
      <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
        <StarIcon className="text-indigo-700 w-6"/>
        <div className="mt-1.5 sm:mt-0">
          <p className="text-gray-500">Raitings</p>

          <p className="font-medium">{course.ratings}</p>
        </div>
      </div>

      <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
        <svg
          className="size-4 text-indigo-700"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>

        <div className="mt-1.5 sm:mt-0">
          <p className="text-gray-500">Level</p>

          <p className="font-medium">{course.level}</p>
        </div>
      </div>

      <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
        <svg
          className="size-4 text-indigo-700"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>

        <div className="mt-1.5 sm:mt-0">
          <p className="text-gray-500">Enrolled By</p>

          <p className="font-medium">{course.student} Students</p>
        </div>
      </div>
    </div>
  </div>
  <Link className="grid items-center mt-4" to={`/products/${course.course_id}`}><Button>View Details</Button></Link>

</div>)
}

export default CourseItem