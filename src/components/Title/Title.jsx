import "./Title.css"
const Title = ({content}) => {
    return (
        <div className="title">
            {
                content.map((item,index)=>{
                    return(
                        <div key={index}>
                            <h2 className="mb-3">{item.heading}</h2>
                            <p>{item.text}</p>
                        </div>
                    )
                })
            }
        </div>
    );
};
export default Title;
