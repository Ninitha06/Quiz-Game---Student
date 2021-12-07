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
      questionText:
        'A testable prediction about the outcome of an experimentation is called',
      answerOptions: [
        { answerText: 'Hypothesis', isCorrect: false },
        { answerText: 'Prediction', isCorrect: false },
        { answerText: 'Data', isCorrect: true },
        { answerText: 'Conclusion', isCorrect: false },
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
      questionText: 'What tool is used to measure air pressure?',
      answerOptions: [
        { answerText: 'Barometer', isCorrect: false },
        { answerText: 'Airmeter', isCorrect: false },
        { answerText: 'Laser measurer', isCorrect: false },
        { answerText: 'Angle Gauge', isCorrect: true },
      ],
    },
    {
      questionText: 'Which character is not a friend of Harry Potter?',
      answerOptions: [
        { answerText: 'Ron Weasley', isCorrect: false },
        { answerText: 'Ginny Weasley', isCorrect: false },
        { answerText: 'Hermione Granger', isCorrect: false },
        { answerText: 'Draco Malfoy', isCorrect: true },
      ],
    },
    {
      questionText: 'Which country held the 2016 Summer Olympics?',
      answerOptions: [
        { answerText: 'Japan', isCorrect: false },
        { answerText: 'Congo', isCorrect: false },
        { answerText: 'Germany', isCorrect: false },
        { answerText: 'Brazil', isCorrect: true },
      ],
    },
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
      questionText:
        'In Pirates of the Caribbean, what was Captain Jack Sparrow’s ship’s name?',
      answerOptions: [
        { answerText: 'The black pearl', isCorrect: true },
        { answerText: 'Adventure Galley', isCorrect: false },
        { answerText: 'Royal Fortune', isCorrect: false },
        { answerText: 'Whydah', isCorrect: false },
      ],
    },
    {
      questionText:
        'Excluding religious works, what is the best-selling book of all time?',
      answerOptions: [
        {
          answerText: 'The Lord of the Rings by J.R.R. Tolkien',
          isCorrect: false,
        },
        {
          answerText: 'The Little Prince by Antoine de Saint-Exupery',
          isCorrect: false,
        },
        { answerText: 'Don Quixote by Miguel de Cervantes', isCorrect: true },
        {
          answerText: 'A Tale of Two Cities by Charles Dickens',
          isCorrect: false,
        },
      ],
    },
    {
      questionText: 'What Was the Largest Contiguous Empire in History?',
      answerOptions: [
        { answerText: 'Greek empire', isCorrect: false },
        { answerText: 'Rome empire', isCorrect: false },
        { answerText: 'Mongol empire', isCorrect: true },
        { answerText: 'Inkas empire', isCorrect: false },
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
        'James and the Giant Peach and Matilda are two well-known books by what author?',
      answerOptions: [
        { answerText: 'William Shakespeare', isCorrect: false },
        { answerText: 'Roald Dahl', isCorrect: true },
        { answerText: 'Rebecca Solnit', isCorrect: false },
        { answerText: 'Tom Perrotta', isCorrect: false },
      ],
    },
    {
      questionText: 'What is the name of Mickey Mouse’s pet dog?',
      answerOptions: [
        { answerText: 'Trento', isCorrect: false },
        { answerText: 'Popi', isCorrect: false },
        { answerText: 'Melono', isCorrect: false },
        { answerText: 'Pluto', isCorrect: true },
      ],
    },
    {
      questionText: 'Who Invented the Automobile?',
      answerOptions: [
        { answerText: 'Albert Einsten', isCorrect: false },
        { answerText: 'Alexander Winton', isCorrect: false },
        { answerText: 'André Citroën', isCorrect: false },
        { answerText: 'Karl Friedrich Benz', isCorrect: true },
      ],
    },
    {
      questionText: 'What is the primary job of the heart?',
      answerOptions: [
        { answerText: 'To organize the organs', isCorrect: false },
        { answerText: 'To create blood', isCorrect: false },
        { answerText: 'To pump blood throught the body', isCorrect: true },
        { answerText: 'To run faster', isCorrect: false },
      ],
    },
    {
      questionText: 'On the periodic table, what symbol stands for silver?',
      answerOptions: [
        { answerText: 'CC1', isCorrect: false },
        { answerText: 'GG', isCorrect: false },
        { answerText: 'SV', isCorrect: false },
        { answerText: 'AG', isCorrect: true },
      ],
    },
    {
      questionText:
        'Which of these films is a (loose) adaptation of Shakespeare’s Twelfth Night?',
      answerOptions: [
        { answerText: 'She is the man', isCorrect: true },
        { answerText: 'She is all that', isCorrect: false },
        { answerText: 'She is out of my league', isCorrect: false },
        { answerText: 'She is the one', isCorrect: false },
      ],
    },
    {
      questionText:
        'In The Matrix, does Neo take the blue pill or the red pill?',
      answerOptions: [
        { answerText: 'Green pill', isCorrect: false },
        { answerText: 'Red pill', isCorrect: true },
        { answerText: 'Yellow pill', isCorrect: false },
        { answerText: 'Blue pill', isCorrect: false },
      ],
    },
    {
      questionText: 'Who invented the telephone?',
      answerOptions: [
        { answerText: 'Alexander Graham', isCorrect: true },
        { answerText: 'Isaac Newton', isCorrect: false },
        { answerText: 'Leonhard Euler', isCorrect: false },
        { answerText: 'Amedeo Avogadro', isCorrect: false },
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
    {
      questionText:
        'What flavor of Pop Tarts does Buddy the Elf use in his spaghetti in Elf? ',
      answerOptions: [
        { answerText: 'Oreo', isCorrect: false },
        { answerText: 'Strawberry', isCorrect: false },
        { answerText: 'Vanilla', isCorrect: false },
        { answerText: 'Chocolate', isCorrect: true },
      ],
    },
    {
      questionText: 'Who played park owner John Hammond in Jurassic Park?',
      answerOptions: [
        { answerText: 'Sam Neill', isCorrect: false },
        { answerText: 'Jeff Goldblum', isCorrect: false },
        { answerText: 'Richard Attenborough', isCorrect: true },
        { answerText: 'Wayne Knight', isCorrect: false },
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
      questionText:
        'Which medieval queen was married to both Louis VII of France and Henry II of England?',
      answerOptions: [
        { answerText: 'Queen Wiltshire', isCorrect: false },
        { answerText: 'Queen Chester', isCorrect: true },
        { answerText: 'Queen Elizabeth I', isCorrect: false },
        { answerText: 'Queen Elenor', isCorrect: true },
      ],
    },
    {
      questionText: 'Who discovered America?',
      answerOptions: [
        { answerText: 'Vasco da Gama', isCorrect: false },
        { answerText: 'Marco Polo', isCorrect: false },
        { answerText: 'Christopher Columbus', isCorrect: true },
        { answerText: 'John Cabot', isCorrect: false },
      ],
    },
    {
      questionText: 'What part of a human body is the Mandible?',
      answerOptions: [
        { answerText: 'Lungs', isCorrect: false },
        { answerText: 'Skull', isCorrect: true },
        { answerText: 'Theet', isCorrect: false },
        { answerText: 'Legs', isCorrect: false },
      ],
    },
    {
      questionText: 'How many planets are in our Solar System',
      answerOptions: [
        { answerText: 'Eigth', isCorrect: true },
        { answerText: 'One', isCorrect: false },
        { answerText: 'Ten', isCorrect: false },
        { answerText: 'Twelve', isCorrect: false },
      ],
    },
    {
      questionText: 'What are chemicals that help break down food?',
      answerOptions: [
        { answerText: 'Namely', isCorrect: false },
        { answerText: 'Chloroplast', isCorrect: false },
        { answerText: 'Calcium', isCorrect: false },
        { answerText: 'Enzymes', isCorrect: true },
      ],
    },
    {
      questionText:
        'Which movie was incorrectly announced as the winner of Best Picture at the 2017 Academy Awards, during the greatest Oscars flub of all time?',
      answerOptions: [
        { answerText: 'La la land', isCorrect: true },
        { answerText: 'Avatar', isCorrect: false },
        { answerText: 'Moonlight', isCorrect: false },
        { answerText: 'Toy Story', isCorrect: false },
      ],
    },
    {
      questionText: 'In Finding Nemo, Dory suffers from what?',
      answerOptions: [
        { answerText: 'Autisim', isCorrect: false },
        { answerText: 'Unable to talk', isCorrect: false },
        { answerText: 'Short-term memory loss', isCorrect: true },
        { answerText: 'Fast-term memory loss', isCorrect: false },
      ],
    },
    {
      questionText: 'Who painted the mona lisa?',
      answerOptions: [
        { answerText: 'Leonardo da Vinci', isCorrect: true },
        { answerText: 'Leonardo DiCaprio', isCorrect: false },
        { answerText: 'Rafael Sanzio', isCorrect: false },
        { answerText: 'Miguel Ángel', isCorrect: false },
      ],
    },
    {
      questionText: 'What is the name of Princess Jasmine’s tiger in Aladdin?',
      answerOptions: [
        { answerText: 'Hjara', isCorrect: false },
        { answerText: 'Rajah', isCorrect: true },
        { answerText: 'Arah', isCorrect: false },
        { answerText: 'Ryeha', isCorrect: true },
      ],
    },
    {
      questionText: 'What are the names of Cinderella’s stepsisters?',
      answerOptions: [
        { answerText: 'Harris and Hubert', isCorrect: false },
        { answerText: 'Adella and Anala', isCorrect: false },
        { answerText: 'Anastasia and Drizella', isCorrect: true },
        { answerText: 'Aquata and Arista', isCorrect: false },
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
      questionText: 'How many hearts do octopuses have?',
      answerOptions: [
        { answerText: 'Three', isCorrect: true },
        { answerText: 'One', isCorrect: false },
        { answerText: 'Ten', isCorrect: false },
        { answerText: 'Two', isCorrect: false },
      ],
    },
    {
      questionText: 'What was the first Pixar movie?',
      answerOptions: [
        { answerText: 'Toy Story', isCorrect: true },
        { answerText: 'Monsters Inc', isCorrect: false },
        { answerText: 'Dumbo', isCorrect: false },
        { answerText: 'Bambi', isCorrect: false },
      ],
    },
    {
      questionText: 'Which is the most sensitive of the senses?',
      answerOptions: [
        { answerText: 'Touching', isCorrect: false },
        { answerText: 'Tasting', isCorrect: false },
        { answerText: 'Hearing', isCorrect: true },
        { answerText: 'Talking', isCorrect: false },
      ],
    },
    {
      questionText:
        'The Statue of Liberty came from which country to the United States?',
      answerOptions: [
        { answerText: 'Sweden', isCorrect: false },
        { answerText: 'Italy', isCorrect: false },
        { answerText: 'France', isCorrect: true },
        { answerText: 'Finland', isCorrect: false },
      ],
    },
    {
      questionText: 'Which Disney character sings “How Far I’ll Go”?',
      answerOptions: [
        { answerText: 'Ariel', isCorrect: false },
        { answerText: 'Elsa', isCorrect: false },
        { answerText: 'Moana', isCorrect: true },
        { answerText: 'Cinderella', isCorrect: false },
      ],
    },
    {
      questionText: 'Who was the first man to step on the moon?',
      answerOptions: [
        { answerText: 'Edgar D. Mitchell', isCorrect: false },
        { answerText: 'Alan Bean', isCorrect: false },
        { answerText: 'Edwin Aldrin', isCorrect: false },
        { answerText: 'Neil Armstrong', isCorrect: true },
      ],
    },
    {
      questionText: 'What was the name of the little boy in Jungle Book?',
      answerOptions: [
        { answerText: 'Mowgli', isCorrect: true },
        { answerText: 'Monti', isCorrect: false },
        { answerText: 'Rafael', isCorrect: false },
        { answerText: 'Mezan', isCorrect: false },
      ],
    },
    {
      questionText: 'On the periodic table, what symbol stands for silver?',
      answerOptions: [
        { answerText: 'CC1', isCorrect: false },
        { answerText: 'GG', isCorrect: false },
        { answerText: 'SV', isCorrect: false },
        { answerText: 'AG', isCorrect: true },
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
        'Complete the title of the famous book by Dr. Seuss: The Cat in the...?',
      answerOptions: [
        { answerText: 'Face', isCorrect: false },
        { answerText: 'Hat', isCorrect: true },
        { answerText: 'House', isCorrect: false },
        { answerText: 'Butt', isCorrect: false },
      ],
    },
    {
      questionText: 'In what country were the Olympic Games invented?',
      answerOptions: [
        { answerText: 'Rome', isCorrect: false },
        { answerText: 'England', isCorrect: false },
        { answerText: 'Greece', isCorrect: true },
        { answerText: 'China', isCorrect: false },
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
    backgroundColor: '#7cc6fe',
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
