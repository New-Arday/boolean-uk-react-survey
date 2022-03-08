import { useState } from "react";

function Main() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [duckRate, setDuckRate] = useState("");
  const [duckSpendTime, setDuckSpendTime] = useState("");
  const [duckWhatElse, setDuckWhatElse] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const duckRateHandler = (e) => {
    const duckRate = e.target.value;
    console.log(duckRate);
    setDuckRate(duckRate);
  };
  const duckSpendTimeHandler = (e) => {
    const duckSpendTime = e.target.value;
    console.log(duckSpendTime);
    setDuckSpendTime(duckSpendTime);
  };
  const duckWhatElseHandler = (e) => {
    const duckWhatElse = e.target.value;
    console.log(duckWhatElse);
    setDuckWhatElse(duckWhatElse);
  };
  const nameHandler = (e) => {
    const name = e.target.value;
    console.log(name);
    setName(name);
  };
  const emailHandler = (e) => {
    const email = e.target.value;
    console.log(email);
    setEmail(email);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(duckRate);
    console.log(duckSpendTime);
    console.log(duckWhatElse);
    console.log(name);
    console.log(email);
    setDuckRate("");
    setDuckSpendTime("");
    setDuckWhatElse("");
    setName("");
    setEmail("");
  };
  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
      </section>
      <section className="main__form">
        {
          <form class="form" onSubmit={submitHandler}>
            <h2>Tell us what you think about your rubber duck!</h2>
            <div class="form__group radio">
              <h3>How do you rate your rubber duck colour?</h3>
              <ul>
                <li>
                  <input
                    id="color-one"
                    type="radio"
                    name="color"
                    value="1"
                    onChange={duckRateHandler}
                    checked={duckRate === "1"}
                  />
                  <label for="color-one">1</label>
                </li>
                <li>
                  <input
                    id="color-two"
                    type="radio"
                    name="color"
                    value="2"
                    onChange={duckRateHandler}
                    checked={duckRate === "2"}
                  />
                  <label for="color-two">2</label>
                </li>
                <li>
                  <input
                    id="color-three"
                    type="radio"
                    name="color"
                    value="3"
                    onChange={duckRateHandler}
                    checked={duckRate === "3"}
                  />
                  <label for="color-three">3</label>
                </li>
                <li>
                  <input
                    id="color-four"
                    type="radio"
                    name="color"
                    value="4"
                    onChange={duckRateHandler}
                    checked={duckRate === "4"}
                  />
                  <label for="color-four">4</label>
                </li>
              </ul>
            </div>
            <div class="form__group">
              <h3>How do you like to spend time with your rubber duck</h3>
              <ul>
                <li>
                  <label>
                    <input
                      name="spend-time"
                      type="checkbox"
                      value="swimming"
                      onChange={duckSpendTimeHandler}
                      checked={duckSpendTime === "swimming"}
                    />
                    Swimming
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      name="spend-time"
                      type="checkbox"
                      value="bathing"
                      onChange={duckSpendTimeHandler}
                      checked={duckSpendTime === "bathing"}
                    />
                    Bathing
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      name="spend-time"
                      type="checkbox"
                      value="chatting"
                      onChange={duckSpendTimeHandler}
                      checked={duckSpendTime === "chatting"}
                    />
                    Chatting
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      name="spend-time"
                      type="checkbox"
                      value="noTime"
                      onChange={duckSpendTimeHandler}
                      checked={duckSpendTime === "noTime"}
                    />
                    I don't like to spend time with it
                  </label>
                </li>
              </ul>
            </div>
            <label>
              What else have you got to say about your rubber duck?
              <textarea
                name="review"
                cols="30"
                rows="10"
                onChange={duckWhatElseHandler}
              ></textarea>
            </label>
            <label>
              Put your name here (if you feel like it):
              <input
                type="text"
                name="username"
                value={name}
                onChange={nameHandler}
              />
            </label>
            <label>
              Leave us your email pretty please??
              <input
                type="email"
                name="email"
                value={email}
                onChange={emailHandler}
              />
            </label>
            <input class="form__submit" type="submit" value="Submit Survey!" />
          </form>
        }
      </section>
    </main>
  );
}

export default Main;
