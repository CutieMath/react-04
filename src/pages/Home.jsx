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
        {/* Welcome component */}
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

        {/* Cards */}
        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          {earningData.map((item) => (
            <div
              key={item.title}
              className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl"
            >
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span>{item.percentage}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;