/** 
 * UnKnwon 타입
 */

function unknownExam(){
  let a : unknown = 1;
  let b : unknown = "hello";
  let c : unknown = true;
  let d : unknown = null;
  let e : unknown = undefined;

  let unknownVar : unknown;

  // let num:number = unknownVar;
  // let str:string = unknownVar;
  // let bool: boolean = unknownVar;
}

/** 
 * Never 타입 (모든 타입의 서브타입임. 모든 타입의 부분집합이라는 이야기(=공집합, 아무것도 없음))
 */

function neverExam(){

  function neverFunc() : never{
    while(true){} //반환할 수 있는 값의 종류가 아무것도 없다.
    
  }

  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool : boolean = neverFunc();

  // let never1: never = 10;
  // let never2 : never = 'string';
  // let never3 : never = true;
}

/** 
 * Void 타입
 */

function voidExam(){
  function voidFunc() : void {
    console.log("hi");
    return undefined;
  }

  let voidVar : void = undefined;
}

/**
 * any 타입
 */

function anyExam(){
  let unknownVar : unknown;
  let anyVar : any;
  let undefinedVar : undefined;
  let neverVar : never;

  anyVar = unknownVar;
  undefinedVar = anyVar;
  neverVar = anyVar;
}