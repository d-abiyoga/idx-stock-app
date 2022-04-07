import styled from 'styled-components';
import { useCombobox } from 'downshift';
import { FC, useState } from 'react';
import InputBox from '../../atoms/InputBox';

interface Props {
  labelName: string;
  items: Array<string>;
}

function stateReducer(state: any, actionAndChanges: any) {
  const { type, changes } = actionAndChanges;
  switch (type) {
    case useCombobox.stateChangeTypes.InputChange:
      return {
        ...changes,
        inputValue: changes.inputValue.toUpperCase(),
      };
    case useCombobox.stateChangeTypes.ItemClick:
    case useCombobox.stateChangeTypes.InputKeyDownEnter:
    case useCombobox.stateChangeTypes.InputBlur:
      return {
        ...changes,
        ...(state.highlightedIndex > -1 && {
          inputValue: changes.inputValue.toUpperCase(),
        }),
      };
    default:
      return changes;
  }
}

export const DropdownCombobox: FC<Props> = (props) => {
  const [inputItems, setInputItems] = useState(props.items);

  const {
    isOpen,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    items: inputItems,
    stateReducer,
    onInputValueChange: ({ inputValue }) => {
      setInputItems(
        props.items.filter(
          (item: string) => inputValue && item.toLowerCase().startsWith(inputValue.toLowerCase()),
        ),
      );
    },
  });

  return (
    <Wrapper>
      <label className="input-label" {...getLabelProps()}>
        {props.labelName}
      </label>
      <Combobox {...getComboboxProps()}>
        <InputBox type="text" placeholder="AALI" maxLength={4} {...getInputProps()} />
        <Menu {...getMenuProps()}>
          {isOpen &&
            inputItems.map((item, index) => (
              <li
                style={highlightedIndex === index ? { backgroundColor: '#bde4ff' } : {}}
                key={`${item}${index}`}
                {...getItemProps({ item, index })}
              >
                {item}
              </li>
            ))}
        </Menu>
      </Combobox>
    </Wrapper>
  );
};

const Combobox = styled.div`
  display: inline-block;
  position: relative;
  @media (max-width: 500px) {
    /* TODO: replace this hacky way to make the width even with other inputs*/
    width: 95%;
  }
`;

const Menu = styled.ul`
  background-color: rgba(209, 250, 229, 0.9);
  height: inherit;
  list-style: none;
  left: 0;
  overflow-y: scroll;
  padding: 0;
  position: absolute;
  top: 0.75rem;
  /* width: 53%; */
  z-index: 1;
  width: 105%;

  li {
    color: gray;
    background-color: rgba(209, 250, 229, 0.9);
    padding-left: 0.5rem;
    font-size: 0.875rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: space-between;
  align-items: center;

  label {
    min-width: 25ch;
  }
`;
