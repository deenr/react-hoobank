import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

function CardDeal() {
  return (
    <section className={`${layout.section} md:gap-[90px]`}>
      <div className={`${layout.sectionInfo} md:max-w-[570px]`}>
        <h2 className={styles.heading2}>
          Find a better card deal in few easy steps.
        </h2>
        <p className={`${styles.paragraph} mt-[12px]`}>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <Button className="mt-10">Get started</Button>
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="card" className="w-full h-100 " />
      </div>
    </section>
  );
}

export default CardDeal;
