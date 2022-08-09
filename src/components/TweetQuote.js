const TweetQuote = ({ quote }) => {
  return (
    <button id="tweet-quote">
      <a
        href={`twitter.com/intent/tweet?text='${quote.content} -${quote.author}'`}
        target="_blank"
        rel="noreferrer"
      >
        Tweet
      </a>
    </button>
  );
};

export default TweetQuote;
