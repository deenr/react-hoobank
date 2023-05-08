import Button from "./Button";

function CTA() {
  return (
    <section className="flex bg-black-gradient rounded-2xl py-[72px] px-[100px] justify-between items-center mt-[100px]">
      <div className="flex flex-col gap-6">
        <h4 className="font-poppins font-semibold text-white text-[48px] leading-[67px]">
          Let&apos;s try our service now!
        </h4>
        <p className="max-w-[440px] font-poppins font-normal text-dimWhite text-[18px] leading-[29px]">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <Button className="w-[170px] h-[64px]">Get Started</Button>
    </section>
  );
}

export default CTA;
