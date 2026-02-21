import Header from "../components/Header";
import JobList from "../components/JobList";

const Jobs = ({ candidate, onChangeEmail }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header onChangeEmail={onChangeEmail} />

      <div className="pt-28 max-w-6xl mx-auto px-8">
        <JobList candidate={candidate} />
      </div>
    </div>
  );
};

export default Jobs;
