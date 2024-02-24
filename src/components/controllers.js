import ProjectDetails from "./projectDetails/projectsDetails";
import ProjectReoprts from "./projectReports/projectReports";

const { default: EmployeeDetails } = require("./employee/employeeDetails");
const { default: NoPageFound } = require("./noPageFound");
const { default: Projects } = require("./projects/projects");

export const getPageComponentController = (pageState) => {

    switch (pageState) {
        case "employeDetails": return <EmployeeDetails />;
        case "projects": return <Projects />;
        case "projectDetails": return <ProjectDetails />;
        case "projectReports": return <ProjectReoprts />;
    }

    return <NoPageFound />;
}
