import { ArrowDownUp, SlidersHorizontal } from "lucide-react";
import { BottomDrawerProps } from "./BottomDrawer";

const SortFilter = ({ show, setShow }: BottomDrawerProps) => {
  return (
    <div
      onClick={() => setShow(!show)}
      className="flex-center justify-between mt-2 cursor-pointer"
    >
      <div className="filter-button">
        <ArrowDownUp size={"20px"} />
        <p className="font-semibold">Sort</p>
      </div>
      <div className="filter-button">
        <SlidersHorizontal size={"20px"} />
        <p className="font-semibold">Filter</p>
      </div>
    </div>
  );
};

export default SortFilter;
