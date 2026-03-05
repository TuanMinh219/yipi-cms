import React from 'react';
import { Table as AntTable } from 'antd';
import './atoms.css';

export const Table = ({ 
  columns, 
  dataSource, 
  className = '',
  pagination = true,
  ...props 
}) => {
  return (
    <AntTable
      columns={columns}
      dataSource={dataSource}
      pagination={pagination ? { pageSize: 10 } : false}
      className={`atom-table ${className}`}
      {...props}
    />
  );
};

export default Table;
