import React from "react";
import comodity from "../../../Images/services/comodity.jpg";
import CommonServices from "../../../components/common/CommonServices/CommonServices";

const commodityStrategies = [
  {
    title: "Understand Your Investment Objectives",
    content:
      "Before selecting a PMS, clearly define your investment goals. Are you seeking long-term growth, wealth preservation, or income generation? Your investment manager will create a strategy based on your specific goals, risk tolerance, and time horizon, ensuring that your portfolio meets your needs.",
  },
  {
    title: "Research the Expertise of the Fund Manager",
    content:
      "The success of your portfolio largely depends on the experience and expertise of the portfolio manager. Look for managers with a proven track record in managing diversified portfolios and consistently delivering returns. Choose someone who can manage risk while capitalizing on market opportunities.",
  },
  {
    title: "Review Past Performance",
    content:
      "Analyze the past performance of the PMS provider. While past performance doesn’t guarantee future success, it offers insight into how well the fund has been managed during different market conditions. Focus on consistency over long periods, rather than short-term results.",
  },
  {
    title: "Diversification Strategy",
    content:
      "A good PMS diversifies your investments across various sectors, companies, and asset classes, reducing the risk of heavy losses from any single investment. The manager should invest in high-rated corporate and individual firms to balance risk and maximize returns.",
  },
  {
    title: "Customization and Flexibility",
    content:
      "Select a PMS provider that offers personalized solutions based on your financial situation. They should be able to adjust your portfolio as your needs change, be it shifting market conditions or changes in your financial priorities.",
  },
  {
    title: "Fee Structure Transparency",
    content:
      "Ensure the PMS provider has a clear and transparent fee structure. Look for details on management fees, performance-based fees, and other hidden charges. Lower fees could significantly improve your long-term returns.",
  },
  {
    title: "Risk Management Approach",
    content:
      "Evaluate the PMS provider's approach to managing risks. They should actively monitor and rebalance your portfolio to protect your investments during market fluctuations. Investing in firms with strong credit ratings, especially in dynamic markets like India, ensures more stable returns.",
  },
];

const CommodityTrading = ({ darkMode }) => {
  return (
    <CommonServices
      title="Strategies To Select A Good Portfolio Management Service"
      subtitle="Top Notch Commodity Trading"
      image={comodity}
      strategies={commodityStrategies}
      about="Hansaria Food Pvt Ltd (HFPL) deals with authentic buyers and sellers who continue to stand with any bargain done even when there is a variation in the market rate."
      darkMode={darkMode}
    />
  );
};

export default CommodityTrading;
