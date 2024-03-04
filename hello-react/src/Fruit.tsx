import { ReactNode } from 'react';

interface OrangeProps {
  fruit: string;
  children?: ReactNode;
}

const Fruit = ({ fruit, children }: OrangeProps) => {
  const myStyle: React.CSSProperties = {
    backgroundColor: fruit.toLowerCase() === 'apple' ? 'darkred' : 'darkorange',
    color: 'whitesmoke',
  };

  return (
    <>
      <div style={myStyle}>Fruit: {fruit}</div>
      {children}
    </>
  );
};

export default Fruit;
