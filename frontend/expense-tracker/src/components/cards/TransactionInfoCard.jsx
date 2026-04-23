import React from 'react';
import {
  LuUtensils,
  LuTrendingUp,
  LuTrendingDown,
  LuTrash2,
  LuShoppingBag,
  LuHouse,
  LuCar,
  LuGift,
  LuCreditCard,
  LuPiggyBank,
  LuWalletMinimal,
} from "react-icons/lu";

const iconMap = {
  salary: LuWalletMinimal,
  freelance: LuCreditCard,
  food: LuUtensils,
  groceries: LuShoppingBag,
  shopping: LuShoppingBag,
  rent: LuHouse,
  transport: LuCar,
  travel: LuCar,
  gift: LuGift,
  savings: LuPiggyBank,
  other: LuUtensils,
};

const TransactionInfoCard = ({
  title,
  icon,
  date,
  amount,
  type,
  hideDeleteBtn,
  onDelete
}) => {
  const getAmountStyles = () =>
    type === "income" ? "bg-green-50 text-green-500" : "bg-red-50 text-red-500";

  const renderIcon = () => {
    if (React.isValidElement(icon)) {
      return icon;
    }

    if (typeof icon === "string") {
      const normalized = icon.trim().toLowerCase();
      const IconComponent = iconMap[normalized];

      if (IconComponent) {
        return <IconComponent />;
      }

      const looksLikeUrl = /^(https?:\/\/|\/|\.\/|\.\.\/|data:)/i.test(icon);
      if (looksLikeUrl) {
        return <img src={icon} alt={title} className="w-6 h-6" />;
      }

      return <span className="text-sm font-semibold text-gray-900">{normalized.charAt(0).toUpperCase()}</span>;
    }

    return <LuUtensils />;
  };

  return (
    <div className="group relative flex items-center gap-4 mt-2 p-3 rounded-lg hover:bg-gray-100/60">
      <div className="w-12 h-12 flex items-center justify-center text-xl text-gray-100 rounded-full bg-gray-200">
        {renderIcon()}
      </div>

      <div className="flex-1 flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-700 font-medium">{title}</p>
          <p className="text-xs text-gray-400 mt-1">{date}</p>
        </div>

      <div className="flex items-center gap-2">
        {!hideDeleteBtn && (
          <button className="text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
            onClick={onDelete}>
            <LuTrash2 size={18} />
          </button>
        )}

        <div className={`flex items-center gap-2 px-3 py-1.5 rounded-md ${getAmountStyles()}`}>
          <h6 className="text-xs font-medium">
            {type === "income" ? "+" : "-"} ${amount}
          </h6>
          {type === "income" ? <LuTrendingUp /> : <LuTrendingDown />}
        </div>
      </div>
    </div>
  </div>
)
}

export default TransactionInfoCard;