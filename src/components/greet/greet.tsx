import { GreetProps } from "./greet.types";

const Greet = (props: GreetProps) => {
  return <div>Hello {props.name ? props.name : "Mbizzy"}</div>;
};

export default Greet;
