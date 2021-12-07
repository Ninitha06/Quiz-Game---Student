import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Audio } from 'expo-av';
import CountDown from 'react-native-countdown-component';
import moment from 'moment';

export default function App() {
  const [counter, setCounter] = React.useState(60);

  // Third Attempts
  React.useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  const questions = [
    {
      questionText: 'What is the capital of Chile?',
      answerOptions: [
        { answerText: 'Lima', isCorrect: false },
        { answerText: 'Buenos Aires', isCorrect: false },
        { answerText: 'Santiago', isCorrect: true },
        { answerText: 'Guayacil', isCorrect: false },
      ],
    },
    {
      questionText: 'Which ocean lies on the east coast of the United States?',
      answerOptions: [
        { answerText: 'Atlantic', isCorrect: true },
        { answerText: 'Pacific', isCorrect: false },
        { answerText: 'Indian', isCorrect: false },
        { answerText: 'Eastern', isCorrect: false },
      ],
    },
    {
      questionText: 'Which is the worlds highest mountain?',
      answerOptions: [
        { answerText: 'K2', isCorrect: false },
        { answerText: 'Kilimanjaro', isCorrect: false },
        { answerText: 'Makalu', isCorrect: false },
        { answerText: 'Mount Everst', isCorrect: true },
      ],
    },
    {
      questionText: 'How many Great Lakes are there?',
      answerOptions: [
        { answerText: 'Six', isCorrect: false },
        { answerText: 'Five', isCorrect: true },
        { answerText: 'Ten', isCorrect: false },
        { answerText: 'Seven', isCorrect: false },
      ],
    },
    {
      questionText: 'The biggest desert in the world is. . ?',
      answerOptions: [
        { answerText: 'Great Australian', isCorrect: false },
        { answerText: 'Texas dessert', isCorrect: false },
        { answerText: 'Arabian', isCorrect: false },
        { answerText: 'Sahara', isCorrect: true },
      ],
    },
    {
      questionText: 'Which of these cities is not in Europe?',
      answerOptions: [
        { answerText: 'Moscow', isCorrect: true },
        { answerText: 'Barcelona', isCorrect: false },
        { answerText: 'Prague', isCorrect: false },
        { answerText: 'Reykjavik', isCorrect: false },
      ],
    },
    {
      questionText: 'The United Kingdom is comprised of how many countries?',
      answerOptions: [
        { answerText: 'Five', isCorrect: false },
        { answerText: 'Four', isCorrect: true },
        { answerText: 'Six', isCorrect: false },
        { answerText: 'Eight', isCorrect: false },
      ],
    },
    {
      questionText: 'Which of the following countries do not border France?',
      answerOptions: [
        { answerText: 'Italy', isCorrect: false },
        { answerText: 'Spain', isCorrect: false },
        { answerText: 'Germany', isCorrect: false },
        { answerText: 'Netherlands', isCorrect: true },
      ],
    },
    {
      questionText:
        'What is the imaginary line called that connects the north and south pole?',
      answerOptions: [
        { answerText: 'Imaginary line', isCorrect: false },
        { answerText: 'Prime axis', isCorrect: false },
        { answerText: 'Prime meridian', isCorrect: true },
        { answerText: 'Lambert line', isCorrect: false },
      ],
    },
    {
      questionText:
        'Between which two countries/states is the Bering Strait located?',
      answerOptions: [
        { answerText: 'Alaska & Russia', isCorrect: true },
        { answerText: 'Sweden & Finland', isCorrect: false },
        { answerText: 'France & England', isCorrect: false },
        { answerText: 'Non of the above', isCorrect: false },
      ],
    },
    {
      questionText: 'Which is the longest river in the world?',
      answerOptions: [
        { answerText: 'Amazon river', isCorrect: false },
        { answerText: 'Yellow river', isCorrect: false },
        { answerText: 'Nile river', isCorrect: true },
        { answerText: 'Congo river', isCorrect: false },
      ],
    },
    {
      questionText:
        'Which is the smallest country, measured by total land area?',
      answerOptions: [
        { answerText: 'Monaco', isCorrect: false },
        { answerText: 'Tuvalu', isCorrect: true },
        { answerText: 'Maldives', isCorrect: false },
        { answerText: 'Vatican city', isCorrect: true },
      ],
    },
    {
      questionText: 'What is the approximate size of Earths equator?',
      answerOptions: [
        { answerText: '50,000 km', isCorrect: false },
        { answerText: '30,000 km', isCorrect: false },
        { answerText: '40,000 km', isCorrect: true },
        { answerText: '25,000 km', isCorrect: false },
      ],
    },
    {
      questionText: 'Japan is an island in what body of water?',
      answerOptions: [
        { answerText: 'Pacific', isCorrect: true },
        { answerText: 'Indian', isCorrect: false },
        { answerText: 'Atlantic', isCorrect: false },
        { answerText: 'Eastern', isCorrect: false },
      ],
    },
    {
      questionText:
        'What is the name of the island country off the coast of Africa?',
      answerOptions: [
        { answerText: 'Isla galapagos', isCorrect: false },
        { answerText: 'Cape town', isCorrect: false },
        { answerText: 'Madagascar', isCorrect: true },
        { answerText: 'Non of the above', isCorrect: false },
      ],
    },
    {
      questionText: 'What is the capital of New York?',
      answerOptions: [
        { answerText: 'New Town', isCorrect: false },
        { answerText: 'Albany', isCorrect: true },
        { answerText: 'Austin', isCorrect: false },
        { answerText: 'Tallahassee', isCorrect: false },
      ],
    },
    {
      questionText: 'What type of map is the map of Middle-Earth?',
      answerOptions: [
        { answerText: 'Leuton Map', isCorrect: false },
        { answerText: 'Central Map', isCorrect: false },
        { answerText: 'Fantasy Map', isCorrect: true },
        { answerText: 'Middle Map', isCorrect: false },
      ],
    },
    {
      questionText: 'Where is the Great Pyramid of Giza?',
      answerOptions: [
        { answerText: 'Egypt', isCorrect: true },
        { answerText: 'Arabia', isCorrect: false },
        { answerText: 'India', isCorrect: false },
        { answerText: 'Dubai', isCorrect: false },
      ],
    },
    {
      questionText: 'What gulf is located to the south of Florida?',
      answerOptions: [
        { answerText: 'Gulf of Argenitna', isCorrect: false },
        { answerText: 'Gulf of Peru', isCorrect: false },
        { answerText: 'Gulf of Italy', isCorrect: false },
        { answerText: 'Gulf of Mexico', isCorrect: true },
      ],
    },
    {
      questionText: 'What is the largest continent?',
      answerOptions: [
        { answerText: 'Africa', isCorrect: false },
        { answerText: 'Asia', isCorrect: true },
        { answerText: 'South America', isCorrect: false },
        { answerText: 'Europe', isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  //return (
  // <div className="App">
  //   <div>Countdown: {counter}</div>
  // </div>
  //);

  return (
    <View style={styles.body}>
      <View style={styles.body2}>
        <div className="app">
          {showScore ? (
            <View style={styles.finalScore}>
              <div className="score-section">
                You scored {score} out of {questions.length}
              </div>
            </View>
          ) : (
            <>
              <div className="question-section">
                <View style={styles.scoreSection}>
                  <div className="question-count">
                    <span>Question {currentQuestion + 1}</span>/
                    {questions.length}
                  </div>
                </View>
                <View style={styles.questionSection}>
                  <div className="question-text">
                    {questions[currentQuestion].questionText}
                  </div>
                </View>
              </div>
              <View style={styles.ansewerSection}>
                <div className="answer-section">
                  {questions[currentQuestion].answerOptions.map(
                    (answerOption) => (
                      <button
                        onClick={() =>
                          handleAnswerOptionClick(answerOption.isCorrect)
                        }>
                        {answerOption.answerText}
                      </button>
                    )
                  )}
                </div>
              </View>
            </>
          )}
        </div>
      </View>
      <View style={styles.countdownText}>
        <div>Countdown: {counter}</div>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#7cc6fe',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 350,
  },
  body2: {
    marginLeft: 5,
    marginTop: -60,
    width: 140 * 2,
    height: 170,
    backgroundColor: '#252d4a',
    borderRadius: 9,
    paddingHorizontal: 5,
    color: 'white',
    fontFamily: 'Verdana',
    fontWeight: 500,
  },
  ansewerSection: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  scoreSection: {
    fontSize: 18,
    marginTop: 5,
  },
  questionSection: {
    fontWeight: 540,
    marginTop: 5,
  },
  finalScore: {
    textAlign: 'center',
    padding: 40,
  },
  countdownText: {
    marginLeft: 5,
    marginTop:30,
    paddingTop:9,
    width: 100 * 2,
    height: 40,
    backgroundColor: '#252d4a',
    borderRadius: 9,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 500,
    color: 'white',
    fontFamily: 'Verdana',
  },
});