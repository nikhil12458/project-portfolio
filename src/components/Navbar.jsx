import TextReveal from "./TextReveal";

const Navbar = () => {
  return (
    <div className="fixed px-[3rem] top-0 left-0 h-[6vh] flex items-center justify-between w-full z-[30]">
      <div className="leftNameSide">
        <TextReveal>
          <h3 className="1.2rem">Nikhil</h3>
        </TextReveal>
      </div>
      <div className="rightLinkSide flex gap-[1.6rem]">
        <TextReveal>
            <h3 className="text-[1.1rem]">Home</h3>
        </TextReveal>
        <TextReveal>
            <h3 className="text-[1.1rem]">About</h3>
        </TextReveal>
        <TextReveal>
            <h3 className="text-[1.1rem]">Contact</h3>
        </TextReveal>
      </div>
    </div>
  );
};

export default Navbar;
