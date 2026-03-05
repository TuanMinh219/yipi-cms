import React from 'react';
import { Pagination as AntPagination } from 'antd';
import './atoms.css';

export const Pagination = ({ 
  current = 1,
  total = 0,
  pageSize = 10,
  onChange,
  className = '',
  ...props 
}) => {
  return (
    <AntPagination
      current={current}
      total={total}
      pageSize={pageSize}
      onChange={onChange}
      className={`atom-pagination ${className}`}
      {...props}
    />
  );
};

export default Pagination;
