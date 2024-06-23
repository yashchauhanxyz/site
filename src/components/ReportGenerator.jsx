import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useTable, usePagination } from "react-table";
import { BsCalendar } from "react-icons/bs";

const ReportGenerator = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [data, setData] = useState([]);

  const fetchData = () => {
    // Dummy data
    const dummyData = [
      {
        anomalyID: "A1",
        anomalyStatus: "Open",
        entitlementID: "E1",
        entitlementName: "Entitlement 1",
        startTime: "2023-06-01T12:00:00Z",
        endTime: "2023-06-01T14:00:00Z",
        incorrectRiskTier: "High",
        correctRiskTier: "Low",
      },
      {
        anomalyID: "A2",
        anomalyStatus: "Closed",
        entitlementID: "E2",
        entitlementName: "Entitlement 2",
        startTime: "2023-06-02T08:00:00Z",
        endTime: "2023-06-02T10:00:00Z",
        incorrectRiskTier: "Medium",
        correctRiskTier: "Medium",
      },
      {
        anomalyID: "A3",
        anomalyStatus: "In Progress",
        entitlementID: "E3",
        entitlementName: "Entitlement 3",
        startTime: "2023-06-03T09:00:00Z",
        endTime: "2023-06-03T11:00:00Z",
        incorrectRiskTier: "Low",
        correctRiskTier: "High",
      },
      {
        anomalyID: "A1",
        anomalyStatus: "Open",
        entitlementID: "E1",
        entitlementName: "Entitlement 1",
        startTime: "2023-06-01T12:00:00Z",
        endTime: "2023-06-01T14:00:00Z",
        incorrectRiskTier: "High",
        correctRiskTier: "Low",
      },
      {
        anomalyID: "A2",
        anomalyStatus: "Closed",
        entitlementID: "E2",
        entitlementName: "Entitlement 2",
        startTime: "2023-06-02T08:00:00Z",
        endTime: "2023-06-02T10:00:00Z",
        incorrectRiskTier: "Medium",
        correctRiskTier: "Medium",
      },
      {
        anomalyID: "A3",
        anomalyStatus: "In Progress",
        entitlementID: "E3",
        entitlementName: "Entitlement 3",
        startTime: "2023-06-03T09:00:00Z",
        endTime: "2023-06-03T11:00:00Z",
        incorrectRiskTier: "Low",
        correctRiskTier: "High",
      },
      {
        anomalyID: "A1",
        anomalyStatus: "Open",
        entitlementID: "E1",
        entitlementName: "Entitlement 1",
        startTime: "2023-06-01T12:00:00Z",
        endTime: "2023-06-01T14:00:00Z",
        incorrectRiskTier: "High",
        correctRiskTier: "Low",
      },
      {
        anomalyID: "A2",
        anomalyStatus: "Closed",
        entitlementID: "E2",
        entitlementName: "Entitlement 2",
        startTime: "2023-06-02T08:00:00Z",
        endTime: "2023-06-02T10:00:00Z",
        incorrectRiskTier: "Medium",
        correctRiskTier: "Medium",
      },
      {
        anomalyID: "A3",
        anomalyStatus: "In Progress",
        entitlementID: "E3",
        entitlementName: "Entitlement 3",
        startTime: "2023-06-03T09:00:00Z",
        endTime: "2023-06-03T11:00:00Z",
        incorrectRiskTier: "Low",
        correctRiskTier: "High",
      },
      {
        anomalyID: "A1",
        anomalyStatus: "Open",
        entitlementID: "E1",
        entitlementName: "Entitlement 1",
        startTime: "2023-06-01T12:00:00Z",
        endTime: "2023-06-01T14:00:00Z",
        incorrectRiskTier: "High",
        correctRiskTier: "Low",
      },
      {
        anomalyID: "A2",
        anomalyStatus: "Closed",
        entitlementID: "E2",
        entitlementName: "Entitlement 2",
        startTime: "2023-06-02T08:00:00Z",
        endTime: "2023-06-02T10:00:00Z",
        incorrectRiskTier: "Medium",
        correctRiskTier: "Medium",
      },
      {
        anomalyID: "A3",
        anomalyStatus: "In Progress",
        entitlementID: "E3",
        entitlementName: "Entitlement 3",
        startTime: "2023-06-03T09:00:00Z",
        endTime: "2023-06-03T11:00:00Z",
        incorrectRiskTier: "Low",
        correctRiskTier: "High",
      },
      {
        anomalyID: "A3",
        anomalyStatus: "In Progress",
        entitlementID: "E3",
        entitlementName: "Entitlement 3",
        startTime: "2023-06-03T09:00:00Z",
        endTime: "2023-06-03T11:00:00Z",
        incorrectRiskTier: "Low",
        correctRiskTier: "High",
      },
    ];

    setData(dummyData);
  };

  const columns = React.useMemo(
    () => [
      { Header: "Anomaly ID", accessor: "anomalyID" },
      { Header: "Anomaly Status", accessor: "anomalyStatus" },
      { Header: "Entitlement ID", accessor: "entitlementID" },
      { Header: "Entitlement Name", accessor: "entitlementName" },
      { Header: "Start Time", accessor: "startTime" },
      { Header: "End Time", accessor: "endTime" },
      { Header: "Incorrect Risk Tier", accessor: "incorrectRiskTier" },
      { Header: "Correct Risk Tier", accessor: "correctRiskTier" },
    ],
    []
  );

  const tableInstance = useTable(
    { columns, data, initialState: { pageIndex: 0 } },
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = tableInstance;

  return (
    <div className="p-4">
      <div className="mb-4 flex space-x-4">
        <div className="relative">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            placeholderText="Select start date"
            className="border p-2 rounded"
          />
          <div className="absolute right-3 top-3 text-gray-400 pointer-events-none ">
            <BsCalendar />
          </div>
        </div>
        <div className="relative">
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            placeholderText="Select end date"
            className="border p-2 rounded"
          />
          <div className="absolute right-3 top-3 text-gray-400 pointer-events-none ">
            <BsCalendar />
          </div>
        </div>
        <button
          onClick={fetchData}
          className="px-4 py-2 rounded bg-[rgb(218,28,44)] text-white hover:bg-[rgb(150,19,30)]"
        >
          Generate Report
        </button>
      </div>
      <div className="mt-4 overflow-x-auto ">
        <table
          {...getTableProps()}
          className="min-w-full divide-y divide-gray-200 border "
        >
          <thead className="bg-[rgb(218,28,44)]">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps()}
                    className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider border-b border-r"
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody
            {...getTableBodyProps()}
            className="bg-white divide-y divide-gray-200"
          >
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} className="hover:bg-gray-100">
                  {row.cells.map((cell) => (
                    <td
                      {...cell.getCellProps()}
                      className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-r"
                    >
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="pagination mt-4 flex justify-center items-center">
          <button
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
            className="px-3 py-1 border rounded bg-[rgb(218,28,44)] text-white hover:bg-[rgb(150,19,30)] mr-2"
          >
            {"<<"}
          </button>
          <button
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
            className="px-3 py-1 border rounded bg-[rgb(218,28,44)] text-white hover:bg-[rgb(150,19,30)] mr-2"
          >
            {"<"}
          </button>
          <button
            onClick={() => nextPage()}
            disabled={!canNextPage}
            className="px-3 py-1 border rounded bg-[rgb(218,28,44)] text-white hover:bg-[rgb(150,19,30)] mr-2"
          >
            {">"}
          </button>
          <button
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
            className="px-3 py-1 border rounded bg-[rgb(218,28,44)] text-white hover:bg-[rgb(150,19,30)]"
          >
            {">>"}
          </button>
          <span className="ml-2">
            Page{" "}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{" "}
          </span>
          <span>
            | Go to page:{" "}
            <input
              type="number"
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                gotoPage(page);
              }}
              className="border p-1 rounded w-16"
            />
          </span>{" "}
          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
            className="ml-2 border p-1 rounded"
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default ReportGenerator;
