import {fireEvent, render, screen} from '@testing-library/react';
import Game from "./pages/Game";
import Character from "./components/main-menu/main-menu-elements/Character";
import MainMenu from "./components/main-menu/MainMenu";
import Answers from "./components/buttons/Answers";



test('Kas pea menüüs ilmub tervitus teade', () => {
  render(<Game />);
  const linkElement = screen.getByText(/Welcome to the main menu/i);
  expect(linkElement).toBeInTheDocument();
});


test("Kas õige vastuse valimisel punktide kogus suureneb", () => {


  const save = {
    characterName: "Anonymous",
    lastAnswerTime: "21.6.2022 21:48",
    pointsOwned:1,
    profilePictureId: 3,
    spamMailNumber: 1,
    wrongAnswers: 3

  }

  render(<Character save = {save}/>);
  render(<Answers />);


  const counter  = screen.getByTestId("counter");
  const incrementBtn = screen.getByTestId("increment");

  fireEvent.click(incrementBtn);

  expect(counter).toHaveTextContent("1");
});