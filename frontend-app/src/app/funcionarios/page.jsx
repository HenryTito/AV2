"use client";

import { useState } from "react";
import styles from "./Funcionarios.module.css";
import ModalCadastrar from "./components/ModalCadastrar";
import ModalListar from "./components/ModalListar";
import ModalEditar from "./components/ModalEditar";
import ModalDeletar from "./components/ModalDeletar";
import { useAuth } from "../../context/AuthContext";

export default function Funcionarios() {
  const [showCadastrar, setShowCadastrar] = useState(false);
  const [showListar, setShowListar] = useState(false);
  const [showEditar, setShowEditar] = useState(false);
  const [showDeletar, setShowDeletar] = useState(false);
  const { user, temPermissao } = useAuth();

  // Dados mockados
  const funcionarios = [
    { id: "F001", nome: "Henry Tito Dono Respeita", telefone: "(11) 98765-4321", endereco: "Rua Décio Camargo Vieira, 314 - Wakanda/SP", usuario: "henry.tito", senha: "123456", nivelPermissao: "Administrador" },
    { id: "F002", nome: "Maria Souza", telefone: "(21) 99876-5432", endereco: "Av. Central, 456 - Rio de Janeiro/RJ", usuario: "maria.souza", senha: "senhaSegura", nivelPermissao: "Operador" },
    { id: "F003", nome: "Carlos Pereira", telefone: "(31) 91234-5678", endereco: "Rua Minas, 789 - Belo Horizonte/MG", usuario: "carlos.pereira", senha: "abc123", nivelPermissao: "Engenheiro" },
    { id: "F004", nome: "Ana Costa", telefone: "(41) 92345-6789", endereco: "Rua das Palmeiras, 101 - Curitiba/PR", usuario: "ana.costa", senha: "minhaSenha", nivelPermissao: "Administrador" },
    { id: "F005", nome: "Dexter Morgan", telefone: "(11) 90000-0001", endereco: "Ocean Drive, 55 - Miami/FL", usuario: "dexter.morgan", senha: "darkpassenger", nivelPermissao: "Administrador" },
    { id: "F006", nome: "Walter White", telefone: "(21) 91111-1111", endereco: "308 Negra Arroyo Lane - Albuquerque/NM", usuario: "walter.white", senha: "heisenberg", nivelPermissao: "Administrador" },
    { id: "F007", nome: "Jesse Pinkman", telefone: "(21) 92222-2222", endereco: "9809 Margo Street - Albuquerque/NM", usuario: "jesse.pinkman", senha: "yeahscience", nivelPermissao: "Operador" },
    { id: "F008", nome: "Saul Goodman", telefone: "(21) 93333-3333", endereco: "160 Juan Tabo Blvd - Albuquerque/NM", usuario: "saul.goodman", senha: "bettercallsaul", nivelPermissao: "Advogado" },
    { id: "F009", nome: "Hank Schrader", telefone: "(21) 94444-4444", endereco: "471 Canyon Street - Albuquerque/NM", usuario: "hank.schrader", senha: "minerais", nivelPermissao: "Segurança" },
    { id: "F010", nome: "Mike Ehrmantraut", telefone: "(21) 95555-5555", endereco: "Old Town - Albuquerque/NM", usuario: "mike.ehrmantraut", senha: "nosurprises", nivelPermissao: "Supervisor" },
    { id: "F011", nome: "Gustavo Fring", telefone: "(21) 96666-6666", endereco: "Los Pollos Hermanos HQ - Albuquerque/NM", usuario: "gustavo.fring", senha: "pollos", nivelPermissao: "Gerente" },
    { id: "F012", nome: "Todd Alquist", telefone: "(21) 97777-7777", endereco: "Ruta 66 - Albuquerque/NM", usuario: "todd.alquist", senha: "spider", nivelPermissao: "Operador" },
  ];

  const podeCadastrar = temPermissao("criar");
  const podeEditar = temPermissao("editar");
  const podeDeletar = temPermissao("deletar");
  const podeListar = temPermissao("ver_funcionarios");

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Menu Funcionários</h1>

      <div className={styles.topBar}>
        {podeCadastrar && (
          <button className={styles.btn} onClick={() => setShowCadastrar(true)}>
            Cadastrar
          </button>
        )}
        {podeListar && (
          <button className={styles.btn} onClick={() => setShowListar(true)}>
            Listar
          </button>
        )}
        {podeEditar && (
          <button className={styles.btn} onClick={() => setShowEditar(true)}>
            Editar
          </button>
        )}
        {podeDeletar && (
          <button className={styles.btn} onClick={() => setShowDeletar(true)}>
            Deletar
          </button>
        )}
      </div>

      <div className={styles.tableContainer}>
        <h2 className={styles.title}>Funcionários</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Telefone</th>
              <th>Endereço</th>
              <th>Usuário</th>
              <th>Senha</th>
              <th>Nível de Permissão</th>
            </tr>
          </thead>
          <tbody>
            {funcionarios.map((f) => (
              <tr key={f.id}>
                <td>{f.id}</td>
                <td>{f.nome}</td>
                <td>{f.telefone}</td>
                <td>{f.endereco}</td>
                <td>{f.usuario}</td>
                <td>{f.senha}</td>
                <td>{f.nivelPermissao}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showCadastrar && <ModalCadastrar close={() => setShowCadastrar(false)} />}
      {showListar && <ModalListar close={() => setShowListar(false)} />}
      {showEditar && <ModalEditar close={() => setShowEditar(false)} />}
      {showDeletar && <ModalDeletar close={() => setShowDeletar(false)} />}
    </div>
  );
}
