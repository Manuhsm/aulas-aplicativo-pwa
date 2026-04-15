import Principal from "../../componentes/Principal/Principal";
import CampoCustomizado from "../../componentes/CampoCustomizado/CampoCustomizado";
import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";
import { useState } from "react";
import { validarCPF } from "../../utils/validarCPF";
import {formatarComMascara, Mascara_CPF, Mascara_Celular } from "../../utils/formatarComMascara";
import validarEmail from "../../utils/validarEmail"; 
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


function CadastroCliente() {
  const navigate = useNavigate();

  const [cliente, setCliente] = useState({
    nome: "",
    cpf: "",
    dataNascimento: "",
    celular: "",
    email: "",
    foto: null,
  });

  const salvar = () => {
    if (!cliente.nome.trim() || !cliente.cpf.trim()) {
      toast.error("O campo Nome e CPF são obrigatórios!");
      return;
    }

    if (!validarCPF(cliente.cpf.trim())) {
      toast.error("CPF inválido!");
      return;
    }

    if (cliente.email.trim() && !validarEmail(cliente.email.trim())) {
      toast.error("Email inválido!");
      return;
    }

    const clientesDoLocalStorage = JSON.parse(localStorage.getItem("clientes")) || [];

    const novoCliente = { id: crypto.randomUUID(), ...cliente };
    clientesDoLocalStorage.push(novoCliente);
    localStorage.setItem("clientes", JSON.stringify(clientesDoLocalStorage));

    setCliente(novoCliente);
    toast.success("Cliente salvo com sucesso!");
      navigate("/lista-clientes");
  }
    const titulo = cliente.id ? "Editar Cliente" : "Novo Cliente";
  return(
   <Principal titulo= {titulo} voltarPara="/lista-clientes">

      <CampoCustomizado
        label="Nome"
        value={cliente.nome}
        onChange={(e) => setCliente({ ...cliente, nome: e.target.value })}
      />
      <CampoCustomizado label="CPF" 
        value={cliente.cpf}
        onChange={(e) => 
          setCliente({ ...cliente, cpf: formatarComMascara (e.target.value, Mascara_CPF) })
        }
          onBlur={(e)=>{
        if (!validarCPF(e.target.value.trim())) {
          toast.error("CPF inválido!");
        }
      }}
      />
       <CampoCustomizado
        type="date"
        label="Data Nascimento"
        value={cliente.dataNascimento}
        onChange={(e) => setCliente({ ...cliente, dataNascimento: e.target.value })}
      />
        <CampoCustomizado
        type="tel"
        label="Celular"
        value={cliente.celular}
        onChange={(e) =>
          setCliente({ ...cliente, celular: formatarComMascara(e.target.value, Mascara_Celular) })
        }
      />
      <CampoCustomizado
        type="email"
        label="Email"
        value={cliente.email}
        onChange={(e) => setCliente({ ...cliente, email: e.target.value })}
        onBlur={(e) => {
          if (e.target.value.trim() && !validarEmail(e.target.value)) {
            toast.error("Email inválido!");
          }
        }}
      />

      <CampoCustomizado
        type="file"
        accept="image/*"
        label="Foto"
        onChange={(e) => {
          const imagem = e.target.files[0];
          if (imagem) {
            const reader = new FileReader();
            reader.onload = (event) => {
              setCliente({ ...cliente, foto: event.target.result });
            };
            reader.readAsDataURL(imagem);
          }
        }}
      />

      {cliente.foto && (
        <div style={{ marginTop: "10px", display: "flex", justifyContent: "center" }}>
          <img
            src={cliente.foto}
            alt="Foto do Cliente"
            style={{ width: "150px", height: "150px", objectFit: "cover", borderRadius: "8px" }}
          />
        </div>
      )}  

      <BotaoCustomizado tipo="primario" aoClicar={salvar} >
        Salvar
      </BotaoCustomizado>
    </Principal>
  );
}

export default CadastroCliente;