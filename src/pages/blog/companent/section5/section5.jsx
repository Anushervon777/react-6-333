import './section5.css'
import sec5img1 from '../../../../assets/Image (51).png'
import sec5img2 from '../../../../assets/Image (52).png'
import sec5img3 from '../../../../assets/Image (53).png'
function Section5() {
  return<div>
    <div className="block5">
    <div className="block5_top">
      <div>
        <h1>Articles</h1>
        <p>Complex tech decoded by engineers, business <br /> trends analyzed by experts.</p>
      </div>
      <div>
        <div style={{display:'flex',alignItems:'center'}} >
          <p className="block5_top_p1">{"<="}</p>
          <p className="block5_top_p2">{"=>"}</p>
        </div>
      </div>
    </div>
    <br /><br /><br />
    <div className='block5_bottom_divho'>
    <div className='block5_bottom_div'>
        <img src={sec5img1} alt="" />
        <h2>List of UX Designer Portfolio / Case Studies where you can make money</h2>
        <p>Here are some portfolios / Case Studies from UX Designers that you can use as a reference for creating a portfolio. Two interesting things from their portfolio are:</p>
        <button>Read More</button>
      </div>
      <div className='block5_bottom_div'>
        <img src={sec5img2} alt="" />
        <h2>Skyrocketing in The Designing Career, Why Not?</h2>
        <p>Ever thought of jumping into the world of design as a career? If not, you may want to look at what the word ‘design’ actually means. Design is a method of designing aesthetic actions that are carried out.</p>
        <button>Read More</button>
      </div>
      <div className='block5_bottom_div'>
        <img src={sec5img3} alt="" />
        <h2>Elements that may be missed when designing the UI</h2>
        <p>This is an article that talks about the little elements that are often overlooked when designing UI.</p>
        <button>Read More</button>
      </div>
    </div>
    </div>
  </div>
}
export default Section5