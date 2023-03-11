import {
  LineChart,
  ResponsiveContainer,
  Legend, Tooltip,
  Line,
  XAxis,
  YAxis,

} from 'recharts'

import './graph.css';
import './main.css';
const data = [
  {
      date: '1 jan',
      value: 0,
      value1: 256,
      value2: 85,
      value3: 578
  },
  {
      date: '15 jan',
      value: 2500,
      value1: 122,
      value2: 87,
      value3: 82
  },
  {
      date: '30 jan',
      value: 1500,
      value1: 5010,
      value2:2554,
      value3: 1254
  },
  {
      date: '15 feb',
      value: 3057,
      value1: 5158,
      value2:1090,
      value3: 4520
  },
  {
      date: '28 feb',
      value: 4215,
      value1: 4503,
      value2: 2156,
      value3: 714
  },
  {
      date: '15 march',
      value: 2500,
      value1: 1888,
      value2: 1871,
      value3: 3523
  },
];

function Graph() {
  return (

    
      <div className='container-fluid bg'>
          <h4 className="text-heading" align='center'>Sales Analysis
              
          </h4>
          <ResponsiveContainer width="100%" aspect={4} className="bg">
              <LineChart data={data}  >
                  
                  <XAxis dataKey="date"
                      interval={'preserveStartEnd'} />
                  <YAxis></YAxis>
                  <Legend />
                  <Tooltip />
                  <Line dataKey="value"
                      stroke="black" activeDot={{ r: 8 }} />
                  <Line dataKey="value1"
                      stroke="red" activeDot={{ r: 8 }} />
                  <Line dataKey="value2"
                   stroke="blue" activeDot={{r:8}} />
                   <Line dataKey="value3"
                   stroke="green" activeDot={{r:8}} />
              </LineChart>
          </ResponsiveContainer>
      </div>
  );
}

export default Graph;
