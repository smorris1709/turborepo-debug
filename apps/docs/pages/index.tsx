import { Button } from "ui";

export default function Docs() {
  const person: App.Models.Person = {
    name: "John Doe",
    age: 30,
  };

  const dog: App.Models.Animal = {
    name: "Fido",
  };

  return (
    <div>
      <h1>Docs</h1>

      <p>{person.name}</p>
      <Button />
    </div>
  );
}
