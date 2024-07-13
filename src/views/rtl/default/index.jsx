import MiniCalendar from "components/calendar/MiniCalendar";
import WeeklyRevenue from "views/admin/dashboard/components/WeeklyRevenue";
import TotalSpent from "views/admin/dashboard/components/TotalSpent";
import PieChartCard from "views/admin/dashboard/components/PieChartCard";
import { IoMdHome } from "react-icons/io";
import { IoDocuments } from "react-icons/io5";
import { MdBarChart, MdDashboard } from "react-icons/md";

import { columnsDataCheck, columnsDataComplex } from "./variables/columnsData";

const Dashboard = () => {
  return (
    <div>
      {/* Card widget */}

      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6"></div>
    </div>
  );
};

export default Dashboard;
