import { useContext, useState, useEffect } from "react";
import { Header, Container, Label, Loader, Segment } from "semantic-ui-react";
import { useStoreState } from "../state/easy-peasy-typed";
import { SkynetContext } from "../state/SkynetContext";

const Profile = () => {
  const { userProfile } = useContext(SkynetContext);
  const { userID } = useStoreState((store) => store.mySky);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    console.log("start userprofile");
    if (userProfile && userID) {
      userProfile.getProfile(userID).then((profile) => {
        setProfile(profile);

        console.log(profile);
        console.log("end userprofile");
      });

      userProfile.getPreferences(userID, { skapp: "starter" }).then((prefs) => {
        console.log("prefs:", prefs);
      });
    }

    // userProfile
    //   .setProfile({
    //     version: 1,
    //     username: 'dghelm',
    //     aboutMe: 'Developer Evangelist | Skynet Labs',
    //     location: 'OKC, OK, USA',
    //   })
    //   .then(() => {
    //     console.log('profileSet');
    //   });
  }, [userID, userProfile]);

  return (
    <>
      {userID ? (
        <Container style={{ marginTop: "7em" }}>
          <Header as="h2">Profile</Header>
          <Header as="h3">User ID</Header>
          <Label color="purple">{userID}</Label>
          <Segment>
            <Label> Profile JSON </Label> <br /> <br />
            <code style={{ minWidth: "100%" }}>{JSON.stringify(profile)}</code>
          </Segment>
        </Container>
      ) : (
        <Container>
          <Loader size="massive" active />
          <p> Loading Profile from MySky....</p>
        </Container>
      )}
    </>
  );
};

export default Profile;
