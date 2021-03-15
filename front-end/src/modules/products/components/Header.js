import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../state/actions';

/* eslint-disable-next-line react-hooks/exhaustive-deps */
/* eslint comma-dangle: ["error", "never"] */

const Header = () => {
  const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(
      () => {
        const handler = setTimeout(() => {
          setDebouncedValue(value);
        }, delay);

        return () => {
          clearTimeout(handler);
        };
      },
      [value, delay]
    );

    return debouncedValue;
  };

  const [text, setText] = useState('');
  const [orderByOption, setOrderByOption] = useState('');
  const [ordenationOption, setOrdenationOption] = useState('');

  const delay = 500;
  const debounceValue = useDebounce(text, delay);

  const searchText = useSelector((state) => state.products.searchText);
  const sort = useSelector((state) => state.products.sort);
  const sortAsc = useSelector((state) => state.products.sortAsc);

  const dispatch = useDispatch();

  const setSearchText = useCallback(
    (search) => dispatch(actions.setSearchText(search)), [dispatch]
  );

  const setSort = useCallback(
    (sortInput, sortAscInput) => dispatch(actions
      .setSort({ sort: sortInput, sortAsc: sortAscInput })), [dispatch]
  );

  useEffect(() => {
    setText(searchText);
    setOrderByOption(sort);
    setOrdenationOption(sortAsc);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (text !== undefined) {
      setSearchText(text);
    }
  }, [debounceValue]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleOrderByOption = ({ target }) => {
    if (target.id === 'orderby-ipt') {
      setOrderByOption(target.value);
      setSort(target.value, ordenationOption);
    } else {
      setOrdenationOption(target.value === 'true');
      setSort(orderByOption, target.value === 'true');
    }
  };

  return (
    <div className="w-full flex my-2 justify-between border p-2 rounded-md items-center">
      <p>Galeria de produtos</p>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          value={ text }
          placeholder="Enter a product name..."
          onInput={ ({ target }) => setText(target.value) }
          className="border rounded-md p-2 focus:outline-none
          focus:border-secondary-dark"
        />
        <div className="flex items-center space-x-2">
          <label htmlFor="orderby-ipt">
            { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            Order By:
          </label>
          <select
            id="orderby-ipt"
            value={ orderByOption }
            onChange={ (target) => handleOrderByOption(target) }
            className="border rounded-md p-2 focus:outline-none
            focus:border-secondary-dark"
          >
            <option value="name">Name</option>
            <option value="price">Price</option>
          </select>
        </div>
        <select
          id="ordenation-ipt"
          value={ ordenationOption }
          onChange={ (target) => handleOrderByOption(target) }
          className="border rounded-md p-2 focus:outline-none
            focus:border-secondary-dark"
        >
          <option value="true">Asc</option>
          <option value="false">Desc</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
