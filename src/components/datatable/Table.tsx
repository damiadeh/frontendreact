import PropTypes from 'prop-types';
import { useContext } from 'react';
import { StoreContext } from '../../context/store';
import { TableProps } from '../../interfaces/props/TableProps';
import { getTableCellValue } from '../../utils/helpers';

/**I'll have used <DataGrid /> in an actually project but going through this approach for this assignment sake */
const Table = ({ tableData, headingColumns, onRowClick }: TableProps) => {
  const { state } = useContext(StoreContext);

  const data = tableData.map((row: any, index: number) => {
    let rowData = [];
    let i = 0;

    for (const key in row) {
      let CellValue = getTableCellValue(row[key])
      rowData.push({
        key: headingColumns[i],
        val: typeof CellValue === "function" ? <CellValue /> : CellValue,
      });
      i++;
    }
    return <tr key={index} onClick={() => onRowClick(row)} title="table-row">
      {rowData.map((data, index) => state.hiddenColumns?.includes(index) ? null : <td key={index} data-heading={data.key}>{data.val}</td>)}
    </tr>
  });

  return (
    <div className="table-container">
      <table className="table-container__table table-container__table--break" title="table">
        <thead>
          <tr>
            {headingColumns.map((col: any, index: number) => state.hiddenColumns?.includes(index) ? null :
              <th key={index}>{col}</th>
            )}
          </tr>
        </thead>
        <tbody title="table-body">
          {data}
        </tbody>
      </table>
    </div>
  );
}

Table.propTypes = {
  tableData: PropTypes.arrayOf(PropTypes.object).isRequired,
  headingColumns: PropTypes.arrayOf(PropTypes.string).isRequired,
  onRowClick: PropTypes.func,
}

export default Table;