import './section4.css'
import sec4img1 from "../../../../assets/Rectangle 34.png";
import sec4img2 from "../../../../assets/Rectangle 37 (1).png";
import sec4img3 from "../../../../assets/Rectangle 35.png";
import sec4img4 from "../../../../assets/Rectangle 36.png";

function Section4() {
  return<>
  <div className="block4">
    <div className='block4_div'>
    <div className="block4_left">
      <div>
        <img src={sec4img1} alt="" />
        <h2>How we perform long-running tasks using AWS services</h2>
        <p>Webflow is web design tool as well as a hosting platform and CMS all in one. While you are probably familiar with all of these, they are usually entirely separate tools.</p>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div>
        <img src={sec4img2} alt="" />
        <h2>Layout Exploration — Simple exercise but big effect</h2>
        <p>Make alternatives or other options for the design we are making.For example, we are creating a website design. Then there is the testimonial section.</p>
      </div>
    </div>
    <div className="block4_right">
      <div>
        <img src={sec4img3} alt="" />
        <h2 style={{borderBottom:'1px solid white',width:'300px'}}>How to ask when doing User Research</h2>
        <p>Bro, the story is that you want to make an application for buying and selling goods on the market. During user research, what do you think you will ask people?</p>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div>
        <img src={sec4img4} alt="" />
        <h2>
        Webflow Break the Coding Barrier
        </h2>
        <p>Webflow is web design tool as well as a hosting platform and CMS all in one. While you are probably familiar with all of these, they are usually entirely separate tools.</p>
      </div>
    </div>
    </div>
  </div>
  </>
}
export default Section4