import { Outlet, NavLink } from "react-router-dom";

const Home = () => {
    return (
        <div className="h-[100vh] flex justify-center items-center container mx-auto ">
            <div className="">
                <div className="my-6 p-2 flex rounded-lg shadow gap-2 ">
                    <NavLink to={"/"} className="w-full">
                        <button className="w-full py-2 rounded-lg font-semibold">
                            log In
                        </button>
                    </NavLink>
                    <NavLink to={"/sign-up"} className="w-full">
                        <button className="w-full  py-2 rounded-lg font-semibold">
                            Sign Up
                        </button>
                    </NavLink>
                </div>
                <div className="p-6 shadow-lg rounded-lg mt-10">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Home;
