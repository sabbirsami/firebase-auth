const SignUp = () => {
    return (
        <div>
            <h1 className="text-3xl text-center font-bold text-emerald-950">
                Sign Up
            </h1>
            <form className="">
                <label
                    className="block pt-6 text-gray-500 font-semibold pb-2 ps-1"
                    htmlFor="name"
                >
                    Name:
                </label>
                <input
                    type="text"
                    id="name"
                    className="shadow-lg rounded-lg p-5 w-full"
                    placeholder="Enter your name"
                />
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
                <button
                    type="submit"
                    className="w-full mt-6 shadow-lg bg-blue-500 text-white py-3 font-semibold rounded-lg"
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default SignUp;