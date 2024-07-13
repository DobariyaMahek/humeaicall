import CheckTable from "./components/CheckTable";

import {
  columnsDataDevelopment,
  columnsDataCheck,
  columnsDataColumns,
  columnsDataComplex,
} from "./variables/columnsData";
import tableDataDevelopment from "./variables/tableDataDevelopment.json";
import tableDataCheck from "./variables/tableDataCheck.json";
import tableDataColumns from "./variables/tableDataColumns.json";
import tableDataComplex from "./variables/tableDataComplex.json";
import DevelopmentTable from "./components/DevelopmentTable";
import ColumnsTable from "./components/ColumnsTable";
import ComplexTable from "./components/ComplexTable";
import { useEffect, useState } from "react";
import { getHumeAccessToken } from "utils/getHumeAccessToken";
import Chat from "components/Chat";

const Tables = () => {
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    const handleFetch = async () => {
      const data = await getHumeAccessToken();
      setAccessToken(data);
    };
    handleFetch();
    // const getAccessToken = async () => {
    //   try {
    //     console.log(data);
    //     setAccessToken(data);
    //   } catch (error) {
    //     console.error("Error fetching access token:", error);
    //   }
    // };

    // getAccessToken();
  }, []);
  return (
    <div>
      <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-2">
        {/* <DevelopmentTable
          columnsData={columnsDataDevelopment}
          tableData={tableDataDevelopment}
        />
        <CheckTable columnsData={columnsDataCheck} tableData={tableDataCheck} /> */}

        {accessToken && <Chat accessToken={accessToken} />}
      </div>
    </div>
  );
};

export default Tables;
