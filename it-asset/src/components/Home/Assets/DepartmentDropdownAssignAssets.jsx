import React from "react";

function DepartmentDropdown({ department, selectedDepartmentId, setSelectedDepartmentId }) {
  return (
    <div className="col-md-3">
      <label htmlFor="#">Department</label>
      <select
        className="form-control"
        value={selectedDepartmentId}
        onChange={(e) =>
          setSelectedDepartmentId(parseInt(e.target.value, 10))
        }
      >
        <option value="">--Choose a Department--</option>
        {Array.isArray(department) ? (
          department.map((department) => (
            <option key={department.id} value={department.id}>
              {department.department_name}
            </option>
          ))
        ) : (
          <p>no data found</p>
        )}
      </select>
    </div>
  );
}

export default DepartmentDropdown;