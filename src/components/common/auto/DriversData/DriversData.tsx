import { TextInput, TextInputMask } from "@/components/ui";
import { AUTO_DOCUMENT_TYPE } from "@/constants";
import { DriversEntity } from "@/types/auto-offer-input";
import React from "react";

type Props = {
  drivers: DriversEntity[];
  addDriver(): void;
  removeDriver(v: number): void;
  handleChange(i: number, n: string, v: any): void
};

export default function DriversData({
  drivers,
  addDriver,
  removeDriver,
  handleChange
}: Props) {
  return (
    <div>
      {drivers.map((driver, idx) => (
        <div style={{ marginBottom: 40 }} key={idx}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h3>{`Motorista ${idx + 1}`}</h3>
            {idx !== 0 && (
              <div
                onClick={() => removeDriver(idx)}
                style={{ cursor: "pointer" }}
              >
                x
              </div>
            )}
          </div>
          <TextInput 
            onChange={(e: any) => handleChange(idx, "name", e.target.value)} 
            name="name" 
            label="Nome" 
            defaultValue={driver.name} 
          />
          <TextInputMask
            mask="999.999.999-99"
            name="document"
            label="CPF"
            defaultValue={driver.document.number}
            onChange={(e: any) => handleChange(idx, "document", {
              type: {
                id: AUTO_DOCUMENT_TYPE
              },
              number: e.target.value.replaceAll(".", "").replace("-", "")
            })}
          />
          <TextInput
            type="date"
            onChange={(e: any) => handleChange(idx, "dateOfBirth", e.target.value)} 
            name="birthDate"
            label="Data de Nascimento"
            defaultValue={driver.dateOfBirth}
          />
        </div>
      ))}
      <div style={{ marginTop: 40 }}>
        <p onClick={addDriver} style={{ cursor: "pointer" }}>
          + Add Motorista
        </p>
      </div>
    </div>
  );
}
