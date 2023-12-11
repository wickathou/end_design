import React from 'react';
import { fetchGreeting, greetingLoading, greetingText } from '../redux/greeting/greetingSlice';
import { useAppDispatch, useAppSelector } from '../utils/hooks';

export default function UserDisplay() {
  const dispatch = useAppDispatch();
  const greeting = useAppSelector(greetingText);
  const loading = useAppSelector(greetingLoading);

  return (
    <div>
      <div>{greeting}</div>
      <button type="button" onClick={() => dispatch(fetchGreeting())}>Fetch user</button>
      {loading && <div>Fetching user...</div>}
    </div>
  );
}
