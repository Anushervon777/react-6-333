import './section3.css'
import sec3img1 from "../../../../assets/Image (48).png";
import sec3img2 from "../../../../assets/Image (49).png";
import sec3img3 from "../../../../assets/Image (50).png";
function Section3() {
  return<>
  <div className='block3'>
    <div className="block3_div1">
      <img src={sec3img1} alt="" />
      <p className="block3_div1_p">Published in Insight Jan 30, 2021</p>
      <h2>Practice making User Flow</h2>
      <p>In this article, we'll cover how to <br /> create user flows</p>
    </div>
    <div className="block3_div1">
      <img src={sec3img2} alt="" />
      <p className="block3_div1_p">Published in Insight Jan 30, 2021</p>
      <h2>Practice making User Flow</h2>
      <p>In this article, we'll cover how to <br /> create user flows</p>
    </div>
    <div className='block3_div3'>
      <img  src={sec3img3} alt="" />
      <p>Published in Insight Jan 30, <br /> 2021</p>
      <h2>Using Grid in w <br /> design</h2>
      <p>Andi: "What's the grid li <br /> “Like below…”</p>
    </div>
  </div>
  </>
}
export default Section3