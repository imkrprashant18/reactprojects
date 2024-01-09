import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind Text
      </h1>
      <Card
        username="Hitesh"
        btnText="Click Me!"
        image="https://images.pexels.com/photos/19154170/pexels-photo-19154170/free-photo-of-ani-harabeleri-kars.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
      />
      <Card
        username="Prashant"
        btnText="Visit Me!"
        image="https://images.pexels.com/photos/19789102/pexels-photo-19789102/free-photo-of-riga-latvia.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
      />
      <Card
        username="Mahato"
        btnText="Read Me!"
        image="https://images.pexels.com/photos/17504586/pexels-photo-17504586/free-photo-of-jeans-of-man-sitting-on-railing.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
      />
      <Card
        username="Sushant"
        btnText="Explore Me!"
        image="https://images.pexels.com/photos/19600002/pexels-photo-19600002/free-photo-of-framed-mirror-in-a-marketplace-with-the-reflection-of-a-couple-of-tourists-taking-photos.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
      />
    </>
  );
}

export default App;
