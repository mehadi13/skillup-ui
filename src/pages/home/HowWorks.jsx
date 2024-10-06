import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

function HowWorks() {
  return (
    <section className="py-12 bg-white">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">How It Works</h2>
        <p className="text-gray-600 mt-2">Follow these simple steps to get started with our platform</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Step 1 */}
        <Card className="bg-gray-50 p-6">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Step 1: Sign Up</CardTitle>
            <CardDescription className="text-gray-600">
              Create a free account by signing up with your email or social media.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Fill in your basic details and confirm your email to complete the registration process.</p>
          </CardContent>
        </Card>

        {/* Step 2 */}
        <Card className="bg-gray-50 p-6">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Step 2: Browse Courses</CardTitle>
            <CardDescription className="text-gray-600">
              Explore our wide range of courses tailored to your learning goals.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Search for the courses that interest you, or filter by category and skill level.</p>
          </CardContent>
        </Card>

        {/* Step 3 */}
        <Card className="bg-gray-50 p-6">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Step 3: Start Learning</CardTitle>
            <CardDescription className="text-gray-600">
              Enroll in a course and start learning at your own pace.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Access course materials, track your progress, and engage with instructors.</p>
          </CardContent>
        </Card>

        {/* Step 4 */}
        <Card className="bg-gray-50 p-6">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Step 4: Complete Assignments</CardTitle>
            <CardDescription className="text-gray-600">
              Apply what you’ve learned by completing course assignments.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Get feedback from instructors and improve your skills with practical exercises.</p>
          </CardContent>
        </Card>

        {/* Step 5 */}
        <Card className="bg-gray-50 p-6">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Step 5: Earn a Certificate</CardTitle>
            <CardDescription className="text-gray-600">
              Receive a certificate upon course completion.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Showcase your achievement to potential employers or for personal growth.</p>
          </CardContent>
        </Card>

        {/* Step 6 */}
        <Card className="bg-gray-50 p-6">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Step 6: Keep Learning</CardTitle>
            <CardDescription className="text-gray-600">
              Continue exploring new topics to expand your knowledge.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Stay updated with the latest courses and trends in your field of interest.</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default HowWorks;
