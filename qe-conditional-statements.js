// [조건문 연습 문제]

// 문제 1: 숫자를 입력받아 짝수인지 홀수인지 출력하세요.
const number = 2;

if (number % 2 === 0) {
  console.log(number + "는 짝수 입니다.");
} else {
  console.log(number + "는 홀수 입니다.");
}

console.log("===================================");
// 문제 2: 점수를 입력받아 학점을 출력하세요.
// 90점 이상 A, 80점 이상 B, 70점 이상 C, 그 외 D
const score = 80;

if (score >= 90) {
  console.log(score + "점 A 입니다.");
} else if (score >= 80) {
  console.log(score + "점 B 입니다.");
} else if (score >= 70) {
  console.log(score + "점 C 입니다.");
} else {
  console.log(score + "점 D 입니다.");
}

// 문제 3: 나이를 입력받아 성인인지 미성년자인지 출력하세요.
const isMember = true;
const totalPrice = 19;

if (isMember) {
  if (totalPrice >= 20) {
    console.log("성인 입니다.");
  } else {
    console.log("미성년자 입니다.");
  }
}

// 문제 4: switch문을 사용하여 요일을 출력하세요.
const day = 2;

switch (day) {
  case 1:
    console.log("월요일입니다.");
    break;
  case 2:
    console.log("화요일입니다.");
    break;
  case 3:
    console.log("수요일입니다.");
    break;
  case 4:
    console.log("목요일입니다.");
    break;
  case 5:
    console.log("금요일입니다.");
    break;
  case 6:
    console.log("토요일입니다.");
    break;
  case 7:
    console.log("일요일입니다.");
    break;
}

// 문제 5: 두 숫자를 비교하여 큰 수를 출력하세요.

const age = 10;
const age2 = 20;

if(age > age2){
    console.log("큰 수는: " + age);
} else if(age < age2){
    console.log("큰 수는: " + age2);
} else {
    console.log("두 숫자는 같습니다.");
}