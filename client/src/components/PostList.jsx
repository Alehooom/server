import PostItemSmall from "./PostItemSmall";

function PostList() {
   //använder en const posts som är null för tillfället,
   //Skapat en posts.sql dummy för att testa sidan med lite data
   //const posts = null;
   const posts = [
    {
      id: 1,
      title: 'The Future of Electric Vehicles',
      body: 'Electric vehicles (EVs) are rapidly evolving, with new solid-state battery technologies promising significantly longer ranges and faster charging times.',
      author: {
        username: 'AutoExpert_99'
      }
    },
    {
      id: 2,
      title: 'Classic Muscle Cars: A Retrospective',
      body: 'The late 1960s and early 1970s represented the golden era of American muscle cars, featuring iconic high-performance models like the Ford Mustang and Chevrolet Camaro.',
      author: {
        username: 'V8_Enthusiast'
      }
    },
    {
      id: 3,
      title: 'Essential Engine Maintenance',
      body: 'Regular oil changes, timely air filter replacements, and consistently checking coolant levels are crucial steps to ensure an internal combustion engine runs smoothly and efficiently.',
      author: {
        username: 'MechanicMike'
      }
    },
    {
      id: 4,
      title: 'Aerodynamics in Modern Sports Cars',
      body: 'Contemporary sports car design relies heavily on wind tunnel testing to reduce drag and increase downforce, directly improving high-speed stability and cornering grip.',
      author: {
        username: 'TrackDayDriver'
      }
    }
  ];
   
  return (
    <ul>
      {posts?.length > 0 ? (
        posts.map((post) => (
          <li key={`posts_${post.id}`}>
            <PostItemSmall post={post} />
          </li>
        ))
      ) : (
        <h3>Kunde inte hämta inlägg</h3>
      )}
    </ul>
  );
}
export default PostList;

