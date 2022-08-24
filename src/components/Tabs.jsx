import React, { useState } from "react";

const Tabs = (props) => {
  const [currentTab, setCurrentTab] = useState(0);
  const tabs = [
    {
      title: "Información general",
      content: (
        <div>
          <h1>Tab</h1>
          <table className="m-auto">
            <tr>
              <th>Company</th>
              <th>Contact</th>
              <th>Country</th>
            </tr>
            <tr>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
            </tr>
            <tr>
              <td>Centro comercial Moctezuma</td>
              <td>Francisco Chang</td>
              <td>Mexico</td>
            </tr>
          </table>
        </div>
      ),
    },
    { title: "Equipo", content: <div>equipo</div> },
    { title: "Presupuesto", content: <div>presupuesto</div> },
  ];

  const selectedTabStyles =
    "p-3 text-black-80 font-semibold shadow-sm rounded-lg mr-4";
  const nonSelectedTabStyles =
    "p-3 rounded-lg mr-4 hover:shadow-sm hover:text-black-80 hover:font-semibold hover:rounded-lg cursor-pointer";
  return (
    <div className="md:flex md:flex-col md:items-center">
      <div className="mb-4 text-sm text-black-60 font-normal bg-black-00 rounded-xl sm:flex sm:items-center p-2 max-w-fit">
        {tabs.map(({ title }, index) => (
          <div
            onClick={() => setCurrentTab(index)}
            className={
              index === currentTab ? selectedTabStyles : nonSelectedTabStyles
            }
          >
            {title}
          </div>
        ))}
      </div>
      <div className="mt-8 p-2 overflow-x-auto">{tabs[currentTab].content}</div>
    </div>
  );
};
export default Tabs;
