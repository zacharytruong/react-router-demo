import { useParams, useRouteMatch } from 'react-router-dom';

export default function About() {
  const match = useRouteMatch('/about/Rich-Dad-Poor-Dad');
  const showBuyBtn = match && match.isExact;
  const params = useParams();
  console.log(params);
  return (
    <div>
      <h1>About {}</h1>
      {showBuyBtn && <button>Buy Now</button>}
    </div>
  );
}
