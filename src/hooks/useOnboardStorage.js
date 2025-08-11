// src/hooks/useOnboardStorage.js
import { useEffect, useState } from 'react';

export default function useOnboardStorage() {
  const [name, setName] = useState(localStorage.getItem('orpheus_name') || '');
  const [ageGroup, setAgeGroup] = useState(localStorage.getItem('orpheus_ageGroup') || '');
  const [country, setCountry] = useState(localStorage.getItem('orpheus_country') || '');
  const [city, setCity] = useState(localStorage.getItem('orpheus_city') || '');
  const [race, setRace] = useState(localStorage.getItem('orpheus_race') || '');

  useEffect(() => {
    localStorage.setItem('orpheus_name', name);
  }, [name]);
  useEffect(() => {
    localStorage.setItem('orpheus_ageGroup', ageGroup);
  }, [ageGroup]);
  useEffect(() => {
    localStorage.setItem('orpheus_country', country);
  }, [country]);
  useEffect(() => {
    localStorage.setItem('orpheus_city', city);
  }, [city]);
  useEffect(() => {
    localStorage.setItem('orpheus_race', race);
  }, [race]);

  return { name, setName, ageGroup, setAgeGroup, country, setCountry, city, setCity, race, setRace };
}
