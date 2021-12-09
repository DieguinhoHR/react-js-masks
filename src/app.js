import React, { useState } from 'react'
import {
  cpfMask,
  cnpjMask,
  phoneMask,
  cepMask,
  pisMask,
  dataMask,
} from './utils/masks'
import styled from 'styled-components'

function App() {
  const [cpf, setCPF] = useState('')
  const [cnpj, setCNPJ] = useState('')
  const [phone, setPhone] = useState('')
  const [zipcode, setZipcode] = useState('')
  const [pis, setPis] = useState('')
  const [data, setData] = useState('')

  return (
    <Container>
      <h1>Form com inputs masks</h1>
      <form>
        <Label htmlFor='cpf'>CPF: 00.000.000-00</Label>
        <Input
          type='text'
          name='cpf'
          id='cpf'
          value={cpfMask(cpf)}
          onChange={(e) => setCPF(e.target.value)}
        />
        <Label htmlFor='cnpj'>CNPJ: 00.000.000/0000-00</Label>
        <Input
          type='text'
          name='cnpj'
          id='cnpj'
          value={cnpjMask(cnpj)}
          onChange={(e) => setCNPJ(e.target.value)}
        />
        <Label htmlFor='phone'>Telefone: (00) 00000-0000</Label>
        <Input
          type='text'
          name='phone'
          id='phone'
          value={phoneMask(phone)}
          onChange={(e) => setPhone(e.target.value)}
        />
        <Label htmlFor='zipcode'>CEP: 00000-000</Label>
        <Input
          type='text'
          id='zipcode'
          name='zipcode'
          value={cepMask(zipcode)}
          onChange={(e) => setZipcode(e.target.value)}
        />
        <Label htmlFor='pis'>PIS: 000.00000.00-0</Label>
        <Input
          type='text'
          name='pis'
          id='pis'
          value={pisMask(pis)}
          onChange={(e) => setPis(e.target.value)}
        />
        <Label htmlFor='data'>Data: 00/00/0000</Label>
        <Input
          type='text'
          name='data'
          id='data'
          value={dataMask(data)}
          onChange={(e) => setData(e.target.value)}
        />
      </form>
    </Container>
  )
}

const Container = styled.div`
  margin: 0 auto;
  width: 700px;
`

const Label = styled.label`
  margin-bottom: 50px;
`

const Input = styled.input`
  margin: 0 auto;
  width: 700px;
  margin-bottom: 19px;
  border: 5px solid #CCC;
`

export default App
