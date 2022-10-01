import React from 'react';

import avatar from '../../assets/avatar.jpg';
import avatar2 from '../../assets/avatar2.jpg';
import avatar3 from '../../assets/avatar3.png';
import avatar4 from '../../assets/avatar4.jpg';
import product1 from '../../assets/product1.jpg';
import product2 from '../../assets/product2.jpg';
import product3 from '../../assets/product3.jpg';
import product4 from '../../assets/product4.jpg';
import product5 from '../../assets/product5.jpg';
import product6 from '../../assets/product6.jpg';
import product7 from '../../assets/product7.jpg';

import { GrLocation } from 'react-icons/gr';


export const gridOrderImage = (props) => (
    <div className="orderimg">
      <img
        src={props.ProductImage}
        alt="order-item"
      />
    </div>
  );
  
  export const gridOrderStatus = (props) => (
    <button
      type="button"
      style={{ background: props.StatusBg }}
      className="button"
    >
      {props.Status}
    </button>
  );

  const gridEmployeeProfile = (props) => (
    <div className="profile">
      <img
        className="profileimg"
        src={props.EmployeeImage}
        alt="employee"
      />
      <p>{props.Name}</p>
    </div>
  );
  
  const gridEmployeeCountry = (props) => (
    <div className="flex items-center justify-center gap-2">
      <GrLocation />
      <span>{props.Country}</span>
    </div>
  );
 
  const customerGridImage = (props) => (
    <div className="Customerimage">
      <img
        className="customerimg"
        src={props.CustomerImage}
        alt="employee"
      />
      <div className='customertext'>
        <p>{props.CustomerName}</p>
        <p>{props.CustomerEmail}</p>
      </div>
    </div>
  );
  
  const customerGridStatus = (props) => (
    <div className="flex gap-2 justify-center items-center text-black-700 capitalize">
      <p style={{ background: props.StatusBg }} className="rounded-full h-3 w-3" />
      <p>{props.Status}</p>
    </div>
  );

  export const contextMenuItems = [
    'AutoFit',
    'AutoFitAll',
    'SortAscending',
    'SortDescending',
    'Copy',
    'Edit',
    'Delete',
    'Save',
    'Cancel',
    'PdfExport',
    'ExcelExport',
    'CsvExport',
    'FirstPage',
    'PrevPage',
    'LastPage',
    'NextPage',
  ];

 export const customersGrid = [
    { type: 'checkbox', width: '5%' },
    { headerText: 'Name',
      minWidth: '10%',
      template: customerGridImage,
      textAlign: 'left' },
    { field: 'ProjectName',
      headerText: 'Project Name',
      minWidth: '10%',
      textAlign: 'left' },
    { field: 'Status',
      headerText: 'Status',
      minWidth: '12%',
      format: 'yMd',
      textAlign: 'left',
      template: customerGridStatus },
    {
      field: 'Weeks',
      headerText: 'Weeks',
      minWidth: '5%',
      format: 'C2',
      textAlign: 'left' },
    { field: 'Budget',
      headerText: 'Budget',
      minWidth: '5%',
      format: 'yMd',
      textAlign: 'left' },
  
    { field: 'Location',
      headerText: 'Location',
      minWidth: '10%',
      textAlign: 'left' },
  
    { field: 'CustomerID',
      headerText: 'Customer ID',
      minWidth: '5%',
      textAlign: 'left',
      isPrimaryKey: true,
    },
  
    ];
  
  export const employeesGrid = [
    { headerText: 'Employee',
      width: '150',
      template: gridEmployeeProfile,
      textAlign: 'Center' },
    { field: 'Name',
      headerText: '',
      width: '0',
      textAlign: 'Center',
    },
    { field: 'Title',
      headerText: 'Designation',
      width: '170',
      textAlign: 'Center',
    },
    { headerText: 'Country',
      width: '120',
      textAlign: 'Center',
      template: gridEmployeeCountry },
  
    { field: 'HireDate',
      headerText: 'Hire Date',
      width: '135',
      format: 'yMd',
      textAlign: 'Center' },
  
    { field: 'ReportsTo',
      headerText: 'Reports To',
      width: '120',
      textAlign: 'Center' },
    { field: 'EmployeeID',
      headerText: 'Employee ID',
      width: '125',
      textAlign: 'Center' },
    ];
  
 export const ordersGrid = [
        {
          headerText: 'Image',
          template: gridOrderImage,
          textAlign: 'Center',
          width: '120',
        },
        {
          field: 'OrderItems',
          headerText: 'Item',
          width: '150',
          editType: 'dropdownedit',
          textAlign: 'Center',
        },
        { field: 'CustomerName',
          headerText: 'Customer Name',
          width: '150',
          textAlign: 'Center',
        },
        {
          field: 'TotalAmount',
          headerText: 'Total Amount',
          format: 'C2',
          textAlign: 'Center',
          editType: 'numericedit',
          width: '150',
        },
        {
          headerText: 'Status',
          template: gridOrderStatus,
          field: 'OrderItems',
          textAlign: 'Center',
          width: '120',
        },
        {
          field: 'OrderID',
          headerText: 'Order ID',
          width: '120',
          textAlign: 'Center',
        },
      
        {
          field: 'Location',
          headerText: 'Location',
          width: '150',
          textAlign: 'Center',
        },
    ];
      
 export const customersData = [
        {
          CustomerID: 1001,
          CustomerName: 'Nirav Joshi',
          CustomerEmail: 'nirav@gmail.com',
          CustomerImage:
            avatar2,
          ProjectName: 'Hosting Press HTML',
          Status: 'Active',
          StatusBg: '#8BE78B',
          Weeks: '40',
          Budget: '$2.4k',
          Location: 'India',
        },
        {
          CustomerID: 1002,
      
          CustomerName: 'Sunil Joshi',
          CustomerEmail: 'sunil@gmail.com',
          ProjectName: 'Elite Admin',
          Status: 'Active',
          CustomerImage:
            avatar3,
      
          StatusBg: '#8BE78B',
          Weeks: '11',
          Budget: '$3.9k',
          Location: 'India',
        },
        {
          CustomerID: 1003,
      
          CustomerName: 'Andrew McDownland',
          CustomerEmail: 'andrew@gmail.com',
          ProjectName: 'Real Homes WP Theme',
          Status: 'Pending',
          CustomerImage:
            avatar4,
          StatusBg: '#FEC90F',
          Weeks: '19',
          Budget: '$24.5k',
          Location: 'USA',
        },
        {
          CustomerID: 1004,
      
          CustomerName: 'Christopher Jamil',
          CustomerEmail: 'jamil@gmail.com',
          ProjectName: 'MedicalPro WP Theme',
          Status: 'Completed',
          CustomerImage:
            avatar,
          StatusBg: '#8BE78B',
          Weeks: '34',
          Budget: '$16.5k',
          Location: 'USA',
        },
        {
          CustomerID: 1005,
      
          CustomerName: 'Michael',
          CustomerEmail: 'michael@gmail.com',
          ProjectName: 'Weekly WP Theme',
          Status: 'Cancel',
          CustomerImage:
            avatar2,
          StatusBg: 'red',
          Weeks: '34',
          Budget: '$16.5k',
          Location: 'USA',
        },
        {
          CustomerID: 1006,
          CustomerName: 'Nirav Joshi',
          CustomerEmail: 'nirav@gmail.com',
          CustomerImage:
            avatar2,
          ProjectName: 'Hosting Press HTML',
          Status: 'Active',
          StatusBg: '#8BE78B',
          Weeks: '40',
          Budget: '$2.4k',
          Location: 'India',
        },
        {
          CustomerID: 1007,
      
          CustomerName: 'Sunil Joshi',
          CustomerEmail: 'sunil@gmail.com',
          ProjectName: 'Elite Admin',
          Status: 'Active',
          CustomerImage:
            avatar3,
      
          StatusBg: '#8BE78B',
          Weeks: '11',
          Budget: '$3.9k',
          Location: 'India',
        },
        {
          CustomerID: 1008,
      
          CustomerName: 'Andrew McDownland',
          CustomerEmail: 'andrew@gmail.com',
          ProjectName: 'Real Homes WP Theme',
          Status: 'Pending',
          CustomerImage:
            avatar4,
          StatusBg: '#FEC90F',
          Weeks: '19',
          Budget: '$24.5k',
          Location: 'USA',
        },
        {
          CustomerID: 1009,
      
          CustomerName: 'Christopher Jamil',
          CustomerEmail: 'jamil@gmail.com',
          ProjectName: 'MedicalPro WP Theme',
          Status: 'Completed',
          CustomerImage:
            avatar,
          StatusBg: '#8BE78B',
          Weeks: '34',
          Budget: '$16.5k',
          Location: 'USA',
        },
        {
          CustomerID: 1010,
      
          CustomerName: 'Michael',
          CustomerEmail: 'michael@gmail.com',
          ProjectName: 'Weekly WP Theme',
          Status: 'Cancel',
          CustomerImage:
            avatar2,
          StatusBg: 'red',
          Weeks: '34',
          Budget: '$16.5k',
          Location: 'USA',
        },
        {
          CustomerID: 1011,
          CustomerName: 'Nirav Joshi',
          CustomerEmail: 'nirav@gmail.com',
          CustomerImage:
            avatar2,
          ProjectName: 'Hosting Press HTML',
          Status: 'Active',
          StatusBg: '#8BE78B',
          Weeks: '40',
          Budget: '$2.4k',
          Location: 'India',
        },
        {
          CustomerID: 1012,
      
          CustomerName: 'Sunil Joshi',
          CustomerEmail: 'sunil@gmail.com',
          ProjectName: 'Elite Admin',
          Status: 'Active',
          CustomerImage:
            avatar3,
      
          StatusBg: '#8BE78B',
          Weeks: '11',
          Budget: '$3.9k',
          Location: 'India',
        },
        {
          CustomerID: 1013,
      
          CustomerName: 'Andrew McDownland',
          CustomerEmail: 'andrew@gmail.com',
          ProjectName: 'Real Homes WP Theme',
          Status: 'Pending',
          CustomerImage:
            avatar4,
          StatusBg: '#FEC90F',
          Weeks: '19',
          Budget: '$24.5k',
          Location: 'USA',
        },
        {
          CustomerID: 1014,
      
          CustomerName: 'Christopher Jamil',
          CustomerEmail: 'jamil@gmail.com',
          ProjectName: 'MedicalPro WP Theme',
          Status: 'Completed',
          CustomerImage:
            avatar,
          StatusBg: '#8BE78B',
          Weeks: '34',
          Budget: '$16.5k',
          Location: 'USA',
        },
        {
          CustomerID: 1015,
      
          CustomerName: 'Michael',
          CustomerEmail: 'michael@gmail.com',
          ProjectName: 'Weekly WP Theme',
          Status: 'Cancel',
          CustomerImage:
            avatar2,
          StatusBg: 'red',
          Weeks: '34',
          Budget: '$16.5k',
          Location: 'USA',
        },
        {
          CustomerID: 1016,
          CustomerName: 'Nirav Joshi',
          CustomerEmail: 'nirav@gmail.com',
          CustomerImage:
            avatar2,
          ProjectName: 'Hosting Press HTML',
          Status: 'Active',
          StatusBg: '#8BE78B',
          Weeks: '40',
          Budget: '$2.4k',
          Location: 'India',
        },
        {
          CustomerID: 1017,
      
          CustomerName: 'Sunil Joshi',
          CustomerEmail: 'sunil@gmail.com',
          ProjectName: 'Elite Admin',
          Status: 'Active',
          CustomerImage:
            avatar3,
      
          StatusBg: '#8BE78B',
          Weeks: '11',
          Budget: '$3.9k',
          Location: 'India',
        },
        {
          CustomerID: 1018,
      
          CustomerName: 'Andrew McDownland',
          CustomerEmail: 'andrew@gmail.com',
          ProjectName: 'Real Homes WP Theme',
          Status: 'Pending',
          CustomerImage:
            avatar4,
          StatusBg: '#FEC90F',
          Weeks: '19',
          Budget: '$24.5k',
          Location: 'USA',
        },
        {
          CustomerID: 1019,
      
          CustomerName: 'Christopher Jamil',
          CustomerEmail: 'jamil@gmail.com',
          ProjectName: 'MedicalPro WP Theme',
          Status: 'Completed',
          CustomerImage:
            avatar,
          StatusBg: '#8BE78B',
          Weeks: '34',
          Budget: '$16.5k',
          Location: 'USA',
        },
        {
          CustomerID: 1020,
      
          CustomerName: 'Michael',
          CustomerEmail: 'michael@gmail.com',
          ProjectName: 'Weekly WP Theme',
          Status: 'Cancel',
          CustomerImage:
            avatar2,
          StatusBg: 'red',
          Weeks: '34',
          Budget: '$16.5k',
          Location: 'USA',
        },
        {
          CustomerID: 1021,
          CustomerName: 'Nirav Joshi',
          CustomerEmail: 'nirav@gmail.com',
          CustomerImage:
            avatar2,
          ProjectName: 'Hosting Press HTML',
          Status: 'Active',
          StatusBg: '#8BE78B',
          Weeks: '40',
          Budget: '$2.4k',
          Location: 'India',
        },
        {
          CustomerID: 1022,
      
          CustomerName: 'Sunil Joshi',
          CustomerEmail: 'sunil@gmail.com',
          ProjectName: 'Elite Admin',
          Status: 'Active',
          CustomerImage:
            avatar3,
      
          StatusBg: '#8BE78B',
          Weeks: '11',
          Budget: '$3.9k',
          Location: 'India',
        },
        {
          CustomerID: 1023,
      
          CustomerName: 'Andrew McDownland',
          CustomerEmail: 'andrew@gmail.com',
          ProjectName: 'Real Homes WP Theme',
          Status: 'Pending',
          CustomerImage:
            avatar4,
          StatusBg: '#FEC90F',
          Weeks: '19',
          Budget: '$24.5k',
          Location: 'USA',
        },
        {
          CustomerID: 1024,
      
          CustomerName: 'Christopher Jamil',
          CustomerEmail: 'jamil@gmail.com',
          ProjectName: 'MedicalPro WP Theme',
          Status: 'Completed',
          CustomerImage:
            avatar,
          StatusBg: '#8BE78B',
          Weeks: '34',
          Budget: '$16.5k',
          Location: 'USA',
        },
        {
          CustomerID: 1025,
      
          CustomerName: 'Michael',
          CustomerEmail: 'michael@gmail.com',
          ProjectName: 'Weekly WP Theme',
          Status: 'Cancel',
          CustomerImage:
            avatar2,
          StatusBg: 'red',
          Weeks: '34',
          Budget: '$16.5k',
          Location: 'USA',
        },
        {
          CustomerID: 1026,
          CustomerName: 'Nirav Joshi',
          CustomerEmail: 'nirav@gmail.com',
          CustomerImage:
            avatar2,
          ProjectName: 'Hosting Press HTML',
          Status: 'Active',
          StatusBg: '#8BE78B',
          Weeks: '40',
          Budget: '$2.4k',
          Location: 'India',
        },
        {
          CustomerID: 1027,
      
          CustomerName: 'Sunil Joshi',
          CustomerEmail: 'sunil@gmail.com',
          ProjectName: 'Elite Admin',
          Status: 'Active',
          CustomerImage:
            avatar3,
      
          StatusBg: '#8BE78B',
          Weeks: '11',
          Budget: '$3.9k',
          Location: 'India',
        },
        {
          CustomerID: 1028,
      
          CustomerName: 'Andrew McDownland',
          CustomerEmail: 'andrew@gmail.com',
          ProjectName: 'Real Homes WP Theme',
          Status: 'Pending',
          CustomerImage:
            avatar4,
          StatusBg: '#FEC90F',
          Weeks: '19',
          Budget: '$24.5k',
          Location: 'USA',
        },
    ];

 export const employeesData = [
            {
              EmployeeID: 1,
              Name: 'Nancy Davolio',
              Title: 'Sales Representative',
              HireDate: '01/02/2021',
              Country: 'USA',
              ReportsTo: 'Carson',
              EmployeeImage:
              avatar3,
            },
            {
              EmployeeID: 2,
              Name: 'Nasimiyu Danai',
              Title: 'Marketing Head',
              HireDate: '01/02/2021',
              Country: 'USA',
              ReportsTo: 'Carson',
              EmployeeImage:
                avatar3,
            },
            {
              EmployeeID: 3,
              Name: 'Iulia Albu',
              Title: 'HR',
              HireDate: '01/02/2021',
              Country: 'USA',
              ReportsTo: 'Carson',
              EmployeeImage:
                avatar4,
            },
            {
              EmployeeID: 4,
              Name: 'Siegbert Gottfried',
              Title: 'Marketing Head',
              HireDate: '01/02/2021',
              Country: 'USA',
              ReportsTo: 'Carson',
              EmployeeImage:
                avatar2,
            },
            {
              EmployeeID: 5,
              Name: 'Omar Darobe',
              Title: 'HR',
              HireDate: '01/02/2021',
              Country: 'USA',
              ReportsTo: 'Carson',
              EmployeeImage:
                avatar,
            },
            {
              EmployeeID: 4,
              Name: 'Penjani Inyene',
              Title: 'Marketing Head',
              HireDate: '01/02/2021',
              Country: 'USA',
              ReportsTo: 'Carson',
              EmployeeImage:
                avatar,
            },
            {
              EmployeeID: 5,
              Name: 'Miron Vitold',
              Title: 'HR',
              HireDate: '01/02/2021',
              Country: 'USA',
              ReportsTo: 'Carson',
              EmployeeImage:
                avatar2,
            },
            {
              EmployeeID: 1,
              Name: 'Nancy Davolio',
              Title: 'Sales Representative',
              HireDate: '01/02/2021',
              Country: 'USA',
              ReportsTo: 'Carson',
              EmployeeImage:
              avatar2,
          
            },
            {
              EmployeeID: 2,
              Name: 'Nasimiyu Danai',
              Title: 'Marketing Head',
              HireDate: '01/02/2021',
              Country: 'USA',
              ReportsTo: 'Carson',
              EmployeeImage:
                avatar3,
            },
            {
              EmployeeID: 3,
              Name: 'Iulia Albu',
              Title: 'HR',
              HireDate: '01/02/2021',
              Country: 'USA',
              ReportsTo: 'Carson',
              EmployeeImage:
                avatar4,
            },
            {
              EmployeeID: 4,
              Name: 'Siegbert Gottfried',
              Title: 'Marketing Head',
              HireDate: '01/02/2021',
              Country: 'USA',
              ReportsTo: 'Carson',
              EmployeeImage:
                avatar2,
            },
            {
              EmployeeID: 5,
              Name: 'Omar Darobe',
              Title: 'HR',
              HireDate: '01/02/2021',
              Country: 'USA',
              ReportsTo: 'Carson',
              EmployeeImage:
                avatar,
            },
            {
              EmployeeID: 4,
              Name: 'Penjani Inyene',
              Title: 'Marketing Head',
              HireDate: '01/02/2021',
              Country: 'USA',
              ReportsTo: 'Carson',
              EmployeeImage:
                avatar,
            },
            {
              EmployeeID: 5,
              Name: 'Miron Vitold',
              Title: 'HR',
              HireDate: '01/02/2021',
              Country: 'USA',
              ReportsTo: 'Carson',
              EmployeeImage:
                avatar2,
            },
            {
              EmployeeID: 1,
              Name: 'Nancy Davolio',
              Title: 'Sales Representative',
              HireDate: '01/02/2021',
              Country: 'USA',
              ReportsTo: 'Carson',
              EmployeeImage:
              avatar,
            },
            {
              EmployeeID: 2,
              Name: 'Nasimiyu Danai',
              Title: 'Marketing Head',
              HireDate: '01/02/2021',
              Country: 'USA',
              ReportsTo: 'Carson',
              EmployeeImage:
                avatar3,
            },
            {
              EmployeeID: 3,
              Name: 'Iulia Albu',
              Title: 'HR',
              HireDate: '01/02/2021',
              Country: 'USA',
              ReportsTo: 'Carson',
              EmployeeImage:
                avatar4,
            },
            {
              EmployeeID: 4,
              Name: 'Siegbert Gottfried',
              Title: 'Marketing Head',
              HireDate: '01/02/2021',
              Country: 'USA',
              ReportsTo: 'Carson',
              EmployeeImage:
                avatar2,
            },
            {
              EmployeeID: 5,
              Name: 'Omar Darobe',
              Title: 'HR',
              HireDate: '01/02/2021',
              Country: 'USA',
              ReportsTo: 'Carson',
              EmployeeImage:
                avatar,
            },
            {
              EmployeeID: 4,
              Name: 'Penjani Inyene',
              Title: 'Marketing Head',
              HireDate: '01/02/2021',
              Country: 'USA',
              ReportsTo: 'Carson',
              EmployeeImage:
                avatar,
            },
            {
              EmployeeID: 5,
              Name: 'Miron Vitold',
              Title: 'HR',
              HireDate: '01/02/2021',
              Country: 'USA',
              ReportsTo: 'Carson',
              EmployeeImage:
                avatar2,
            },
            {
              EmployeeID: 1,
              Name: 'Nancy Davolio',
              Title: 'Sales Representative',
              HireDate: '01/02/2021',
              Country: 'USA',
              ReportsTo: 'Carson',
              EmployeeImage:
              avatar2,
          
            },
            {
              EmployeeID: 2,
              Name: 'Nasimiyu Danai',
              Title: 'Marketing Head',
              HireDate: '01/02/2021',
              Country: 'USA',
              ReportsTo: 'Carson',
              EmployeeImage:
                avatar3,
            },
            {
              EmployeeID: 3,
              Name: 'Iulia Albu',
              Title: 'HR',
              HireDate: '01/02/2021',
              Country: 'USA',
              ReportsTo: 'Carson',
              EmployeeImage:
                avatar4,
            },
            {
              EmployeeID: 4,
              Name: 'Siegbert Gottfried',
              Title: 'Marketing Head',
              HireDate: '01/02/2021',
              Country: 'USA',
              ReportsTo: 'Carson',
              EmployeeImage:
                avatar2,
            },
            {
              EmployeeID: 5,
              Name: 'Omar Darobe',
              Title: 'HR',
              HireDate: '01/02/2021',
              Country: 'USA',
              ReportsTo: 'Carson',
              EmployeeImage:
                avatar,
            },
            {
              EmployeeID: 4,
              Name: 'Penjani Inyene',
              Title: 'Marketing Head',
              HireDate: '01/02/2021',
              Country: 'USA',
              ReportsTo: 'Carson',
              EmployeeImage:
                avatar,
            },
            {
              EmployeeID: 5,
              Name: 'Miron Vitold',
              Title: 'HR',
              HireDate: '01/02/2021',
              Country: 'USA',
              ReportsTo: 'Carson',
              EmployeeImage:
                avatar2,
            },
            {
              EmployeeID: 1,
              Name: 'Nancy Davolio',
              Title: 'Sales Representative',
              HireDate: '01/02/2021',
              Country: 'USA',
              ReportsTo: 'Carson',
              EmployeeImage:
              avatar2,
          
            },
            {
              EmployeeID: 2,
              Name: 'Nasimiyu Danai',
              Title: 'Marketing Head',
              HireDate: '01/02/2021',
              Country: 'USA',
              ReportsTo: 'Carson',
              EmployeeImage:
                avatar3,
            },
            {
              EmployeeID: 3,
              Name: 'Iulia Albu',
              Title: 'HR',
              HireDate: '01/02/2021',
              Country: 'USA',
              ReportsTo: 'Carson',
              EmployeeImage:
                avatar4,
            },
            {
              EmployeeID: 4,
              Name: 'Siegbert Gottfried',
              Title: 'Marketing Head',
              HireDate: '01/02/2021',
              Country: 'USA',
              ReportsTo: 'Carson',
              EmployeeImage:
                avatar2,
            },
            {
              EmployeeID: 5,
              Name: 'Omar Darobe',
              Title: 'HR',
              HireDate: '01/02/2021',
              Country: 'USA',
              ReportsTo: 'Carson',
              EmployeeImage:
                avatar,
            },
            {
              EmployeeID: 4,
              Name: 'Penjani Inyene',
              Title: 'Marketing Head',
              HireDate: '01/02/2021',
              Country: 'USA',
              ReportsTo: 'Carson',
              EmployeeImage:
                avatar,
            },
            {
              EmployeeID: 5,
              Name: 'Miron Vitold',
              Title: 'HR',
              HireDate: '01/02/2021',
              Country: 'USA',
              ReportsTo: 'Carson',
              EmployeeImage:
                avatar2,
            },
            {
              EmployeeID: 1,
              Name: 'Nancy Davolio',
              Title: 'Sales Representative',
              HireDate: '01/02/2021',
              Country: 'USA',
              ReportsTo: 'Carson',
              EmployeeImage:
              avatar2,
          
            },
            {
              EmployeeID: 2,
              Name: 'Nasimiyu Danai',
              Title: 'Marketing Head',
              HireDate: '01/02/2021',
              Country: 'USA',
              ReportsTo: 'Carson',
              EmployeeImage:
                avatar3,
            },
            {
              EmployeeID: 3,
              Name: 'Iulia Albu',
              Title: 'HR',
              HireDate: '01/02/2021',
              Country: 'USA',
              ReportsTo: 'Carson',
              EmployeeImage:
                avatar4,
            },
            {
              EmployeeID: 4,
              Name: 'Siegbert Gottfried',
              Title: 'Marketing Head',
              HireDate: '01/02/2021',
              Country: 'USA',
              ReportsTo: 'Carson',
              EmployeeImage:
                avatar2,
            },
            {
              EmployeeID: 5,
              Name: 'Omar Darobe',
              Title: 'HR',
              HireDate: '01/02/2021',
              Country: 'USA',
              ReportsTo: 'Carson',
              EmployeeImage:
                avatar,
            },
            {
              EmployeeID: 4,
              Name: 'Penjani Inyene',
              Title: 'Marketing Head',
              HireDate: '01/02/2021',
              Country: 'USA',
              ReportsTo: 'Carson',
              EmployeeImage:
                avatar,
            },
            {
              EmployeeID: 5,
              Name: 'Miron Vitold',
              Title: 'HR',
              HireDate: '01/02/2021',
              Country: 'USA',
              ReportsTo: 'Carson',
              EmployeeImage:
                avatar2,
            },
            {
              EmployeeID: 1,
              Name: 'Nancy Davolio',
              Title: 'Sales Representative',
              HireDate: '01/02/2021',
              Country: 'USA',
              ReportsTo: 'Carson',
              EmployeeImage:
              avatar2,
          
            },
            {
              EmployeeID: 2,
              Name: 'Nasimiyu Danai',
              Title: 'Marketing Head',
              HireDate: '01/02/2021',
              Country: 'USA',
              ReportsTo: 'Carson',
              EmployeeImage:
                avatar3,
            },
            {
              EmployeeID: 3,
              Name: 'Iulia Albu',
              Title: 'HR',
              HireDate: '01/02/2021',
              Country: 'USA',
              ReportsTo: 'Carson',
              EmployeeImage:
                avatar4,
            },
            {
              EmployeeID: 4,
              Name: 'Siegbert Gottfried',
              Title: 'Marketing Head',
              HireDate: '01/02/2021',
              Country: 'USA',
              ReportsTo: 'Carson',
              EmployeeImage:
                avatar2,
            },
            {
              EmployeeID: 5,
              Name: 'Omar Darobe',
              Title: 'HR',
              HireDate: '01/02/2021',
              Country: 'USA',
              ReportsTo: 'Carson',
              EmployeeImage:
                avatar,
            },
            {
              EmployeeID: 4,
              Name: 'Penjani Inyene',
              Title: 'Marketing Head',
              HireDate: '01/02/2021',
              Country: 'USA',
              ReportsTo: 'Carson',
              EmployeeImage:
                avatar,
            },
            {
              EmployeeID: 5,
              Name: 'Miron Vitold',
              Title: 'HR',
              HireDate: '01/02/2021',
              Country: 'USA',
              ReportsTo: 'Carson',
              EmployeeImage:
                avatar2,
            },
            {
              EmployeeID: 1,
              Name: 'Nancy Davolio',
              Title: 'Sales Representative',
              HireDate: '01/02/2021',
              Country: 'USA',
              ReportsTo: 'Carson',
              EmployeeImage:
              avatar2,
          
            },
            {
              EmployeeID: 2,
              Name: 'Nasimiyu Danai',
              Title: 'Marketing Head',
              HireDate: '01/02/2021',
              Country: 'USA',
              ReportsTo: 'Carson',
              EmployeeImage:
                avatar3,
            },
            {
              EmployeeID: 3,
              Name: 'Iulia Albu',
              Title: 'HR',
              HireDate: '01/02/2021',
              Country: 'USA',
              ReportsTo: 'Carson',
              EmployeeImage:
                avatar4,
            },
            {
              EmployeeID: 4,
              Name: 'Siegbert Gottfried',
              Title: 'Marketing Head',
              HireDate: '01/02/2021',
              Country: 'USA',
              ReportsTo: 'Carson',
              EmployeeImage:
                avatar2,
            },
            {
              EmployeeID: 5,
              Name: 'Omar Darobe',
              Title: 'HR',
              HireDate: '01/02/2021',
              Country: 'USA',
              ReportsTo: 'Carson',
              EmployeeImage:
                avatar,
            },
            {
              EmployeeID: 4,
              Name: 'Penjani Inyene',
              Title: 'Marketing Head',
              HireDate: '01/02/2021',
              Country: 'USA',
              ReportsTo: 'Carson',
              EmployeeImage:
                avatar,
            },
            {
              EmployeeID: 5,
              Name: 'Miron Vitold',
              Title: 'HR',
              HireDate: '01/02/2021',
              Country: 'USA',
              ReportsTo: 'Carson',
              EmployeeImage:
                avatar2,
            },
            {
              EmployeeID: 1,
              Name: 'Nancy Davolio',
              Title: 'Sales Representative',
              HireDate: '01/02/2021',
              Country: 'USA',
              ReportsTo: 'Carson',
              EmployeeImage:
              avatar2,
          
            },
            {
              EmployeeID: 2,
              Name: 'Nasimiyu Danai',
              Title: 'Marketing Head',
              HireDate: '01/02/2021',
              Country: 'USA',
              ReportsTo: 'Carson',
              EmployeeImage:
                avatar3,
            },
            {
              EmployeeID: 3,
              Name: 'Iulia Albu',
              Title: 'HR',
              HireDate: '01/02/2021',
              Country: 'USA',
              ReportsTo: 'Carson',
              EmployeeImage:
                avatar4,
            },
            {
              EmployeeID: 4,
              Name: 'Siegbert Gottfried',
              Title: 'Marketing Head',
              HireDate: '01/02/2021',
              Country: 'USA',
              ReportsTo: 'Carson',
              EmployeeImage:
                avatar2,
            },
            {
              EmployeeID: 5,
              Name: 'Omar Darobe',
              Title: 'HR',
              HireDate: '01/02/2021',
              Country: 'USA',
              ReportsTo: 'Carson',
              EmployeeImage:
                avatar,
            },
            {
              EmployeeID: 4,
              Name: 'Penjani Inyene',
              Title: 'Marketing Head',
              HireDate: '01/02/2021',
              Country: 'USA',
              ReportsTo: 'Carson',
              EmployeeImage:
                avatar,
            },
            {
              EmployeeID: 5,
              Name: 'Miron Vitold',
              Title: 'HR',
              HireDate: '01/02/2021',
              Country: 'USA',
              ReportsTo: 'Carson',
              EmployeeImage:
                avatar2,
            },
    ];

 export const ordersData = [
      {
        OrderID: 10248,
        CustomerName: 'Vinet',
    
        TotalAmount: 32.38,
        OrderItems: 'Fresh Tomato',
        Location: 'USA',
        Status: 'pending',
        StatusBg: '#FB9678',
        ProductImage:
          product6,
      },
      {
        OrderID: 345653,
        CustomerName: 'Carson Darrin',
        TotalAmount: 56.34,
        OrderItems: 'Butter Scotch',
        Location: 'Delhi',
        Status: 'complete',
        StatusBg: '#8BE78B',
        ProductImage:
          product5,
      },
      {
        OrderID: 390457,
        CustomerName: 'Fran Perez',
        TotalAmount: 93.31,
        OrderItems: 'Candy Gucci',
        Location: 'New York',
        Status: 'active',
        StatusBg: '#03C9D7',
        ProductImage:
          product7,
      },
      {
        OrderID: 893486,
        CustomerName: 'Anika Viseer',
        TotalAmount: 93.31,
        OrderItems: 'Night Lamp',
        Location: 'Germany',
        Status: 'canceled',
        StatusBg: '#FF5C8E',
        ProductImage:
          product4,
      },
      {
        OrderID: 748975,
        CustomerName: 'Miron Vitold',
        TotalAmount: 23.99,
        OrderItems: 'Healthcare Erbology',
        Location: 'Spain',
        Status: 'rejected',
        StatusBg: 'red',
        ProductImage:
        product1,
      },
      {
        OrderID: 94757,
        CustomerName: 'Omar Darobe',
        TotalAmount: 95.99,
        OrderItems: 'Makeup Lancome Rouge',
        Location: 'USA',
        Status: 'canceled',
        StatusBg: '#FF5C8E',
        ProductImage:
          product2,
      },
      {
        OrderID: 944895,
        CustomerName: 'Lulia albu',
        TotalAmount: 17.99,
        OrderItems: 'Skincare',
        Location: 'USA',
        Status: 'active',
        StatusBg: '#03C9D7',
        ProductImage:
          product3,
      },
      {
        OrderID: 845954,
        CustomerName: 'Penjani',
        TotalAmount: 59.99,
        OrderItems: 'Headphone',
        Location: 'USA',
        Status: 'complete',
        StatusBg: '#8BE78B',
        ProductImage:
          product4,
      },
      {
        OrderID: 845954,
        CustomerName: 'Jie Yan',
        TotalAmount: 87.99,
        OrderItems: 'Shoes',
        Location: 'USA',
        Status: 'pending',
        StatusBg: '#FB9678',
        ProductImage:
          'https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg',
      },
      {
        OrderID: 874534,
        CustomerName: 'Danai',
        TotalAmount: 122.99,
        OrderItems: 'Watch',
        Location: 'USA',
        Status: 'canceled',
        StatusBg: '#FF5C8E',
        ProductImage:
          'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
      },
      {
        OrderID: 38489,
        CustomerName: 'Miron',
        TotalAmount: 87.99,
        OrderItems: 'Ice Cream',
        Location: 'USA',
        Status: 'active',
        StatusBg: '#03C9D7',
        ProductImage:
          'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg',
      },
      {
        OrderID: 24546,
        CustomerName: 'Frank',
        TotalAmount: 84.99,
        OrderItems: 'Pan Cake',
        Location: 'Delhi',
        Status: 'complete',
        StatusBg: '#8BE78B',
        ProductImage:
          'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
      },
      {
        OrderID: 874534,
        CustomerName: 'Danai',
        TotalAmount: 122.99,
        OrderItems: 'Watch',
        Location: 'USA',
        Status: 'canceled',
        StatusBg: '#FF5C8E',
        ProductImage:
          'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
      },
      {
        OrderID: 10248,
        CustomerName: 'Vinet',
    
        TotalAmount: 32.38,
        OrderItems: 'Fresh Tomato',
        Location: 'USA',
        Status: 'pending',
        StatusBg: '#FB9678',
        ProductImage:
          product6,
      },
      {
        OrderID: 345653,
        CustomerName: 'Carson Darrin',
        TotalAmount: 56.34,
        OrderItems: 'Butter Scotch',
        Location: 'Delhi',
        Status: 'complete',
        StatusBg: '#8BE78B',
        ProductImage:
          product5,
      },
      {
        OrderID: 390457,
        CustomerName: 'Fran Perez',
        TotalAmount: 93.31,
        OrderItems: 'Candy Gucci',
        Location: 'New York',
        Status: 'active',
        StatusBg: '#03C9D7',
        ProductImage:
          product7,
      },
      {
        OrderID: 893486,
        CustomerName: 'Anika Viseer',
        TotalAmount: 93.31,
        OrderItems: 'Night Lamp',
        Location: 'Germany',
        Status: 'canceled',
        StatusBg: '#FF5C8E',
        ProductImage:
          product4,
      },
      {
        OrderID: 748975,
        CustomerName: 'Miron Vitold',
        TotalAmount: 23.99,
        OrderItems: 'Healthcare Erbology',
        Location: 'Spain',
        Status: 'rejected',
        StatusBg: 'red',
        ProductImage:
          product1,
      },
      {
        OrderID: 94757,
        CustomerName: 'Omar Darobe',
        TotalAmount: 95.99,
        OrderItems: 'Makeup Lancome Rouge',
        Location: 'USA',
        Status: 'canceled',
        StatusBg: '#FF5C8E',
        ProductImage:
          product2,
      },
      {
        OrderID: 944895,
        CustomerName: 'Lulia albu',
        TotalAmount: 17.99,
        OrderItems: 'Skincare',
        Location: 'USA',
        Status: 'active',
        StatusBg: '#03C9D7',
        ProductImage:
          product3,
      },
      {
        OrderID: 845954,
        CustomerName: 'Penjani',
        TotalAmount: 59.99,
        OrderItems: 'Headphone',
        Location: 'USA',
        Status: 'complete',
        StatusBg: '#8BE78B',
        ProductImage:
          product4,
      },
      {
        OrderID: 845954,
        CustomerName: 'Jie Yan',
        TotalAmount: 87.99,
        OrderItems: 'Shoes',
        Location: 'USA',
        Status: 'pending',
        StatusBg: '#FB9678',
        ProductImage:
          'https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg',
      },
      {
        OrderID: 874534,
        CustomerName: 'Danai',
        TotalAmount: 122.99,
        OrderItems: 'Watch',
        Location: 'USA',
        Status: 'canceled',
        StatusBg: '#FF5C8E',
        ProductImage:
          'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
      },
      {
        OrderID: 38489,
        CustomerName: 'Miron',
        TotalAmount: 87.99,
        OrderItems: 'Ice Cream',
        Location: 'USA',
        Status: 'active',
        StatusBg: '#03C9D7',
        ProductImage:
          'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg',
      },
      {
        OrderID: 24546,
        CustomerName: 'Frank',
        TotalAmount: 84.99,
        OrderItems: 'Pan Cake',
        Location: 'Delhi',
        Status: 'complete',
        StatusBg: '#8BE78B',
        ProductImage:
          'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
      },
      {
        OrderID: 874534,
        CustomerName: 'Danai',
        TotalAmount: 122.99,
        OrderItems: 'Watch',
        Location: 'USA',
        Status: 'canceled',
        StatusBg: '#FF5C8E',
        ProductImage:
          'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
      },
      {
        OrderID: 10248,
        CustomerName: 'Vinet',
    
        TotalAmount: 32.38,
        OrderItems: 'Fresh Tomato',
        Location: 'USA',
        Status: 'pending',
        StatusBg: '#FB9678',
        ProductImage:
          product6,
      },
      {
        OrderID: 345653,
        CustomerName: 'Carson Darrin',
        TotalAmount: 56.34,
        OrderItems: 'Butter Scotch',
        Location: 'Delhi',
        Status: 'complete',
        StatusBg: '#8BE78B',
        ProductImage:
          product5,
      },
      {
        OrderID: 390457,
        CustomerName: 'Fran Perez',
        TotalAmount: 93.31,
        OrderItems: 'Candy Gucci',
        Location: 'New York',
        Status: 'active',
        StatusBg: '#03C9D7',
        ProductImage:
          product7,
      },
      {
        OrderID: 893486,
        CustomerName: 'Anika Viseer',
        TotalAmount: 93.31,
        OrderItems: 'Night Lamp',
        Location: 'Germany',
        Status: 'canceled',
        StatusBg: '#FF5C8E',
        ProductImage:
          product4,
      },
      {
        OrderID: 748975,
        CustomerName: 'Miron Vitold',
        TotalAmount: 23.99,
        OrderItems: 'Healthcare Erbology',
        Location: 'Spain',
        Status: 'rejected',
        StatusBg: 'red',
        ProductImage:
          product1,
      },
      {
        OrderID: 94757,
        CustomerName: 'Omar Darobe',
        TotalAmount: 95.99,
        OrderItems: 'Makeup Lancome Rouge',
        Location: 'USA',
        Status: 'canceled',
        StatusBg: '#FF5C8E',
        ProductImage:
          product2,
      },
      {
        OrderID: 944895,
        CustomerName: 'Lulia albu',
        TotalAmount: 17.99,
        OrderItems: 'Skincare',
        Location: 'USA',
        Status: 'active',
        StatusBg: '#03C9D7',
        ProductImage:
          product3,
      },
      {
        OrderID: 845954,
        CustomerName: 'Penjani',
        TotalAmount: 59.99,
        OrderItems: 'Headphone',
        Location: 'USA',
        Status: 'complete',
        StatusBg: '#8BE78B',
        ProductImage:
          product4,
      },
      {
        OrderID: 845954,
        CustomerName: 'Jie Yan',
        TotalAmount: 87.99,
        OrderItems: 'Shoes',
        Location: 'USA',
        Status: 'pending',
        StatusBg: '#FB9678',
        ProductImage:
          'https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg',
      },
      {
        OrderID: 874534,
        CustomerName: 'Danai',
        TotalAmount: 122.99,
        OrderItems: 'Watch',
        Location: 'USA',
        Status: 'canceled',
        StatusBg: '#FF5C8E',
        ProductImage:
          'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
      },
      {
        OrderID: 38489,
        CustomerName: 'Miron',
        TotalAmount: 87.99,
        OrderItems: 'Ice Cream',
        Location: 'USA',
        Status: 'active',
        StatusBg: '#03C9D7',
        ProductImage:
          'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg',
      },
      {
        OrderID: 24546,
        CustomerName: 'Frank',
        TotalAmount: 84.99,
        OrderItems: 'Pan Cake',
        Location: 'Delhi',
        Status: 'complete',
        StatusBg: '#8BE78B',
        ProductImage:
          'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
      },
      {
        OrderID: 874534,
        CustomerName: 'Danai',
        TotalAmount: 122.99,
        OrderItems: 'Watch',
        Location: 'USA',
        Status: 'canceled',
        StatusBg: '#FF5C8E',
        ProductImage:
          'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
      },
      {
        OrderID: 10248,
        CustomerName: 'Vinet',
    
        TotalAmount: 32.38,
        OrderItems: 'Fresh Tomato',
        Location: 'USA',
        Status: 'pending',
        StatusBg: '#FB9678',
        ProductImage:
          product6,
      },
      {
        OrderID: 345653,
        CustomerName: 'Carson Darrin',
        TotalAmount: 56.34,
        OrderItems: 'Butter Scotch',
        Location: 'Delhi',
        Status: 'complete',
        StatusBg: '#8BE78B',
        ProductImage:
          product5,
      },
      {
        OrderID: 390457,
        CustomerName: 'Fran Perez',
        TotalAmount: 93.31,
        OrderItems: 'Candy Gucci',
        Location: 'New York',
        Status: 'active',
        StatusBg: '#03C9D7',
        ProductImage:
          product7,
      },
      {
        OrderID: 893486,
        CustomerName: 'Anika Viseer',
        TotalAmount: 93.31,
        OrderItems: 'Night Lamp',
        Location: 'Germany',
        Status: 'canceled',
        StatusBg: '#FF5C8E',
        ProductImage:
          product4,
      },
      {
        OrderID: 748975,
        CustomerName: 'Miron Vitold',
        TotalAmount: 23.99,
        OrderItems: 'Healthcare Erbology',
        Location: 'Spain',
        Status: 'rejected',
        StatusBg: 'red',
        ProductImage:
          product1,
      },
      {
        OrderID: 94757,
        CustomerName: 'Omar Darobe',
        TotalAmount: 95.99,
        OrderItems: 'Makeup Lancome Rouge',
        Location: 'USA',
        Status: 'canceled',
        StatusBg: '#FF5C8E',
        ProductImage:
          product2,
      },
      {
        OrderID: 944895,
        CustomerName: 'Lulia albu',
        TotalAmount: 17.99,
        OrderItems: 'Skincare',
        Location: 'USA',
        Status: 'active',
        StatusBg: '#03C9D7',
        ProductImage:
          product3,
      },
      {
        OrderID: 845954,
        CustomerName: 'Penjani',
        TotalAmount: 59.99,
        OrderItems: 'Headphone',
        Location: 'USA',
        Status: 'complete',
        StatusBg: '#8BE78B',
        ProductImage:
          product4,
      },
      {
        OrderID: 845954,
        CustomerName: 'Jie Yan',
        TotalAmount: 87.99,
        OrderItems: 'Shoes',
        Location: 'USA',
        Status: 'pending',
        StatusBg: '#FB9678',
        ProductImage:
          'https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg',
      },
      {
        OrderID: 874534,
        CustomerName: 'Danai',
        TotalAmount: 122.99,
        OrderItems: 'Watch',
        Location: 'USA',
        Status: 'canceled',
        StatusBg: '#FF5C8E',
        ProductImage:
          'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
      },
      {
        OrderID: 38489,
        CustomerName: 'Miron',
        TotalAmount: 87.99,
        OrderItems: 'Ice Cream',
        Location: 'USA',
        Status: 'active',
        StatusBg: '#03C9D7',
        ProductImage:
          'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg',
      },
      {
        OrderID: 24546,
        CustomerName: 'Frank',
        TotalAmount: 84.99,
        OrderItems: 'Pan Cake',
        Location: 'Delhi',
        Status: 'complete',
        StatusBg: '#8BE78B',
        ProductImage:
          'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
      },
      {
        OrderID: 874534,
        CustomerName: 'Danai',
        TotalAmount: 122.99,
        OrderItems: 'Watch',
        Location: 'USA',
        Status: 'canceled',
        StatusBg: '#FF5C8E',
        ProductImage:
          'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
      },
      {
        OrderID: 10248,
        CustomerName: 'Vinet',
    
        TotalAmount: 32.38,
        OrderItems: 'Fresh Tomato',
        Location: 'USA',
        Status: 'pending',
        StatusBg: '#FB9678',
        ProductImage:
          product6,
      },
      {
        OrderID: 345653,
        CustomerName: 'Carson Darrin',
        TotalAmount: 56.34,
        OrderItems: 'Butter Scotch',
        Location: 'Delhi',
        Status: 'complete',
        StatusBg: '#8BE78B',
        ProductImage:
          product5,
      },
      {
        OrderID: 390457,
        CustomerName: 'Fran Perez',
        TotalAmount: 93.31,
        OrderItems: 'Candy Gucci',
        Location: 'New York',
        Status: 'active',
        StatusBg: '#03C9D7',
        ProductImage:
          product7,
      },
      {
        OrderID: 893486,
        CustomerName: 'Anika Viseer',
        TotalAmount: 93.31,
        OrderItems: 'Night Lamp',
        Location: 'Germany',
        Status: 'canceled',
        StatusBg: '#FF5C8E',
        ProductImage:
          product4,
      },
      {
        OrderID: 748975,
        CustomerName: 'Miron Vitold',
        TotalAmount: 23.99,
        OrderItems: 'Healthcare Erbology',
        Location: 'Spain',
        Status: 'rejected',
        StatusBg: 'red',
        ProductImage:
          product1,
      },
      {
        OrderID: 94757,
        CustomerName: 'Omar Darobe',
        TotalAmount: 95.99,
        OrderItems: 'Makeup Lancome Rouge',
        Location: 'USA',
        Status: 'canceled',
        StatusBg: '#FF5C8E',
        ProductImage:
          product2,
      },
      {
        OrderID: 944895,
        CustomerName: 'Lulia albu',
        TotalAmount: 17.99,
        OrderItems: 'Skincare',
        Location: 'USA',
        Status: 'active',
        StatusBg: '#03C9D7',
        ProductImage:
          product3,
      },
      {
        OrderID: 845954,
        CustomerName: 'Penjani',
        TotalAmount: 59.99,
        OrderItems: 'Headphone',
        Location: 'USA',
        Status: 'complete',
        StatusBg: '#8BE78B',
        ProductImage:
          product4,
      },
      {
        OrderID: 845954,
        CustomerName: 'Jie Yan',
        TotalAmount: 87.99,
        OrderItems: 'Shoes',
        Location: 'USA',
        Status: 'pending',
        StatusBg: '#FB9678',
        ProductImage:
          'https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg',
      },
      {
        OrderID: 874534,
        CustomerName: 'Danai',
        TotalAmount: 122.99,
        OrderItems: 'Watch',
        Location: 'USA',
        Status: 'canceled',
        StatusBg: '#FF5C8E',
        ProductImage:
          'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
      },
      {
        OrderID: 38489,
        CustomerName: 'Miron',
        TotalAmount: 87.99,
        OrderItems: 'Ice Cream',
        Location: 'USA',
        Status: 'active',
        StatusBg: '#03C9D7',
        ProductImage:
          'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg',
      },
      {
        OrderID: 24546,
        CustomerName: 'Frank',
        TotalAmount: 84.99,
        OrderItems: 'Pan Cake',
        Location: 'Delhi',
        Status: 'complete',
        StatusBg: '#8BE78B',
        ProductImage:
          'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
      },
      {
        OrderID: 874534,
        CustomerName: 'Danai',
        TotalAmount: 122.99,
        OrderItems: 'Watch',
        Location: 'USA',
        Status: 'canceled',
        StatusBg: '#FF5C8E',
        ProductImage:
          'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
      },
    ];  