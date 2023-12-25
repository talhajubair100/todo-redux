import Header from "../components/common/header";
import Footer from "../components/common/footer";
import Navbar from "../components/home/navbar";

const HomeLayout = ({ children }) => {
    return (
        <>
            <div className="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
                <Navbar />
                <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">

                    <Header />
                    {children}
                    <Footer />
                </div>

            </div>

        </>
    )
}

export default HomeLayout
