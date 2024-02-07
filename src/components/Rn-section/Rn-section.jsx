import thumb from "../../assets/bg.jpg"
import MyModal from "../modal/modal"
<MyModal/>
const RnSection = () => {
  return(
    <>
      <section>
        <div className="container">
          <div className="row px-3">
            <div className="rounded overflow-hidden p-0 position-relative">
              <img src={thumb} className="img-fluid" alt="Thumb"/>
              <MyModal />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default RnSection