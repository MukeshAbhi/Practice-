 const LandingPage = ()=>{
    return(
        <>
        <nav className="bg-purple-900 text-white flex justify-between ">
            <img src="https://randomuser.me/api/portraits/lego/3.jpg" className=" h-10 pt-4 px-4 rounded-full"/>
            <ul className="px-28 py-4 flex space-x-16 justify-end">
                <li className="cursor-pointer">Home</li>
                <li className="cursor-pointer">About</li>
                <li className="cursor-pointer">Catalogue</li>
                <li className="cursor-pointer">Contact Us</li>
            </ul>
        </nav>
        <div>
            <div className=" bg-slate-300  py-32 pl-10  ">
                <div className="text-4xl "> 
                    The best phones in thw World
                </div>
                <p className=" pt-3 pb-4 w-2/3">Bryan had made peace with himself and felt comfortable with the choices he made. This had made all the difference in the world.
                 Being alone no longer bothered him and this was essential since there was a good chance he might spend the rest of his life alone in a cell.
                 </p>
                 <div className="my-4">
                    <button className="bg-purple-800 px-3 py-2 mx-2  rounded-2xl text-white hover:bg-white hover:text-slate-600 ">Buy Now</button>
                    <button className="bg-purple-800 px-3 py-2 mx-2  rounded-2xl text-white hover:bg-white  hover:text-slate-600 ">Contact Us</button>
                 </div>
            </div>
        </div>
        </>
    )
}

export default LandingPage;