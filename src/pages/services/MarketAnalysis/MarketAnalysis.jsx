import React from "react";
import market from "../../../Images/services/market.jpg";
import CommonServices from "../../../components/common/CommonServices/CommonServices";

const marketStrategies = [
  {
    title: "Define Your Investment Goals",
    content:
      "The first step is to clearly define your investment objectives. Are you aiming for capital appreciation, income generation, or wealth preservation? Understanding your needs will help you find a PMS provider whose strategies align with your long-term goals.",
  },
  {
    title: "Evaluate the Manager’s Expertise",
    content:
      "The portfolio manager’s expertise is critical in managing your investments. Look for a manager with a strong track record, solid financial knowledge, and the ability to make informed decisions in varying market conditions. Their experience with managing diverse assets in Indian markets is a key factor.",
  },
  {
    title: "Diversification Approach",
    content:
      "A good PMS ensures a well-diversified portfolio, investing in different asset classes such as equities, commodities, and bonds, and across various sectors. The manager should invest in corporate and individual firms with high credit ratings in India, minimizing risk while optimizing returns.",
  },
  {
    title: "Check Performance History",
    content:
      "While past performance is not a guarantee of future returns, it is a good indicator of how well the PMS provider navigates market ups and downs. Focus on consistency of returns over the long term and how the service has performed during volatile market periods.",
  },
  {
    title: "Risk Management and Flexibility",
    content:
      "A reliable PMS should have a strong risk management strategy in place. The manager should regularly review and adjust your portfolio to mitigate risks in changing market conditions. Flexibility to adapt to your evolving financial needs is also crucial.",
  },
  {
    title: "Transparency in Fees",
    content:
      "Ensure the PMS provider offers a transparent fee structure, detailing all charges such as management fees, performance-linked fees, and any additional costs. Understanding these fees upfront will prevent surprises and allow you to assess the value you're receiving for the service.",
  },
  {
    title: "Client Service and Reporting",
    content:
      "Regular communication and detailed performance reports are important. Choose a provider that offers easy access to your portfolio’s performance, provides market insights, and offers frequent updates to keep you informed about your investments.",
  },
];

const MarketAnalysis = ({ darkMode }) => {
  return (
    <CommonServices
      title="Strategies To Select A Good Portfolio Management Service"
      subtitle="Top Notch Market Analysis"
      image={market}
      strategies={marketStrategies}
      about="Hansaria Food Pvt Ltd (HFPL) is known for its ethical business practices in the commodities market. HFPL ensures that its deals with buyers and sellers are honored, even in times of market rate fluctuations."
      darkMode={darkMode}
    />
  );
};

export default MarketAnalysis;
