import CandidateListItem from './CandidateListItem';
import { useEffect, useState } from 'react';
import type { Candidate } from '../interfaces/Candidate.interface';

const CandidateList = () => {

     const [candidates, setCandidates] = useState<Candidate[]> ([]);
     useEffect(() => {
          const storedCandidates = localStorage.getItem('savedCandidates');
          let parsedCandidates: Candidate[] = JSON.parse(storedCandidates || '{}');
          setCandidates(parsedCandidates);
     }, []);

     const reject = (id: number) => {
          const newCandidates = candidates.filter((candidate) => candidate.id != id);
          setCandidates(newCandidates);
          localStorage.setItem('savedCandidates', JSON.stringify(newCandidates));
     };

     return (
          <div>
               {candidates.length == 0 ? <h2>No Candidates Added</h2>: (
                    <table className='table'>
                    <thead>
                         <tr>
                              <th>Image</th>
                              <th>Name</th>
                              <th>Location</th>
                              <th>Email</th>
                              <th>Company</th>
                              <th>Bio</th>
                              <th>Reject</th>
                         </tr>
                    </thead>
                    <tbody>
                         {candidates.map((candidate) => (
                              <CandidateListItem
                                   key={candidate.id}
                                   candidate={candidate}
                                   reject={reject}
                              />
                         ))}
                    </tbody>
               </table>
               )}
          </div>
     );
}

export default CandidateList;