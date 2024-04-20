
// 컴포넌트를 만들어 내보낸다 => export


//리액트 아이콘 설치
//npm install react-icons
import {FaStar} from 'react-icons/fa';
//전용 css 잇기
import './styles.css'
import { useState } from 'react';


// StarRating 컴포넌트
export default function StarRating({starCount=5})
{
  //starCount(별갯수)는 5개를 기본값으로, 컴포넌트를 쓰는 곳에서 정하도록 매개변수로 두기
  // state 2개 만들기 (별점, 마우스오버 위치)
  let [score, setScore] = useState(0); //별점
  let [hover, setHover] = useState(0); //마우스 위치

  // 배열 : 모든 별 갯수 (starCount) --> 반복문 map
  let stars = [];// 그려줄 별의 갯구를 배열크기로
  for(let i=0;i<starCount;i++)
  {
    stars.push(i+1) //[1,2,3,4,5]
  }
  function handleMouseClick(element){
    //클릭한 별에다가 setScore()
    console.log(element)
    setScore(element)// set : 비동기 ==> state는 위에서부터 순서대로 하지않음
    //console.log(element)
  }
  function handleMouseMove(element){
    //마우스가 들어간 별에다가 setHover()
    // 어느 별 위에 마우스가 올라가있는지? : 매개변수로 받아오기
    //console.log(element)
    setHover(element)

  }
  function handleMouseLeave(){
    //마우스가 나간 별에다가 setLeave(별점)
    // 별에서 마우스가 나가면 점수랑 똑같이 맞춰준다(색깔을 맞추기 위해서)
    setHover(score)
  }
  return(
    <>
      <div>
        {
          //JSX안에 자바스크립트를 넣으려면 {}
          // map : 배열의 갯수만큼 반복, 첫번째는 각 내부요소의 값, 두번째는 인덱스(위치)
          // map 안에 콜백함수를 넣어서 동작
          stars.map((e,idx)=>{
            // e : 1, 2, 3, 4, 5
            // idx : 0,1,2,3,4 (배열위치값)
            

            //되풀이로 만들 html(jsx)는 return에 쓰기
            return(
              <FaStar size={30} key={e}
              // 마우스가 올라가 있거나, 선택된 상태면 클래스이름을 바꿈(클릭,마우스무브,마우스리브)
              // 삼항연산자를 써서 상황에 따라 클래스이름을 바꾸기(5개로)
                
                className={e <=(hover || score) ?'active':'inactive'}
                
                onClick={()=>{
                  handleMouseClick(e)
                }}
                onMouseMove={()=>{
                  handleMouseMove(e)
                }}
                onMouseLeave={()=>{
                  handleMouseLeave()
                }}
              />

              
              
            )
          })
        }
      </div>
    </>
  )
}