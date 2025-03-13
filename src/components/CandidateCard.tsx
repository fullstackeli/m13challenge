import type { Candidate } from '../interfaces/Candidate.interface';

type CandidateCardProps = {
     currentUser: Candidate;
     decide: (chosen: boolean) => void;
   };

const CandidateCard = (props: CandidateCardProps) => {
     return (
       <div style={{ margin: '0 auto', width: '300px'}}>
         <img src={`${props.currentUser.avatar_url}`}
          style={{ width: '300px' }}/>
          {
                    Object.keys(props.currentUser).length == 0 ? <h2 style={{textAlign: 'center'}}>Canidate not Found</h2> : (
                         <div style={{ background: 'black', maxWidth: '300px', padding: '10px', marginTop: '-25px' }}>
                              <h2>{props.currentUser.name || 'No Name'} &nbsp;
                                   <em>({props.currentUser.login})</em></h2>
                              <p>Location: {props.currentUser.location || 'N/A'}</p>
                              <p>Email: <a href={`mailto:${props.currentUser.email || '#'}`}>{props.currentUser.email || 'N/A'}</a></p>
                              <p>Company: {props.currentUser.company || 'N/A'}</p>
                              <p>Bio: {props.currentUser.bio || 'N/A'}</p>
                         </div>
                    )
          }
          <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '10px' }}>
               <button style={{background: 'red'}} onClick={() => props.decide(false)}>-</button>
               <button style={{background: 'green'}} onClick={() => props.decide(true)}>+</button>
          </div>
       </div>
     );
}
export default CandidateCard;
