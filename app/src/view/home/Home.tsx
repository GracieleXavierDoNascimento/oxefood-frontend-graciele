'use client';

import React from 'react';
import { Container, Grid, Image } from 'semantic-ui-react';

export default function Home() {
  return (
    <Container style={{ maxWidth: '1100px', width: '100%' }}>
      <Grid
        stackable
        columns={2}
        divided
        verticalAlign="middle"
        style={{ margin: 0 }}
      >
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Image
              src="/logo-IFPE.png"
              alt="Logo IFPE"
              centered
              style={{
                maxWidth: '260px',
                width: '100%',
                height: 'auto',
              }}
            />
          </Grid.Column>

          <Grid.Column>
            <div style={{ fontSize: '1.1rem', lineHeight: 1.6 }}>
              <p>
                Bem vindo ao sistema <strong>OxeFood</strong>!
              </p>

              <p>
                Este sistema foi desenvolvido na disciplina de Desenvolvimento para WEB IV.
              </p>

              <p>
                Para acessar o código da <strong>API</strong> do sistema, acesse:{" "}
                <a
                  href="https://github.com/GracieleXavierDoNascimento/oxefood-backend-graciele"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ wordBreak: "break-word" }}
                >
                  GitHub da API
                </a>
              </p>

              <p>
                Para acessar o código do <strong>Módulo WEB</strong>, acesse:{" "}
                <a
                  href="https://github.com/GracieleXavierDoNascimento/oxefood-frontend-graciele"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ wordBreak: "break-word" }}
                >
                  GitHub do módulo WEB
                </a>
              </p>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}