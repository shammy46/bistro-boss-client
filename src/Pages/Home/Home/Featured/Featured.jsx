import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../../assets/home/featured.jpg";
import './Featured.css'



const Featured = () => {
    return (
        <div className="featured-item bg-fixed pt-8 my-20 text-white">
            <SectionTitle heading="Featured Item" subHeading="check it out" ></SectionTitle>
            <div className="md:flex justify-center items-center pb-20 pt-12 px-36 bg-slate-500 bg-opacity-60">
                <div className="">
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20. 2024 </p>
                    <p className="uppercase">where can I get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi facere eligendi pariatur quod! Assumenda nobis ex illo omnis unde odio.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;