import TeamsMember from "./TeamMember";
import Teams from "./Teams";

const Employees = ({
  employees,
  handleSelectTeam,
  handleEmployeeClick,
  selectTeam,
}) => {
  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8">
          <Teams selectTeam={selectTeam} handleSelectTeam={handleSelectTeam} />
        </div>
      </div>

      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8">
          <div className="card-collection">
            <TeamsMember
              employees={employees}
              handleEmployeeClick={handleEmployeeClick}
              selectTeam={selectTeam}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Employees;
