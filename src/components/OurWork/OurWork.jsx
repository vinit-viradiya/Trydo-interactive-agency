import Title from "../title/Title";
import girl from "../../assets/ourwork.jpg";
import "./OurWork.css";
import Progress from "../progressbar/Progress";
const OurWork = () => {
    const progress = [
        {
        id: 1,
        title: "Designing",
        per: "81%",
        },
        {
        id: 2,
        title: "Managment",
        per: "72%",
        },
        {
        id: 3,
        title: "Marketing",
        per: "89%",
        },
        {
        id: 4,
        title: "Development",
        per: "57%",
        },
    ];

    const tcontent = [
        {
        heading: "What do we do?",
        text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.",
        },
    ];

    return (
        <>
        <section className="ourwork py-120 pb-0">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-7 pe-xl-5">
                        <Title content={tcontent} />
                        <h2 className="my-5 mb-4">Our Working Process.</h2>
                        <Progress progData={progress}/>
                    </div>
                    <div className="col-12 col-lg-5 d-flex align-items-center ps-lg-4">
                        <img src={girl} alt="Image" className="img-fluid" />
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};
export default OurWork;
