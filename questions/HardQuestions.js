import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Audio } from 'expo-av';

export default function App() {
  const [counter, setCounter] = React.useState(45);

  // Third Attempts
  React.useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  const questions = [
    {
      questionText: 'Who proved that the Earth orbits the Sun?',
      answerOptions: [
        { answerText: 'Galileo', isCorrect: false },
        { answerText: 'Tyson', isCorrect: false },
        { answerText: 'Copernicus', isCorrect: true },
        { answerText: 'Adrian', isCorrect: false },
      ],
    },
    {
      questionText:
        'What do you call the process of breaking white light into colors?',
      answerOptions: [
        { answerText: 'Refraction', isCorrect: true },
        { answerText: 'Attraction', isCorrect: false },
        { answerText: 'Reflection', isCorrect: false },
        { answerText: 'Effective', isCorrect: false },
      ],
    },
    {
      questionText: 'What is the name for the native people of New Zealand?',
      answerOptions: [
        { answerText: 'Tamazight', isCorrect: false },
        { answerText: 'Swedes', isCorrect: false },
        { answerText: 'Okrug', isCorrect: false },
        { answerText: 'Maori', isCorrect: true },
      ],
    },
    {
      questionText: 'What is 85% of 21?',
      answerOptions: [
        { answerText: '17.85', isCorrect: false },
        { answerText: '18.45', isCorrect: true },
        { answerText: '19', isCorrect: false },
        { answerText: '17.05', isCorrect: false },
      ],
    },
    {
      questionText: 'Solve for 47 – u, when u = 23',
      answerOptions: [
        { answerText: '26', isCorrect: false },
        { answerText: '57', isCorrect: false },
        { answerText: '13', isCorrect: false },
        { answerText: '24', isCorrect: true },
      ],
    },
    {
      questionText: 'In which city can you find the Liberty Bell?',
      answerOptions: [
        { answerText: 'Philadelphia', isCorrect: true },
        { answerText: 'Costa Rica', isCorrect: false },
        { answerText: 'Madrid', isCorrect: false },
        { answerText: 'Delhi', isCorrect: false },
      ],
    },
    {
      questionText: 'What number is XLVIII?',
      answerOptions: [
        { answerText: '76', isCorrect: false },
        { answerText: '48', isCorrect: true },
        { answerText: '35', isCorrect: false },
        { answerText: '978', isCorrect: false },
      ],
    },
    {
      questionText: 'What is a doe?',
      answerOptions: [
        { answerText: 'Female iguana', isCorrect: false },
        { answerText: 'Female rabbit', isCorrect: false },
        { answerText: 'Female cow', isCorrect: false },
        { answerText: 'Female deer', isCorrect: true },
      ],
    },
    {
      questionText: 'What is a group of lions called?',
      answerOptions: [
        { answerText: 'A Quiver', isCorrect: false },
        { answerText: 'A Colony', isCorrect: false },
        { answerText: 'A Pride', isCorrect: true },
        { answerText: 'A Murder', isCorrect: false },
      ],
    },
    {
      questionText: 'How many bones do sharks have?',
      answerOptions: [
        { answerText: '0', isCorrect: true },
        { answerText: '3', isCorrect: false },
        { answerText: '7', isCorrect: false },
        { answerText: '10', isCorrect: false },
      ],
    },
    {
      questionText: 'What is the hardest natural substance?',
      answerOptions: [
        { answerText: 'Obsidian', isCorrect: false },
        { answerText: 'Gold', isCorrect: false },
        { answerText: 'Diamond', isCorrect: true },
        { answerText: 'Metal', isCorrect: false },
      ],
    },
    {
      questionText: 'Which state was the 50th state to join the union?',
      answerOptions: [
        { answerText: 'Texas', isCorrect: false },
        { answerText: 'Hawaii', isCorrect: true },
        { answerText: 'Boston', isCorrect: false },
        { answerText: 'New York', isCorrect: true },
      ],
    },
    {
      questionText:
        'What characteristic of a camel is not an adaptation to living in a sandy environment?',
      answerOptions: [
        { answerText: 'Drinkin small amounts of water', isCorrect: false },
        { answerText: 'Fur', isCorrect: false },
        { answerText: 'Long necks', isCorrect: true },
        { answerText: 'Tongue', isCorrect: false },
      ],
    },
    {
      questionText: 'What is the name for the largest part of the brain?',
      answerOptions: [
        { answerText: 'Cerebellum', isCorrect: true },
        { answerText: 'Hypothalamus', isCorrect: false },
        { answerText: 'Thalamus', isCorrect: false },
        { answerText: 'Amygdala', isCorrect: false },
      ],
    },
    {
      questionText:
        'Name the process in which small particles of rocks are removed due to nature.',
      answerOptions: [
        { answerText: 'Vapor', isCorrect: false },
        { answerText: 'Antolophy', isCorrect: false },
        { answerText: 'Erosion', isCorrect: true },
        { answerText: 'Gonvetion', isCorrect: false },
      ],
    },
    {
      questionText:
        'Which of the following sets below contains only prime numbers?',
      answerOptions: [
        { answerText: '7, 11, 49', isCorrect: false },
        { answerText: '7, 23, 47', isCorrect: true },
        { answerText: '7, 37, 51', isCorrect: false },
        { answerText: '2, 29, 93', isCorrect: false },
      ],
    },
    {
      questionText: 'Solve: x - 4 < 5',
      answerOptions: [
        { answerText: 'x < 9', isCorrect: false },
        { answerText: 'x > 1', isCorrect: false },
        { answerText: 'x > 9', isCorrect: true },
        { answerText: 'x < 1', isCorrect: false },
      ],
    },
    {
      questionText:
        'What percent of the earths water can be used for drinking?',
      answerOptions: [
        { answerText: '1%', isCorrect: true },
        { answerText: '5%', isCorrect: false },
        { answerText: '10%', isCorrect: false },
        { answerText: '15%', isCorrect: false },
      ],
    },
    {
      questionText: 'What are bang and beep examples of?',
      answerOptions: [
        { answerText: 'Alliteration', isCorrect: false },
        { answerText: 'Repetiotion', isCorrect: false },
        { answerText: 'Allegory', isCorrect: false },
        { answerText: 'Onpomatopeia', isCorrect: true },
      ],
    },
    {
      questionText: 'What year did the Civil War end?',
      answerOptions: [
        { answerText: '1870', isCorrect: false },
        { answerText: '1865', isCorrect: true },
        { answerText: '1845', isCorrect: false },
        { answerText: '1875', isCorrect: false },
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
    backgroundColor: '#F08080',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 370,
  },
  body2: {
    marginLeft: 5,
    marginTop: -80,
    width: 140 * 2,
    height: 170,
    backgroundColor: '#B22222',
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
    backgroundColor: '#B22222',
    borderRadius: 9,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 500,
    color: 'white',
    fontFamily: 'Verdana',
  },
});
