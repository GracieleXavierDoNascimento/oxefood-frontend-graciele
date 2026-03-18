'use client'

import React, { useState } from "react";
import axios from "axios";
import { Button, Container, Divider, Form, Icon } from "semantic-ui-react";
import { IMaskInput } from "react-imask";

export default function FormEntregador() {

  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [rg, setRg] = useState("");
  const [foneCelular, setFoneCelular] = useState("");
  const [foneFixo, setFoneFixo] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [qtdEntregasRealizadas, setQtdEntregasRealizadas] = useState("");
  const [valorPorFrete, setValorPorFrete] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [cep, setCep] = useState("");
  const [bairro, setBairro] = useState("");

  function salvar() {

    let dataNascimentoFormatada = "";

    if (dataNascimento) {
      const partes = dataNascimento.split("/");
      dataNascimentoFormatada = `${partes[2]}-${partes[1]}-${partes[0]}`;
    }

    const entregadorRequest = {
      nome,
      cpf,
      rg,
      foneCelular,
      foneFixo,
      dataNascimento: dataNascimentoFormatada,
      qtdEntregasRealizadas,
      valorPorFrete,
      rua,
      numero,
      cep,
      bairro
    };

    axios.post("http://localhost:8080/entregadores", entregadorRequest)
      .then(() => {
        console.log("Entregador cadastrado com sucesso");
      })
      .catch((error) => {
        console.log("Erro ao cadastrar entregador", error);
      });
  }

  return (
    <div className="form-entregador-wrapper">
      <Container>

        <h2>
          <span className="form-entregador-title">
            Entregador &nbsp;
            <Icon name="angle double right" size="small" />
          </span>
          Cadastro
        </h2>

        <Divider />

        <div className="form-entregador-content">
          <Form>

            <Form.Group widths="equal">
              <Form.Input
                width={6}
                required
                fluid
                label="Nome"
                placeholder="Informe o nome do entregador"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />

              <Form.Field width={2} required>
                <label>CPF</label>
                <IMaskInput
                  mask="000.000.000-00"
                  className="ui input"
                  value={cpf}
                  onAccept={(value) => setCpf(value)}
                />
              </Form.Field>

              <Form.Input
                width={2}
                required
                fluid
                label="RG"
                placeholder="Informe o RG do entregador"
                value={rg}
                onChange={(e) => setRg(e.target.value)}
              />
            </Form.Group>

            <Form.Group>
              <Form.Field width={3}>
                <label>Fone Celular</label>
                <IMaskInput
                  mask="(00) 00000-0000"
                  className="ui input"
                  value={foneCelular}
                  onAccept={(value) => setFoneCelular(value)}
                />
              </Form.Field>

              <Form.Field width={3}>
                <label>Fone Fixo</label>
                <IMaskInput
                  mask="(00) 0000-0000"
                  className="ui input"
                  value={foneFixo}
                  onAccept={(value) => setFoneFixo(value)}
                />
              </Form.Field>

              <Form.Field width={3}>
                <label>Data Nascimento</label>
                <IMaskInput
                  mask="00/00/0000"
                  placeholder="Ex: 20/03/1985"
                  className="ui input"
                  value={dataNascimento}
                  onAccept={(value) => setDataNascimento(value)}
                />
              </Form.Field>

              <Form.Input
                required
                fluid
                type="number"
                label="Qtd. entregas realizadas"
                placeholder="Ex: 20"
                value={qtdEntregasRealizadas}
                onChange={(e) => setQtdEntregasRealizadas(e.target.value)}
              />

              <Form.Input
                width={3}
                required
                fluid
                type="number"
                label="Valor por frete"
                placeholder="Ex: 30"
                value={valorPorFrete}
                onChange={(e) => setValorPorFrete(e.target.value)}
              />
            </Form.Group>

            <Form.Group widths="equal">
              <Form.Input
                width={4}
                required
                fluid
                label="Rua"
                placeholder="Informe o nome da rua"
                value={rua}
                onChange={(e) => setRua(e.target.value)}
              />

              <Form.Input
                width={2}
                required
                fluid
                type="number"
                label="Número"
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
              />

              <Form.Field width={2}>
                <label>CEP</label>
                <IMaskInput
                  mask="00000-000"
                  placeholder="Ex: 12345-000"
                  className="ui input"
                  value={cep}
                  onAccept={(value) => setCep(value)}
                />
              </Form.Field>

              <Form.Input
                width={6}
                required
                fluid
                label="Bairro"
                placeholder="Informe o bairro"
                value={bairro}
                onChange={(e) => setBairro(e.target.value)}
              />
            </Form.Group>

          </Form>

          <div style={{ marginTop: '4%' }}>
            <Button
              type="button"
              inverted
              circular
              icon
              labelPosition="left"
              color="orange"
            >
              <Icon name="list" />
              Listar
            </Button>

            <Button
              inverted
              circular
              icon
              labelPosition="left"
              color="blue"
              floated="right"
              onClick={() => salvar()}
            >
              <Icon name="save" />
              Salvar
            </Button>
          </div>

        </div>

      </Container>
    </div>
  );
}