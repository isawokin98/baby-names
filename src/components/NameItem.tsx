import "./buttons.css";

interface NameItemProps {
  key: number;
  name: string;
  sex: string;
  handleClickName: React.MouseEventHandler<HTMLButtonElement>;
}

export default function NameItem({
  name,
  handleClickName,
  sex,
}: NameItemProps): JSX.Element {
  return (
    <button
      onClick={handleClickName}
      className={sex === "f" ? "buttonFemale" : "buttonMale"}
    >
      {name}{" "}
    </button>
  );
}
