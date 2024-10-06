import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea";


function ContactUs() {
  return (
    <section className="flex justify-center items-center py-12 bg-gray-100">
      <Card className="max-w-3xl p-8 bg-white shadow-lg rounded-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold mb-4">Contact Us</CardTitle>
          <CardDescription className="text-lg text-gray-600">
            Have any questions? We'd love to hear from you! Please fill out the form below.
          </CardDescription>
        </CardHeader>

        <CardContent className="mt-6 space-y-4">
          <form className="space-y-6">
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-2" htmlFor="name">Your Name</label>
              <Input id="name" type="text" placeholder="Enter your name" required className="p-3 border rounded-md" />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-2" htmlFor="email">Your Email</label>
              <Input id="email" type="email" placeholder="Enter your email" required className="p-3 border rounded-md" />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-2" htmlFor="message">Message</label>
              <Textarea id="message" placeholder="Write your message here..." required className="p-3 border rounded-md" rows={5} />
            </div>

            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold p-3 rounded-md">
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}

export default ContactUs;
