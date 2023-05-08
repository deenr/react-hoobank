import { stats } from "../constants";
import styles from "../style";

function Stats() {
  return (
    <section
      className={`${styles.flexCenter} md:flex-row flex-col flex-wrap sm:mb-20 mb-6 lg:gap-0 gap-[26px]`}
    >
      {stats.map((stat, index) => (
        <div key={stat.id} className={`flex flex-row items-center`}>
          <div className={`flex justify-start items-center flex-row gap-3`}>
            <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">
              {stat.value}
            </h4>
            <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase">
              {stat.title}
            </p>
          </div>
          {stats.length - 1 !== index && (
            <div className="lg:flex hidden w-[2px] h-[14px] bg-white opacity-60 mx-[52px]"></div>
          )}
        </div>
      ))}
    </section>
  );
}

export default Stats;
