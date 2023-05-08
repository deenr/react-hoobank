import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

function Billing() {
  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="billing" className="w-full h-100 z-5 relative" />
        <div className="absolute z-[3] -left-1/2 top-0 w-1/2 h-1/2 rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-1/2 h-1/2 rounded-full pink__gradient" />
      </div>

      <div className={`${layout.sectionInfo} md:max-w-[470px]`}>
        <h2 className={styles.heading2}>
          Easily control your billing & invoicing.
        </h2>
        <p className={`${styles.paragraph} mt-[12px]`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6 gap-8">
          <img src={apple} alt="apple_store" className="cursor-pointer" />
          <img src={google} alt="play_store" className="cursor-pointer" />
        </div>
      </div>
    </section>
  );
}

export default Billing;
