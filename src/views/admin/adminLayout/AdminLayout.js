import React from 'react';
import AdminHeader from '../header/AdminHeader';

const AdminLayout = ({child}) => {
  return <>
      <AdminHeader/>
      {child}
  </>;
};

export default AdminLayout;
