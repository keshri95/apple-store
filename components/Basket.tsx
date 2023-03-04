import { selectBasketItems, selectBaskeTotal } from "../redux/basketSlice";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import { useSelector } from "react-redux";
// import { selectBaskeTotal } from "./redux/basketSlice";

const Basket = () => {
  const items = useSelector(selectBasketItems);
//   const basketTotal = useSelector(selectBaskeTotal);

  if (items.length === 0) return null;

  return (
    <Link href="/checkout">

      <div className="fixed bottom-10 right-10 z-50 h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-gray-300">

        {items.length > 0 && (
          <span className="absolute -right-2 -top-2 z-50 flex h-7 w-7 items-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-[10px] text-white">
            {items.length}
          </span>
        )}

        <AiOutlineShopping className="headerIcon h-8 w-8" />

      </div>
    </Link>
  );
};
export default Basket;
