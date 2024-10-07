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
import { Link } from "react-router-dom"
const CourseItem = ({course}) => {

    return <Card className="flex flex-col h-full">
    <CardHeader>
      {/* <Image
        src={course.img_url}
        alt={course.title}
        className="h-48 w-full object-cover"
        // You can adjust width/height as needed
      /> */}

<img
      className="w-full h-48 object-cover rounded-t"
      src={course.img_url}
      alt={course.title}
    />

    </CardHeader>
    <CardContent className="flex-1">
      <CardTitle>{course.title}</CardTitle>
      <p className="text-gray-600">{course.details}</p>
      <p className="mt-2 text-sm text-gray-500">{course.level}</p>
    </CardContent>
    <CardFooter>
      <div className="flex justify-between items-center">
        <span className="font-bold">${course.price}</span>
      
        <Link to={`/products/${course.course_id}`}><Button variant="outline">View Details</Button></Link>
      </div>
    </CardFooter>
  </Card>
}

export default CourseItem