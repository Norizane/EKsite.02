const askUs = () => {
  return (
    <>
      <div className="questionContainer">
        <textarea name="questionArea" id="questionArea"></textarea>
      </div>
      <div className="questionButtonContainer">
        <button>Send</button>
      </div>
    </>
  );
};

export default askUs;
