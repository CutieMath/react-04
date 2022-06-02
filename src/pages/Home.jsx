import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { Stacked, Pie, Button, SparkLine } from "../components";
import {
  earningData,
  SparklineAreaData,
  ecomPieChartData,
} from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const Home = () => {
  return (
    <div className="mt-12">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="bg-white m-2 dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 bg-hero-pattern bg-no-repat bg-cover ">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-slate-400">Earnings</p>
              <p className="text-2xl text-white">$10,000.99</p>
            </div>
          </div>
          <div className="mt-4">
            <Button
              color="white"
              bgColor="#957DAD"
              text="Download"
              borderRadius="10px"
              size="md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
