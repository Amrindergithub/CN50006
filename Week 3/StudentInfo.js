const dateofBirth = "22/12/2002";

const getStudentName = () => "Amrinder";

const getCampusName = () => "UEL Campus";

exports.getName = getStudentName;
exports.Location = getCampusName;
exports.dob = dateofBirth;
exports.Studentgrade = (marks) => {
    return marks > 50 && marks < 70 ? "B grade" : "A grade";
};