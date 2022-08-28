import { useState } from "react";
const Homepage = () => {
  return (
    <>
      {/* Passing props */}
      <Header cough="ade" />
      <Header cough="yellow" />
      <Header />
      <h1>Ade is cool 🚀</h1>
      cooler
      <Button />
    </>
  );
};
const Button = () => {
  const [likes, setLikes] = React.useState(0);
  const handleClick = () => {
    setLikes(likes + 1);
    console.log("ButtonClicked");
  };
  return <button onClick={handleClick}>like ({likes})</button>;
};
const Header = ({ cough }) => {
  console.log(cough);
  const Default = "sneeze";
  return (
    <>
      {/* Using a ternary operator for Header that doesn't have a props value make it take the default */}
      <header> {cough ? cough : Default}</header>
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Homepage />);
