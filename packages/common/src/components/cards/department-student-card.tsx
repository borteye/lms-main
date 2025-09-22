export default function DepartmentStudentCard() {
  return (
    <div className="flex gap-4 justify-between p-4 border-2 border-black rounded-lg hover:scale-102 transition-all duration-300 ease-in-out">
      <div>
        <h2 className="font-medium">Kwame Owusu</h2>
        <p>
          Class :{" "}
          <span className="w-fit border border-black bg-vivid-purple font-semibold text-sm px-2 py-0.5 rounded-full">
            Class 6A
          </span>
        </p>
      </div>
      <div className="flex flex-col items-end">
        <h2 className="w-fit border border-black bg-vivid-purple font-semibold text-sm px-2 py-0.5 rounded-full mb-1">
          Stream A
        </h2>
        <p>Enrolled: 9/1/2023</p>
      </div>
    </div>
  );
}
