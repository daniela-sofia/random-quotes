import NewQuoteBtn from "./NewQuoteBtn";
import TweetQuote from "./TweetQuote";

const Buttons = ({ quote, onNew, onShuffle }) => {
  return (
    <div id="buttons">
      <NewQuoteBtn
        onClick={(event) => {
          onNew();
          onShuffle();
        }}
      />
      <TweetQuote quote={quote} />
    </div>
  );
};

export default Buttons;
