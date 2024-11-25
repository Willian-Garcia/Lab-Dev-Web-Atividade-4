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
  padding: 30px;
  border: 1px solid #ccc;
  border-radius: 15px;
  flex-direction: column;
  gap: 20px;
  background: linear-gradient(180deg, #454545, #d4d4d4);
  justify-content: space-between;
  div {
    display: flex;
    gap: 10px;
  }
`;

export const EventList = styled.div`
  display: flex;
  width: 70%;
  height: 530px;
  flex-direction: column;
  padding: 30px;
  gap: 20px;
  border: 1px solid #ccc;
  border-radius: 15px;
  background: linear-gradient(180deg, #454545, #d4d4d4);
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
  text-align: center; /* Centraliza horizontalmente */
  resize: none; /* Impede redimensionamento manual */
  overflow-wrap: break-word; /* Garante quebra de linha para palavras longas */
  word-wrap: break-word; /* Compatibilidade adicional */
  white-space: pre-wrap; /* Mantém espaços e quebras de linha */
  vertical-align: middle; /* Centraliza verticalmente o texto dentro */
  box-sizing: border-box; /* Garante que padding e borda sejam inclusos */
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
  background-color: green;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: darkgreen;
  }
`;

export const UpdateButton = styled(Button)`
  width: 10%;
  background: blue;
  padding: 5px 10px;
  &:hover {
    background-color: darkblue;
  }
`;

export const DeleteButton = styled(Button)`
  width: 10%;
  background: red;
  padding: 5px 10px;
  &:hover {
    background-color: darkred;
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
