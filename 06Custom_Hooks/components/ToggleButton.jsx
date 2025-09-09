import useToggle from './useToggle';

function ToggleButton() {
  const [isVisible, toggleVisibility] = useToggle(true);
  
  return (
    <div>
      <button onClick={toggleVisibility}>Toggle</button>
      {isVisible && <p>Hello!</p>}
    </div>
  );
}

export default ToggleButton;