'use client'
import React from 'react'
import { LineChart } from '@mui/x-charts/LineChart'; 
import { Progress } from "flowbite-react";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useState } from 'react';
const Analytics = () => {
    const [isOpen,setIsOpen]=useState(false);
    const [rank,setRank]=useState(1);
    const [percentile,setPercentile]=useState(96);
    const [score,setScore]=useState(12);
    const [r,setR]=useState(rank);
    const [p,setP]=useState(percentile);
    const [s,setS]=useState(score);
    const [myp,setMyp]=useState([null,null,null,null,null,null,null,null,1,null])

    const handleRankChange = (e) => setR(e.target.value);
    const handlePercentileChange = (e) => setP(e.target.value);
    const handleScoreChange = (e) => setS(e.target.value);
    function ChangeModal(){
        setIsOpen(!isOpen);
    }
    function ChangeData(r,p,s){
        setRank(r);
        setPercentile(p);
        setScore(s);
        window.alert("Data Updated Succesfully!");
    }
    
    var arr1 = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    var arr2 = [0, 1, 3, 6, 14, 18, 16, 15, 16, 18, 2];
  return (
    <div className='flex  flex-col lg:flex-row items-center Justify-center w-[100%] '>
      <div className="left flex flex-col items-center justify-center gap-4 w-[100%] lg:w-[60%] ">
        <div className="update flex flex-wrap items-center justify-center p-6 border gap-8 rounded-[10px] w-[90%]">
            <div className="logo w-32 lg:w-14">
                <img src="https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png" alt="" />
            </div>
            <div className="text">
                <div className="bld font-bold">Hyper Text Markup Language</div>
                <p>Questions: 08 | time: 15min | submitted: 15/10/2024</p>
            </div>
            <div className="btn">
                <button className='p-4 border bg-[#390ae4] text-white hover:bg-white hover:text-black rounded-[10px] ' onClick={ChangeModal}>
                    Update
                </button>
            </div>
        </div>
        <div className="stat flex flex-col items-left p-6 border gap-4 rounded-[10px] w-[90%]">
            <h1 className='font-bold'>Quick Statistics</h1>
            <div className="details flex flex-col lg:flex-row items-left justify-center gap-4">
                <div className="rank flex items-center justify-left gap-2 p-2">
                    <div className="logo w-[60px] p-2 border rounded-[50%]">
                        <img src="https://res.cloudinary.com/djyxyaqno/image/upload/v1730025320/trophy_htswn4.png" className='p-2' alt="" />
                    </div>
                    <div className="score">
                        <div className="point font-bold text-[20px]">
                            {rank}
                        </div>
                        <div className="text-[15px] lg:text-[10px]">
                            YOUR RANK
                        </div>
                    </div>
                </div>
                <div className="percentile flex items-center justify-left gap-2 lg:border-l-[2px] p-2">
                    <div className="logo w-[60px] p-2 border rounded-[50%]">
                        <img src="https://res.cloudinary.com/djyxyaqno/image/upload/v1730026025/pencil_kvnyyw.png" className='p-2' alt="" />
                    </div>
                    <div className="score">
                        <div className="point font-bold text-[20px]">
                            {percentile}%
                        </div>
                        <div className="text-[15px] lg:text-[10px]">
                            PERCENTILE
                        </div>
                    </div>
                </div>
                <div className="score flex items-center justify-left gap-2 lg:border-l-[2px] p-2">
                    <div className="logo w-[60px] p-2 border rounded-[50%]">
                        <img src="https://res.cloudinary.com/djyxyaqno/image/upload/v1730026025/check-mark_qqzz4g.png" className='p-2' alt="" />
                    </div>
                    <div className="score">
                        <div className="point font-bold text-[20px]">
                            {score}/15
                        </div>
                        <div className="text-[15px] lg:text-[10px]">
                            SCORE
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div className="graph flex flex-col items-center justify-center p-6 border gap-8 rounded-[10px] w-[90%]">
            <div className="up flex gap-16 w-[100%] ">
                <div className="left w-[85%]">
                    <p>Comparison Graph</p>
                    <p>
                        You have scored {percentile}% percentile and the 72% is average
                    </p>
                </div>
                <div className="right m-auto ml-0 " >
                <div className="logo w-[70px] p-2 border rounded-[50%]">
                    <img src="https://res.cloudinary.com/djyxyaqno/image/upload/v1730026615/line-chart_zuk0jv.png" className='p-2' alt="" />
                </div>
                
                </div>
            </div>
            <div className="graph flex flex-col items-center justify-center p-6  gap-8 rounded-[10px] w-[90%]">
                <LineChart
                    xAxis={[{ data: arr1, label: 'Percentile' }]}
                    series={[
                        {
                            data: arr2,
                            label: `Number of Students`,
                            showMark: true,
                            tooltip: { content: (point) => (point ? `${point.x}, ${point.y}` : 'No Data') }, // Fallback tooltip content
                            markers: [
                              {
                                x: arr1.findIndex(item => item === percentile),
                                y: arr2[arr1.findIndex(item => item === percentile)] || 0,
                                label: `Your Percentile: ${percentile}`,
                                color: 'red',
                                size: 8,
                              },
                            ],
                        },
                    ]}
                    width={400}
                    height={300}
                />
            </div>
        </div>
      </div>
      <div className="right flex flex-col  m-auto mt-4 lg:mt-0 gap-6 lg:w-[40%] w-[100%] pr-4 pb-4 pl-4">
            <div className="bar border rounded-[10px] w-[100%] p-8">
            <div className='flex flex-col items-left gap-8'>
                <p className='font-bold text-[20px]'>Syllabus Wise Analytics</p>
                <Progress
                    progress={80}
                    progressLabelPosition="inside"
                    textLabel="HTML Tools, Forms, History"
                    textLabelPosition="outside"
                    color='blue'
                    size="lg"
                    labelProgress
                    labelText
                />
                <Progress
                progress={60}
                progressLabelPosition="inside"
                textLabel="Tage in HTML"
                textLabelPosition="outside"
                color='yellow'
                size="lg"
                labelProgress
                labelText
            />
            <Progress
                progress={25}
                progressLabelPosition="inside"
                textLabel="Tables and References in HTML"
                textLabelPosition="outside"
                color='red'
                size="lg"
                labelProgress
                labelText
            />
            <Progress
                progress={95}
                progressLabelPosition="inside"
                textLabel="Basics of CSS"
                textLabelPosition="outside"
                color='green'
                size="lg"
                labelProgress
                labelText
            />

            </div>
            </div>
            <div className="pie border rounded-[10px] p-4 flex flex-col gap-4 items-center justify-center">
                <div className="up w-[100%]">
                    <p className='font-bold text-[20px] flex'><span className='w-[85%]'>Question Analytics</span> <span className='text-right text-[#1100ff]'>{score}/15</span></p>

                    <br />
                    <p className='font-bold'>You have Scored 12 out of 15.</p>
                    <p className=''>However it still needs some improvements.</p>
                </div>
                <div className="down h-[200px] w-[200px]">
                    <CircularProgressbar value={score} text="🎯" strokeWidth={20} maxValue={15}/>
                </div>
            </div>
      </div>

      {isOpen && (
  <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
)}

      <div className={`modal_form absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
  w-[95%] lg:w-[50%] h-[50%] bg-white border border-black shadow-lg p-4 ${isOpen?'block':'hidden'} flex flex-col items-left gap-8 rounded-[15px] z-50`}>
        
        <div className="det flex  justify-center items-center gap-16">
        <p className='font-bold pt-2 text-[25px]'>Update Details</p>
        <img src="https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png" alt="logo" className='w-16 h-16 p-2'  />
        </div>
        <div className="form flex   w-[100%] text-[20px]">
            <div className="info flex flex-col  gap-8 w-[70%] items-right">
                <p className='flex items-right gap-4 w-46 h-8 font-bold'><span className='p-2 text-white flex items-center justify-center bg-[#1100ff] h-8 w-8 border rounded-[50%]'>1</span> Update Your Rank</p>
                <p className='flex items-right gap-4 w-46 h-8 font-bold'><span className='p-2 text-white flex items-center justify-center bg-[#1100ff] h-8 w-8 border rounded-[50%]'>2</span> Update Your Percentile</p>
                <p className='flex items-right gap-4 w-46 h-8 font-bold'><span className='p-2 text-white flex items-center justify-center bg-[#1100ff] h-8 w-8 border rounded-[50%]'>3</span> Update Your Score</p>
            </div>
            <div className="data flex flex-col  gap-8  w-[30%] items-right">
                <div className="items">
                <input type="number" className='flex items-right  w-24 lg:w-[200px] h-8 rounded-[5px]' value={r}
          onChange={handleRankChange}/>
          <p className={`${r<1||r>100?'block':'hidden'} text-[#ff0000] text-[15px]`}>Value should be 1-100</p>
                </div>
                <div className="items">
                <input type="number" className='flex items-right w-24 lg:w-[200px] h-8 rounded-[5px]' value={p}
          onChange={handlePercentileChange}/>
          <p className={`${p<1||p>100?'block':'hidden'} text-[#ff0000] text-[15px]`}>Value should be 1-100</p>

                </div>
                <div className="items">
                <input type="number" className='flex items-right w-24 lg:w-[200px] h-8 rounded-[5px]' value={s}
          onChange={handleScoreChange}/>
          <p className={`${s<0||s>15?'block':'hidden'} text-[#ff0000] text-[15px]`}>Value should be 0-15</p>
                </div>
            
            
            
            </div>
            
        </div>
        <div className="buttons flex gap-6 items-center justify-center h-[20%] m-auto mb-0">
        <button onClick={ChangeModal} className='bg-[#e40a0a] text-white hover:bg-white hover:text-black  w-[80px] h-[40px] p-2 rounded-[5px] border'>Close</button>
        <button onClick={()=>ChangeData(r,p,s)} className='bg-[#390ae4] text-white hover:bg-white hover:text-black w-[80px] h-[40px] p-2 rounded-[5px]  border'>Save ➡</button>
        </div>
        
      </div>
    </div>
  )
}

export default Analytics
