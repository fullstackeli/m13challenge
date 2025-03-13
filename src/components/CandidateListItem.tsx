import type { Candidate } from '../interfaces/Candidate.interface';

type Props = {
     candidate: Candidate;
     reject: (id: number) => void;
   };
   
const CandidateItem = (props: Props) => {

     return (
          <tr>
               <td>
                    <img src={`${props.candidate.avatar_url}`} style={{ width: '100px', borderRadius: '10px',  margin: '0 auto', display: 'block'}}></img>
               </td>
               <td> {props.candidate.name || 'No Name'} <em>({props.candidate.login})</em></td>
               <td>{props.candidate.location || 'N/A'}</td>
               <td>Email: <a href={`mailto:${props.candidate.email || '#'}`}>{props.candidate.email || 'N/A'}</a></td>
               <td>{props.candidate.company || 'N/A'}</td>
               <td>{props.candidate.bio || 'N/A'}</td>
               <td>
                    <button style={{background: 'red', margin: '0 auto', display: 'block'}} onClick={() => props.reject(props.candidate.id)} > - </button>
               </td>
          </tr>
     );
}

export default CandidateItem;