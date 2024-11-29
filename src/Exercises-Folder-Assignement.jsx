import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function ExercisesFolderAssignment() {
  return (
    <div
      className="d-flex flex-column position-relative align-items-center text-white"
      style={{ paddingBottom: "10vh" }}
    >
      <Navbar />
      <div
        style={{
          width: "80%",
          padding: "20px",
          textAlign: "left",
          paddingTop: "25vh",
        }}
      >
        <h2>Exercises & Folder Assignment Programming 1</h2>
        <h3 className="mt-4">About the exercises</h3>
        <p style={{ fontSize: "1.1rem" }}>
          The programming exercises for IDAT1001 – Programmering 1 consist of 11
          assignments, of which 9 must be completed and approved to qualify for
          the exam. These 9 approved assignments must cover a broad range of
          topics, adhering to specific requirements. Assignments 10 and 11 are
          mandatory, along with at least two assignments from each of the
          following groups: (1-3), (4-6), and (7-9).
        </p>
        <Link
          to="https://github.com/Segward/Exercises-IDATT1003"
          className="no-text-decoration hover-scale mb-5"
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "white",
            color: "black",
            padding: "10px 20px",
            borderRadius: "10px",
            cursor: "pointer",
            width: "fit-content",
            marginTop: "20px",
          }}
        >
          <span>Source code</span>
        </Link>
        <h3 className="mt-2">
          Ecercise 1: Variables, data types, and expressions
        </h3>
        <p style={{ fontSize: "1.1rem" }}>
          This exercise focuses on variables, data types, and expressions. In
          the first task, you will write a program that converts inches to
          centimeters, with 1 inch equaling 2.54 cm. You must test the program
          with a dataset. The second task requires a program to convert hours,
          minutes, and seconds into the total number of seconds, also
          accompanied by a test dataset. Finally, the third task involves
          writing a program that reads a number of seconds and calculates the
          equivalent in hours, minutes, and seconds using integer division.
        </p>
        <h3 className="mt-2">Ecercise 2: Control Structures</h3>
        <p style={{ fontSize: "1.1rem" }}>
          This exercise introduces control structures. The first task is to
          determine if a given year is a leap year, using an algorithm that
          checks divisibility by 4 and additional rules for century years. You
          must design an activity diagram, test the program, and ensure it
          handles user input correctly. The second task involves creating a
          program to compare the prices of two different meat brands and
          determine which is cheaper based on their cost per gram.
        </p>
        <h3 className="mt-2">Ecercise 3: Loops</h3>
        <p style={{ fontSize: "1.1rem" }}>
          This exercise deals with loops. The first task is to write a program
          that prints a portion of the multiplication table, such as 13 to 15
          times tables, allowing the user to specify which part of the table to
          print. The second task is to create a program that determines whether
          a given number is a prime number. It should allow repeated checks for
          multiple numbers, using a loop structure to facilitate user input.
        </p>
        <h3 className="mt-2">Ecercise 4: OOP & Classes</h3>
        <p style={{ fontSize: "1.1rem" }}>
          This exercise explores object-oriented programming and classes. The
          first task requires creating a class Valuta with methods to convert
          between Norwegian kroner and other currencies. You will also write a
          client program to allow users to perform conversions, with options
          presented via a menu. The second task involves programming a dice game
          for two players, where the goal is to reach exactly 100 points. Each
          player takes turns rolling a die, with specific rules for resetting
          scores or requiring exact sums to win. The program must simulate
          gameplay and use the Random class for dice rolls.
        </p>
        <h3 className="mt-2">Ecercise 5: Classes as building blocks</h3>
        <p style={{ fontSize: "1.1rem" }}>
          This exercise teaches using classes as building blocks. The first task
          involves creating a class for fractions with methods for arithmetic
          operations like addition, subtraction, multiplication, and division.
          The class must handle invalid inputs, such as a zero denominator, by
          throwing exceptions. An optional feature is to simplify fractions. The
          second task requires developing a class MinRandom for generating
          random numbers within specific intervals, both integers and doubles.
          This class will utilize an instance of the Random class to implement
          the required methods.
        </p>
        <h3 className="mt-2">Ecercise 6: Arrays and primitive data types</h3>
        <p style={{ fontSize: "1.1rem" }}>
          This exercise focuses on arrays of primitive data types. The first
          task involves creating a program to count the frequency of random
          numbers (0-9) generated 1000 times and storing the counts in an array.
          Results should be displayed numerically and graphically using stars to
          represent frequency. In the second task, you will write a text
          analysis program that counts the occurrences of letters and other
          characters in a given string. The class will include methods to
          determine the total and unique letter counts, the percentage of
          non-letters, and the frequency of specific letters. The final task is
          to develop a Matrise class to handle operations like addition,
          multiplication, and transposition of matrices, with methods returning
          new matrix objects while ensuring immutability.
        </p>
        <h3 className="mt-2">Ecercise 7: Java API</h3>
        <p style={{ fontSize: "1.1rem" }}>
          This exercise explores the Java API. The first task involves creating
          a class NyString with methods for text manipulation, such as
          shortening a string by extracting the first letter of each word or
          removing all occurrences of a specific character. The second task
          focuses on building a text-processing class to count words, calculate
          average word length, and determine the average number of words per
          sentence, among other operations. It should also allow replacing words
          and outputting the original or uppercase versions of the text.
        </p>
        <h3 className="mt-2">Ecercise 8: Object Collaboration</h3>
        <p style={{ fontSize: "1.1rem" }}>
          This exercise focuses on object collaboration. The task is to create a
          Person class with attributes for first name, last name, and birth
          year. A related ArbTaker class will manage employee records, including
          attributes for personal details, salary, and employment year. This
          class should offer methods to calculate taxes, annual salaries, and
          years employed, as well as generate formatted output such as "last
          name, first name." A menu-driven client program will allow users to
          view and modify employee data.
        </p>
        <h3 className="mt-2">Ecercise 9: Arrays of objects</h3>
        <p style={{ fontSize: "1.1rem" }}>
          This exercise deals with arrays of objects. The task is to develop a
          Student class to track each student's name and the number of
          assignments completed. This data is then managed by an Oppgaveoversikt
          class, which supports operations like registering new students,
          updating assignment counts, and retrieving statistics about the
          registered students. A client program will demonstrate these
          functionalities.
        </p>
        <h3 className="mt-2">Exercise 10: Array Lists</h3>
        <p style={{ fontSize: "1.1rem" }}>
          This exercise focuses on list-based arrays. The first task involves
          creating a system to manage event registrations. Each event will have
          attributes like name, location, organizer, type, and timestamp. The
          system must allow users to register events, search for events by
          location or date, filter by time intervals, and generate sorted lists
          by different criteria. The second task is to develop a restaurant menu
          registry, where each menu consists of multiple dishes, and each dish
          has attributes like name, type, price, and a recipe. The program
          should support operations like registering dishes, finding dishes by
          name or type, and creating menus with total prices within a given
          range.
        </p>
        <h3 className="mt-2">Exercise 11: Exam exercise</h3>
        <p style={{ fontSize: "1.1rem" }}>
          This exam focuses on developing a property management system for
          Gloppen municipality, enabling the registration, display, and analysis
          of local properties. The application requires functionality to
          register properties with attributes such as municipality number and
          name, lot number (gnr), section number (bnr), name, area, and owner.
          Key features include searching for properties using unique identifiers
          (municipality number, gnr, bnr), calculating the average area of
          registered properties, and outputting property details in a specific
          format (e.g., 1445-54/73). The system is text-based and uses a
          menu-driven interface for user interactions. Additionally, the design
          and implementation should adhere to principles of coupling and
          cohesion while incorporating features such as array handling and
          method documentation.
        </p>
        <h3 className="mt-2">About the folder assignment</h3>
        <p style={{ fontSize: "1.1rem" }}>
          In the folder assignment we had to make a grocery storage system where
          you could register, remove, list groceries and more. We also had to
          implement recipies and cooking books. The enduser should be able to
          check what they had in storage and what they could make with the
          ingredients they had. The project had to be made in Java with a maven
          project structure. Furthermore we had to implement full JUnit testing
          and JavaDoc documentation.
        </p>
        <Link
          to="https://github.com/NTNU-IDI/idatt1003-mappe-2024-Segward"
          className="no-text-decoration hover-scale mb-5"
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "white",
            color: "black",
            padding: "10px 20px",
            borderRadius: "10px",
            cursor: "pointer",
            width: "fit-content",
            marginTop: "20px",
          }}
        >
          <span>Source code</span>
        </Link>
        <Link
          to="/projects"
          className="no-text-decoration hover-scale mb-5"
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "white",
            color: "black",
            padding: "10px 20px",
            borderRadius: "10px",
            cursor: "pointer",
            width: "fit-content",
            marginTop: "20px",
          }}
        >
          <img
            src="/Left.png"
            style={{ marginRight: "10px", width: "20px", height: "20px" }}
          />
          <span>Return to projects</span>
        </Link>
      </div>
    </div>
  );
}

export default ExercisesFolderAssignment;
