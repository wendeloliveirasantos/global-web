import { travelService } from "@/services";
import React, { useCallback, useEffect, useState } from "react";
import * as S from "./admin-login.styles";
import { Button, Select, TextInput, Search } from "@/components/ui";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { STORAGE_VIAGEM_COTACAO } from "@/constants";
import { useRouter } from "next/router";
import dayjs from "dayjs";
import { ITravelDestiniesModel } from "@/types/travel-destinies";
import { DatePicker } from "@/components/ui/DatePicker";
import { Switch } from "@/components/ui/Switch";
import { Checkbox } from "@/components/ui/Checkbox";
import { Slider } from "@/components/ui/Slider";
import { Box, Grid, Icon, Typography } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
type ValuesProps = {
  usuario: string,
  senha: string,
};

export default function AdminLogin() {
  const router = useRouter();
  const [values, setValues] = useState<ValuesProps>({
    usuario: "",
    senha: ""
  });
  const [login, setLogin] = useState("");
  const [usuarioError, setUsuarioError] = useState("");
  const [senhaError, setSenhaError] = useState("");

  useEffect(() => {
  }, []);

  function handleChange(name: string, value: string | number | null | undefined | boolean | number[]) {
    setValues((prevState) => ({ ...prevState, [name]: value }));
  }

  function handleBlur(name: string) {
    const value = values[name as keyof ValuesProps];
  }

  function handleSubmit(e: any) {
    e.preventDefault();

    setUsuarioError("");
    setSenhaError("");
    
    let hasError = false;

    if (!values.usuario) {
      setUsuarioError("Por favor, insira o usuário");
      hasError = true;
    }

    if (!values.senha) {
      setSenhaError("Por favor, insira a senha");
      hasError = true;
    }

    if (hasError) {
      return;
    }

    setLogin(
      JSON.stringify({
        usuario: values.usuario,
        senha: values.senha
      })
    );
    
    //router.push("/seguros/viagem/coberturas");
  }

  return (
    <S.Card>
      <form onSubmit={handleSubmit}>

        <div style={{background: 'white', borderRadius: 28, overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
            <div style={{alignSelf: 'stretch', height: 72, paddingTop: 16, paddingBottom: 8, paddingLeft: 24, paddingRight: 12, borderBottom: '1px #CAC4D0 solid', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                <Box sx={{alignSelf: 'stretch', justifyContent: 'center', alignItems: 'flex-start', gap: 1, display: 'inline-flex'}}>
                    <Box sx={{ flex: '1 1 0', alignSelf: 'stretch', color: '#333333', fontSize: 24, fontWeight: '400', lineHeight: 2, wordWrap: 'break-word' }}>Login</Box>
                    <Box sx={{ width: 48, height: 48, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
                    <Icon
                      sx={{
                        padding: 8,
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 10,
                        display: 'flex',
                        borderRadius: 100,
                        overflow: 'hidden'
                      }}
                    >
                      <AccountCircleIcon sx={{ fontSize: 24 }} />
                    </Icon>
                    </Box>
                </Box>
            </div>
            <div style={{alignSelf: 'stretch', paddingTop: 18, paddingBottom: 16, paddingLeft: 24, paddingRight: 24, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'inline-flex'}}>
              <div style={{ width: "100%", marginTop: 15 }}>
                <TextInput
                  name="usuario"
                  label="Usuario"
                  onChange={(e) => handleChange("usuario", e.target.value)}
                  helperText={usuarioError}
                />
              </div>
              
              <div style={{ width: "100%", marginTop: 15 }}>
                <TextInput
                  name="senha"
                  label="Senha"
                  onChange={(e) => handleChange("senha", e.target.value)}
                  helperText={senhaError}
                />
              </div>
            </div>
            <div style={{alignSelf: 'stretch', paddingTop: 8, paddingBottom: 12, paddingLeft: 12, paddingRight: 12, justifyContent: 'space-between', alignItems: 'flex-start', display: 'inline-flex'}}>
            </div>
        </div>

        <div style={{ marginTop: 30 }}>
          <Button color="#FF5A62" type="submit">Logar</Button>
        </div>
      </form>
    </S.Card>
  );
}
