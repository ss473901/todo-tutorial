import React from "react";
import styled from "styled-components";

const List = () => {
  return (
    <>
      <STitle>完了</STitle>
      <SItemList>
        <SLi>
          <SP>タスク</SP>
        </SLi>
        <SLi>
          <SP>タスク</SP>
        </SLi>
        <SLi>
          <SP>タスク</SP>
        </SLi>
        <SLi>
          <SP>タスク</SP>
        </SLi>
        <SLi>
          <SP>タスク</SP>
        </SLi>
        <SLi>
          <SP>タスク</SP>
        </SLi>
      </SItemList>

      <STitle>未達成</STitle>
      <SItemList>
        <SLi>
          <SP>タスク</SP>
        </SLi>
        <SLi>
          <SP>タスク</SP>
        </SLi>
        <SLi>
          <SP>タスク</SP>
        </SLi>
        <SLi>
          <SP>タスク</SP>
        </SLi>
        <SLi>
          <SP>タスク</SP>
        </SLi>
        <SLi>
          <SP>タスク</SP>
        </SLi>
      </SItemList>
    </>
  );
};

const STitle = styled.h3`
  text-align: center;
`;
const SP = styled.p`
  font-size: 15px;
  padding: 15px;
`;
const SLi = styled.li`
  list-style: none;
  background-color: #f4f5f7;
  margin: 10px 20px;
`;

const SItemList = styled.div`
  width: 100%;
  height: 30vh;
  overflow: hidden;
  overflow-y: auto;
`;

export default List;
