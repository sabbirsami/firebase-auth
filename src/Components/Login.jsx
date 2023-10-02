const Login = () => {
    return (
        <div>
            <h1 className="text-3xl text-center font-bold text-emerald-950">
                Log In
            </h1>
            <form className="">
                <label
                    className="block pt-6 text-gray-500 font-semibold pb-2 ps-1"
                    htmlFor="email"
                >
                    Email:
                </label>
                <input
                    type="email"
                    id="email"
                    className="shadow-lg rounded-lg p-5 w-full"
                    placeholder="Enter your email"
                />
                <label
                    className="block pt-6 text-gray-500 font-semibold pb-2 ps-1"
                    htmlFor="password"
                >
                    Password:
                </label>
                <input
                    type="password"
                    id="password"
                    className="shadow-lg rounded-lg p-5 w-full"
                    placeholder="Enter your password"
                />
                <button className="w-full mt-6 shadow-lg bg-blue-500 text-white py-3 font-semibold rounded-lg">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Login;
