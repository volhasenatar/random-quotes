import generateRandomColor from './generateRandomColor';
import generateRandomQuote from './generateRandomQuote';
import quoteArray from './quoteArray';

function RandomQuote() {
  const changeAll = () => {
    generateRandomQuote();
    generateRandomColor();
  };
  return (
    <div className="quotes">
      <h1>{[quoteArray[0]]}</h1>
      <button onClick={changeAll}>New quote</button>
    </div>
  );
}
export default RandomQuote;
