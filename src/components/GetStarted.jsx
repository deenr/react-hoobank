import styles from "../style";
import { arrowUp } from "../assets";

function GetStarted() {
  return (
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] bg-blue-gradient rounded-full p-[2px] cursor-pointer`}
    >
      <div
        className={`${styles.flexCenter} flex-col bg-primary w-full h-full rounded-full`}
      >
        <p className="font-poppins font-medium text-[18px] leading-[23px] text-gradient">
          <span className="flex gap-2 mb-2">
            Get
            <img
              src={arrowUp}
              alt="Arrow up"
              className="w-[23px] h-[23px] object-contain"
            />
          </span>
          <span>Started</span>
        </p>
      </div>
    </div>
  );
}

export default GetStarted;
