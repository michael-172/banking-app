import React from "react";
import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className="w-full">
      <CountUp
        end={amount}
        prefix="$"
        decimal=","
        duration={2.7}
        decimals={4}
      />
    </div>
  );
};

export default AnimatedCounter;
