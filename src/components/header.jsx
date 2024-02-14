import data from "../data.json"

export default function Header() {
    return (
      <section id="about">
        <div>
          <h1>
            My name is {data.firstName + " " + data.lastName}
          </h1>
          <p>It is very nice to meet you :)</p>
        </div>
      </section>
    );  
  }