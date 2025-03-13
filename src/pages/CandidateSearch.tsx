import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import CandidateCard from '../components/CandidateCard';
import type { Candidate } from '../interfaces/Candidate.interface';

const CandidateSearch = () => {

  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [candidateIndex, setCandidateIndex] = useState<number>(0);
  const [currentUser, setCurrentUser] = useState<Candidate>({});

  const loadUsers = async () => {
    const data: Candidate[] = await searchGithub();
    console.log(data)
    setCandidates(data);
    const user = await getUser(data[candidateIndex]);
    setCurrentUser(user);
  };

  const getUser = async (user: Candidate) => {
    const data: Candidate = await searchGithubUser(user.login || '');
    return data
  }

  const decide = async (chosen: boolean) => {
    if (chosen) {
      const savedCandidates = localStorage.getItem('savedCandidates');
      if (savedCandidates) {
        const savedCandidatesArray = JSON.parse(savedCandidates);
        savedCandidatesArray.push(currentUser);
        localStorage.setItem('savedCandidates', JSON.stringify(savedCandidatesArray));
      } else {
        localStorage.setItem('savedCandidates', JSON.stringify([currentUser]));
      }

    } else {
    }
    if (candidateIndex + 1 < candidates.length) {
      setCandidateIndex(candidateIndex + 1);
      const user = await getUser(candidates[candidateIndex + 1]);
      setCurrentUser(user);
    } else {
      setCandidateIndex(0);
      await loadUsers();
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div>
      <h1>Candidate Search</h1>
      <CandidateCard currentUser={currentUser} decide={decide} />
    </div>
  );
};

export default CandidateSearch;
