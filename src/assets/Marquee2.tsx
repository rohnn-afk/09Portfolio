import Marquee from "./Marquee";

type MarqueeProps = {
  deg: string;
};

const Marquee2 = ({ deg }: MarqueeProps) => {
  return <Marquee deg={deg} direction="right" />;
};

export default Marquee2;
