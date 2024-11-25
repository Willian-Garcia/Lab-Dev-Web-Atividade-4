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

  return (
    <Container>
      <EventForm>
        <LabelTitle>Controle de Despesas</LabelTitle>
        <Input
          type="string"
          placeholder="Digite o Título do Evento"
          value={title}
          onChange={(e) => setTitle(e.target.value)}>
        </Input>
        <InputDescricao
          placeholder="Descrição da Despesa"
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
        {error && <Label style={{ color: "red", textAlign: "center", fontWeight: "bold", WebkitTextStroke: "0.1px black", fontSize: 16 }}>{error}</Label>}
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
        <LabelTitle>Total das Despesas: R$ {total.toFixed(2)}</LabelTitle>
        <EventListScroll>
          {expenses.map((expense) => (
            <EventItem key={expense._id}>
              <Label>Título: {expense.title}</Label>
              <Label>Descrição: {expense.description}</Label>
              <Label>Local:{expense.local}</Label>
              <Label>
                Data: {format(new Date(expense.date), "dd/MM/yyyy")}
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
