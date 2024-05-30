import moment from 'moment';
import { isEmpty, isNil, keys, omit, without } from 'ramda';
import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';

const exists = (v) => !isNil(v) && !isEmpty(v);
export const DbItems = ({ type }) => {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const res = await fetch(`/api/${type}/get-all`);
    const newItems = await res.json();
    setItems(newItems.data);
  };

  useEffect(() => {
    fetchItems();
  }, [type]);
  console.log('Items', items);
  console.log('keys', without(['_id'], keys(items[0])));
  const deleteItem = (id, type) => async () => {
    const res = await fetch(`/api/${type}/delete/${id}`, {
      method: 'POST',
    });
    fetchItems();
  };
  const approveItem = (value, id, type) => async () => {
    const res = await fetch(`/api/${type}/update/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ approved: !value }),
    });
    fetchItems();
  };
  const renderItem = (key, value, id) => {
    switch (key) {
      case '_id':
        return <></>;
      case 'image':
        return (
          <img
            src={value}
            alt={value}
            width={200}
            height={200}
            className='img-fluid'
          />
        );
      case 'email':
        return <a href={`mailto:${value}`}>{value}</a>;
      case 'createdAt':
        return moment(value).format('DD MMM YYYY h:mm');
      case 'approved':
        return (
          <>
            <p
              className={`p-2 bg-orange shadow shadow-sm px-4 my-2 me-2 btn bg-hover-light text-decoration-none`}
              onClick={approveItem(value, id, type)}
            >
              {value === true ? "Don't Approve" : 'Approve'}
            </p>
            <p
              className={`p-2 bg-orange shadow shadow-sm px-4 my-2 btn bg-hover-light text-decoration-none`}
              onClick={deleteItem(id, type)}
            >
              Delete
            </p>
          </>
        );
      default:
        return value;
    }
  };

  return (
    <Table hover>
      <tbody className='row'>
        {exists(items) &&
          items.map((item, index) => (
            <tr key={index} className='col-lg-4 '>
              <td className='d-flex flex-column shadow-lg rounded mt-2'>
                {without([], keys(item)).map((key) => (
                  <tr className='col-12 px-4 py-2' colSpan={1}>
                    <div className='row shadow-sm'>
                      <div
                        key={key}
                        className='text-capitalize col-12 text-left w-100 bg-dark-grey text-white'
                        colSpan={1}
                      >
                        {key === '_id' ? <></> : key}
                      </div>
                      <div
                        key={key}
                        className=' col-12 text-left w-100'
                        colSpan={7}
                        style={{ 'font-size': '.8rem' }}
                      >
                        {renderItem(key, item[key], item._id)}
                      </div>
                    </div>
                  </tr>
                ))}
              </td>
            </tr>
          ))}
        {!exists(items) && <tr>No {type} found</tr>}
      </tbody>
    </Table>
  );
};
