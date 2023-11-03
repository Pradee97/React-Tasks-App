import React from 'react';
import { Table } from 'react-bootstrap';

const List = ({ beers }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Tagline</th>
          {/* Add more table headers as needed */}
        </tr>
      </thead>
      <tbody>
        {beers.map((beer) => (
          <tr key={beer.id}>
            <td>{beer.name}</td>
            <td>{beer.tagline}</td>
            {/* Add more table data as needed */}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default List;
