// 문제 추가/수정 페이지
import React from "react";
import style from "./ProblemAddModifyPage.module.css";
import cn from "classnames";

function ProblemAddModifyPage(props) {
  return (
    <div className="container px-1 d-flex flex-column vh-100">
      {/* 문제명, 버튼 */}
      <div className="d-flex flex-row mt-4 mb-2">
        <h3 className="flex-grow-1">1주차 과제 &gt; 문제 1</h3>
        <button type="button" className="btn btn-outline-secondary me-2">
          과제 상세 페이지로 돌아가기
        </button>
        <button type="submit" className="btn btn-outline-primary">
          저장
        </button>
      </div>
      {/* 언어배점 */}
      <div className="d-flex flex-row my-2">
        <div className="me-3">
          <label className="form-label">언어</label>
          <div className="dropdown">
            <button
              className="btn btn-outline-secondary dropdown-toggle btn-block"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              언어를 선택하세요
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li className="dropdown-item">C</li>
              <li className="dropdown-item">Java</li>
              <li className="dropdown-item">Python</li>
            </ul>
          </div>
        </div>
        <div>
          <label className="form-label">배점</label>
          <input className="form-control" type="text" />
        </div>
      </div>
      <div />
      {/* 문제설명 */}
      <div className={cn("flex-grow-1 my-2", style.problemExplanation)}>
        <label className="form-label">문제 설명</label>
        <textarea
          className="form-control overflow-y-scroll"
          defaultValue={""}
        />
      </div>
      {/* 리뷰프롶 */}
      <div className={cn("flex-grow-1 my-2", style.reviewPrompt)}>
        <label className="form-label">코드 리뷰 프롬프트</label>
        <textarea
          className="form-control overflow-y-scroll"
          defaultValue={""}
        />
      </div>
      {/* TC 목록*/}
      <div className={cn("my-5 overflow-y-scroll", style.testcaseList)}>
        {/* TC */}
        <div className="d-flex flex-row my-1 justify-content-between">
          <div className="w-50 me-2">
            <label className="form-label">예제 1 입력</label>
            <textarea
              className="form-control overflow-y-scroll"
              defaultValue={""}
            />
          </div>
          <div className="w-50 ms-2">
            <label className="form-label">예제 1 출력</label>
            <textarea
              className="form-control overflow-y-scroll"
              defaultValue={""}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProblemAddModifyPage;
