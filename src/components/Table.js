import React,{ useMemo } from 'react'
import { useTable } from 'react-table'
import { COLUMNS } from './Columns'
import { useSelector, useDispatch } from 'react-redux'
import { deleteOrder, setEditableID, updateEditFormData } from '../redux'
import EditableTableRow from './EditableTableRow'

//This component renders the table displaying the list of orders (from DummyData.json)
const Table = () => {

    const ordersList=useSelector((state)=>state.orders.ordersList);
    const editableId=useSelector((state)=>state.orders.editableId);
    const dispatch=useDispatch();

    const columns=useMemo(() => COLUMNS, [])   //Memoization for performance optimization
    const data=useMemo(()=> ordersList, [ordersList])
    
    const tableInstance=useTable({
        columns:columns,
        data:data,
    })
     
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    }=tableInstance


    return (
        <React.Fragment>

        {/*using form here since the editable row can't be wrapped within a form inside the tbody */}
        <form> 
            <table {...getTableProps()} className='text-center'>
                
                <thead>
                    {
                        headerGroups.map((headerGroup,i)=>(
                        <tr key={i} {...headerGroup.getHeaderGroupProps}>
                            {
                                headerGroup.headers.map((column)=>{
                                    const { key, ...restColumnProps } = column.getHeaderProps();
                                    return (<th key={key} {...restColumnProps}>
                                        {column.render('Header')}
                                    </th>)
                                })
                            }
                            <th key={"actions"}>Actions</th>
                        </tr>
                        ))
                    }
                </thead>

                <tbody {...getTableBodyProps()}>
                    {
                        rows.map((row)=>{
                            prepareRow(row)
                            return (
                                <>
                                {/* If edit option is choose for this order then display the editable row otherwise the read only row */}
                                    { editableId && editableId===row.original.id ? 
                                        <EditableTableRow rowData={row.original} /> :
                                        <tr {...row.getRowProps} key={row.original.id}>
                                            {
                                                row.cells.map((cell)=>{
                                                    const { key, ...restCellProps } = cell.getCellProps();
                                                    return (<td key={key} {...restCellProps}>
                                                        {cell.render('Cell')}
                                                    </td>)
                                                })
                                            }

                                            {/* Cell for the edit and delete options..and only one row can be edited at a time */}
                                            <td key={"action icons"}>
                                                { editableId==null ? 
                                                    <i
                                                        className="fas fa-pen text-gray-600 transform hover:scale-125"
                                                        style={{cursor:'pointer'}}
                                                        onClick={(e)=>{
                                                            dispatch(setEditableID(row.original.id))
                                                            dispatch(updateEditFormData({...row.original}))
                                                        }}>
                                                    </i> 
                                                : null
                                                }
                                                <i 
                                                    className="fas fa-trash-alt mx-4 text-gray-600 transform hover:scale-125"
                                                    style={{cursor:'pointer'}}
                                                    onClick={(e)=>{
                                                        dispatch(deleteOrder(row.original.id))
                                                    }}>
                                                </i>
                                            </td>
                                    </tr>
                                    }
                                </>
                            )
                        })
                    }
                </tbody>

            </table>
        </form>
        
        </React.Fragment>
    )
}

export default Table
