import { Button } from "@material-tailwind/react";

const Home = () => {
  return (
    <div className="w-full h-screen bg-gray-200 flex justify-center items-center">
        <div className="flex flex-col mr-40 justify-center items-center">
            <span className="text-5xl">Hello, I'm Filipe</span>
            <span className="text-lg my-2">A creative Developer and Designer.</span>
            <Button className="rounded-full w-40 h-10 bg-blue-500 text-white">Check my work</Button>
        </div>
        <img
            className="h-96 w-96 rounded-full object-cover object-center"
            src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
            alt="nature image"
        />
    </div>
  )
}

export default Home