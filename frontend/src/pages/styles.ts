import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 10%;
  gap: 20px;
  align-self: center;
`;

export const EventForm = styled.div`
  display: flex;
  width: 45%;
  height: 550px;
  padding: 30px;
  border: 3px solid #ffffff;
  border-radius: 15px;
  flex-direction: column;
  gap: 20px;
  background: radial-gradient(circle, rgba(0,168,158,1) 0%, rgba(3,43,42,1) 100%);
  justify-content: space-between;
  div {
    display: flex;
    gap: 10px;
  }
`;

export const EventList = styled.div`
  display: flex;
  width: 70%;
  height: 550px;
  flex-direction: column;
  padding: 30px;
  gap: 20px;
  border: 3px solid #ffffff;
  border-radius: 15px;
  background: radial-gradient(circle, rgba(0,168,158,1) 0%, rgba(3,43,42,1) 100%);
  `
;

export const EventListScroll = styled.div`
  display: flex;
  height: 530px;
  flex-direction: column;
  padding: 10px;
  gap: 20px;
  border-radius: 4px;
  overflow-y: auto; /* Ativa a rolagem vertical */
  overflow-x: hidden; /* Impede a rolagem horizontal */

  /* Estilo para a barra de rolagem */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
`;


export const EventItem = styled.div`
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  background: white;

  div {
    display: flex;
    gap: 10px;
  }
`;
export const InputDescricao = styled.textarea`
  display: block;
  height: 200px;
  width: 100%;
  padding: 75px;
  margin-bottom: 10px;
  border: none;
  border-radius: 10px;
  text-align: center;
  resize: none;
  overflow-wrap: break-word;
  word-wrap: break-word;
  white-space: pre-wrap;
  vertical-align: middle;
  box-sizing: border-box; 
`;

export const Input = styled.input`
  display: block;
  padding: 10px;
  margin-bottom: 10px;
  border: none;
  border-radius: 10px;
  text-align: center;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #00ffef;
  color: black;
  border: 2px solid #00ffef;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: #00c9bd;
    color: black;
    border: 2px solid #00c9bd;
  }
`;

export const UpdateButton = styled.button`
  width: 10%;
  padding: 5px;
  background-color: #2e7772;
  color: white;
  border: 2px solid #2e7772;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: #235c58;
    color: white;
    border: 2px solid #235c58;
  }
`;

export const DeleteButton = styled.button`
  width: 10%;
  padding: 5px;
  background-color: #fc4545;
  color: white;
  border: 2px solid #fc4545;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: #c93333;
    color: white;
    border: 2px solid #c93333;
  }
`;

export const Label = styled.p`
  margin: 0;
  font-size: 14px;
  color: black;
`;

export const LabelTitle = styled.p`
  margin: 0;
  font-size: 20px;
  color: white;
  font-weight: bold;
  text-align: center;
`;
