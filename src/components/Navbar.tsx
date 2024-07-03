const Navbar = () => {
  return (
    <div className="w-screen h-20 max-w-7xl bg-gray-300 shadow-lg rounded-lg flex justify-between items-center">
      <span className="text-lg pl-8">Filipe Nogueira</span>
      <div className="pr-8">
        <span>Home</span>
        <span className="px-8">Education</span>
        <span>Experience</span>
        <span className="pl-8">Contact</span>
        {/* TODO darkmode*/}
      </div>
    </div>
  )
}

export default Navbar