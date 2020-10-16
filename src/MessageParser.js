// MessageParser starter code in MessageParser.js
class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();


    if(lowerCaseMessage.includes("hi")){
      this.actionProvider.getNextQuestion("Hi")
    } else {
      this.actionProvider.getNextQuestion(lowerCaseMessage)

    }
    // if (lowerCaseMessage.includes("hi")) {
    //   this.actionProvider.greet("hi");
    // }

    // if (lowerCaseMessage.includes("javascript")) {
    //   this.actionProvider.handleButtonEvent();
    // }
  }
}

export default MessageParser;
