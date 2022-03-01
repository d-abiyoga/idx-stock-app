import { useCombobox } from "downshift";
import { useState } from "react";
import { Combobox, Menu } from "../styles/components/Combobox.styled";
import { CalcBox } from "../styles/components/Input.styled";

function stateReducer(state, actionAndChanges) {
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

export const DropdownCombobox = (props: {
  labelName: string;
  items: Array<string>;
}) => {
  const [inputItems, setInputItems] = useState(props.items);

  const {
    isOpen,
    getToggleButtonProps,
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
        props.items.filter((item: string) =>
          item.toLowerCase().startsWith(inputValue.toLowerCase())
        )
      );
    },
  });

  return (
    <>
      <label className="input-label" {...getLabelProps()}>
        {props.labelName}
      </label>
      <Combobox {...getComboboxProps()}>
        {/* TODO: explicitly define placeholder of AALI, may makes the component less abstract to be reused in other use case
         */}
        <CalcBox
          placeholder="AALI"
          className="input-box"
          as="input"
          type="text"
          maxLength={4}
          {...getInputProps()}
        />
        <Menu {...getMenuProps()}>
          {isOpen &&
            inputItems.map((item, index) => (
              <li
                style={
                  highlightedIndex === index
                    ? { backgroundColor: "#bde4ff" }
                    : {}
                }
                key={`${item}${index}`}
                {...getItemProps({ item, index })}
              >
                {item}
              </li>
            ))}
        </Menu>
      </Combobox>
    </>
  );
};
