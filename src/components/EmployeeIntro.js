//building a funny bit of text that I imagine would be on a big corporations employee portal
export default function EmployeeIntro(props) {
  return (
    <>
      <h1>
        Hello, <em>Valued</em> Employee
      </h1>
      <p>
        Here at Big Box Industries, we pride ourselves on not only having big
        boxes but having bigger hearts. This is thanks to all of you, our
        <em> valued</em> employees. Please see employment expectations below:
      </p>
      {/* I cannot claim ownership of this text, it is from the internet url: https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2F736x%2F21%2F08%2F2b%2F21082bcf207dd7a08ccbead06f0074a0.jpg&tbnid=N7L2sz-BXiKhoM&vet=12ahUKEwilmszUnLuEAxXGxckDHXAPAbgQMyg_egUIARDuAQ..i&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F357825132873396054%2F&docid=fkfU8KR9PNszEM&w=714&h=661&q=funny%20employer%20warnings&ved=2ahUKEwilmszUnLuEAxXGxckDHXAPAbgQMyg_egUIARDuAQ*/}
      <small>
        <ol>
          <li>
            <strong>SICKNESS:</strong> No excuses will be acceptable. We will no
            longer accept your doctor's note as proof of illness as we believe
            that if you are able to go to the doctor you are able to come to
            work
          </li>
          <li>
            <strong>LEAVE OF ABSENCE FOR AN OPERATION:</strong> We are no longer
            allowing this practice. We hired you as you are, and to have
            anything removed certainly makes you less than we bargained for
          </li>
          <li>
            <strong>DEATH, YOUR OWN:</strong> This will be accepted as an
            excuse, but we would like at least two weeks notice, as we feel it
            is your duty to teach someone else your job
          </li>
          <li>
            <strong>QUANTITY OF WORK:</strong> No matter how much you do, you'll
            never do enough
          </li>
          <li>
            <strong>QUALITY OF WORK:</strong> The minimum acceptable level is
            perfection
          </li>
          <li>
            <strong>ADVICE FROM THE BOSS:</strong> Eat a live toad the first
            thing in the morning and nothing worse will happen to you the rest
            of the day
          </li>
          <li>
            <strong>THE BOSS IS ALWAYS RIGHT</strong>
          </li>
          <li>
            <strong>WHEN THE BOSS IS WRONG, REFER TO RULE 7</strong>
          </li>
        </ol>
      </small>
    </>
  );
}
