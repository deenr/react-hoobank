/* eslint-disable react/prop-types */
import { quotes } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
import { feedback } from "../constants";

function TestimonialCard(props) {
  return (
    <div className="w-[370px] min-w-[370px] md:h-[395px] flex flex-col md:feature-card rounded-2xl py-[60px] md:px-[40px]">
      <img src={quotes} alt="quotes" className="w-[43px] h-[28px]" />
      <p className="font-poppins font-normal xs:text-[18px] text-[15px] xs:leading-[26px] leading-[21px] text-white mt-10 mb-auto">
        {props.content}
      </p>
      <div className="flex gap-4 mt-6">
        <img src={props.img} alt={props.img} className="w-[48px] h-[48px]" />
        <div>
          <p className="font-poppins font-normal xs:text-[18px] text-[15px] xs:leading-[26px] leading-[21px] text-white">
            {props.name}
          </p>
          <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[30.8px]">
            {props.title}
          </p>
        </div>
      </div>
    </div>
  );
}

function Testimonials() {
  return (
    <section className="flex flex-col gap-[80px] relative">
      <div className="flex md:flex-row flex-col md:items-center items-start md:gap-[130px] gap-4">
        <h4 className={`${styles.heading2} md:max-w-[470px] `}>
          What people are saying about us
        </h4>
        <p className={`${styles.paragraph} md:mr-[100px]`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className="flex gap-[60px] overflow-auto">
        {feedback.map((feature) => (
          <TestimonialCard key={feature.id} {...feature} />
        ))}
      </div>
      <div className="w-[440px] h-[540px] absolute rounded-[200px] bg-blue-gradient blur-[650px] bottom-0 -right-[550px]" />
    </section>
  );
}

export default Testimonials;
