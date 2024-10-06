import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center" >
      <Card className="w-80 border shadow-lg">
        <CardHeader>
          <CardTitle className="text-lg font-bold">Card Title</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <img
            className="h-40 w-full object-cover"
            src="https://images.pexels.com/photos/25185199/pexels-photo-25185199/free-photo-of-smiling-woman-with-yellow-wildflowers-in-her-hair.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Card Image"
          />
          <p className="text-gray-700">
            This is a short description of the card content. You can customize it
            as needed.
          </p>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button>Click Me</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
