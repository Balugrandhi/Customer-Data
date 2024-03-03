
import React, { useState, useEffect } from 'react';

const TableWithSearchAndPagination = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(20);

  useEffect(() => {
    // Filter data based on the search 
    const filtered = data.filter(item =>
      item.customer_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  }, [data, searchTerm]);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentItems = filteredData.slice(indexOfFirstRecord, indexOfLastRecord);

  const handleSearch = event => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset to first page when searching
  };

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const renderTableRows= () => {
    return currentItems.map(record => (
        <tr key={record.sno}>
          <td>{record.customer_name}</td>
          <td>{record.age}</td>
          <td>{record.phone}</td>
          <td>{record.location}</td>
          <td>{record.created_at.split('T')[0]}</td>
          <td>{record.created_at.split('T')[1]}</td>
        </tr>
      ));
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.length / recordsPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPagination = () => {
     if(!searchTerm) {
       return pageNumbers.map(number => (
        <li key={number}>
          <button onClick={() => paginate(number)}>{number}</button>
        </li>
      ))
     } else {
      return <p></p>
     }
  };

  return (
    <div class="totaldiv">
      <input
        type="text"
        placeholder="Search by name or location"
        value={searchTerm}
        onChange={handleSearch}
      />
      <table>
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Age</th>
            <th>Phone</th>
            <th>Location</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {renderTableRows()}
        </tbody>
      </table>
      <ul class="pagination">
        {renderPagination()}
      </ul>
    </div>
  );
};

export default TableWithSearchAndPagination;
