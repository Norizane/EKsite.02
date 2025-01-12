const askUs = () => {
  return (
    <>
      <div className="questionContainer">
        <textarea  placeholder="Ask your question here..." name="questionArea" id="questionArea"></textarea>
      </div>
      <div className="questionButtonContainer">
        <button>Send</button>
      </div>
    </>
  );
};

export default askUs;
