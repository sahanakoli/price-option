/* eslint-disable no-unused-vars */
import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';


const LineChart = () => {
    const subjectMarksData = [
        { id: 1, name: "Alice", math: 85, physics: 78, chemistry: 92 },
        { id: 2, name: "Bob", math: 78, physics: 85, chemistry: 88  },
        { id: 3, name: "Charlie", math: 92, physics: 91, chemistry: 94},
        { id: 4, name: "David", math: 88, physics: 89, chemistry: 87 },
        { id: 5, name: "Emma", math: 76, physics: 82, chemistry: 79 },
        { id: 6, name: "Frank", math: 95, physics: 97, chemistry: 98},
        { id: 7, name: "Grace", math: 70, physics: 68, chemistry: 72 },
        { id: 8, name: "Hannah", math: 89, physics: 91, chemistry: 90},
        { id: 9, name: "Ian", math: 83, physics: 80, chemistry: 85 },
        { id: 10, name: "Jack", math: 91, physics: 93, chemistry: 89}
      ];
      
    return (
        <div>
           <LChart width={600} height={400} data={subjectMarksData}>
            <XAxis dataKey="name"></XAxis>
            <YAxis></YAxis>
            <Line dataKey="math" stroke='red'></Line>
            <Line dataKey="physics" stroke='blue'></Line>
            </LChart> 
        </div>
    );
};

export default LineChart;