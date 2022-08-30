import { gql, useQuery } from '@apollo/client';
import { Row, Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { addListener } from 'process';
import React from 'react';

interface DataType {
    key: React.Key;
    name: string;
    description: Description;
    capital: string
    lenguages: Lenguages[]

}


interface Description {
    code: string
    capital: string
}

interface IMyProps {
    code: string
}
interface Lenguages {
    name: string
    code: string
    native: string
}


const TableCountries: React.FC<IMyProps> = (props: IMyProps) => {


    const FIND_COUNTRY = gql(
        'query{ countries(  filter: { continent: { eq: "' +
        props.code +
        '" }}){name code capital emoji }}'
    );

    const ALL_COUNTRY = gql(
        'query{ countries {name code capital emoji}}'
    );

    let query = ALL_COUNTRY;

    if (props.code != "All") {
        query = FIND_COUNTRY
    }

    const { data, error, loading } = useQuery(query);

    const columns: ColumnsType<DataType> = [
        {
            title: 'Country',
            dataIndex: 'name',
            render: text => <a>{text}</a>,
        },

    ];
    const dataDTO: DataType[] = []

    if (loading) {
    } else {
        data.countries.map((c: any) => {

            dataDTO.push(
                {
                    key: c.code,
                    name: c.name,
                    description: { code: c.code, capital: c.capital },
                    capital: c.capital,
                    lenguages: [
                        { name: "españolo", code: "es", native: "yes" },
                        

                    ]

                },
            )
        })
    }


    return (
        <Table
            columns={columns}
            expandable={{
                expandedRowRender: record =>
                    <><p style={{ margin: 0 }}><b>Code:</b> {record.description.code}</p>
                        <p style={{ margin: 0 }}><b>Capital:</b> {record.description.capital}</p>
                        <p style={{ margin: 0 }}><b>Lenguages:</b> {

                            record.lenguages.map((c: any, index) => {
                                let lenguageList = ""
                                if (index < 1) {
                                    lenguageList += c.name
                                    index++
                                } else {
                                    lenguageList += ", " + c.name
                                    index++
                                }


                                return (lenguageList)
                            })
                        }</p></>,

            }}
            dataSource={dataDTO}
        />
    );
}

export default TableCountries;