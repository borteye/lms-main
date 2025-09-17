export default function DepartmentCourseCard() {
  return (
    
      <div className="flex gap-4 justify-between p-4 border-2 border-black rounded-lg hover:scale-102 transition-all duration-300 ease-in-out">
        <div>
          <h2 className="font-medium">Mathematics</h2>
          <p>
            Code :{" "}
            <span className="bg-vivid-purple font-semibold text-sm px-2 py-0.5 rounded-full">
              N/A
            </span>
          </p>
        </div>
        <div>
          <h2 className="font-medium">45 students</h2>
          <p>Mr. Kofi Antwi</p>
        </div>
      </div>
    
  );
}
