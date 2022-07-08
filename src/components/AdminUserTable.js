import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";

function AdminUserTable({ tableData, route ,query  }) {

  const [tableDatas, setTableData] = useState(tableData);
  const [tabledatabyname, setTabledatabyname] = useState(tableData);
  const [sort, setSort] = useState(null);
  const [sortbyname, setSortbyname] = useState(null);

  useEffect(() => {
    setTableData(tableData);
    setTabledatabyname(tableData);
  }, [tableData]);


  const sortAccending = (param) => {
    param === 'id' ? setTableData(tableDatas?.sort((a, b) => a.id - b.id)) : setTableData(tableDatas?.sort((a, b) => a.id - b.id));
    console.log("sortAccending",tableDatas);
    setSort(0);
};
const sortDecending = (param) => {
    param === 'id' ? setTableData(tableDatas?.sort((a, b) => b.id - a.id)) : setTableData(tableDatas?.sort((a, b) => b.id - a.id));
    console.log("sortDecending",tableDatas);
    setSort(1);

};

const [searchParams] = useState(["id","first_name","last_name"]);

  function search(items) {
    return items?.filter((item) => {
      return searchParams?.some((newItem) => {
        return (
          item[newItem]?.toString()?.toLowerCase()?.indexOf(query.toLowerCase()) > -1
        );
      });
    });
  }


  const navigate = useNavigate();
  return (
    <div className="flex flex-col max-w-[1280px]">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="border-b">
                <tr>
                  {route === "active-user" && (
                    <th scope="col" className="text-[18px] min-w-[155px] font-[500] text-gray-900 px-6 py-4 text-left">
                      <div className="flex flex-row">
                      User Id
                     <span className='cursor-pointer ml-2 mt-1'><img src='/svgs/uparrow.svg' className={`hover:invert-[.5] ${(sort===0)&&('invert-[.5]')} `} onClick={()=>sortAccending('id','name','first_name','last_name')}/><img src='/svgs/downarrow.svg' className={`hover:invert-[.5] ${(sort===1)&&('invert-[.5]')} `} onClick={()=>sortDecending('id','name','first_name','last_name')} /></span>
                     </div>
                    </th>
                  )}
                  <th scope="col" className="text-[18px] font-[500] text-gray-900 px-6 py-4 text-left flex flex-row ">
                      Name
                      {route !== "active-user" &&
                      <div className="flex flex-row">
                      <span className='cursor-pointer ml-2 mt-1 '><img src='/svgs/uparrow.svg' className={`hover:invert-[.5] ${(sort===0)&&('invert-[.5]')} `} onClick={()=>sortAccending('id','name','first_name','last_name')}/><img src='/svgs/downarrow.svg' className={`hover:invert-[.5] ${(sort===1)&&('invert-[.5]')} `} onClick={()=>sortDecending('id','name','first_name','last_name')} /></span>
                      </div>}
                    </th>
                  <th scope="col" className="text-[18px] font-[500] text-gray-900 px-6 py-4 text-left">
                    Number
                  </th>
                  <th scope="col" className="text-[18px] font-[500] text-gray-900 px-6 py-4 text-left">
                    E-mail
                  </th>
                  <th scope="col" className="text-[18px] font-[500] text-gray-900 px-6 py-4 text-left">
                    Active Since
                  </th>
                </tr>
              </thead>
              <tbody>
                {console.log(tableData, "data in table compo")}
                {search(tableData)?.map((data) => {
                  return (
                    <tr className="">
                      {route === "active-user" && (
                        <td
                          className="text-sm text-[#3751FF] font-[500] px-6 py-4 whitespace-nowrap underline cursor-pointer"
                          onClick={() => navigate(`/admin/influencer/activeUser/${data?.id}`)}
                        >
                          {data?.id}
                        </td>
                      )}
                      <td className="px-6 py-4 whitespace-nowrap text-sm max-w-[170px] font-medium text-gray-900">
                        {/* {data.first_name || data?.name} */}
                        {data?.user_name}
                      </td>
                      <td className="text-sm max-w-[170px] text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {data?.contact_number || data?.number}
                      </td>
                      <td className="text-sm max-w-[170px] text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {data?.email || "test@gmail.com"}
                      </td>
                      <td className="text-sm max-w-[170px] text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {moment(data?.created_at).format("DD/MM/YYYY") || data?.activeSince}
                      </td>
                      <td
                        onClick={() => navigate(`/admin/influencer/${route}/${data?.id}`)}
                        className="text-sm text-[#3751FF] font-[500] px-6 py-4 whitespace-nowrap underline cursor-pointer "
                      >
                        View profile
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminUserTable;
