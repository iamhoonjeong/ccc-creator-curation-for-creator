import { createAction, handleActions } from 'redux-actions';
import chopin from '../images/chopin.svg';
import beethoven from '../images/beethoven.svg';
import hoon from '../images/hoon.svg';
import gogh from '../images/gogh.svg';
import picasso from '../images/picasso.svg';
import diterRams from '../images/dieter_rams.svg';
import chakaKhan from '../images/chaka_khan.svg';
import paulaScher from '../images/paula_scher.svg';

const SELECT_ALL = 'creator/SELECT_ALL';
const SELECT_MUSICIAN = 'creator/SELECT_MUSICIAN';
const SELECT_DEVELOPER = 'creator/SELECT_DEVELOPER';
const SELECT_PAINTER = 'creator/SELECT_PAINTER';
const SELECT_DESIGNER = 'creator/SELECT_DESIGNER';

export const selectAll = createAction(SELECT_ALL);
export const selectMusician = createAction(SELECT_MUSICIAN);
export const selectDeveloper = createAction(SELECT_DEVELOPER);
export const selectPainter = createAction(SELECT_PAINTER);
export const selectDesigner = createAction(SELECT_DESIGNER);

const states = [
  { id: 1, name: 'Hoon Jeong', category: 'Developer', portrait: hoon },
  { id: 2, name: 'Chopin', category: 'Musician', portrait: chopin },
  { id: 3, name: 'Beethoven', category: 'Musician', portrait: beethoven },
  { id: 4, name: 'Gogh', category: 'Painter', portrait: gogh },
  { id: 5, name: 'Picasso', category: 'Painter', portrait: picasso },
  { id: 6, name: 'Dieter Rams', category: 'Designer', portrait: diterRams },
  { id: 7, name: 'Chaka Khan', category: 'Musician', portrait: chakaKhan },
  { id: 8, name: 'Paula Scher', category: 'Designer', portrait: paulaScher },
];

const initialState = [
  { id: 1, name: 'Hoon Jeong', category: 'Developer', portrait: hoon },
  { id: 2, name: 'Chopin', category: 'Musician', portrait: chopin },
  { id: 3, name: 'Beethoven', category: 'Musician', portrait: beethoven },
  { id: 4, name: 'Gogh', category: 'Painter', portrait: gogh },
  { id: 5, name: 'Picasso', category: 'Painter', portrait: picasso },
  { id: 6, name: 'Dieter Rams', category: 'Designer', portrait: diterRams },
  { id: 7, name: 'Chaka Khan', category: 'Musician', portrait: chakaKhan },
  { id: 8, name: 'Paula Scher', category: 'Designer', portrait: paulaScher },
];

const creator = handleActions(
  {
    [SELECT_ALL]: (state) => states,
    [SELECT_MUSICIAN]: (state) =>
      states.filter((creator) => creator.category === 'Musician'),
    [SELECT_DEVELOPER]: (state) =>
      states.filter((creator) => creator.category === 'Developer'),
    [SELECT_PAINTER]: (state) =>
      states.filter((creator) => creator.category === 'Painter'),
    [SELECT_DESIGNER]: (state) =>
      states.filter((creator) => creator.category === 'Designer'),
  },
  initialState,
);

export default creator;
