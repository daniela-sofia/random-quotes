import QuoteText from "./QuoteText";
import QuoteAuthor from "./QuoteAuthor";
import Buttons from "./Buttons";

const QuoteBox = ({ quote, onNew, onShuffle }) => {
  return (
    <div id="quote-box">
      <QuoteText quote={quote} />
      <QuoteAuthor quote={quote} />
      <Buttons quote={quote} onNew={onNew} onShuffle={onShuffle} />
    </div>
  );
};

export default QuoteBox;
