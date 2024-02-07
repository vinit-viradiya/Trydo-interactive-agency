import "./Progress.css"
const Progress = ({progData}) => {
    return(
        progData.map((item)=>{
            return(
                <div key={item.id}>
                    <div className="d-flex justify-content-between mb-1">
                        <h6>{item.title}</h6><h6>{item.per}</h6>
                    </div>
                    <div className="progressbar mb-5">
                        <div className="progress" style={{ width: item.per }}></div>
                    </div>
                </div>
            )
        })
    )
}
export default Progress