import React, { useState, useEffect } from "react";
import axios from "axios"; // Para chamadas à API
import {
  Button,
  Container,
  DeleteButton,
  EventForm,
  EventItem,
  EventList,
  EventListScroll,
  Input,
  InputDescricao,
  Label,
  LabelTitle,
  UpdateButton,
} from "./styles";
import { Event } from "../types";
import { format } from "date-fns";

const EventScreen: React.FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [local, setLocal] = useState("");
  const [date, setDate] = useState("");
  const [expenses, setExpenses] = useState<Event[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get("http://localhost:3010/evento");
      setExpenses(response.data);
    } catch (error) {
      console.error("Erro ao buscar eventos:", error);
      setError("Erro ao carregar eventos.");
    }
  };

  const handleSubmit = async () => {
    if (!title || !description || !local || !date) {
      setError("Todos os campos são obrigatórios.");
      return;
    }

    try {
      if (editingId) {
        // Atualizar evento existente
        const response = await axios.put(`http://localhost:3010/evento/${editingId}`, {
          title,
          description,
          local,
          date,
        });
        setExpenses(
          expenses.map((expense) =>
            expense._id === editingId ? response.data : expense
          )
        );
      } else {
        // Criar novo evento
        const response = await axios.post("http://localhost:3010/evento", {
          title,
          description,
          local,
          date,
        });
        setExpenses([...expenses, response.data]);
      }

      // Resetar os campos
      setTitle("");
      setDescription("");
      setLocal("");
      setDate("");
      setEditingId(null);
      setError("");
    } catch (error) {
      console.error("Erro ao salvar evento:", error);
      setError("Erro ao salvar evento.");
    }
  };

  const handleEditEvent = (expense: Event) => {
    setTitle(expense.title);
    setDescription(expense.description);
    setLocal(expense.local);
    setDate(expense.date);
    setEditingId(expense._id);
  };

  const handleDeleteEvent = async (id: string) => {
    try {
      await axios.delete(`http://localhost:3010/evento/${id}`);
      setExpenses(expenses.filter((expense) => expense._id !== id));
    } catch (error) {
      console.error("Erro ao deletar evento:", error);
      setError("Erro ao deletar evento.");
    }
  };

  const total = expenses.length;

  return (
    <Container>
      <EventForm>
        <LabelTitle>Gerenciador de Eventos</LabelTitle>
        <Input
          type="string"
          placeholder="Digite o Título do Evento"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></Input>
        <InputDescricao
          placeholder="Descrição da Evento"
          value={description}
          onChange={(e) => {
            if (e.target.value.length <= 100) {
              setDescription(e.target.value);
            }
          }}
        />
        <Input
          type="string"
          placeholder="Digite o Endereço do Local"
          value={local}
          onChange={(e) => setLocal(e.target.value)}
        />
        {error && (
          <Label
            style={{
              color: "red",
              textAlign: "center",
              fontWeight: "bold",
              WebkitTextStroke: "0.1px black",
              fontSize: 16,
            }}
          >
            {error}
          </Label>
        )}
        <Input
          type="date"
          placeholder="Digite a Data"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <Button onClick={handleSubmit}>
          {editingId ? "Atualizar Evento" : "Cadastrar Evento"}
        </Button>
      </EventForm>

      <EventList>
        <LabelTitle>Número de Eventos Agendados: {total}</LabelTitle>
        <EventListScroll>
          {expenses.map((expense) => (
            <EventItem key={expense._id}>
              <Label>Título: {expense.title}</Label>
              <Label>Descrição: {expense.description}</Label>
              <Label>Local: {expense.local}</Label>
              <Label>
                Data: {format(new Date(new Date(expense.date).toISOString().slice(0, -1)), "dd/MM/yyyy")}
              </Label>
              <div>
                <UpdateButton onClick={() => handleEditEvent(expense)}>
                  Alterar
                </UpdateButton>
                <DeleteButton onClick={() => handleDeleteEvent(expense._id)}>
                  Excluir
                </DeleteButton>
              </div>
            </EventItem>
          ))}
        </EventListScroll>
      </EventList>
    </Container>
  );
};

export default EventScreen;