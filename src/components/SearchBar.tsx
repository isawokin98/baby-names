interface SearchBarProps {
  search: string;
  onSearchChange: React.ChangeEventHandler<HTMLInputElement>;
  handleGenderClick: React.ChangeEventHandler<HTMLInputElement>;
  handleAllClick: React.ChangeEventHandler<HTMLInputElement>;
}

export default function SearchBar({
  search,
  onSearchChange,
  handleGenderClick,
  handleAllClick,
}: SearchBarProps): JSX.Element {
  return (
    <>
      <input value={search} onChange={onSearchChange}></input>
      <form>
        <input
          type="radio"
          value="f"
          name="gender"
          onChange={handleGenderClick}
          id="female"
        ></input>
        <label htmlFor="female">Female</label>
        <input
          type="radio"
          value="m"
          name="gender"
          onChange={handleGenderClick}
          id="male"
        ></input>
        <label htmlFor="male">Male</label>
        <input
          type="radio"
          value="all"
          name="gender"
          onChange={handleAllClick}
          id="all"
        ></input>
        <label htmlFor="all">All</label>
      </form>
    </>
  );
}
