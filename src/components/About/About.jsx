import aboutImg from "../../assets/images/about.png";
import aboutCardImg from "../../assets/images/about-card.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
          {/* ======= about img ======= */}
          <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
            <img src={aboutImg} alt="aboutImg" />
            <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
              <img src={aboutCardImg} alt="aboutCardImg" />
            </div>
          </div>

          {/* ======= about content ======= */}
          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <h2 className="heading">Proud to be the nations best</h2>
            <p className="text_para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
              velit necessitatibus! Sunt, quidem cumque optio doloremque
              consequatur hic iusto, odio, aperiam vitae cum dolorem quis!.
            </p>
            <p className="text_para mt-[30px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
              quas consequuntur accusantium vel amet voluptatem. Laboriosam quis
              cupiditate assumenda dolor nisi ipsam perferendis deserunt minima
              officiis doloremque neque, aut fugit quaerat reiciendis, provident
              nihil placeat?
            </p>
            <Link to="/">
              <button className="btn">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
