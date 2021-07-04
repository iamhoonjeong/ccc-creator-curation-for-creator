import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CreatorList from '../components/CreatorList';
import {
  selectAll,
  selectMusician,
  selectDeveloper,
  selectPainter,
  selectDesigner,
} from '../modules/creator';

const CreatorListContainer = () => {
  const creators = useSelector((state) => state.creator);

  // dispatch
  const dispatch = useDispatch();

  const onSelectAll = useCallback(() => dispatch(selectAll()), [dispatch]);
  const onSelectMusician = useCallback(() => dispatch(selectMusician()), [
    dispatch,
  ]);
  const onSelectDeveloper = useCallback(() => dispatch(selectDeveloper()), [
    dispatch,
  ]);
  const onSelectPainter = useCallback(() => dispatch(selectPainter()), [
    dispatch,
  ]);
  const onSelectDesigner = useCallback(() => dispatch(selectDesigner()), [
    dispatch,
  ]);

  return (
    <>
      <CreatorList
        creators={creators}
        onSelectAll={onSelectAll}
        onSelectMusician={onSelectMusician}
        onSelectDeveloper={onSelectDeveloper}
        onSelectPainter={onSelectPainter}
        onSelectDesigner={onSelectDesigner}
      />
    </>
  );
};

export default CreatorListContainer;
