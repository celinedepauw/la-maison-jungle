const QuestionForm = ({ inputValue, setInputValue }) => {

    return(
        <div className="questionForm">
            <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={() => alert(inputValue)}>
                Alertez-moi !!
            </button>
        </div>
    )
}

export default QuestionForm;