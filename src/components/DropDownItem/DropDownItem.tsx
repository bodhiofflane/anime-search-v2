import React, {useEffect, useRef} from 'react';

import './DropDownItem.scss';

const DropDownItem = () => {

  // Рефы на два элемента. На элемент меню(кнопка) и сам дропдаут под кнопкой.
  const dropdownButton = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Обработчики событий для клика по элементу меню и документу.
  const handleToggleDropdown = () => {
    dropdownRef.current?.classList.toggle('dropdown--active');
    console.log(dropdownRef);
  };

  const handleHideDropdown = (e: MouseEvent) => {
    if (e.target !== dropdownButton.current) {
      dropdownRef.current?.classList.remove('dropdown--active');
    }
  };

  // Здесь вешаются обработчики событий на реф и документ, а после происходит отписка.
  useEffect(() => {
    const drop = dropdownButton.current;

    drop?.addEventListener('click', handleToggleDropdown);
    document.addEventListener('click', handleHideDropdown);

    return () => {
      drop?.removeEventListener('click', handleToggleDropdown);
      document.removeEventListener('click', handleHideDropdown);
    };
  }, []);

  console.log('Обновился Dropdown');

  return (
    <li className={'dropdownMenuItem'}>
      <button
        className={'btn'}
        ref={dropdownButton}
      >
        Category
      </button>

      <div
        className={'dropdown'}
        ref={dropdownRef}
      >
        <ul className={'dropdownList'}>
          <li className={'dropdownItem'}>
            <a
              className={'dropdownLink'}
              href="/"
            >
              Category 1
            </a>
          </li>

          <li className={'dropdownItem'}>
            <a
              className={'dropdownLink'}
              href="/"
            >
              Category 2
            </a>
          </li>

          <li className={'dropdownItem'}>
            <a
              className={'dropdownLink'}
              href="/"
            >
              Category 3
            </a>
          </li>
        </ul>
      </div>
    </li>
  );
};

export default DropDownItem;
