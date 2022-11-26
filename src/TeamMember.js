import TeamMemberCard from "./TeamMemberCard";

const TeamsMember = ({ selectTeam, employees, handleEmployeeClick }) => {
  return employees.map((employee) => (
    <TeamMemberCard
      key={employee.id}
      handleEmployeeClick={handleEmployeeClick}
      selectTeam={selectTeam}
      employee={employee}
    />
  ));
};

export default TeamsMember;
