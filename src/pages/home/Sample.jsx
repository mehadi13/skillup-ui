import {
  Card,
  CardContent
} from "@/components/ui/card"

const Sample = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Our Courses</h2>
        <p className="text-gray-600 mt-2">Explore our top courses designed to help you master your skills</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Sample Product Image 1 */}
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Course 1"
              className="w-full h-auto"
            />
          </CardContent>
        </Card>

        {/* Sample Product Image 2 */}
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Course 2"
              className="w-full h-auto"
            />
          </CardContent>
        </Card>

        {/* Sample Product Image 3 */}
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Course 3"
              className="w-full h-auto"
            />
          </CardContent>
        </Card>

        {/* Sample Product Image 4 */}
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Course 4"
              className="w-full h-auto"
            />
          </CardContent>
        </Card>

        {/* Sample Product Image 5 */}
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Course 5"
              className="w-full h-auto"
            />
          </CardContent>
        </Card>

        {/* Sample Product Image 6 */}
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Course 6"
              className="w-full h-auto"
            />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default Sample