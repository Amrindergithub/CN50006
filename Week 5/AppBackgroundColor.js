import './App.css';

function AppColor(props) {
  // Function to change background color and display an alert
  function changeColor() {
    document.body.style.backgroundColor = props.color; // Change the background color
    alert(`Background changed to ${props.color}`);
  }

  return (
    <div className="App">
      <h1>{props.heading}</h1>
      <label>{props.label}</label>
      <input type="text" placeholder="Enter your name" />
      <button onClick={changeColor}>Change to {props.color}</button>
    </div>
  );
}

export default AppColor;