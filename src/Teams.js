const Teams = ({ selectTeam, handleSelectTeam }) => {
  return (
    <select
      className="form-select form-select-lg"
      value={selectTeam}
      onChange={handleSelectTeam}
    >
      <option value="TeamA">TeamA</option>
      <option value="TeamB">TeamB</option>
      <option value="TeamC">TeamC</option>
      <option value="TeamD">TeamD</option>
    </select>
  );
};

export default Teams;
