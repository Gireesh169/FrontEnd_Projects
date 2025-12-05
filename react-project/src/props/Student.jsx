import PropTypes from 'prop-types';




function Student(props){
    return(
        <div className="student-info">
            <h1>Student Component</h1>
            <p>Name: {props.name}</p>
            <p>Age : {props.age}</p>
            <p>Grade: {props.grade}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
    
}
Student.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    grade: PropTypes.string.isRequired,
    isStudent: PropTypes.bool.isRequired,
};
Student.defaultProps = {
    name: "Unknown",
    age: 0,
    grade: "N/A",
    isStudent: false,
};
export default Student;