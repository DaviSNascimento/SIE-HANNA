import { useEffect, useState } from "react";
import { ContainerLine, ContainerSaldo, ContainerTitle, Date, Line, Saldo, SubTitles, Title } from "./styled";
import { getMonthYear } from "../date/getDate";
import { api } from "../api/API";

export default function Transacao() {

    const [saldo, setSaldo] = useState('')

    useEffect(() => {
        getSaldo();
    }, []);

    const getSaldo = () => {
        api.get('saldo-total')
        .then((response) => {
            setSaldo(response.data.saldo)
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    return (
        <>
            <ContainerTitle>
                <Title>Transações </Title> <Date>{getMonthYear()}</Date>
            </ContainerTitle>
            <ContainerSaldo>
                <SubTitles>Saldo Total: R$</SubTitles> <Saldo>{saldo}</Saldo>
            </ContainerSaldo>
            <ContainerLine>
                <Line/>
            </ContainerLine>
        </>
    )
}