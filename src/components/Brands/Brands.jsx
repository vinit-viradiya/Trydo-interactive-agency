import "./Brands.css"
const Brands = ({images}) => {
  return(
    <ul className="d-flex align-items-center flex-wrap justify-content-center">
      {
        images.map((item)=>{
          return(
              <li key={item.id} className="text-center col-4 mb-3 px-3 px-md-5 col-lg px-lg-4">
                <img src={item.img} alt="Brand's logo" className="img-fluid" />
              </li>
          )
        })
      }
    </ul>
  )
}
export default Brands