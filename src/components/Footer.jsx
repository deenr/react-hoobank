import { logo, instagram, facebook, twitter, linkedin } from "../assets";
import { footerLinks } from "../constants";

function Footer() {
  return (
    <section>
      <div className="flex gap-[130px] mt-[140px] pb-[40px] border-b-[1px] border-[#3F3E45]">
        <div className="">
          <img src={logo} alt="logo" className="w-[266px] h-[72px]" />
          <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[32px] mt-[30px]">
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        {footerLinks.map((footer) => (
          <div key={footer.title}>
            <h4 className="font-poppins font-semibold text-white text-[18px] leading-[27px]">
              {footer.title}
            </h4>
            <ul className="flex flex-col gap-3 mt-6">
              {footer.links.map((link) => (
                <li
                  key={link.name}
                  className="font-poppins font-normal text-dimWhite text-[18px] leading-[27px] md:whitespace-nowrap"
                >
                  <a href={link.link}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex justify-between py-[33px]">
        <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[27px]">
          Copyright &#169; 2021 HooBank. All Rights Reserved.
        </p>
        <div className="flex gap-7">
          <img src={instagram} alt="instagram" />
          <img src={facebook} alt="facebook" />
          <img src={twitter} alt="twitter" />
          <img src={linkedin} alt="linkedin" />
        </div>
      </div>
    </section>
  );
}

export default Footer;
